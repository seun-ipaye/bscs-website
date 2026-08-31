import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UpcomingEvents from "../components/UpcomingEvents";
import SlideShow from "../components/SlideShow";
import { EVENTS } from "../components/UpcomingEvents";

const LINKEDIN_URL = "https://www.linkedin.com/company/uwindsor-bscs/posts/?feedView=all";

function Events() {
  return (
    <div className="page">
      <Navbar />

      <main className="subpage">
        <div className="page-header-row">
          <div className="page-header">
            <p className="eyebrow">Events</p>
            <h1>What We Host</h1>
            <p>
              From workshops to socials, BSCS creates spaces for students to
              learn, connect, and grow.
            </p>
            
             <a href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-btn linkedin-btn"
            >
              Follow us on LinkedIn for event updates
            </a>
          </div>
          <UpcomingEvents />
        </div>

        {(() => {
          const today = new Date();
          today.setHours(0, 0, 0, 0);

          const signable = EVENTS
            .map(e => {
              const [year, month, day] = e.date.split("-").map(Number);
              const [ey, em, ed] = (e.endDate ?? e.date).split("-").map(Number);
              return {
                ...e,
                dateObj: new Date(year, month - 1, day),
                endDateObj: new Date(ey, em - 1, ed),
              };
            })
            .filter(e => e.endDateObj >= today && e.signupUrl)
            .sort((a, b) => a.dateObj - b.dateObj)[0];

          return (
            <div className="next-event-card">
              {signable ? (
                <>
                  <div>
                    <p className="eyebrow">Next Event</p>
                    <h2>{signable.title}</h2>
                    <p className="next-event__meta">{signable.date} · {signable.location}</p>
                  </div>
                  <a href={signable.signupUrl} target="_blank" rel="noopener noreferrer" className="primary-btn">
                    Sign Up
                  </a>
                </>
              ) : (
                <p className="next-event__meta" style={{ margin: "0 auto" }}>No events to sign up for</p>
              )}
            </div>
          );
        })()}

        <SlideShow />
      </main>

      <Footer />
    </div>
  );
}

export default Events;