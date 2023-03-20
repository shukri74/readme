import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AboutUsHero from "./abt";
import QuoteHero from "./quoting";

function Hero(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <div>
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
      </div>
      <div>
        <AboutUsHero />
      </div>
      <div>
        <QuoteHero />
      </div>
    </Slider>
  );
}

export default Hero;
