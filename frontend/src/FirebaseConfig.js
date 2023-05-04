import { initializeApp } from "firebase/app";
import { getAuth,signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCsfaoE7oeMiv6_we0qu9GjYeEc9z1vcpg",
  authDomain: "iput-kernel.firebaseapp.com",
  projectId: "iput-kernel",
  storageBucket: "iput-kernel.appspot.com",
  messagingSenderId: "560728439705",
  appId: "1:560728439705:web:1b37db3f667399fe46b108",
  measurementId: "G-9F48K8B6SD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new signInWithEmailAndPassword();
const db = getFirestore(app);

export {auth,provider};
