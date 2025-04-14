import React, { useEffect, useState } from 'react';
import './App.css';
import { FaLinkedin, FaInstagram, FaEnvelope, FaPhoneAlt, FaGithub } from 'react-icons/fa';

const App = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="portfolio-container">
      <header className="header glass-effect">
    
        <h1 className="name gradient-text">Sahil Dhiman</h1>
        <p className="title">MCA Graduate | Front-End Developer | AI Enthusiast</p>
        <div className="contact-links">
          <span><FaPhoneAlt /> +91-9015130859</span>
          <span><FaEnvelope /> <a href="mailto:sdhiman1509@gmail.com">sdhiman1509@gmail.com</a></span>
          <span className="social-icons">
            <a href="https://www.linkedin.com/in/sahil-dhiman-b10261255/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://www.instagram.com/sahildhiman1509/" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://github.com/SahilD1509" target="_blank" rel="noreferrer"><FaGithub /></a>
          </span>
        </div>
        <p className="live-time">📅 {dateTime.toLocaleDateString()} ⏰ {dateTime.toLocaleTimeString()}</p>
      </header>

      <main>
        <section className="glass-effect">
          <h2>Professional Summary</h2>
          <p>A passionate and dedicated front-end developer with a strong foundation in computer science and a focus on building modern, scalable web applications. Demonstrates a keen interest in artificial intelligence and thrives in collaborative environments that promote continuous learning and innovation.</p>
        </section>

        <section className="glass-effect">
          <h2>Education</h2>
          <div className="card">
            <h3>Master of Computer Applications (MCA)</h3>
            <p>Amrita Vishwa Vidyapeetham | Nov 2021 - Nov 2023 | CGPA: 8.1</p>
          </div>
          <div className="card">
            <h3>Bachelor of Science (Computer Science)</h3>
            <p>Lyallpur Khalsa College | 2017 - 2020 | Percentage: 60.6%</p>
          </div>
        </section>

        <section className="glass-effect">
          <h2>Experience & Projects</h2>
          <div className="card">
            <h3>Technical Intern – REVEZA</h3>
            <ul>
              <li>Managed client communications and acted as the primary liaison for issue resolution.</li>
              <li>Led technical troubleshooting and system improvement initiatives.</li>
              <li>Proactively suggested process optimizations to enhance client service delivery.</li>
              <li>Gathered feedback and ensured services aligned with client needs.</li>
            </ul>
          </div>
          <div className="card">
            <h3>Skyscanner Front-End Virtual Experience</h3>
            <p>Developed a responsive travel date selector using Skyscanner's Backpack UI framework and MongoDB Atlas.</p>
          </div>
          <div className="card">
            <h3>Citi Technology Virtual Experience</h3>
            <p>Analyzed and improved loan management and stock risk systems using UML modeling and ML-based insights.</p>
          </div>
          <div className="card">
            <h3>JP Morgan Software Engineering Experience</h3>
            <p>Implemented real-time data visualizations using Perspective to enhance the internal trading tool.</p>
          </div>
        </section>

        <section className="glass-effect">
          <h2>Certifications</h2>
          <ul>
            <li>Frontend Developer - META (Coursera)</li>
            <li>Introduction to Artificial Intelligence - Elements of AI</li>
            <li>Generative AI Learning Path - GCCP</li>
            <li>AI Fundamentals, Cloud Computing, Python 101 - IBM</li>
          </ul>
        </section>

        <section className="glass-effect">
          <h2>Technical Proficiencies</h2>
          <p><strong>Languages:</strong> Python, JavaScript, HTML, CSS</p>
          <p><strong>Frameworks & Libraries:</strong> React, Node.js, Express.js</p>
          <p><strong>Databases:</strong> MongoDB Atlas, PostgreSQL</p>
          <p><strong>Tools & Platforms:</strong> Git, VS Code, DBMS, REST APIs</p>
        </section>

        <section className="glass-effect">
          <h2>Soft Skills</h2>
          <p>Effective communicator, team player, strong problem-solving ability, leadership skills, and time management.</p>
        </section>

        <section className="glass-effect">
          <h2>Languages</h2>
          <p>English (Conversational), Hindi (Fluent), Punjabi (Fluent)</p>
        </section>

        <section className="glass-effect">
          <h2>Interests</h2>
          <p>Photography, Traveling, Music Appreciation</p>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Sahil Dhiman. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
