var fileType = window.PERSISTENT;
var fileSize = 5*1024*1024;
var debug = true;

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
                    fileWriter.onwriteend = function(e) {if(debug)console.log('Wrote to '+fileName, JSON.stringify(data)    .length)};
                    fileWriter.onerror = function(e) {reject('Write to '+fileName+' failed: ' + e.toString())};
                    fileWriter.write(new Blob([JSON.stringify(data)], {type: 'text/plain'}));
                    resolve(data);
                }, errorCallback);
            }, errorCallback);
        }
        function errorCallback(error) {reject("WRITE FILE ERROR: " + error)}
    })
}
