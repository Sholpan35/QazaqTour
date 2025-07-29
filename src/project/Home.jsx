import React from 'react';
import './Home.css'; 

function Home() {
  const banner = "https://i.pinimg.com/1200x/3b/0d/2f/3b0d2f4348c24a3ac6d964d885438613.jpg";

  return (
    <main>
      <section
        className="hero"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="overlay">
          <h1>Best Tours & Activities in<br />Almaty, Kazakhstan</h1>
          <p>Explore mountains, lakes, culture, and cuisine with trusted local guides.</p>
          <div className="hero-buttons">
            <a href="/tours" className="btn">View Tours</a>
            <a href="/contacts" className="btn btn-secondary">Contact Us</a>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <h2>Why Travel With Us?</h2>
          <p>
            We are a team of passionate local guides offering unforgettable adventures in Kazakhstan.
            Whether you're hiking in the Tian Shan mountains, visiting Big Almaty Lake, or discovering the city's vibrant food scene — we'll make sure it's a trip to remember.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Home;
