import React from "react";

function QuoteHero() {
  return (
    <div className="hero is-fullheight is-black">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-size-1 has-text-white">
            Books are a uniquely portable magic.
          </h1>
          <br />
          <div className="columns">
            <div className="column">
              <img
                src="../../assets/book 5.png"
                alt="book cover"
              />
            </div>
            <div className="column">
              <img
                src="../../assets/book 2.png"
                alt="book cover"
              />
            </div>
            <div className="column">
              <img
                src="../../assets/book 3.png"
                alt="book cover"
              />
            </div>
            <div className="column">
              <img
                src="../../assets/book 4.png"
                alt="book cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuoteHero;
