import "./LandingPage.scss";

import { ReactNode } from "react";

const LandingPage = ({ children }: { children: ReactNode }) => {
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
