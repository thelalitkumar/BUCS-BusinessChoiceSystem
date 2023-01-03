// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyB-E6dDgvCtNm4V2XY7zb9pZt2PtYaI2z4",
  authDomain: "ecommerce-85aaf.firebaseapp.com",
  projectId: "ecommerce-85aaf",
  storageBucket: "ecommerce-85aaf.appspot.com",
  messagingSenderId: "896930098302",
  appId: "1:896930098302:web:83598632f29ec22d573c2f"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app)
export const db = getFirestore(app)