// insert our own components in here 
import './app.css';
import React from 'react';
import 'bulma/css/bulma.min.css';
import Quote from './pages/quote';
import About from './pages/About';
// import Search from './pages/Search';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Hero from "./components/Hero";

function App() {
  return (
     <Router>
      <div className="App">
        <Navbar />
        {/* <Hero /> */}
       
        <Quote />
          <Routes>
            
            <Route path="/" element={<About/>} />
            {/* <Route path="/about" element={<About/>} /> */}
            {/* <Route path="/quote" element={<Quote/>} /> */}
            {/* <Route path="/search" element={<Search/>} /> */}
          </Routes>
          
       
        <Footer />
      </div>
    </Router>
  );
}

export default App;

