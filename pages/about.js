export default function About() {
  return (
    <main className="bg-gradient-to-r from-blue-900 to-black text-white min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl font-extrabold mb-6">About Us</h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          Welcome to our news portal! We are dedicated to bringing you the latest and most accurate current affairs updates from around the world. Our goal is to keep you informed, aware, and ahead in your journey of knowledge.
        </p>
      </div>

      {/* Founder Section */}
      <div className="mt-12 bg-gray-800 p-6 rounded-lg shadow-md text-center max-w-3xl">
        <h2 className="text-2xl font-semibold">Meet the Mind Behind This Project</h2>
        <p className="text-gray-300 mt-3">
          This platform is built and managed by <span className="font-bold text-white">Puneet Kushwaha</span>, an ambitious and passionate tech enthusiast from <span className="font-bold text-white">Lucknow</span>. 
          Currently pursuing <span className="font-bold text-white">B.Tech in Computer Science (3rd year)</span>, Puneet has a keen interest in <span className="font-bold text-white">web development, programming, and current affairs</span>. 
          With a vision to make information easily accessible for students and aspirants, he created this platform to provide <span className="font-bold text-white">authentic, structured, and up-to-date current affairs</span> in a simple and user-friendly way.
        </p>
      </div>

      {/* Highlights Section */}
      <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">Reliable Sources</h2>
          <p className="text-gray-300 mt-2">We gather news from trusted and verified sources.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">Daily Updates</h2>
          <p className="text-gray-300 mt-2">Stay updated with the latest events every day.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">Easy Access</h2>
          <p className="text-gray-300 mt-2">Get news in a simplified and well-structured format.</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12">
        <p className="text-lg text-gray-300">Join us in staying informed and ahead of the world.</p>
      </div>
    </main>
  );
}
