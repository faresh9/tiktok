import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

//! REPLACE VALUES BELOW WITH YOUR OWN FIREBASE CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyAm3we9_IZF8u0BwVwPfYmflHyK2jOVDOY",
  authDomain: "tiktok-faresh9.firebaseapp.com",
  projectId: "tiktok-faresh9",
  storageBucket: "tiktok-faresh9.firebasestorage.app",
  messagingSenderId: "725231187684",
  appId: "1:725231187684:web:70ec4f7940fb0e60dc5ef1",
  measurementId: "G-KQV3JWLZD2"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_STORAGE = getStorage(FIREBASE_APP);
