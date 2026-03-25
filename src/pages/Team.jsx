import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Team() {
  const members = [
    { role: "President", name: "Name here" },
    { role: "Vice President", name: "Name here" },
    { role: "Events Lead", name: "Name here" },
    { role: "Outreach Lead", name: "Name here" },
  ];

  return (
    <div className="page">
      <Navbar />

      <main className="team-page">
        <section className="team-hero">
          <p className="eyebrow">Team</p>
          <h1>Meet the Team</h1>
          <p className="team-hero-text">
            The students working behind the scenes to build and grow BSCS.
          </p>
        </section>

        <section className="team-section">
          <div className="team-members-grid">
            {members.map((member) => (
              <article className="team-member-card" key={member.role}>
                <div className="team-member-photo">Photo</div>
                <div className="team-member-info">
                  <h2>{member.role}</h2>
                  <p>{member.name}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Team;
