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
        {bookList.map((book) => (
          <div key={book.props.local_id} className="column is-one-third">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={book.props.cover_edition_key} alt={book.props.title} />
                </figure>
              </div>
              <div className="card-content">
                <p className="title is-5">{book.props.title}</p>
                <p className="subtitle is-6">{book.props.author_name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookGallery;
