// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2O3AKOvHcasonFIXsMbV8MdybZ_d2cZE",
  authDomain: "doctors-portal-a4b5a.firebaseapp.com",
  projectId: "doctors-portal-a4b5a",
  storageBucket: "doctors-portal-a4b5a.appspot.com",
  messagingSenderId: "270294188650",
  appId: "1:270294188650:web:3d4581bad5b7e61e1cc013"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app