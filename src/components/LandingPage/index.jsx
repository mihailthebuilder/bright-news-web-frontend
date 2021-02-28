import "./LandingPage.scss";

const LandingPage = ({ children }) => {
  return (
    <section className="landing-section">
      <h3 className="instructions">
        Type the link for a news site to calculate its positivity score.
      </h3>
      {children}
    </section>
  );
};

export default LandingPage;
