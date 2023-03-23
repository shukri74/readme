import './app.css';
import About from './pages/About';
import Search from './pages/Search';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactUs from './components/Contact';

function App() {


  return (
     <Router>
      <div className="App">
        <Navbar />
          <Routes>
            
            <Route path="/" element={<About/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/search" element={<Search/>} />
            <Route path="/contact" element={<ContactUs/>} />
          </Routes>
  
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

