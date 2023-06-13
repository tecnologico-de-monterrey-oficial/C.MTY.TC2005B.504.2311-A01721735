// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4HIChX4V5-cxMDlniIWSMU8nOnBtpO48",
  authDomain: "vidaplena-kiwi.firebaseapp.com",
  projectId: "vidaplena-kiwi",
  storageBucket: "vidaplena-kiwi.appspot.com",
  messagingSenderId: "110105733770",
  appId: "1:110105733770:web:a23c394c5fdbffd46fdb73"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();