// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAovguqbsH27IuELRbtwhKPexsYQdyP8iA",
  authDomain: "netflixclone-c2168.firebaseapp.com",
  projectId: "netflixcl one-c2168",
  storageBucket: "netflixclone-c2168.firebasestorage.app",
  messagingSenderId: "230837696680",
  appId: "1:230837696680:web:a73261c929e65372f16a9d",
  measurementId: "G-TDLS8B93HK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();