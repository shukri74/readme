import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Book from "../Book";

const BookGallery = () => {
  const [bookState, setBookState] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!bookState) {
      return;
    }

    API.getBooks()
      .then((res) => {
        if (res.data.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        setBookState(res.data.entries);
      })
      .catch((err) => setError(err));
  }, []);

  const bookList = bookState.map((book) => <Book {...book} key={book.local_id} />);

    return (
        <div className="container">
          <div className="columns is-multiline">
            {bookList}
          </div>
        </div>
    );
};


export default BookGallery;


