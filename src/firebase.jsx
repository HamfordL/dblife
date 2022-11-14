// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCO3w2nFciP99Io8Gto5io9rWerE6GA4ZE",
  authDomain: "dbl-website-d490a.firebaseapp.com",
  databaseURL: "https://dbl-website-d490a-default-rtdb.firebaseio.com",
  projectId: "dbl-website-d490a",
  storageBucket: "dbl-website-d490a.appspot.com",
  messagingSenderId: "628952612565",
  appId: "1:628952612565:web:d7be1122377fafb897ec5c",
  measurementId: "G-DN7ZRV490G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const database = getDatabase(app);
