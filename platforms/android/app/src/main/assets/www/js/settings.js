
$(load)

function load() {
    read('settings', 'settings').then(data => {
        console.log(settings);
        if(data){
            document.getElementById('DeviceName').value = data['deviceName']
            document.getElementById('Eventkey').value = data['eventKey'];
            document.getElementById('ActiveUpdates').checked = data['activeUpdates'];
            document.getElementById('apiKey').value = data['firebaseConfig']['apiKey'];
            document.getElementById('authDomain').value = data['firebaseConfig']['authDomain'];
            document.getElementById('databaseUrl').value = data['firebaseConfig']['databaseURL'];
            document.getElementById('projectId').value = data['firebaseConfig']['projectId'];
            document.getElementById('storageBucket').value = data['firebaseConfig']['storageBucket'];
            document.getElementById('messagingSenderId').value = data['firebaseConfig']['messagingSenderId'];
            document.getElementById('appId').value = data['firebaseConfig']['appId'];
            document.getElementById('matchFileLocation').value = data['matchFileLocation'];
        }else{
            document.getElementById('DeviceName').value = deviceName;
            document.getElementById('Eventkey').value = eventKey;
            document.getElementById('ActiveUpdates').checked = activeUpdates;
            document.getElementById('apiKey').value = firebaseConfig.apiKey
            document.getElementById('authDomain').value = firebaseConfig.authDomain
            document.getElementById('databaseUrl').value = firebaseConfig.databaseURL
            document.getElementById('projectId').value = firebaseConfig.projectId
            document.getElementById('storageBucket').value = firebaseConfig.storageBucket
            document.getElementById('messagingSenderId').value = firebaseConfig.messagingSenderId
            document.getElementById('appId').value = firebaseConfig.appId
            document.getElementById('matchFileLocation').value = matchFileLocation
        }
        save();
    } )
}

var firebaseConfig = {
    apiKey: "AIzaSyA3lF3ePrXlhqQ8P6yycpDxjxLoLAMkOeA",
    authDomain: "scouting-app-6390.firebaseapp.com",
    databaseURL: "https://scouting-app-6390-default-rtdb.firebaseio.com",
    projectId: "scouting-app-6390",
    storageBucket: "scouting-app-6390.appspot.com",
    messagingSenderId: "515962960682",
    appId: "1:515962960682:web:d1b32baa84b34303613c53"
};

var deviceName = "Scouting Tablet";
var eventKey = '2022bcvi';
var activeUpdates = false;
var matchFileLocation = 'matches';

function save() {
    deviceName = document.getElementById('DeviceName').value;
    eventKey = document.getElementById('Eventkey').value;
    activeUpdates = document.getElementById('ActiveUpdates').checked;
    firebaseConfig.apiKey = document.getElementById('apiKey').value;
    firebaseConfig.authDomain = document.getElementById('authDomain').value;
    firebaseConfig.databaseURL = document.getElementById('databaseUrl').value;
    firebaseConfig.projectId = document.getElementById('projectId').value;
    firebaseConfig.storageBucket = document.getElementById('storageBucket').value;
    firebaseConfig.messagingSenderId = document.getElementById('messagingSenderId').value;
    firebaseConfig.appId = document.getElementById('appId').value;
    matchFileLocation = document.getElementById('matchFileLocation').value;
    var settings = {
        deviceName : deviceName,
        eventKey : eventKey,
        activeUpdates : activeUpdates,
        firebaseConfig : firebaseConfig,
        matchFileLocation : matchFileLocation
    }

    write('settings', 'settings', JSON.parse(JSON.stringify(settings)))
}