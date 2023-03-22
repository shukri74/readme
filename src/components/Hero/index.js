import React, { useState, useEffect } from "react";
import "./style.css";

function Hero(props) {
  const [showFirstText, setShowFirstText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstText((prev) => !prev);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero is-transparent is-fullheight-with-navbar text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-two-thirds">
              <div className={showFirstText ? "typed-text" : "typed-text hidden"}>
                <h1 className="title">
                  There have been over 130,000,000 books published since the invention of printing
                </h1>
                <h2 className="subtitle">
                  Find one for you 📖
                </h2>
              </div>
              <div className={!showFirstText ? "typed-text" : "typed-text hidden"}>
                <h1 className="title">
                  Explore millions of books and find your next adventure
                </h1>
              </div>
              <div className="field">
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




export default Hero;