// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; //nos conectamos en firebase
import { getFirestore } from "firebase/firestore"; //nos conectamos con firestore


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA3quGuKI4q_K7vrtk795Qzllz5WWgX_mE",
    authDomain: "candyshop-f4855.firebaseapp.com",
    projectId: "candyshop-f4855",
    storageBucket: "candyshop-f4855.appspot.com",
    messagingSenderId: "584222856467",
    appId: "1:584222856467:web:84e29f33e20e3a22a6b6e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); //Lo exportamos porque las consulta no las vamos hacer acá