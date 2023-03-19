import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getBooks: function() {
    return axios.get("https://openlibrary.org/works/OL45804W/editions.json");
  },
  searchBook: function(book) {
    return axios.get("https://openlibrary.org/search.json?q=" + book);
  },
//   getBaseBreedsList: function() {
//     return axios.get("https://dog.ceo/api/breeds/list");
//   }
};
