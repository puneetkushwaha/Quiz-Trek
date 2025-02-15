import { auth, provider } from "./firebaseConfig"; // ✅ Correct Import
import { signInWithPopup, signOut } from "firebase/auth";

// ✅ Google Sign-In Function
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error("Google Sign-In Error:", error);
  }
};

// ✅ Logout Function
export const logout = async () => {
  try {
    await signOut(auth);
    console.log("User logged out");
  } catch (error) {
    console.error("Logout Error:", error);
  }
};
