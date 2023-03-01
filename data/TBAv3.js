import { readFile, saveFile } from "./SaveData";
import NetInfo from '@react-native-community/netinfo';


var basePath = "https://www.thebluealliance.com/api/v3"
var authKey = "EY9KXVr2hydfmmYTjahj4Tx026z1mz3LMASMRRjcGwS4tz6yKhNl4PV00N6V7xCt";
var debug = true;
export async function apiRequest(endpoint){
    const netInfo = await NetInfo.fetch();
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        let fileName = endpoint.replace(/[^a-z0-9]/ig, '');
        readFile("tba", fileName).then((data) => {if(netInfo.isConnected)sendRequest(data);else resolve(data)}).catch((reason) => reject(reason));
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
                        return saveFile("tba", fileName, response).then(data => resolve(data)).catch((reason) => {console.log(reason); resolve(response)});
                    default:
                        return reject("API ERROR: " + this.status);
                }
            };
            request.send();
        } 
    })
}