import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <div class="card">
      <div class="card-image">
        <figure class="image is-1by1">
          <img src={props.coverImage} alt={props.title}/>
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img src={props.authorImage} alt="Author image"/>
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{props.title}</p>
            <p class="subtitle is-6"><strong>Contributor: </strong>{props.contributor}</p>
          </div>
        </div>

        <div class="content">
        <p><strong>Publish Place: </strong> {props.publishPlace}</p>
        <p><strong>Publisher: </strong> {props.publisher}</p>
        <p><strong>Language: </strong> {props.language}</p>
        <p><strong>Publish in </strong>{props.publishDate}</p>
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
