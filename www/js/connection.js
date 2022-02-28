import {upload, download} from '../js/database/database.js';

$(function () {
    document.getElementById('upload').addEventListener('click', uploadData);
    document.getElementById('download').addEventListener('click', downloadData);
    document.getElementById('tba').addEventListener('click', tbaData);
    if(!checkConnection()) alert("no connection")
})

export function uploadData() {
    if(checkConnection()){
        readDirectory("matches").then(data => data.forEach(element => read("matches",element["name"]).then(elementData => upload("matches",element["name"],JSON.parse(elementData)))));
        alert('upload done'); 
    }else{
        alert("no connection")
    }
    
}

export function downloadData() {
    if(checkConnection()){
        download("matches").then(result => result.forEach((doc) => write("matches", doc.id, doc.data())));
        alert('download done');
    }else{
        alert("no connection")
    }
}

export function tbaData(){
    if(checkConnection()){
        console.log("tba");
    }else{
        alert("no connection");
    }
}