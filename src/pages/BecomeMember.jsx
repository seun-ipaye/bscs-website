import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const WHY_JOIN = [
  {
    title: "Be curious",
    text: "Placeholder benefit point",
    image: "/hero/hero01.JPG",
  },
  {
    title: "Be active",
    text: "Placeholder benefit point 2",
    image: "/hero/hero01.JPG",
  },
  {
    title: "Say yes to opportunities",
    text: "Placeholder benefit point 3",
    image: "/hero/hero01.JPG",
  },
  {
    title: "Bring a friend",
    text: "If you like what we do and want to grow our community, bring a friend with you for our next event!",
    image: "/hero/hero01.JPG",
  },
];

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/uwinbscs/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/uwindsor-bscs/" },
];

function BecomeMember() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div className="page">
      <Navbar transparent />

      <main className="subpage become-member-page">
        <section className="membership-hero">
          <div className="membership-hero__content">
            <h1>
              Join BSCS (Black Students in <span>Computer Science</span>)
            </h1>
            <p className="membership-subheading">
              BSCS is a student community and social network built to help Black students in
              computer science connect, grow, and thrive at the University of
              Windsor.
            </p>
            <img
              className="membership-hero__visual"
              src="/hero/hero01.JPG"
              alt="BSCS students together"
            />
          </div>
        </section>

        <section className="membership-section" aria-labelledby="why-join-heading">
          <div className="section-heading">
            <p className="eyebrow">Some Requirements Needed To</p>
            <h2 id="why-join-heading">Become a member:</h2>
          </div>

          <div className="membership-grid">
            {WHY_JOIN.map((item) => (
              <article className="membership-card" key={item.title}>
                <img
                  className="membership-card__image"
                  src={item.image}
                  alt={item.title}
                />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="membership-section" aria-labelledby="how-to-join-heading">
          <div className="section-heading">
            <p className="eyebrow">How to Join</p>
            <h2 id="how-to-join-heading">in 4 easy steps</h2>
          </div>

          <ol className="steps-list">
            <li>
              <div className="step-content">
                <span className="step-number">1</span>
                <div>
                  <h3>Join our Discord community</h3>
                  <p>Meet other members, stay updated, and get involved.</p>
                </div>
              </div>
              <a
                href="https://discord.gg/njSZFTrum"
                target="_blank"
                rel="noopener noreferrer"
                className="step-action primary-btn discord-action"
              >
                Join Discord
              </a>
            </li>
            <li>
              <div className="step-content">
                <span className="step-number">2</span>
                <div>
                  <h3>Complete the Member Application</h3>
                  <p>Share a little more about yourself and your goals.</p>
                </div>
              </div>
              <a
                href="https://forms.cloud.microsoft/pages/responsepage.aspx?id=szP5EmE9GUuaTWiQId6MyazztYDseWtAjmaLyxlrwFxUMkVUVFpOUTlTSUo2SkRZQ1oxQ1JYREgyNCQlQCN0PWcu&route=shorturl"
                target="_blank"
                rel="noopener noreferrer"
                className="step-action secondary-btn application-action"
              >
                Apply Now
              </a>
            </li>
            <li>
              <div className="step-content">
                <span className="step-number">3</span>
                <div>
                  <h3>Stay connected</h3>
                  <p>Follow BSCS for updates, events, and community news.</p>
                </div>
              </div>
              <div className="step-actions">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`step-action secondary-btn ${link.label.toLowerCase()}-action`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </li>
            <li>
              <div className="step-content">
                <span className="step-number">4</span>
                <div>
                  <h3>We’ll follow up with next steps</h3>
                  <p>Once submitted, we’ll reach out with the next steps.</p>
                </div>
              </div>
            </li>
          </ol>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default BecomeMember;
