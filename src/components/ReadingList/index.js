import React, { useEffect, useState } from 'react';
import { Container, Section } from 'react-bulma-components';
import '../ReadingList/Reading-list.css';
import Book from '../Book';

function ReadingList() {
  const [recommendedBooks, setRecommendedBooks] = useState([]);

  useEffect(() => {
    async function fetchRecommendedBooks() {
      try {
        const response = await fetch('https://openlibrary.org/subjects/love.json?limit=3');
        const data = await response.json();
        setRecommendedBooks(data.works);
      } catch (error) {
        console.error(error);
      }
    }

    fetchRecommendedBooks();
  }, []);

  return (
    <div className="outer">
    <Section>
      <Container className="inner">
        <h2 className="title has-text-centered mb-4 fontList">My Reading List</h2>
        <div className="columns">
          <div className="column">
            <h3 className="subtitle has-text-centered mb-3">Saved Books</h3>
            <div className="box readingList">
              {/* SavedBooks component is where the saved books will be stored. */}
              {/* <SavedBooks /> */}
              <p>You haven't saved any books yet.</p>
            </div>
          </div>
          <div className="column">
            <h3 className="subtitle has-text-centered mb-3 fontList">Recommended Books</h3>
            <div className="columns is-multiline readingListLine">
              {recommendedBooks.map((book) => (
                <Book
                  key={book.key}
                  title={book.title}
                  publishers={book.publishers?.[0]}
                  publish_date={book.publish_date}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
    </div>
  );
}

export default ReadingList;