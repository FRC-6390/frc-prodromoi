var basePath = "https://www.thebluealliance.com/api/v3"
var authKey = "EY9KXVr2hydfmmYTjahj4Tx026z1mz3LMASMRRjcGwS4tz6yKhNl4PV00N6V7xCt";

async function request(endpoint, progressBar){
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        let fileName = endpoint.replace(/[^a-z0-9]/ig, '') + ".json";
        if(progressBar!=null)progressBar.style = "width: 10%"; 
        read("tba", fileName).then((data) => {if(window.navigator.onLine)sendRequest(data);else resolve(data)}).catch((reason) => reject(reason));
        function sendRequest(cache) {
            if(progressBar!=null)progressBar.style = "width: 45%"; 
            if(debug)console.log('Cache is', cache);
            request.open('GET', basePath+endpoint, true);
            request.setRequestHeader('X-TBA-Auth-Key', authKey);
            if(progressBar!=null)progressBar.style = "width: 65%"; 
            if(cache != null) request.setRequestHeader('If-Modified-Since', cache['last-modified']);
            if(progressBar!=null)progressBar.style = "width: 85%"; 
            request.onload = function() {
                if(progressBar!=null)progressBar.style = "width: 100%"; 
                if(debug)console.log('Status is', this.status);
                switch (this.status) {
                    case 304:
                        return resolve(cache);
                    case 200:
                        let response = JSON.parse(this.response);
                        response['last-modified'] = request.getResponseHeader('Last-Modified');
                        return write("tba", fileName, response).then(data => resolve(data)).catch((reason) => {console.log(reason); resolve(response)});
                    default:
                        return reject("API ERROR: " + this.status);
                }
            };
            request.send();
            if(progressBar!=null)progressBar.style = "width: 35%"; 
        }
    })
}

