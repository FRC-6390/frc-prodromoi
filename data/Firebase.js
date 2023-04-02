import { initializeApp } from "firebase/app";
import { initializeFirestore, collection, getDocs, setDoc, doc } from "firebase/firestore";


const firebaseConfig = {

    apiKey: "AIzaSyA3lF3ePrXlhqQ8P6yycpDxjxLoLAMkOeA",
  
    authDomain: "scouting-app-6390.firebaseapp.com",
  
    databaseURL: "https://scouting-app-6390-default-rtdb.firebaseio.com",
  
    projectId: "scouting-app-6390",
  
    storageBucket: "scouting-app-6390.appspot.com",
  
    messagingSenderId: "515962960682",
  
    appId: "1:515962960682:web:d1b32baa84b34303613c53"
  
  };
  

const app = initializeApp(firebaseConfig)
const db = initializeFirestore(app, {
    experimentalForceLongPolling: true
    })
export async function uploadDB(location, name, data){
    try{
        const docId = doc(db, location, name)
        const docRef = await setDoc(docId, data, { merge: true });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }  
    console.log("Document written with ID: ", data);     
}

export function downloadDB(location){
    return getDocs(collection(db, location));  
}

