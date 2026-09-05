import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const WHY_JOIN = [
  {
    title: "Community",
    text: "Placeholder benefit point 1 — add your benefit text here.",
  },
  {
    title: "Mentorship",
    text: "Placeholder benefit point 2 — add your benefit text here.",
  },
  {
    title: "Opportunities",
    text: "Placeholder benefit point 3 — add your benefit text here.",
  },
  {
    title: "Belonging",
    text: "Placeholder benefit point 4 — add your benefit text here.",
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
              BSCS is a student community built to help Black students in
              computer science connect, grow, and thrive at the University of
              Windsor.
            </p>
            <div
              className="membership-hero__visual"
              aria-hidden="true"
            />
          </div>
        </section>

        <section className="membership-section" aria-labelledby="why-join-heading">
          <div className="section-heading">
            <p className="eyebrow">Why Join</p>
            <h2 id="why-join-heading">A space built for your growth</h2>
          </div>

          <div className="membership-grid">
            {WHY_JOIN.map((item) => (
              <article className="membership-card" key={item.title}>
                <div className="membership-card__image" aria-hidden="true">
                  <span>Image placeholder</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="membership-section" aria-labelledby="how-to-join-heading">
          <div className="section-heading">
            <p className="eyebrow">How to Join</p>
            <h2 id="how-to-join-heading">Four easy steps</h2>
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
                className="step-action primary-btn"
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
                className="step-action secondary-btn"
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
                    className="step-action secondary-btn social-action"
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
              <span className="step-action secondary-btn">Next steps</span>
            </li>
          </ol>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default BecomeMember;
