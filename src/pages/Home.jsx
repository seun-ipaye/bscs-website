function Home() {
  const styles = {
    page: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      fontFamily: "system-ui, sans-serif",
    },
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem 2rem",
      borderBottom: "1px solid #eaeaea",
    },
    logo: {
      height: "32px",
    },
    navLinks: {
      display: "flex",
      gap: "1.5rem",
    },
    link: {
      textDecoration: "none",
      color: "#111",
      fontWeight: 500,
      cursor: "pointer",
    },
    footer: {
      marginTop: "auto",
      padding: "1.5rem",
      textAlign: "center",
      borderTop: "1px solid #eaeaea",
      fontSize: "0.9rem",
      color: "#555",
    },
  };

  return (
    <div style={styles.page}>
      <nav style={styles.navbar}>
        <img src="/removedbg_log.png" alt="BSCS Logo" style={styles.logo} />

        <div style={styles.navLinks}>
          <span style={styles.link}>About</span>
          <span style={styles.link}>Events</span>
          <span style={styles.link}>Team</span>
        </div>
      </nav>

      <footer style={styles.footer}>© 2026 BSCS - University of Windsor</footer>
    </div>
  );
}

export default Home;
