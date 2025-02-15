import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-0">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">About Us</h2>
          <p className="text-gray-400">
            Stay updated with the latest current affairs and news. We bring daily insights to help you stay informed.
          </p>
        </div>

        {/* Social Media Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-center">Follow Us</h2>
          <div className="flex flex-col items-center space-y-3">
          <a href="https://www.instagram.com/itzpuneett/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-pink-500 hover:text-pink-400">
              <FaInstagram className="text-xl" />
              <span>Instagram</span>
            </a>
            <a href="https://www.linkedin.com/in/puneettkushwaha/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-blue-700 hover:text-blue-500">
              <FaLinkedin className="text-xl" />
              <span>LinkedIn</span>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-blue-600 hover:text-blue-400">
              <FaFacebookF className="text-xl" />
              <span>Facebook</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-blue-400 hover:text-blue-300">
              <FaTwitter className="text-xl" />
              <span>Twitter</span>
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <a href="mailto:puneetkushwaha9452@gmail.com" className="flex items-center space-x-3 text-red-500 hover:text-red-400">
            <FaEnvelope className="text-xl" />
            <span>puneetkushwaha9452@gmail.com</span>
          </a>
          <a href="tel:+919876543210" className="flex items-center space-x-3 mt-4 text-green-500 hover:text-green-400">
            <FaPhone className="text-xl" />
            <span>+91 7380663685</span>
          </a>
        </div>

      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
        © 2025 Quiz Trek. All Rights Reserved.
      </div>
    </footer>
  );
}
