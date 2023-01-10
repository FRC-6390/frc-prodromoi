
/* <script type="module">
    import {tbaData, uploadData, downloadData} from '../js/connection.js';
    document.getElementById('upload').addEventListener('click', uploadData);
    document.getElementById('download').addEventListener('click', downloadData);
    document.getElementById('tba').addEventListener('click', tbaData);
</script> */

// $(function () {
//     document.getElementById('upload').addEventListener('click', uploadData);
//     document.getElementById('download').addEventListener('click', downloadData);
//     document.getElementById('tba').addEventListener('click', tbaData);
//     if(!checkConnection()) alert("no connection")
// })

window.onerror = function myErrorHandler(errorMsg, url, lineNumber) {
    alert("Error occured: " + errorMsg);//or any message
    return false;
}

function uploadData() {
    if(checkConnection()){
        readDirectory("matches").then(data => data.forEach(element => read("matches",element["name"]).then(elementData => upload("matches",element["name"],JSON.parse(elementData)))));
        readDirectory("profiles").then(data => data.forEach(element => read("profiles",element["name"]).then(elementData => upload("profiles",element["name"],JSON.parse(elementData)))));
        alert('upload done'); 
    }else{
        alert("no connection")
    }
    
}

function downloadData() {
    if(checkConnection()){
        import('../js/database/database.js').then(({download}) =>download("matches").then(result => result.forEach((doc) => write("matches", doc.id, doc.data()))));
        alert('download done');
    }else{
        alert("no connection")
    }
}

function tbaData(){
    if(checkConnection()){
        console.log("tba");
    }else{
        alert("no connection");
    }
}