import { useState } from "react";
import { motion } from "framer-motion";
import { db } from "../firebase/firebaseConfig"; // ✅ Import Firestore
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; // ✅ Firestore Methods

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null); // ✅ Success Message State

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      // ✅ Save Data to Firestore
      await addDoc(collection(db, "contactMessages"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: serverTimestamp(),
      });

      setSuccess("Message sent successfully! ✅");
      setFormData({ name: "", email: "", message: "" }); // Clear Form
    } catch (error) {
      setSuccess("❌ Error sending message. Please try again.");
      console.error("Firestore Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-black flex items-center justify-center p-6">
      <motion.div
        className="bg-gray-900 text-white p-8 rounded-lg shadow-lg max-w-lg w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-center mb-6 text-blue-400">Contact Us</h1>
        <p className="text-center text-gray-400 mb-6">We&apos;d love to hear from you!</p>

        {/* ✅ Success or Error Message */}
        {success && (
          <p className={`text-center mb-4 ${success.includes("Error") ? "text-red-500" : "text-green-400"}`}>
            {success}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <motion.div whileFocus={{ scale: 1.05 }} className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </motion.div>

          {/* Email Field */}
          <motion.div whileFocus={{ scale: 1.05 }} className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </motion.div>

          {/* Message Field */}
          <motion.div whileFocus={{ scale: 1.05 }} className="relative">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows="4"
              className="w-full bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition-all disabled:opacity-50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={loading} // ✅ Disable button when submitting
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
