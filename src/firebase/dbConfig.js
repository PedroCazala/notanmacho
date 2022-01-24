// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBz-oJbQZqcrJtoQcazVRapZcSoFZqvyzI",
  authDomain: "no-tan-macho.firebaseapp.com",
  projectId: "no-tan-macho",
  storageBucket: "no-tan-macho.appspot.com",
  messagingSenderId: "498074221023",
  appId: "1:498074221023:web:3b992b7fc236f7e247ac6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const getFirestoreApp=()=>{
    return app
}