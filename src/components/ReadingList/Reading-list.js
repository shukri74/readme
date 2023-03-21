import React from 'react';
// import SavedBooks from './';
// import RecommendedBooks from './';
import { Container, Section } from 'react-bulma-components';
import './Reading-list.css';

function ReadingList() {
  return (
    <Section>
      <Container>
        <h2 className="title has-text-centered mb-4">My Reading List</h2>
        <div className="columns">
          <div className="column">
            {/* SavedBooks component is where the saved books will be stored. */}
            {/* <SavedBooks /> */}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default ReadingList;
