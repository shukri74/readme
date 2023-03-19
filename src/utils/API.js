import axios from "axios";

// Export an object containing methods we'll use for accessing the OpenLibrary API

export default {
  searchBook: function(book) {
    return axios.get("https://openlibrary.org/search.json?q" +book);
  }
};
