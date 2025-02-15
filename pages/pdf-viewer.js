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
  }, [router]);  // Added router to dependency array

  if (!user) return <p>Redirecting to login...</p>; // ✅ Show message while redirecting

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">PDF Viewer</h1>
      {/* Updated PDF source path */}
      <embed src="/january/2025-01-01.pdf" width="80%" height="600px" type="application/pdf" />
    </div>
  );
}
