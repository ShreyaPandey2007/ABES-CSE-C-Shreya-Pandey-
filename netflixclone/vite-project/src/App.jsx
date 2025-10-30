import React from "react";
import "./App.css";
export default function App() {
  

  return (
    <div className="min-h-screen bg-black text-white font-sans">
     
      <header className="fixed top-0 left-0 right-0 z-30 bg-black/70 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-red-600 text-2xl font-extrabold tracking-widest">
            NETFLIX
          </h1>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#" className="hover:text-gray-300">Home</a>
            <a href="#" className="hover:text-gray-300">TV Shows</a>
            <a href="#" className="hover:text-gray-300">Movies</a>
            <a href="#" className="hover:text-gray-300">New & Popular</a>
          </nav>
          <button className="border px-3 py-1 rounded text-sm hover:bg-white hover:text-black transition">
            Sign In
          </button>
        </div>
      </header>

      <section className="relative h-[80vh] w-full text-white">
        <img
          src="https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
          alt="Hero Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-64">
          <h2 className="text-4xl md:text-6xl font-extrabold">Inception</h2>
          <p className="mt-4 text-sm md:text-base text-gray-300 max-w-md">
            A thief who steals corporate secrets through dream-sharing
            technology is given a chance to erase his past.
          </p>
          <div className="mt-6 flex gap-4">
            <button className="bg-white text-black px-6 py-2 font-semibold rounded">
              ▶ Play
            </button>
            <button className="bg-gray-700/70 text-white px-6 py-2 rounded">
              ℹ More Info
            </button>
          </div>
        </div>
      </section>

      
      <section className="max-w-6xl mx-auto px-6 pb-10 -mt-16 relative z-20">
        <h3 className="text-lg font-semibold mb-3">Trending Now</h3>
        <div className="flex overflow-x-auto gap-4 scrollbar-hide">
          {movies.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Movie"
              className="w-40 h-60 rounded-lg hover:scale-105 transition-transform"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
