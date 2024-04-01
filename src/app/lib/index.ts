// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,collection,getDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEQvJtMmEc4oVTEgLa5lSueELYWvxbYrI",
  authDomain: "collage-4003f.firebaseapp.com",
  projectId: "collage-4003f",
  storageBucket: "collage-4003f.appspot.com",
  messagingSenderId: "38928903997",
  appId: "1:38928903997:web:af1b6e8448da14ebe65f54"
};

// Initialize Firebase
const app=initializeApp(firebaseConfig);
const db=getFirestore(app)
export default db


