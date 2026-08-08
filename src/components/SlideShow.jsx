import { useState, useEffect } from "react";
import "./SlideShow.css";

const slides = [
    /* Should be simple to add events to the slide show. Just follow the format image:"<image_path>", title: "<title>", date: "<date>", description: ["<description>"] } */

    { image: "/hero/hero01.JPG", title: "Kickoff Event", date: "October 21, 2025", description: [
        "Every great journey begins with a strong first step — and our BSCS Kickoff Meeting was exactly that. ✨",
        "Thank you to everyone who showed up, supported, and contributed in any way. Your presence matters, your ideas matter, and together we're building something meaningful.",
        "As we grow, we're opening up executive roles for those who want to lead, create, and shape the vision of BSCS."
    ]},

    { image: "/events/bowling/bowling01.JPG", title: "Bowling Night", date: "November 19, 2025", description: ["We ended the semester with our BSCS x NSBE bowling night and it was a successful one. Thanks to everyone who joined!", 
        "Follow us for more exciting events happening next year 🥰"
    ]},

    { image: "/events/github/github01.JPG", title: "Github Workshop", date: "January 27, 2026", description: ["We hosted our GitHub Workshop: Coder to Contributor, and it was a massive success! A huge shoutout to our incredible mentors who spent the afternoon floating around the room, troubleshooting bugs, and helping everyone get their first pull requests through.",
        "We’re all about students helping students and seeing that collaboration in action was the highlight of the day. 🧱✊🏾"
        ]},

    { image: "/hero/movienight.jpg", title: "Movie Night" , date: "February 11, 2026", description: ["We had a blast at our BSCS Movie Night! 🎬🍿 Thanks to everyone who joined us for an evening of fun, laughter, and great company."]},

    { image: "/hero/careersesh01.jpg", title: "Career Sesh", date: "March 28, 2026", description: ["What an incredible day at the BSCS Career Event! 🌟 Grateful to our inspiring speakers, supportive sponsors, and amazing team for making this possible.",
        "The insights shared and connections made are stepping stones for all of us in tech. 💻✨"
    ]},

    { image: "/hero/potluck.jpg", title: "Potluck", date: "April 21, 2026", description: ["We took over the BSI Lounge with music, games, and food to end the semester.", 
        "Thanks to everyone who came out to celebrate with us!"
    ]},

];

export default function EventSlideshow() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = (index) => {
    setFading(true);
    setTimeout(() => {
      setCurrent((index + slides.length) % slides.length);
      setFading(false);
    }, 300);
  };

  useEffect(() => {
    const timer = setTimeout(() => goTo(current + 1), 5 * 60 * 1000);
    return () => clearTimeout(timer);
  }, [current]);

  const slide = slides[current];

  return (
    <div className="slideshow">
      <h3 className="slideshow__label">PAST EVENTS</h3>

      <div className={`slideshow__card ${fading ? "slideshow__card--fading" : ""}`}>

        {/* Photo */}
        <div className="slideshow__photo">
          {slide.image
            ? <img src={slide.image} alt={slide.title} />
            : <span className="slideshow__placeholder">Photo TBA</span>
          }
        </div>

        {/* Description */}
        <div className="slideshow__info">
          <div>
            <h3 className="slideshow__title">{slide.title}</h3>
            <p className="slideshow__date">{slide.date}</p>
            <div className="slideshow__description">
                {Array.isArray(slide.description)
                ? slide.description.map((para, i) => <p key={i}>{para}</p>)
                : <p>{slide.description}</p>
                }
            </div>
          </div>

         <div className="slideshow__footer">
            <button className="slideshow__btn" onClick={() => goTo(current - 1)}>
                ← Previous Event
            </button>
        <span className="slideshow__counter">{current + 1} / {slides.length}</span>
            <button className="slideshow__btn" onClick={() => goTo(current + 1)}>
                 Next Event →
            </button>
        </div>

        </div>

      </div>
    </div>
  );
}
