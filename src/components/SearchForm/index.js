import React from "react";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="field">
        <label className="label">Search Book:</label>
        <div className="control">
        <input 
          value={props.search}
          onChange={props.handleInputChange}
          name="term"
          list="term"
          type="text"
          className="input is-focused"
          placeholder="Type book name for search"
          id="term"/>
        </div>
        <p className="help">{props.error}</p>
      </div>
    </form>
  );
}

export default SearchForm;
