import React from "react";
import HeroCarousel from "../components/Hero/herocarousel";
// import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import QuoteSection from "../components/QuoteSection";
// import API from "../utils/API";
import BookGallery from "../components/BookGallery";



function About() {
  return (
    <div>
      <HeroCarousel/>
      <QuoteSection/>
      <BookGallery/>
    </div>
  );
}

export default About;
