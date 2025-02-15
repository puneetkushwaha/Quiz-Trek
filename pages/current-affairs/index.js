import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CurrentAffairs() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/current-affairs");
        if (!res.ok) throw new Error(`API Error: ${res.status} - ${res.statusText}`);

        const data = await res.json();

        if (Array.isArray(data) && data.length > 0) {
          setArticles(data);
        } else {
          setError("No articles found.");
        }
      } catch (error) {
        console.error("Error fetching current affairs:", error);
        setError("Failed to load current affairs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-black text-white">
        <motion.p 
          className="text-lg text-gray-300 animate-pulse"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }}
        >
          Loading...
        </motion.p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-black text-white">
        <motion.p 
          className="text-lg text-red-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {error}
        </motion.p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-blue-900 to-black min-h-screen flex flex-col items-center text-white px-6 py-12">
      <motion.div
        className="max-w-5xl w-full"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-extrabold text-center mb-8">
          📰 Latest Current Affairs
        </h1>

        <motion.div className="grid md:grid-cols-2 gap-6" layout>
          {articles.map((article, index) => (
            <motion.a
              key={index}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 hover:bg-gray-800 transition-all duration-300 p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-blue-500/50 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              layout
            >
              {article.image && (
                <motion.img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover rounded-md mb-4 border-2 border-blue-500"
                  layoutId={`image-${index}`}
                />
              )}
              <h2 className="text-2xl font-semibold mb-2">{article.title}</h2>
              <p className="text-sm text-gray-400 mb-2">
                {new Intl.DateTimeFormat("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }).format(new Date(article.publishedAt))}
              </p>
              <p className="text-gray-300">{article.description}</p>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
