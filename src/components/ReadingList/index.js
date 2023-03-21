import React from 'react';
import { Container, Section } from 'react-bulma-components';
import '../ReadingList/Reading-list.css';

function ReadingList() {
  return (
    <Section>
      <Container>
        <h2 className="title has-text-centered mb-4">My Reading List</h2>
        <div className="columns">
          <div className="column">
            <h3 className="subtitle has-text-centered mb-3">Saved Books</h3>
            <div className="box">
              {/* SavedBooks component is where the saved books will be stored. */}
              {/* <SavedBooks /> */}
              <p>You haven't saved any books yet.</p>
            </div>
          </div>
          <div className="column">
            <h3 className="subtitle has-text-centered mb-3">Recommended Books</h3>
            <div className="columns is-multiline">
              {/* RecommendedBooks component is where the recommended books will be displayed. */}
              {/* <RecommendedBooks /> */}
              <div className="column is-one-third">
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Book cover" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <p className="title is-5">Book Title</p>
                    <p className="subtitle is-6">Author Name</p>
                    <div className="content">
                      Book description goes here.
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-one-third">
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Book cover" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <p className="title is-5">Book Title</p>
                    <p className="subtitle is-6">Author Name</p>
                    <div className="content">
                      Book description goes here.
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-one-third">
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Book cover" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <p className="title is-5">Book Title</p>
                    <p className="subtitle is-6">Author Name</p>
                    <div className="content">
                      Book description goes here.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default ReadingList;
