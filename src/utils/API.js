
import axios from 'axios';
import { useState } from 'react';
import 'bulma/css/bulma.min.css';
// function App() {
  
//     const [quote, setQuote] = useState ("")
//       const getQuote = () => {
//         axios.get("https://api.quotable.io/random").then(Response =>{
//           setQuote(Response.data.content)

//         }).catch (Error =>{
          

//         })

        


//       }
//       return (
//       <div className="app">
//         {quote && <p>{quote}</p>}
//         <button onClick={getQuote}>quote</button>

//     </div>
//       );
// }
// export default App;
//import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

//export default {
  //getBooks: function() {
    //return axios.get("https://openlibrary.org/works/OL45804W/editions.json");
  //},
//   getDogsOfBreed: function(breed) {
//     return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
//   },
//   getBaseBreedsList: function() {
//     return axios.get("https://dog.ceo/api/breeds/list");
//   }
//};



import 'bulma/css/bulma.min.css';
function API() {
  
    const [quote, setQuote] = useState ("")
      const getQuote = () => {
        axios.get("https://api.quotable.io/random").then(Response =>{
          setQuote(Response.data.content)

        }).catch (Error =>{
          

        })

        


      }
      return (
      <div className="app">
        {quote && <p>{quote}</p>}
        <button onClick={getQuote}>quote</button>

    </div>
      );
}

export default API;
