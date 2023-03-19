import axios from 'axios';
import { useState, useEffect } from 'react';
import 'bulma/css/bulma.min.css';
import '../pages/quote.css';

function Quote() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fetchQuote = () => {
    axios.get("https://api.quotable.io/random").then(response => {
      setQuote(response.data.content);
      setAuthor(response.data.author);
    }).catch(error => {
      console.log(error);
    });
  }

  useEffect(() => {
    fetchQuote();
    const interval = setInterval(() => {
      fetchQuote();
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="quote-container">
      <div className="quote-content has-text-centered">
        {quote && <p style={{fontSize: "1.5rem", fontWeight: "bold"}}>{quote}</p>}
        {author && <p style={{fontSize: "1rem",fontWeight: "bold"}} >by {author}</p>}
      </div>
    </div>
  );
}

export default Quote;
