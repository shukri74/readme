
import axios from 'axios';
import { useState } from 'react';
import './app.css';
import 'bulma/css/bulma.min.css';
function App() {
  
    const [quote, setQuote] = useState ("")
      const getQuote = () => {
        axios.get("https://api.quotable.io/random").then(Response =>{
          setQuote(Response.data.content)

        }).catch (Error =>{
          

        })

        


      }
      return (
      <div className="app">
        {quote && <p>{quote}</p>}
        <button onClick={getQuote}>quote</button>

    </div>
      );
}

export default App;
