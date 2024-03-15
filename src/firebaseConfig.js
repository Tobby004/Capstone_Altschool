// Import the functions you need from the Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "FIREBASE_API",
  authDomain: "scissor-capstone.firebaseapp.com",
  projectId: "scissor-capstone",
  storageBucket: "scissor-capstone.appspot.com",
  messagingSenderId: "694128945269",
  appId: "1:694128945269:web:c1f7b8ab0b07a68f6cf03c",
  measurementId: "G-ZLBRK70ZRZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;
const firestore = getFirestore(app);
const auth = getAuth(app);

export { app, analytics, firestore, auth };
