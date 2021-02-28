import "./AboutPage.scss";

const AboutPage = () => {
  return (
    <section className="about-section">
      <h1>About</h1>
      <div className="about-text">
        <p>
          Hi there, thanks for checking my website! My name is Mihail and I'm a
          software developer who loves working on the weird and wonderful.
        </p>
        <p>
          In December 2020, I decided to stop following current affairs news in
          order to be more efficient with my time. I was surprised to find that
          my mood improved tremendously afterwards - I thought this was an even
          greater benefit than the productivity gains! Everyone knows that media
          is biased towards towards negative content; what I didn't realise was
          how much it actually affected on my mental health.
        </p>
        <p>
          I wanted to share this experience with others. The problem is that
          it's unrealistic to ask people to suddenly pause all of their news
          intake. So I put on my engineering hat and thought about how we've
          managed to reduce the consumption of junk food. The answer? Better
          data about its effect on our health. And that's how I came up with the
          idea behind this project :)
        </p>
        <p>
          I've put a lot of work in developing the scoring algorithm. When you
          ask it to evaluate a site, the algorithm goes through all the pieces
          of text found on the page and applies several natural language
          processing techniques. Multiple positivity values are generated and
          aggregated into an overall score for the website. This score is added
          to the database and standardised against past scores for the input
          site link, as well as the scores for all the other websites. The
          scores you see on the website represent the final results of this
          assessment.
        </p>
        <p>
          Like the idea? Want to talk more about it? Just want to say that I'm
          an amazing person? I'm available on{" "}
          <a
            href="https://www.linkedin.com/in/mihailmarian/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          for all of the above - especially the last one ;)
        </p>
      </div>
    </section>
  );
};

export default AboutPage;
