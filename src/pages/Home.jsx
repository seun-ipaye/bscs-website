import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, BriefcaseBusiness, CalendarDays, Users } from "lucide-react";

function Home() {
  return (
    <div className="page home-page">
      <Navbar transparent />

      <section className="hero hero-dark">
        <div className="hero-text">
          <p className="eyebrow">University of Windsor</p>
          <h1>
            Black Students in <span>Computer Science</span> (BSCS)
          </h1>
          <p className="hero-description">
            A community focused on connection, growth, leadership, and
            professional opportunity for black students in tech.
          </p>

          <div className="hero-buttons">
            <Link to="/about" className="primary-btn">
              Learn More <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="/hero/hero01.JPG"
            alt="BSCS students at a community event"
          />
        </div>
      </section>

      <main>
        <section className="mission-section">
          <p className="eyebrow">About Us</p>
          <h2>Connection that moves with you.</h2>
          <p className="mission-statement">
            BSCS is the home for Black students in computer science at the University of Windsor.
            <br /> 
            We're here to help you find your people, build a portfolio you're proud of, and get the mentorship and 
            opportunities that turn your degree into a career in tech.
            <br />
            We bridge the balance between social and professional growth, creating a space where you can thrive and have fun.
          </p>
          <Link to="/about" className="secondary-btn">
            Learn More <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </section>

        <section className="feature-section" aria-label="What we offer">
          <div className="involved-list">
            <div className="involved-item">
              <span className="involved-icon" aria-hidden="true"><CalendarDays size={22} /></span>
              <div>
                <h3>Upskill</h3>
                <p>
                  Attend workshops, equip yourself with new skills and deepen your technical knowledge.
                  <br />
                  From resume reviews to building in the cloud, there&apos;s always
                  something happening.
                </p>
              </div>
            </div>

            <div className="involved-item">
              <span className="involved-icon" aria-hidden="true"><Users size={22} /></span>
              <div>
                <h3>
                  Connect
                </h3>
                <p>
                  Find your network of study partners, mentors, and more importantly, friends.
                </p>
              </div>
            </div>

            <div className="involved-item">
              <span className="involved-icon" aria-hidden="true"><BriefcaseBusiness size={22} /></span>
              <div>
                <h3>Gain Insights</h3>
                <p>
                  Get unfiltered truth about the tech industry from alumni and leading professionals working to open
                  doors in the modern tech industry.
                  <br />
                  Interview preparation, career guidance, networking tips and more to help you stand out in today's market. We&apos;re here to help you
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="involved-section" aria-labelledby="community-heading">
          <div className="involved-content">
            <p className="eyebrow">What are you waiting for?</p>
            <h2 id="community-heading">Become a member
            </h2>
            <p>
              Enter our world of growth, fun and opportunities and connect with a community that feels like home.
            </p>
            <Link to="/become-member" className="primary-btn">
              Become a member <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>

          <div className="involved-image">
            <img
              src="/hero/hero01.JPG"
              alt="BSCS members connecting at a community event"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
