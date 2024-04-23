// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfUAULd4eecyAPuaE4ZNeQMaGi1JXoSD4",
  authDomain: "coffee-store-6b71f.firebaseapp.com",
  projectId: "coffee-store-6b71f",
  storageBucket: "coffee-store-6b71f.appspot.com",
  messagingSenderId: "476782422716",
  appId: "1:476782422716:web:cfd26d0906c1c375e53eb9",
  measurementId: "G-YHYP01QMY6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);