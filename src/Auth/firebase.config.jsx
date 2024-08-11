// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCinpWHve_zNIHEbzd5hjhj-qoQIkDqADY",
  authDomain: "heritage-nest-ee14e.firebaseapp.com",
  projectId: "heritage-nest-ee14e",
  storageBucket: "heritage-nest-ee14e.appspot.com",
  messagingSenderId: "97238217225",
  appId: "1:97238217225:web:440cce6f0a3c04beb23ed8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
