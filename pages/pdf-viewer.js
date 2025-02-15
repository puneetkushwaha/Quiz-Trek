import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

export default function PdfViewer() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.push("/login"); // ✅ Redirect to login if not logged in
      } else {
        setUser(currentUser);
      }
    });

    return () => unsubscribe();
  }, [router]); // ✅ Added router to dependency array

  if (!user) return <p>Redirecting to login...</p>; // ✅ Show message while redirecting

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">PDF Viewer</h1>
      
      {/* Updated to open PDF in a new tab */}
      <a 
        href="/january/2025-01-01.pdf" 
        target="_blank" 
        rel="noopener noreferrer"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        View PDF
      </a>
    </div>
  );
}
