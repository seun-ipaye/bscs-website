import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function WalkSafeSupport() {
  return (
    <div className="page">
      <Navbar />

      <main className="subpage">
        <div className="page-header">
          <p className="eyebrow">WalkSafe</p>
          <h1>WalkSafe Support</h1>
        </div>

        <div className="legal-content">
          <p>
            Need help with the WalkSafe app, or have a question about a walk
            request? Contact us at{" "}
            <a href="mailto:bscs@uwindsor.ca">bscs@uwindsor.ca</a> and
            we&apos;ll get back to you.
          </p>

          <p>
            For urgent safety concerns during an active walk, use the
            &quot;Call the WalkSafe extension&quot; button in the app, or
            dial (519) 253-3000 ext. 3504 directly.
          </p>

          <p>
            For questions about your personal data, or to request removal
            of your information, see our{" "}
            <Link to="/walksafe-privacy">Privacy Policy</Link>.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default WalkSafeSupport;
