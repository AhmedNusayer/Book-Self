import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import { getBooksByTerm } from "./api/GoogleApi";
import request from "superagent";
import BookList from "./components/BookList";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // request
    //   .get("https://www.googleapis.com/books/v1/volumes")
    //   .query({
    //     q: searchTerm,
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   });
    await getBooksByTerm(searchTerm, setBooks);
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <Navbar />
      <Searchbar handleChange={handleChange} handleSubmit={handleSubmit} />
      <BookList books={books} />
    </div>
  );
};

export default App;
