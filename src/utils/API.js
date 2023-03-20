import axios from "axios";

// Export an object containing methods we'll use for accessing the OpenLibrary API

export default {
  getQuote: function() {
    return axios.get("https://api.quotable.io/random");
  },
  searchBook: function(book) {
    return axios.get("https://openlibrary.org/search.json?q=" +book);
  },
  getBooks: function() {
    return axios.get("https://openlibrary.org/works/OL45804W/editions.json");
  }

};
