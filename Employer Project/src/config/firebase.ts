// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxwpaSBmCSlqI0setKqExbbAlwTZaRI0o",
  authDomain: "byteflippergame.firebaseapp.com",
  projectId: "byteflippergame",
  storageBucket: "byteflippergame.appspot.com",
  messagingSenderId: "963919681027",
  appId: "1:963919681027:web:92d38749690f10bf82a036",
  measurementId: "G-1Y1MRKDSVE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);