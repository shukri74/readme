import React from "react";
import heroImg from './assets/bookshelf-image.jpeg';
import './hero.css';

const Hero = () => {
  return (
    <section className="hero is-primary is-fullheight-with-navbar">
      <img src={heroImg} alt="Hero image" className="hero-img"/>
      <div className="hero-body is-overlay">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-two-thirds">
              <h1 className="title">
                {/*Insert your hero title here*/}
                There have been over 130,000,000 books published since the invention of printing
              </h1>
              <h2 className="subtitle">
                {/*Insert your hero subtitle here*/}
               Find the right one for you:
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

// function Hero() {
//   return (
//     <div className="hero is-fullheight">
//       <img src={heroImg} alt="Hero image of bookshelf" className="bookshelf-img"/>
//       <div className="hero-body">
//         <div className="container">
//           <h1 className="title">Welcome to ReadMe</h1>
//           <h2 className="subtitle">Search for quotes and book recommendations</h2>
//         </div>
//       </div>
//     </div>
//   );
// }

export default Hero;
