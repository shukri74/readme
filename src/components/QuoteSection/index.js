import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import "./style.css";



function Quotes() {

  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  
  const [error, setError] = useState("");
  
  useEffect(() => {
    if (!quote) {
      return;
    }
  
  API.getQuote()
  .then(res => {
    if (res.data.length === 0) {
      throw new Error("No results found.");
    }
    if (res.data.status === "error") {
      throw new Error(res.data.message);
    }
    console.log(res.data.content);
    setQuote(res.data.content);
    setAuthor(res.data.author);
  })
  .catch(err => setError(err));
  }, []);


  return (
    <section className="hero is-warning is-medium">
        <div className="hero-body">
            <div className="container">
                <div className="content has-text-centered">
                    {quote && <p style={{fontSize: "1.5rem", fontWeight: "bold"}}>{quote}</p>}
                    {author && <p style={{fontSize: "1rem",fontWeight: "bold"}} >by {author}</p>}
                    <button className="button is-warning" onClick={getQuote}>Inspirational quotes</button>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Quotes;