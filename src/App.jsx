import { useState } from "react";
import "./App.css";
import bogodiLogo from "./assets/bogodi-logoo.png";


import tiling1 from "./assets/projects/tiling/tiling 1.jpeg";
import tiling2 from "./assets/projects/tiling/tiling 2.jpeg";
import tiling3 from "./assets/projects/tiling/tiling 3.jpeg";
import tiling4 from "./assets/projects/tiling/tiling 4.jpeg";
import tiling5 from "./assets/projects/tiling/tiling 5.jpeg";
import tiling6 from "./assets/projects/tiling/tiling 6.jpeg";

import renovation1 from "./assets/projects/renovations/renovation 1.jpeg";
import renovation2 from "./assets/projects/renovations/renovation 2.jpeg";
import renovation3 from "./assets/projects/renovations/renovation 3.jpeg";
import renovation4 from "./assets/projects/renovations/renovation 4.jpeg";
import renovation5 from "./assets/projects/renovations/renovation 5.jpeg";
import renovation6 from "./assets/projects/renovations/renovation 6.jpeg";
import renovation7 from "./assets/projects/renovations/renovation 7.jpeg";
import renovation8 from "./assets/projects/renovations/renovation 8.jpeg";

import painting1 from "./assets/projects/painting/painting 1.jpeg";
import painting2 from "./assets/projects/painting/painting 2.jpeg";
import painting3 from "./assets/projects/painting/painting 3.jpeg";
import painting4 from "./assets/projects/painting/painting 4.jpeg";
import painting5 from "./assets/projects/painting/painting 5.jpeg";
import painting6 from "./assets/projects/painting/painting 6.jpeg";
import painting7 from "./assets/projects/painting/painting 7.jpeg";
import painting8 from "./assets/projects/painting/painting 8.jpeg";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div className="app">
      {/* Navbar */}
<header className="navbar">
  <div className="container nav-content">
    <div className="logo">
  <img
    src={bogodiLogo}
    alt="Bogodi Paint & Tiling Projects"
  />
</div>

    {/* Desktop Navigation */}
    <nav className="desktop-nav">
      <a href="#home">Home</a>
      <a href="#services">Services</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>

    <a href="tel:+27782285779" className="nav-button">
      Get a Quote
    </a>

    {/* Mobile Menu Button */}
    <button
  className="menu-button"
  aria-label="Toggle menu"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? "✕" : "☰"}
</button>
 {menuOpen && (
  <div className="mobile-menu">
    <a href="#home" onClick={() => setMenuOpen(false)}>
      Home
    </a>

    <a href="#services" onClick={() => setMenuOpen(false)}>
      Services
    </a>

    <a href="#about" onClick={() => setMenuOpen(false)}>
      About
    </a>

    <a href="#projects" onClick={() => setMenuOpen(false)}>
      Projects
    </a>

    <a href="#contact" onClick={() => setMenuOpen(false)}>
      Contact
    </a>

    <a href="tel:+27782285779" className="mobile-quote">
      Get a Quote
    </a>
  </div>
)}

  </div>
 
</header>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-overlay"></div>

        <div className="container hero-content">
          <p className="eyebrow">BUILD • RENOVATE • TRANSFORM</p>

          <h1>
            Quality Construction.
            <br />
            <span>Beautiful Results.</span>
          </h1>

          <p className="hero-text">
            Professional painting, tiling, renovations, building,
            plastering and plumbing services across Johannesburg & Pretoria.
          </p>
<div className="hero-actions">
 <div className="hero-actions">
  <a href="#contact" className="hero-button primary">
    Get a Free Quote
  </a>

  <a
    href="https://wa.me/27782285779"
    target="_blank"
    rel="noreferrer"
    className="hero-button secondary"
  >
    WhatsApp Us
  </a>
</div>
</div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section services">
  <div className="container">
    <div className="services-header">
      <div>
        <span className="section-label">WHAT WE DO</span>
        <h2>Complete Property Solutions.</h2>
      </div>

      <p>
        From small improvements to major renovations, we provide the
        workmanship and services needed to transform your property.
      </p>
    </div>

    <div className="services-grid">
      <Service
        number="01"
        title="Painting"
        text="Interior and exterior painting with clean preparation and professional finishing."
      />

      <Service
        number="02"
        title="Tiling"
        text="Floor and wall tiling delivered with precision, proper alignment and attention to detail."
      />

      <Service
        number="03"
        title="Renovations"
        text="Transform outdated spaces with practical renovation solutions tailored to your property."
      />

      <Service
        number="04"
        title="Building"
        text="Reliable building work for residential and property improvement projects."
      />

      <Service
        number="05"
        title="Plastering"
        text="Smooth, durable plastering work that creates the right foundation for a quality finish."
      />

      <Service
        number="06"
        title="Plumbing"
        text="Practical plumbing solutions for installations, repairs and property renovations."
      />
    </div>
  </div>
</section>

      {/* About */}
      <section id="about" className="section about">
  <div className="container">
    <div className="about-grid">
      <div className="about-label">
        <span>ABOUT BOGODI</span>
        <div className="about-number">01</div>
      </div>

      <div className="about-content">
        <h2>
          We Don't Just Build.
          <br />
          <span>We Transform Spaces.</span>
        </h2>

        <p className="about-lead">
          Bogodi Paint & Tiling Projects is a professional property
          improvement and construction company serving Johannesburg and
          Pretoria.
        </p>

        <p>
          From painting and tiling to renovations, building, plastering and
          plumbing, we help homeowners and property owners turn their ideas
          into finished spaces they can be proud of.
        </p>

        <p>
          Our approach is simple: quality workmanship, reliable service and
          attention to detail on every project.
        </p>

        <a href="#contact" className="about-link">
          Discuss Your Project →
        </a>
      </div>
    </div>
  </div>
</section>
        {/* Why Choose Us */}
      <section className="why-us section">
        <div className="container">
          <div className="why-header">
            <div>
              <p className="eyebrow">WHY BOGODI</p>
              <h2>Built on quality.<br />Focused on your project.</h2>
            </div>

            <p>
              Whether it's a fresh coat of paint, a complete renovation,
              or a new building project, we approach every job with care,
              professionalism and attention to detail.
            </p>
          </div>

          <div className="why-grid">
            <div className="why-card">
              <span>01</span>
              <h3>Quality Workmanship</h3>
              <p>
                We focus on delivering clean, durable and professional
                results on every project.
              </p>
            </div>

            <div className="why-card">
              <span>02</span>
              <h3>Reliable Service</h3>
              <p>
                We take your project seriously and work to deliver a
                dependable service from start to finish.
              </p>
            </div>

            <div className="why-card">
              <span>03</span>
              <h3>Attention to Detail</h3>
              <p>
                From preparation to the final finish, we pay attention
                to the details that make a difference.
              </p>
            </div>

            <div className="why-card">
              <span>04</span>
              <h3>Multiple Services</h3>
              <p>
                Painting, tiling, renovations, building, plastering and
                plumbing—all under one roof.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Projects */}
     <section id="projects" className="section projects">
  <div className="container">
    <div className="section-heading">
      <span>OUR WORK</span>
      <h2>Projects That Speak for Themselves.</h2>
      <p>
        From residential renovations to complete property transformations,
        we deliver practical solutions with a clean, professional finish.
      </p>
    </div>

    <div className="project-category">
      <div className="project-category-heading">
        <span>01</span>
        <h3>Painting Projects</h3>
        <p>
          Professional interior and exterior painting designed to refresh
          and transform your property.
        </p>
      </div>

      <div className="project-gallery">
        <img src={painting1}alt="Bogodi painting project"onClick={() => setSelectedImage(painting1)}/>
        <img src={painting2} alt="Bogodi painting project"onClick={() => setSelectedImage(painting2)} />
        <img src={painting3} alt="Bogodi painting project"onClick={() => setSelectedImage(painting3)} />
        <img src={painting4} alt="Bogodi painting project"onClick={() => setSelectedImage(painting4)} />
        <img src={painting5} alt="Bogodi painting project"onClick={() => setSelectedImage(painting5)} />
        <img src={painting6} alt="Bogodi painting project"onClick={() => setSelectedImage(painting6)} />
        <img src={painting7} alt="Bogodi painting project"onClick={() => setSelectedImage(painting7)} />
        <img src={painting8} alt="Bogodi painting project"onClick={() => setSelectedImage(painting8)} />
      </div>
    </div>

    <div className="project-category">
      <div className="project-category-heading">
        <span>02</span>
        <h3>Tiling Projects</h3>
        <p>
          Quality tiling solutions with attention to alignment, detail and
          long-lasting results.
        </p>
      </div>

      <div className="project-gallery">
        <img src={tiling1} alt="Bogodi tiling project"onClick={() => setSelectedImage(tiling1)} />
        <img src={tiling2} alt="Bogodi tiling project"onClick={() => setSelectedImage(tiling2)} />
        <img src={tiling3} alt="Bogodi tiling project" onClick={() => setSelectedImage(tiling3)}/>
        <img src={tiling4} alt="Bogodi tiling project" onClick={() => setSelectedImage(tiling4)}/>
        <img src={tiling5} alt="Bogodi tiling project" onClick={() => setSelectedImage(tiling5)}/>
        <img src={tiling6} alt="Bogodi tiling project"onClick={() => setSelectedImage(tiling6)} />
      </div>
    </div>

    <div className="project-category">
      <div className="project-category-heading">
        <span>03</span>
        <h3>Renovation Projects</h3>
        <p>
          Complete property improvements that give old or unfinished spaces
          a fresh new look.
        </p>
      </div>

      <div className="project-gallery">
        <img src={renovation1} alt="Bogodi renovation project"onClick={() => setSelectedImage(renovation1)} />
        <img src={renovation2} alt="Bogodi renovation project"onClick={() => setSelectedImage(renovation2)} />
        <img src={renovation3} alt="Bogodi renovation project"onClick={() => setSelectedImage(renovation3)} />
        <img src={renovation4} alt="Bogodi renovation project"onClick={() => setSelectedImage(renovation4)} />
        <img src={renovation5} alt="Bogodi renovation project"onClick={() => setSelectedImage(renovation5)} />
        <img src={renovation6} alt="Bogodi renovation project"onClick={() => setSelectedImage(renovation6)}/>
        <img src={renovation7} alt="Bogodi renovation project"onClick={() => setSelectedImage(renovation7)}/>
        <img src={renovation8} alt="Bogodi renovation project"onClick={() => setSelectedImage(renovation8)} />
      </div>
    </div>

    <div className="projects-bottom">
  <p>Need a similar project?</p>
  <a href="#contact" className="text-link">
    Get a Free Quote →
  </a>
</div>
    
  </div>
  
</section>

      {/* CTA */}
      <section id="contact" className="section contact">
  <div className="container">
    <div className="contact-wrapper">
      <div className="contact-content">
        <span className="contact-label">GET IN TOUCH</span>

        <h2>Let's Talk About Your Next Project.</h2>

        <p>
          Planning a renovation, painting, tiling or construction project?
          Get in touch with Bogodi Paint & Tiling Projects for a free quote
          and professional advice.
        </p>

        <div className="contact-details">
          <div>
            <span>PHONE</span>
            <a href="tel:+27782285779">+27 78 228 5779</a>
          </div>

          <div>
            <span>LOCATION</span>
            <p>Johannesburg & Pretoria</p>
          </div>

          <div>
            <span>AVAILABILITY</span>
            <p>Available for new projects</p>
          </div>
        </div>
      </div>

      <div className="contact-card">
        <span>START YOUR PROJECT</span>

        <h3>Ready to transform your space?</h3>

<p>
  Send us a message on WhatsApp and tell us about your project.
  We'll get back to you with the next steps for your free quote.
</p>

        <a
          href="https://wa.me/27782285779?text=Hello%20Bogodi%20Paint%20%26%20Tiling%20Projects,%20I%27d%20like%20to%20request%20a%20quote."
          target="_blank"
          rel="noreferrer"
          className="contact-whatsapp"
        >
          Chat on WhatsApp →
        </a>

        <a href="tel:+27782285779" className="contact-phone">
          Call +27 78 228 5779
        </a>
      </div>
    </div>
  </div>
</section>

      {/* Contact */}
      <footer className="footer" id="contact">
        <div className="container footer-grid">
          <div>
            <div className="logo">
  <img
    src={bogodiLogo}
    alt="Bogodi Paint & Tiling Projects"
  />
</div>

            <p>
              Professional construction and property improvement services
              across Johannesburg & Pretoria.
            </p>
          </div>

          <div>
  <h4>Services</h4>
  <p>Painting</p>
  <p>Tiling</p>
  <p>Renovations</p>
  <p>Building</p>
  <p>Plastering</p>
  <p>Plumbing</p>
</div>

          <div>
            <h4>Contact</h4>
            <a href="tel:+27782285779">+27 78 228 5779</a>
            <p>Johannesburg & Pretoria</p>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook: Bogodi p&tProjects
            </a>
          </div>
        </div>

        <div className="copyright">
          © {new Date().getFullYear()} Bogodi Paint & Tiling Projects. All
          rights reserved.
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
<a
  href="https://wa.me/27782285779"
  target="_blank"
  rel="noreferrer"
  className="whatsapp-float"
  aria-label="Chat with Bogodi Paint & Tiling Projects on WhatsApp"
>
  <svg
    viewBox="0 0 32 32"
    width="30"
    height="30"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M16.04 2.003C8.31 2.003 2.02 8.29 2.02 16.02c0 2.47.65 4.79 1.79 6.8L2 30l7.38-1.77a13.96 13.96 0 0 0 6.66 1.69h.01c7.72 0 14-6.29 14-14.01 0-3.74-1.46-7.26-4.1-9.9a13.93 13.93 0 0 0-9.91-4.01zm0 25.55h-.01a11.54 11.54 0 0 1-5.88-1.61l-.42-.25-4.38 1.05 1.07-4.27-.27-.44a11.55 11.55 0 0 1-1.77-6.01c0-6.38 5.2-11.57 11.59-11.57 3.09 0 5.99 1.2 8.17 3.39a11.5 11.5 0 0 1 3.39 8.19c0 6.38-5.19 11.52-11.49 11.52zm6.34-8.65c-.35-.18-2.06-1.02-2.38-1.14-.32-.12-.55-.18-.78.18-.23.35-.9 1.14-1.1 1.37-.2.23-.41.26-.76.09-.35-.18-1.47-.54-2.8-1.73-1.03-.92-1.73-2.06-1.93-2.41-.2-.35-.02-.54.15-.72.16-.16.35-.41.53-.61.18-.2.23-.35.35-.58.12-.23.06-.44-.03-.61-.09-.18-.78-1.88-1.07-2.57-.28-.67-.57-.58-.78-.59h-.66c-.23 0-.61.09-.93.44-.32.35-1.22 1.19-1.22 2.91s1.25 3.37 1.42 3.6c.18.23 2.45 3.74 5.94 5.25.83.36 1.48.58 1.98.74.83.26 1.59.22 2.19.13.67-.1 2.06-.84 2.35-1.65.29-.81.29-1.5.2-1.65-.08-.15-.32-.24-.67-.41z" />
  </svg>
</a>

{selectedImage && (
  <div
    className="lightbox"
    onClick={() => setSelectedImage(null)}
  >
    <button
      className="lightbox-close"
      onClick={() => setSelectedImage(null)}
      aria-label="Close image"
    >
      ×
    </button>

    <img
      src={selectedImage}
      alt="Bogodi project"
      onClick={(e) => e.stopPropagation()}
    />
  </div>
)}
    </div>
  );
}

function Service({ number, title, text }) {
  return (
    <div className="service-card">
      <span className="service-number">{number}</span>
      <h3>{title}</h3>
      <p>{text}</p>
      <span className="arrow">↗</span>
    </div>
  );
}

export default App;