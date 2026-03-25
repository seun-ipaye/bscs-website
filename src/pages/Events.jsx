import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Events() {
  return (
    <div className="page">
      <Navbar />

      <main className="subpage">
        <div className="page-header">
          <p className="eyebrow">Events</p>
          <h1>What We Host</h1>
          <p>
            From workshops to socials, BSCS creates spaces for students to
            learn, connect, and grow.
          </p>
        </div>

        <div className="cards-grid">
          <div className="info-card">
            <h2>Workshops</h2>
            <p>
              Technical workshops, resume reviews, interview prep, and other
              career-building sessions.
            </p>
          </div>

          <div className="info-card">
            <h2>Networking</h2>
            <p>
              Opportunities to meet alumni, industry professionals, and other
              students in tech.
            </p>
          </div>

          <div className="info-card">
            <h2>Socials</h2>
            <p>
              Relaxed community events that help members make friends and build
              stronger connections.
            </p>
          </div>

          <div className="info-card">
            <h2>Community Events</h2>
            <p>
              Collaborative events with other organizations on campus and in the
              wider community.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Events;
