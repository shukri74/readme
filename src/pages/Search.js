import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";


function Search() {
  const [book, setBook] = useState("Fantastic Fables");
  const [title, setTitle] = useState("");
  const [publishDate, setPublishDate] = useState("");
  const [publishPlace, setPublishPlace] = useState("");
  const [contributor, setContributor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [language, setLanguage] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [authorImage, setAuthorImage] = useState("");

  const [error, setError] = useState("");

  useEffect(() => {
    if (!book) {
      return;
    }

    API.searchBook(book)
      .then(res => {
        if (res.data.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        console.log(res.data.docs[0].title);
        setTitle(res.data.docs[0].title);
        setPublishDate(res.data.docs[0].publish_date[0]);
        setPublishPlace(res.data.docs[0].publish_place[0]);

        setContributor(res.data.docs[0].contributor[0]);
        setPublisher(res.data.docs[0].publisher[0]);
        setLanguage(res.data.docs[0].language[0]);
        setCoverImage("https://covers.openlibrary.org/b/olid/"+res.data.docs[0].cover_edition_key+".jpg");
        setAuthorImage("https://covers.openlibrary.org/a/olid/"+res.data.docs[0].author_key[0]+".jpg");


      })
      .catch(err => setError("Book not found! Try different one."));
  }, [book]);

  const handleInputChange = event => {
    setError("");
    setBook(event.target.value);
  };

  return (
    <div>
      <Container style={{ minHeight: "100vh" }}>
        <SearchForm
          handleInputChange={handleInputChange}
          results={book}
          error = {error}
        />
        <SearchResults 
        title={title} 
        publishDate={publishDate} publishPlace={publishPlace}
        contributor={contributor} publisher={publisher} language={language}
        coverImage={coverImage} authorImage={authorImage}
        />
      </Container>
    </div>
  );
}

export default Search;
