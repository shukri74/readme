import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import "./style.css";



function Quotes() {

  const [quote, setQuote] = useState("The purpose of learning is growth, and our minds, unlike our bodies, can continue growing as we continue to live.");
  const [author, setAuthor] = useState("Mortimer J. Adler");
  
  const [error, setError] = useState("");


    useEffect(() => {
      const timer = setTimeout(() => {
        API.getQuote()
        .then(res => {
          if (res.data.length === 0) {
            throw new Error("No results found.");
          }
          if (res.data.status === "error") {
            throw new Error(res.data.message);
          }
          // console.log(res.data.content);
          setQuote(res.data.content);
          setAuthor(res.data.author);
        })
      }, 5000);
      return () => clearTimeout(timer);
    }, [quote]);


    return (
      <div className="quote-container">
        <div className="quote-content has-text-centered">
          {quote && <p style={{fontSize: "1.5rem", fontWeight: "bold"}}>{quote}</p>}
          {author && <p style={{fontSize: "1rem",fontWeight: "bold"}} >by {author}</p>}
        </div>
      </div>
    );
}

export default Quotes;