import React from "react";
import "./style.css";

function Hero(props) {
  return (
    <div className="hero is-transparent is-fullheight-with-navbar text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      <div className="hero-body">
        <div className="container">
        <div className="columns is-centered">
            <div className="column is-two-thirds">
          <h1 className="title">
            There have been over 130,000,000 books published since the invention of printing
          </h1>
          <h2 className="subtitle">
            Find the right book for you:
          </h2>
          {/* {props.children} */}
          <div className="field">
            <div className="control is-large">
              <input className="input is-primary is-rounded" type="text" placeholder="Search for a book" style={{width: '450px'}}/>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  )};


 
export default Hero;
