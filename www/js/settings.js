$(load)

function load() {
    let data = getConfig();
        console.log(data);
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

    saveConfig(settings);
}