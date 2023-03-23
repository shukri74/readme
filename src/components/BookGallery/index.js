import React, { useState, useEffect } from "react";
import API from "../../utils/API";

const BookGallery = () => {
  const [bookState, setBookState] = useState([]);
  const [error, setError] = useState("");

  function imageUrl(url) {
    let img = url.split("/");
    return img[2];
    
  }

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
      .catch((err) => setError(error));
  }, [bookState,error]);
  
// newlink = https://covers.openlibrary.org/b/isbn/9780385533225-S.jpg
// oldlink = "https://covers.openlibrary.org/b/olid/"+ imageUrl(book.key) +".jpg"

      const bookList = bookState.filter((book, idx) => idx < 10).map((book) =>
      <div className='column is-half' key={book.key}>
        <div className="card-image">
            <figure className="image is-1by1">
                <img src={"https://covers.openlibrary.org/b/olid/"+ imageUrl(book.key) +".jpg"} alt={book.title}/>
            </figure>
            <div className="card-content">
                <p className="title is-4"><strong>Book Title: </strong>{book.title}</p>
                <p className="subtitle is-6"><strong>Publisher: </strong>{book.publishers}</p>
              <div className="content">
                <time><strong>Published in </strong>{book.publish_date}</time>
              </div>
            </div>
        </div>
      </div>
      );
 

    return (
      <div className='backg-cont' style={{ background: 'linear-gradient(to bottom, #43ff8b, #26c4b9)' }}>
        <div className="container" style={{ textAlign: "center",backgroundColor: "#48c78e",  color: "white"}}>

          <h1 className="title is-size-3 is-centered text-cneter">You might like...</h1>
          <div className="columns is-multiline">
            {bookList}
          </div>
        </div>
        </div>
    );
};


export default BookGallery;


