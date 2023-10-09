import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBH_VifG1Hp7cFd6KBXomFgTHMuhbAaAJU",
  authDomain: "computing-world-ecommerce.firebaseapp.com",
  projectId: "computing-world-ecommerce",
  storageBucket: "computing-world-ecommerce.appspot.com",
  messagingSenderId: "903624313135",
  appId: "1:903624313135:web:b69e7fad965e37705639da",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const initeFirebase = () => app;
export const db = getFirestore(app);
