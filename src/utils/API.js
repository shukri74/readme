

import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

// export default {
  // getBooks: function() {
  //   return axios.get("https://openlibrary.org/works/OL45804W/editions.json");
  // },
  // searchBook: function(book) {
  //   return axios.get("https://openlibrary.org/search.json?q=" + book);
  // },
  // getQuote: function() {
  //   return axios.get("https://api.quotable.io/random");
  // }
// };

const getBooks = () => {
    return axios.get("https://openlibrary.org/works/OL45804W/editions.json");
  }

const searchBook = (book) => {
    return axios.get("https://openlibrary.org/search.json?q=" + book);
  }
  const getQuote = () => {
    return axios.get("https://api.quotable.io/random");
  }

  const exportedObject = {
    searchBook,
  getBooks,
  getQuote
};

export default exportedObject;


