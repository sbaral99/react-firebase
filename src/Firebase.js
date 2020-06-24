import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyAWN8kcv6sHeTGXZ3zjpLM9EFF2pJZOMhc",
    authDomain: "web01-a4d5f.firebaseapp.com",
    databaseURL: "https://web01-a4d5f.firebaseio.com",
    projectId: "web01-a4d5f",
    storageBucket: "web01-a4d5f.appspot.com",
    messagingSenderId: "630455750316",
    appId: "1:630455750316:web:4e221801b8cb06843ad909",
    measurementId: "G-294YFJBLL5"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;