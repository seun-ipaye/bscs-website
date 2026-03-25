import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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

        <div className="content-grid">
          <div className="content-block large-image">
            <span>Image placeholder</span>
          </div>

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
      </main>

      <Footer />
    </div>
  );
}

export default About;
