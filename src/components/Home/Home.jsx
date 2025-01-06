import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to MentorMap</h1>
        <p>Your one-stop solution for managing courses and mentors.</p>
      </header>
      <section className="home-content">
        <div className="home-card">
          <h2>For Students</h2>
          <p>Browse courses, enroll, and track your learning progress effortlessly.</p>
        </div>
        <div className="home-card">
          <h2>For Mentors</h2>
          <p>Create courses, manage students, and monitor their success.</p>
        </div>
      </section>
      
    </div>
  );
};

export default Home;
