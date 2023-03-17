// insert our own components in here 
import axios from 'axios';
import { useState } from 'react';
import './app.css';
import 'bulma/css/bulma.min.css';
import Navbar from './navbar';



function App() {
  return (
    <div className="App">
      <Navbar />
     {/* The rest of your app goes here */}
    </div>
  );
}


export default App;
