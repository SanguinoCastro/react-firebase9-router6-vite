
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDhfCuwCBuWqC27dbvkmPpdfHhoZcmN9mc",
  authDomain: "react-firebase-1-9ea09.firebaseapp.com",
  projectId: "react-firebase-1-9ea09",
  storageBucket: "react-firebase-1-9ea09.appspot.com",
  messagingSenderId: "1088696782191",
  appId: "1:1088696782191:web:6c632ee14e5cafb32fac9a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
