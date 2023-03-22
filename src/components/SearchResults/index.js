import React from "react";
import "./style.css";

function SearchResults(props) {
  const handleSave = () => {
    const book = {
      title: props.title,
      publishDate: props.publishDate,
    };
    props.onSave(book);
  };

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={props.coverImage} alt={props.title} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src={props.authorImage} alt="Author image" />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{props.title}</p>
            <p className="subtitle is-6">
              <strong>Contributor: </strong>
              {props.contributor}
            </p>
          </div>
        </div>

        <div className="content">
          <p>
            <strong>Publish Place: </strong> {props.publishPlace}
          </p>
          <p>
            <strong>Publisher: </strong> {props.publisher}
          </p>
          <p>
            <strong>Language: </strong> {props.language}
          </p>
          <p>
            <strong>Publish in </strong>
            {props.publishDate}
          </p>
        </div>
        <button className="button is-info" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}

export default SearchResults;
