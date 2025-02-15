"use client";
import { useState, useEffect } from "react";
import { auth } from "../firebase/firebaseConfig";
import { signInWithGoogle, logout } from "../firebase/firebaseAuth";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false); // Hamburger menu state

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <nav className="bg-white text-black shadow-md p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Links */}
        <ul className="hidden md:flex space-x-6">
          <li className="relative group font-bold">
            <Link href="/" className="py-2 px-4">
              Home
            </Link>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </li>
          <li className="relative group font-bold">
            <Link href="/current-affairs" className="py-2 px-4">
              Current Affairs
            </Link>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </li>
          <li className="relative group font-bold">
            <Link href="/latest-current-affairs" className="py-2 px-4">
              Latest Current Affairs
            </Link>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </li>
        </ul>

        {/* Logo (Centered) */}
        <Link href="/" className="absolute left-1/2 transform -translate-x-1/2 flex items-center text-xl font-bold">
          <img src="/QuizTrek Logo.png" alt="Logo" className="h-10 w-auto mr-2" />
        </Link>

        {/* Right Section (Contact Us + Auth Buttons) */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Contact Us Button */}
          <Link href="/contact" className="relative group font-bold py-2 px-4">
            Contact Us
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>

          {user ? (
            <div className="flex items-center space-x-4">
              <span className="text-blue-600 font-semibold">{user.displayName}</span>
              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded transition duration-200"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={signInWithGoogle}
              className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded transition duration-200"
            >
              Login
            </button>
          )}
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-white transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-5 right-5 text-black"
          onClick={() => setIsOpen(false)}
        >
          <X size={32} />
        </button>
        <ul className="flex flex-col items-center mt-20 space-y-6 text-lg font-bold">
          <li>
            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/current-affairs" onClick={() => setIsOpen(false)}>
              Current Affairs
            </Link>
          </li>
          <li>
            <Link href="/latest-current-affairs" onClick={() => setIsOpen(false)}>
              Latest Current Affairs
            </Link>
          </li>
          {/* Contact Us Link */}
          <li>
            <Link href="/contact" className="relative group font-bold py-2 px-4">
              Contact Us
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </li>
          {user ? (
            <>
              <li className="text-blue-600 font-semibold">{user.displayName}</li>
              <li>
                <button
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded transition duration-200"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <button
                onClick={() => {
                  signInWithGoogle();
                  setIsOpen(false);
                }}
                className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded transition duration-200"
              >
                Login
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
