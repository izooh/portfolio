// import * as firebase from 'firebase';
import firebase from 'firebase/app'
import "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC9W9qFerXrST5CdeD5HWUhzR5",
    authDomain: "portfolio-2fd73.firebaseapp.com",
    databaseURL: "https://portfolio-2fd73.firebaseio.com",
    projectId: "portfolio-2fd73",
    storageBucket: "portfolio-2fd73.appspot.com",
    messagingSenderId: "359466661450",
    appId: "1:359466661450:web:ecd22b8341ba89d53a98b3",
    measurementId: "G-E70CF7B5JP"
}


const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();