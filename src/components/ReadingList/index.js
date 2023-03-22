import React, { useState } from 'react';
import { Container, Section } from 'react-bulma-components';
import '../ReadingList/Reading-list.css';
import SearchResults from '../SearchResults';

function ReadingList() {
  const [savedBooks, setSavedBooks] = useState([]);

  function handleSave(book) {
    setSavedBooks([...savedBooks, book]);
  }

  return (
    <div className="outer">
      <Section>
        <Container className="inner">
          <h2 className="title has-text-centered mb-4 fontList">My Reading List</h2>
          <div className="columns">
            <div className="column">
              <h3 className="subtitle has-text-centered mb-3">Saved Books</h3>
              <div className="box readingList">
                {savedBooks.length > 0 ? (
                  savedBooks.map((book, index) => (
                    <div key={index}>
                      <p>{book.title}</p>
                      <p>{book.publishDate}</p>
                    </div>
                  ))
                ) : (
                  <p>You haven't saved any books yet.</p>
                )}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

export default ReadingList;
