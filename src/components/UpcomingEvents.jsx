import "./UpcomingEvents.css";

// For single-day events: just set date, leave endDate null
// For multi-day events: set both date and endDate
// signupUrl: add when available, null if not yet
export const EVENTS = [
  { 
    date: "2026-09-10", 
    endDate: "2026-09-11",
    title: "Fall Welcome Week Meetup", 
    location: "University of Windsor",
    signupUrl: null,
  },
  { 
    date: "2026-09-13", 
    endDate: "2026-10-19",
    title: "BSCS 101: TBD",
    location: "Unibersity of Windsor",
    signupUrl: null,
  },
  { 
    date: "2026-09-20", 
    endDate: "2026-09-26",
    title: "Drop-in Hangout",
    location: "University of Windsor",
    signupUrl: null,
  },
  { 
    date: "2026-09-27", 
    endDate: "2026-10-03",
    title: "Trivia night",
    location: "University of Windsor",
    signupUrl: null,
  },
];

function parseDate(str) {
  const [year, month, day] = str.split("-").map(Number);
  return new Date(year, month - 1, day);
}

export default function UpcomingEvents() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcoming = EVENTS
    .map(e => ({
      ...e,
      dateObj: parseDate(e.date),
      endDateObj: e.endDate ? parseDate(e.endDate) : parseDate(e.date),
    }))
    .filter(e => e.endDateObj >= today)
    .sort((a, b) => a.dateObj - b.dateObj)
    .slice(0, 3);

  return (
    <div className="upcoming-events">
      <h3 className="upcoming-events__label">UPCOMING EVENTS</h3>

      {upcoming.length === 0 ? (
        <p className="upcoming-events__empty">No upcoming events.</p>
      ) : (
        <div className="upcoming-events__list">
          {upcoming.map((e, i) => {
            const start = e.dateObj;
            const end = e.endDateObj;
            const startMonth = start.toLocaleString("default", { month: "short" }).toUpperCase();
            const endMonth = end.toLocaleString("default", { month: "short" }).toUpperCase();
            const startDay = start.getDate();
            const endDay = end.getDate();

            // Build badge label
            const sameDay = startDay === endDay && startMonth === endMonth;
            const sameMonth = startMonth === endMonth;
            const dayLabel = sameDay
              ? `${startDay}`
              : sameMonth
              ? `${startDay}–${endDay}`
              : `${startDay}–${endDay}`;

            return (
              <div key={i} className="upcoming-events__item">
                <div className="upcoming-events__badge">
                  <div className="upcoming-events__month">{startMonth}</div>
                  <div className="upcoming-events__day">{dayLabel}</div>
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