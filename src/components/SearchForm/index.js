import React from "react";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div class="field">
        <label class="label">Search Book:</label>
        <div class="control">
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
        <p class="help">{props.error}</p>
      </div>
    </form>
  );
}

export default SearchForm;
