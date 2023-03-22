// insert our own components in here 
import React, { useState } from 'react';

import './app.css';
// import 'bulma/css/bulma.min.css';
// import Contact from './pages/Contact';
import About from './pages/About';
import Search from './pages/Search';
import Navbar from './components/Navbar';
// import QuoteSection from './components/QuoteSection';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Hero from "./components/Hero";
import ReadingList from './components/ReadingList';
import ContactUs from './components/Contact';
import SearchResults from "./components/SearchResults";
import SavedBooks from "./components/ReadingList/SavedBooks";
import SearchForm from "./components/SearchForm";

function App() {
  const [savedBooks, setSavedBooks] = useState([]);

  const handleSave = (book) => {
    setSavedBooks((prevBooks) => [...prevBooks, book]);
  };

  return (
     <Router>
      <div className="App">
        <Navbar />
          <Routes>
            
            <Route path="/" element={<About/>} />
            <Route path="/about" element={<About/>} />
            {/* <Route path="/contact" element={<Contact/>} /> */}
            <Route path="/search" element={<Search/>} />
            <Route path="/reading-list" element={<ReadingList/>} />
            <Route path="/contact" element={<ContactUs/>} />
          </Routes>
          <SavedBooks books={savedBooks} />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

