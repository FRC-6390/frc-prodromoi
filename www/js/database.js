import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js';
import { getFirestore, collection, getDocs, setDoc, doc } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js';

const app = initializeApp(firebaseConfig);

const db = getFirestore();

export function upload(location, name, data){
    try{
        const docId = doc(db, location, name)
        const docRef = setDoc(docId, data, { merge: true });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }  
    console.log("Document written with ID: ", data);     
}

export function download(location){
    return getDocs(collection(db, location));  
}
