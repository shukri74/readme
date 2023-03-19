import axios from 'axios';
import { useState, useEffect } from 'react';
import 'bulma/css/bulma.min.css';

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
    }, 6000); // replace with the interval time you prefer in milliseconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero is-warning is-medium">
      <div className="hero-body">
        <div className="container">
          <div className="content has-text-centered">
            {quote && <p style={{fontSize: "1.5rem", fontWeight: "bold"}}>{quote}</p>}
            {author && <p style={{fontSize: "1rem",fontWeight: "bold"}} >by {author}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Quote;
