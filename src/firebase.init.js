// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCcJIugE2dLMANEgBujr15lEfNvekrsVrM",
    authDomain: "my-firebase-auth-8aa27.firebaseapp.com",
    projectId: "my-firebase-auth-8aa27",
    storageBucket: "my-firebase-auth-8aa27.appspot.com",
    messagingSenderId: "348103107689",
    appId: "1:348103107689:web:d328b6d03a604b920ceef8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;