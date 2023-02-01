import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const config = {
  apiKey: "AIzaSyDhob0rm2pim_HGJFua16mhmMYSfbKAQxY",
  authDomain: "quiz-app-7a800.firebaseapp.com",
  projectId: "quiz-app-7a800",
  storageBucket: "quiz-app-7a800.appspot.com",
  messagingSenderId: "237980954699",
  appId: "1:237980954699:web:86cdad147807236e645dce",
  measurementId: "G-D6DHX7FYVE",
};

const app = initializeApp(config);

//initialize firebase auth
const auth = getAuth();

export {
  app,
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
};
