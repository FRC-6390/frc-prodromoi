var fileType = window.PERSISTENT;
var fileSize = 5*1024*1024;
var debug = true;

async function read(directory, fileName){
    return new Promise((resolve, reject) => {
        window.requestFileSystem(fileType, fileSize, successCallback, errorCallback);
        function successCallback(fs) {
            fs.root.getDirectory(directory, {create:false, exclusive: false}, function(dir) {
                dir.getFile(fileName, {create:true}, function(fileEntry) { 
                    fileEntry.file(function(file) {
                        var reader = new FileReader();
                        reader.onloadend = function(e) {if(debug)console.log("Read file "+ fileEntry.fullPath,this.result.length); resolve(this.result)};
                        reader.readAsText(file);
                    }, errorCallback);
                }, errorCallback);
            });
        }
        function errorCallback(error) {reject("READ FILE ERROR: " + error)}
    })
}

async function remove(directory, fileName){
    return new Promise((resolve, reject) => {
        window.requestFileSystem(fileType, fileSize, successCallback, errorCallback);
        function successCallback(fs) {
            fs.root.getDirectory(directory, {create:true, exclusive: false}, function(dir) {
                dir.getFile(fileName, {create:true}, function(fileEntry) { 
                    fileEntry.remove(function() {resolve(true)}, errorCallback);
                }, errorCallback);
            });
        }
        function errorCallback(error) {reject("REMOVE FILE ERROR: " + error)}
    })
}

async function write(directory, fileName, data){
    return new Promise((resolve, reject) => {
        window.requestFileSystem(fileType, fileSize, successCallback, errorCallback)
        function successCallback(fs) {
            fs.root.getDirectory(directory, {create:true, exclusive: false}, function(dir) {
                dir.getFile(fileName, {create: true}, function(fileEntry) {
                    fileEntry.createWriter(function(fileWriter) {
                        fileWriter.onwriteend = function(e) {if(debug)console.log('Wrote to '+fileEntry.fullPath, JSON.stringify(data)    .length)};
                        fileWriter.onerror = function(e) {reject('Write to '+fileEntry.fullPath+' failed: ' + e.toString())};
                        fileWriter.write(new Blob([JSON.stringify(data)], {type: 'text/plain'}));
                        resolve(data);
                    }, errorCallback);
                }, errorCallback);
            });     
        }
        function errorCallback(error) {reject("WRITE FILE ERROR: " + error)}
    })
}

async function readDirectory(directory){
    return new Promise((resolve, reject) => {
        window.requestFileSystem(fileType, fileSize, successCallback, errorCallback);
        function successCallback(fs) {
            fs.root.getDirectory(directory, {create:false, exclusive: false}, function(dir) {
                let fileEntry = dir.createReader(); 
                    fileEntry.readEntries(
                        function (entries) {
                            resolve(entries);
                        },
                        errorCallback
                    )
            });
        }
        function errorCallback(error) {reject("READ DIRECTORY ERROR: " + error)}
    })
}