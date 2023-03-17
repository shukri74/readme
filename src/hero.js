import React from "react";

const Hero = () => {
  return (
    <section className="hero is-primary is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-two-thirds">
              <h1 className="title">
                {/*Insert your hero title here*/}
                ReadMe
              </h1>
              <h2 className="subtitle">
                {/*Insert your hero subtitle here*/}
                Discover books based on your preferences
              </h2>
              <div className="field">
                <div className="control is-large">
                  <input className="input is-primary is-rounded" type="text" placeholder="Search for a book"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
