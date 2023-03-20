import React from "react";
import Hero from "../components/Hero";
import heroImage from '../assets/hero-section.jpg';
// import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import QuoteSection from "../components/QuoteSection";
import "../pages/about.css";
// import API from "../utils/API";
import BookGallery from "../components/BookGallery";



function About() {
  return (
    <div>
      <Hero backgroundImage={heroImage}>
        <h1>There have been over 130,000,000 books published since the invention of printing 
          Find the right one for you:</h1>
      </Hero>
      <QuoteSection/>

        <Row>
          <Col> 
            <h1>You might like...</h1>
          </Col>
        </Row>
        
        <Row>
          <Col>
            <BookGallery/>
          </Col>
        </Row>
    </div>
  );
}

export default About;
