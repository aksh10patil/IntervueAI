// Import the functions you need from the SDKs you need
import { initializeApp ,getApps,getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQ8Xg9y8s30r_XMWWPvtGW0qW_8tpDsf0",
  authDomain: "prepwise-48b69.firebaseapp.com",
  projectId: "prepwise-48b69",
  storageBucket: "prepwise-48b69.firebasestorage.app",
  messagingSenderId: "281137221796",
  appId: "1:281137221796:web:de4d16a3d060eb31349631",
  measurementId: "G-NN9RMNBJ1Z"
};

// Initialize Firebase
const app =  !getApps.length? initializeApp(firebaseConfig) : getApp()


export const auth = getAuth(app);
export const db = getFirestore(app)