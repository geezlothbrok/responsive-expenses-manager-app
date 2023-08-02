import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDqV9lCt5xTgUlFwzFpDkwnR-UsHUUdVG4",
  authDomain: "expenses-manager-a1a9a.firebaseapp.com",
  projectId: "expenses-manager-a1a9a",
  storageBucket: "expenses-manager-a1a9a.appspot.com",
  messagingSenderId: "193663316019",
  appId: "1:193663316019:web:efb75afca7453cf2343346"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;