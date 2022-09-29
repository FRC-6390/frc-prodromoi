function loadConfig() {
    read('settings', 'settings').then(data => {
        data = JSON.parse(data);
        console.log(data);
        if(data){
            deviceName = data['deviceName']
            eventKey = data['eventKey'];
            eventKeyList = request("/events/2022/keys");
            activeUpdates = data['activeUpdates'];
            firebaseConfig.apiKey = data['firebaseConfig']['apiKey'];
            firebaseConfig.authDomain = data['firebaseConfig']['authDomain'];
            firebaseConfig.databaseURL = data['firebaseConfig']['databaseURL'];
            firebaseConfig.projectId = data['firebaseConfig']['projectId'];
            firebaseConfig.storageBucket = data['firebaseConfig']['storageBucket'];
            firebaseConfig.messagingSenderId = data['firebaseConfig']['messagingSenderId'];
            firebaseConfig.appId = data['firebaseConfig']['appId'];
            matchFileLocation = data['matchFileLocation'];
        }
        saveConfig();
    } )
}

let deviceName = "Unnamed Scouting Tablet";
let eventKey = '2022bcvi';
let eventKeyList = [];
let activeUpdates = false;
let matchFileLocation = 'matches';

let firebaseConfig = {
    apiKey: "AIzaSyA3lF3ePrXlhqQ8P6yycpDxjxLoLAMkOeA",
    authDomain: "scouting-app-6390.firebaseapp.com",
    databaseURL: "https://scouting-app-6390-default-rtdb.firebaseio.com",
    projectId: "scouting-app-6390",
    storageBucket: "scouting-app-6390.appspot.com",
    messagingSenderId: "515962960682",
    appId: "1:515962960682:web:d1b32baa84b34303613c53"
};

let config = {
    deviceName : deviceName,
    eventKey : eventKey,
    activeUpdates : activeUpdates,
    firebaseConfig : firebaseConfig,
    matchFileLocation : matchFileLocation,
    eventKeyList : eventKeyList,
}

function saveConfig(settings = null) {
    if(settings) config = settings;

    write('settings', 'settings', JSON.parse(JSON.stringify(config)))
}

function getConfig(){
    return config;
}
