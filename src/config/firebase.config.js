// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHXPAgl-hZJKPgXTqy3FivrZlVAh9Cdvg",
  authDomain: "a11-group-study.firebaseapp.com",
  projectId: "a11-group-study",
  storageBucket: "a11-group-study.appspot.com",
  messagingSenderId: "109543945940",
  appId: "1:109543945940:web:d84fdbe2f534dc20b2ad41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;