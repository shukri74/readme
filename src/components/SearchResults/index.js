import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      <li className="list-group-item">
        <h2>Title: {props.title}</h2>
        <p>Publish Date: {props.publishDate}</p>
        <p>Publish Place: {props.publishPlace}</p>

        <p>Contributor: {props.contributor}</p>
        <p>Publisher: {props.publisher}</p>
        <p>Language: {props.language}</p>
        <img src={props.coverImage} alt={props.title}/>
        
        {/* {console.log("Props: " +props)} */}
        {/* <a href={props.url}>{props.url}</a> */}
      </li>
    </ul>
  );
}

export default SearchResults;
