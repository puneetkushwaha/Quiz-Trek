import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-black text-white py-20 px-5">
      <div className="container mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-4"
        >
          Stay Updated with the Latest News
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg mb-6"
        >
          Get daily current affairs, trending news, and expert insights.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex justify-center"
        >
          <Link 
            href="/about" 
            className="bg-white text-blue-900 px-6 py-3 rounded-md shadow-lg hover:bg-gray-200 transition-transform transform hover:scale-105"
          >
            About
          </Link>
        </motion.div>
      </div>
      
      {/* Featured Topics Section */}
      <div className="container mx-auto mt-16">
        <h2 className="text-3xl font-bold text-center mb-6">Explore Key Topics</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Global Economy", desc: "Latest market trends & financial news." },
            { title: "Science & Tech", desc: "Innovations, AI, and space discoveries." },
            { title: "Politics & Governance", desc: "Government policies and global affairs." },
            { title: "Health & Medicine", desc: "Healthcare breakthroughs & medical news." },
            { title: "Environment & Climate", desc: "Sustainability efforts and climate change." },
            { title: "Sports & Entertainment", desc: "Major sports events and celeb updates." }
          ].map((topic, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold">{topic.title}</h3>
              <p className="text-gray-300 mt-2">{topic.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
