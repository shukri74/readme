import React from "react";
import HeroCarousel from "../components/Hero/herocarousel";
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
      <HeroCarousel>
    
      </HeroCarousel>
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
