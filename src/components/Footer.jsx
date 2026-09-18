import bscsLogo from "../assets/BSCS-logo-trans.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <img className="logo-mark" src={bscsLogo} alt="" width={30} height={34} />
        <span>BSCS</span>
      </div>
      <p>© 2026 BSCS — University of Windsor</p>
    </footer>
  );
}

export default Footer;