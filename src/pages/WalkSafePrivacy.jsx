import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function WalkSafePrivacy() {
  return (
    <div className="page">
      <Navbar />

      <main className="subpage">
        <div className="page-header">
          <p className="eyebrow">WalkSafe</p>
          <h1>WalkSafe Privacy Policy</h1>
          <p>
            <em>Last updated: August 29, 2026</em>
          </p>
        </div>

        <div className="legal-content">
          <p>
            WalkSafe is a safety-escort app operated by BSCS (Black Students
            in Computer Science) at the University of Windsor (&quot;we&quot;,
            &quot;us&quot;). This policy explains what information WalkSafe
            collects, how it&apos;s used, and who can see it.
          </p>

          <h2>Information We Collect</h2>

          <p>
            <strong>If you request a walk (student):</strong>
          </p>
          <ul>
            <li>
              <strong>Location</strong> — a one-time GPS reading of your
              pickup spot when you submit a request, plus a text label you
              type for both pickup and destination. We do not track your
              location continuously or after your walk ends.
            </li>
            <li>
              <strong>Phone number</strong> — so a volunteer can reach you.
              Visible only to the volunteer assigned to your walk, and only
              while your walk is in progress — it&apos;s hidden again once
              the walk is completed.
            </li>
            <li>
              <strong>Number of people and any notes</strong> you add to the
              request.
            </li>
            <li>
              <strong>Push notification token</strong> — a device-level
              identifier used to notify you when a volunteer accepts or
              completes your walk. It isn&apos;t linked to your name or any
              other personal account.
            </li>
          </ul>

          <p>
            Student requests are tied to an anonymous device session, not a
            named account — we don&apos;t ask for your name, student ID, or
            email to request a walk.
          </p>

          <p>
            <strong>If you&apos;re a volunteer or coordinator (staff):</strong>
          </p>
          <ul>
            <li>
              <strong>Name, phone number, and email</strong> — provided when
              your account is created by a coordinator.
            </li>
            <li>
              <strong>Availability status</strong> and{" "}
              <strong>push notification token</strong>, for coordinating and
              notifying you about walk requests.
            </li>
          </ul>

          <h2>How We Use This Information</h2>
          <ul>
            <li>
              To match students with an available volunteer and coordinate
              the walk.
            </li>
            <li>
              To notify you of relevant updates (a volunteer accepted your
              request, your walk is complete, or no volunteer was available
              in time).
            </li>
            <li>
              To let coordinators manage the volunteer roster and see a
              history of completed walks.
            </li>
          </ul>

          <p>
            We do not sell or share this information with third parties, and
            we do not use it for advertising.
          </p>

          <h2>Who Can See What</h2>
          <ul>
            <li>
              A student&apos;s phone number is visible only to the volunteer
              currently assigned to their walk, and only while that walk is
              active — this is enforced at the database level, not just
              hidden in the app&apos;s interface.
            </li>
            <li>
              Coordinators can see all walk requests (for oversight and
              safety) and the volunteer roster.
            </li>
            <li>
              Other students and other volunteers cannot see a student&apos;s
              phone number or personal details.
            </li>
          </ul>

          <h2>Data Retention</h2>
          <p>
            We do not delete completed, cancelled, or timed-out walk
            requests, or deactivated staff accounts — we keep them so that
            safety and usage records remain available for the
            organization&apos;s own review. Deactivating a staff account
            removes their access; it does not delete their name from past
            walk records.
          </p>

          <h2>The Panic / Emergency Button</h2>
          <p>
            WalkSafe includes a button that calls [[ CAMPUS SECURITY /
            WALKSAFE EXTENSION PHONE NUMBER — GET FROM JARED ]] directly.
            Using it places a normal phone call — WalkSafe does not record or
            transmit anything beyond initiating that call.
          </p>

          <h2>Location Permission</h2>
          <p>
            WalkSafe asks for your device&apos;s location only when you
            submit a walk request, to share your pickup spot with the
            volunteer who accepts it. You can decline this permission, but a
            request cannot be submitted without it.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy or your data can be sent to{" "}
            <a href="mailto:bscs@uwindsor.ca">bscs@uwindsor.ca</a>.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default WalkSafePrivacy;
