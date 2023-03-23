import React from "react";
import HeroCarousel from "../components/Hero/herocarousel";
import QuoteSection from "../components/QuoteSection";
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
