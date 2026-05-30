// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5CGQsAkuWUuMVWDXeRiTjVwCFHX-8hOM",
  authDomain: "ak-agency-c4047.firebaseapp.com",
  projectId: "ak-agency-c4047",
  storageBucket: "ak-agency-c4047.firebasestorage.app",
  messagingSenderId: "270275192870",
  appId: "1:270275192870:web:0a3dd66eddc4094eb85ee7",
  measurementId: "G-RR8M2SCLXB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);