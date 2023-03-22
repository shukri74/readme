// insert our own components in here
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

function App() {


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
  
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

