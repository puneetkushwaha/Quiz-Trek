import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // ✅ Firestore Import

const firebaseConfig = {
  apiKey: "AIzaSyBMt9EFtCL62Ts7fqR9anjN4z5hj-bAE7U",
  authDomain: "quiztrek.firebaseapp.com",
  projectId: "quiztrek",
  storageBucket: "quiztrek.appspot.com", // ✅ Fix Storage Bucket URL
  messagingSenderId: "1079048660059",
  appId: "1:1079048660059:web:1aecafb072492248bbcb7e",
};

// ✅ Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const db = getFirestore(firebaseApp); // ✅ Firestore Initialize

// ✅ Correct Exports
export { auth, provider, db };
export default firebaseApp;
