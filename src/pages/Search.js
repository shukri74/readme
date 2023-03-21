import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../utils/API";
import Container from "../components/Container";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";

function Search() {
  const { query } = useParams();
  const [bookData, setBookData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!query) {
      return;
    }

    API.searchBook(query)
      .then((res) => {
        if (res.data.docs.length === 0) {
          throw new Error("No results found.");
        }

        const book = res.data.docs[0];
        const title = book.title ?? "";
        const author = book.author_name?.[0] ?? "";
        const publishedDate = book.first_publish_year ?? "";
        const publisher = book.publisher?.[0] ?? "";
        const imageUrl = `https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-M.jpg`;

        setBookData({ title, author, publishedDate, publisher, imageUrl });
      })
      .catch((err) => setError("Book not found! Try a different one."));
  }, [query]);

  return (
    <div>
      <Container style={{ minHeight: "100vh" }}>
        {error ? (
          <Alert message={error} />
        ) : bookData ? (
          <SearchResults {...bookData} />
        ) : (
          <div>Loading...</div>
        )}
      </Container>
    </div>
  );
}

export default Search;
