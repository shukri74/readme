import React, { useState } from 'react';
import ContactUs from './components/Contact';
import './app.css';
import About from './pages/About';
import Search from './pages/Search';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReadingList from './components/ReadingList';

function App() {
  const [savedBooks, setSavedBooks] = useState([]);

  const handleSave = (book) => {
    setSavedBooks([...savedBooks, book]);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<Search onSave={handleSave} />} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route
            path="/reading-list"
            element={<ReadingList savedBooks={savedBooks} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
