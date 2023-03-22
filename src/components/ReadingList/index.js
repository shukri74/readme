import React, { useEffect, useState } from 'react';
import { Container, Section } from 'react-bulma-components';
import '../ReadingList/Reading-list.css';


function ReadingList() {
  


//   function handleSave(book) {
//     console.log(`Book ${book.title} saved!`);
//     <Book
//   title={book.title}
//   authors={book.authors}
//   description={book.description}
//   thumbnail={book.thumbnail}
//   link={book.link}
//   onSave={handleSave}
// />
//   }


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
        </div>
      </Container>
    </Section>
    </div>
  );
}

export default ReadingList;