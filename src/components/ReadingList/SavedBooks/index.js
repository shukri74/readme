import React, { useState } from "react";
// import SearchResults from "../../SearchResults";

function SavedBooks(props) {
  const [savedBooks, setSavedBooks] = useState([]);

  const handleSave = (book) => {
    setSavedBooks([...savedBooks, book]);
  };

  return (
    <div>
      {savedBooks.map((book, index) => (
        <div key={index}>
          <p>Title: {book.title}</p>
          <p>Publish Date: {book.publishDate}</p>
        </div>
      ))}
    </div>
  );
}

export default SavedBooks;
