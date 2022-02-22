import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyABD9B4FFRsofaov9udfac67Mr83sR5OzA",
    authDomain: "teeformee-392e6.firebaseapp.com",
    projectId: "teeformee-392e6",
    storageBucket: "teeformee-392e6.appspot.com",
    messagingSenderId: "318767075025",
    appId: "1:318767075025:web:7abf3b319815ead75dbff0"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db }