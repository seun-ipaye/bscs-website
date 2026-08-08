import "./UpcomingEvents.css";

//Update this regularly with new events. Format: Year-Month-Day, title, location, signupUrl (if we have one)
export const EVENTS = [
  { date: "2026-09-10", 
    title: "Back To School", 
    location: "University of Windsor",
    signupUrl: null,
  },
  
];

// This component displays the next 3 upcoming events in a sidebar on the Events page
export default function UpcomingEvents() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcoming = EVENTS
    .map(e => {
        const [year, month, day] = e.date.split("-").map(Number);
        return { ...e, dateObj: new Date(year, month - 1, day) };
        })
    .filter(e => e.dateObj >= today)
    .sort((a, b) => a.dateObj - b.dateObj);

    

    // Only show the next 3 upcoming events if we have any
  return (
    <div className="upcoming-events">
      <h3 className="upcoming-events__label">UPCOMING EVENTS</h3>

      {upcoming.length === 0 ? (
        <p className="upcoming-events__empty">No upcoming events.</p>
      ) : (
        <div className="upcoming-events__list">
          {upcoming.map((e, i) => {
            const d = e.dateObj;
            const month = d.toLocaleString("default", { month: "short" }).toUpperCase();
            const day = d.getDate();
            return (
              <div key={i} className="upcoming-events__item">
                <div className="upcoming-events__badge">
                  <div className="upcoming-events__month">{month}</div>
                  <div className="upcoming-events__day">{day}</div>
                </div>
                <div>
                  <div className="upcoming-events__title">{e.title}</div>
                  <div className="upcoming-events__location">{e.location}</div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

