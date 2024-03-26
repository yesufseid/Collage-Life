// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.APIKEY,
  authDomain:process.env.AUTHDOMAIN,
  projectId:process.env.PROJECID,
  storageBucket:process.env.STORAGEBUCKET,
  messagingSenderId:process.env. MESSAGINGSENDERID,
  appId:process.env.APPI
};

// Initialize Firebase
const app=initializeApp(firebaseConfig);
const db=getFirestore(app)
export default db


