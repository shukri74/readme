import React, { useState, useEffect } from "react";
import "./style.css";
import AboutUsHero from "./abt";
import QuoteHero from "./quoting";

function Hero(props) {
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showQuote, setShowQuote] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowAboutUs((prev) => !prev);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowQuote((prev) => !prev);
    }, 18000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {showAboutUs && <AboutUsHero />}
      {showQuote && <QuoteHero />}
      {!showAboutUs && !showQuote && (
        <div
          className="hero is-transparent is-fullheight-with-navbar text-center"
          style={{ backgroundImage: `url(${props.backgroundImage})` }}
        >
          <div className="hero-body">
            <div className="container">
              <div className="columns is-centered">
                <div className="column is-two-thirds">
                  <div className="typed-text">
                    <h1 className="title">
                      There have been over 130,000,000 books published since
                      the invention of printing
                    </h1>
                    <h2 className="subtitle">Find one for you:</h2>
                  </div>
                  <div className="field">
                    <div className="control is-large">
                      <input
                        className="input is-primary is-rounded"
                        type="text"
                        placeholder="Search for a book"
                        style={{ width: "450px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Hero;
