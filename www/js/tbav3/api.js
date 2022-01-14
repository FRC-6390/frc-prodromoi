var basePath = "https://www.thebluealliance.com/api/v3"
var authKey = "EY9KXVr2hydfmmYTjahj4Tx026z1mz3LMASMRRjcGwS4tz6yKhNl4PV00N6V7xCt";
var fileType = window.PERSISTENT;
var fileSize = 5*1024*1024;
var debug = false;

async function read(fileName){
    return new Promise((resolve, reject) => {
        window.requestFileSystem(fileType, fileSize, successCallback, errorCallback);
        function successCallback(fs) {
            fs.root.getFile(fileName, {create:true}, function(fileEntry) {  
                fileEntry.file(function(file) {
                    var reader = new FileReader();
                    reader.onloadend = function(e) {if(debug)console.log("Read file "+ fileName,this.result.length); resolve(this.result)};
                    reader.readAsText(file);
                }, errorCallback);
            }, errorCallback);
        }
        function errorCallback(error) {reject("READ FILE ERROR: " + error)}
    })
}

async function write(fileName, data){
    return new Promise((resolve, reject) => {
        window.requestFileSystem(fileType, fileSize, successCallback, errorCallback)
        function successCallback(fs) {
            fs.root.getFile(fileName, {create: true}, function(fileEntry) {
                fileEntry.createWriter(function(fileWriter) {
                    fileWriter.onwriteend = function(e) {if(debug)console.log('Wrote to '+fileName, data.length)};
                    fileWriter.onerror = function(e) {reject('Write to '+fileName+' failed: ' + e.toString())};
                    fileWriter.write(new Blob([JSON.stringify(data)], {type: 'text/plain'}));
                    resolve(data);
                }, errorCallback);
            }, errorCallback);
        }
        function errorCallback(error) {reject("WRITE FILE ERROR: " + error)}
    })
}

async function request(endpoint){
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        let fileName = endpoint.replace(/[^a-z0-9]/ig, '') + ".json";
        read(fileName).then((data) => {if(window.navigator.onLine)sendRequest(data);else resolve(data)}).catch((reason) => reject(reason));
        
        function sendRequest(cache) {
            if(debug)console.log('Cache is', cache);
            request.open('GET', basePath+endpoint, true);
            request.setRequestHeader('X-TBA-Auth-Key', authKey);
            if(cache != null) request.setRequestHeader('If-Modified-Since', cache['last-modified']);
            request.onload = function() {
                if(debug)console.log('Status is', this.status);
                switch (this.status) {
                    case 304:
                        return resolve(cache);
                    case 200:
                        let response = JSON.parse(this.response);
                        response['last-modified'] = request.getResponseHeader('Last-Modified');
                        return write(fileName, response).then(data => resolve(data)).catch((reason) => {console.log(reason); resolve(response)});
                    default:
                        return reject("API ERROR: " + this.status);
                }
            };
            request.send();
        }
    })
}

