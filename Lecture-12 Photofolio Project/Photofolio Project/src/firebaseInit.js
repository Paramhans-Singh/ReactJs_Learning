
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDfx9WDGqYneGVq6mZcStWX-To1sE6Kmkk",
  authDomain: "photofolio-db4e0.firebaseapp.com",
  projectId: "photofolio-db4e0",
  storageBucket: "photofolio-db4e0.appspot.com",
  messagingSenderId: "511330047685",
  appId: "1:511330047685:web:5e15e12fc46bba15fa02ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
