import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBNosFHNVfv_hB-xAD3fSRCoF1O6DuotTo",
  authDomain: "scissor-capstone.firebaseapp.com",
  projectId: "scissor-capstone",
  storageBucket: "scissor-capstone.appspot.com",
  messagingSenderId: "694128945269",
  appId: "1:694128945269:web:c1f7b8ab0b07a68f6cf03c",
  measurementId: "G-ZLBRK70ZRZ"
};

const app = initializeApp(firebaseConfig);
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;
const firestore = getFirestore(app);
const auth = getAuth(app);

export { app, analytics, firestore, auth };
