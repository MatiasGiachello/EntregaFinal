
import { initializeApp } from "firebase/app";
import {getFirestore} from"firebase/firestore";


//"AIzaSyAnU7vnv7q50ECYWeKftq-lJ1sqmnjkSsY"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "entregafinal-2b3fd.firebaseapp.com",
  projectId: "entregafinal-2b3fd",
  storageBucket: "entregafinal-2b3fd.appspot.com",
  messagingSenderId: "532249980851",
  appId: "1:532249980851:web:22e91473c115f0880025c6",
  measurementId: "G-42MYKK2L60"
};

const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);