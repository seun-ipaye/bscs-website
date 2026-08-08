import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TEAM_MEMBERS = [
  { role: "Co-President", name: "Ewaoluwa Olakunle" },
  { role: "Co-President", name: "Seun Samuel-Ipaye" },
  { role: "Vice President", name: "Sura Gaafar" },
  { role: "Events Lead", name: "Adedeji Adeboyejo" },
  { role: "Head of Technology", name: "Manzi Munyambo" },
  { role: "Treasurer", name: "Samuel Obawole" },
  { role: "Outreach Lead", name: "Nifemi Koleosho" },
  { role: "Strategy Lead", name: "Edima Essien" },
  { role: "Secretary", name: "Iyanuoluwa Adegboyega" },
  { role: "Head of Marketing and Communication", name: "Esaaba" },
];

function About() {
  return (
    <div className="page">
      <Navbar />

      <main className="subpage">
        <div className="page-header">
          <p className="eyebrow">About</p>
          <h1>Who We Are</h1>
          <p>
            BSCS is a student community dedicated to supporting Black students
            in computer science and related fields at the University of Windsor.
          </p>
        </div>

        <div className="about-hero">
          <img
            src="/events/github/IMG_2132.JPG"
            alt="A BSCS member helping another student during a GitHub workshop"
          />
          <div className="about-hero-card">
            <h2>
              A community built <em>by</em> students, <em>for</em> students
              who look like us.
            </h2>
            <p>
              BSCS exists because representation shouldn&apos;t be an
              afterthought. We&apos;re a student-led group creating space for
              Black students in computer science to learn, connect, and grow
              together at the University of Windsor.
            </p>
          </div>
        </div>

        <div className="content-grid">
          <div className="content-block">
            <h2>Our Mission</h2>
            <p>
              We aim to create a strong, welcoming space where students can
              connect, grow professionally, and support one another throughout
              their academic journey.
            </p>
          </div>

          <div className="content-block">
            <h2>What We Value</h2>
            <p>
              Community, representation, excellence, mentorship, and creating
              opportunities in tech for current and future students.
            </p>
          </div>

          <div className="content-block">
            <h2>Why BSCS Matters</h2>
            <p>
              Clubs like BSCS help students build confidence, network with
              others, and feel like they truly belong in computer science.
            </p>
          </div>
        </div>

        <div className="page-header team-header">
          <p className="eyebrow">Team</p>
          <h1>Founding members</h1>
          <p>
            The students working behind the scenes to build and grow BSCS.
          </p>
        </div>

        <div className="team-members-grid">
          {TEAM_MEMBERS.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

function TeamCard({ member }) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  const photoPath = member.photo || `/team/${member.name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')}.jpg`;

  return (
    <article className="team-card">
      <div className="team-photo">
        <img
          src={photoPath}
          alt={member.name}
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
          style={{ display: errored ? 'none' : 'block' }}
        />
        {!loaded && !errored && <span className="team-photo__placeholder">Photo</span>}
      </div>
      <h2>{member.role}</h2>
      <p>{member.name}</p>
    </article>
  );
}

export default About;
