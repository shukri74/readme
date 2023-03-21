import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import "./style.css";

function Quotes() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
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
          setQuote(res.data.content);
          setAuthor(res.data.author);
        })
        .catch(err => setError(err.message));
    }, 5000);

    return () => clearTimeout(timer);
  }, [quote]);

  const truncate = (str, maxLen) => {
    if (str.length <= maxLen) return str;
    return str.slice(0, maxLen) + "...";
  };

  const handleReadMore = () => {
    setQuote(quote + " " + author); // append the author to the end of the quote
    setAuthor(""); // clear the author state
  };

  return (
    <div className="section">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-half">
            <div className="box quote-box">
              {error && <p className="has-text-danger">{error}</p>}
              {quote && (
                <>
                  <p className="title is-4 has-text-black">
                    {truncate(quote, 200)}
                    {quote.length > 200 && (
                      <button className="button is-text read-more-btn" onClick={handleReadMore}>
                        Read More
                      </button>
                    )}
                  </p>
                  {author && (
                    <p className="subtitle is-6 has-text-black">
                      - {author}
                    </p>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quotes;
