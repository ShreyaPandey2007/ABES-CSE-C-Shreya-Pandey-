import React from "react";
import "./App.css";

export default function App() {
  const movies = [
    "https://image.tmdb.org/t/p/w500/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg",
    "https://image.tmdb.org/t/p/w500/uC6TTUhPpQCmgldGyYveKRAu8JN.jpg",
    "https://image.tmdb.org/t/p/w500/xBKGJQsAIeweesB79KC89FpBrVr.jpg",
    "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    "https://image.tmdb.org/t/p/w500/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg",
  ];

  return (
    <div className="app">
      {/* Navbar */}
      <header>
        <div className="nav-container">
          <h1>NETFLIX</h1>
          <nav>
            <a href="#">Home</a>
            <a href="#">TV Shows</a>
            <a href="#">Movies</a>
            <a href="#">New & Popular</a>
          </nav>
          <button>Sign In</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <img
          src="https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
          alt="Hero Banner"
        />
        <div className="hero-content">
          <h2>Inception</h2>
          <p>
            A thief who steals corporate secrets through dream-sharing technology
            is given a chance to erase his past.
          </p>
          <div className="hero-buttons">
            <button className="play">▶ Play</button>
            <button className="info">ℹ More Info</button>
          </div>
        </div>
      </section>

      {/* Movie Row */}
      <section className="movies-section">
        <h3>Trending Now</h3>
        <div className="movies-row">
          {movies.map((img, i) => (
            <img key={i} src={img} alt="Movie" />
          ))}
        </div>
      </section>
    </div>
  );
}
