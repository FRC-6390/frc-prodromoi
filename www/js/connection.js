import {upload, download} from '../js/database/database.js';

export function uploadData() {
    readDirectory("matches").then(data => data.forEach(element => read("matches",element["name"]).then(elementData => upload("matches",element["name"],JSON.parse(elementData)))));
    alert('upload done');
}

export function downloadData() {
    download("matches").then(result => result.forEach((doc) => write("matches", doc.id, doc.data())));
    alert('download done');
}

export function tbaData(){
    console.log("tba");
}