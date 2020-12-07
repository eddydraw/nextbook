import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

  // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAFf8H5yi9dRHstNIpf8ps5Di6hNbAl7ig",
    authDomain: "tshabu-webbook.firebaseapp.com",
    databaseURL: "https://tshabu-webbook.firebaseio.com",
    projectId: "tshabu-webbook",
    storageBucket: "tshabu-webbook.appspot.com",
    messagingSenderId: "840158910923",
    appId: "1:840158910923:web:3f779860f2755c69fffe4e",
    measurementId: "G-JH3N6P5JR6"
};

// Initialize Firebase
(firebase.apps.length == 1) ? firebase.app() : firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };