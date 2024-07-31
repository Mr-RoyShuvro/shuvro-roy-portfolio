// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWA0-COWdukrXvlEfenTZfDOAOM7wuAmQ",
  authDomain: "shuvro-portfolio.firebaseapp.com",
  projectId: "shuvro-portfolio",
  storageBucket: "shuvro-portfolio.appspot.com",
  messagingSenderId: "449292423596",
  appId: "1:449292423596:web:83f789e609c587c5f12a09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;