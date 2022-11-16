import React from "react";
import { useEffect, useState } from "react";
import { api } from "./api";

import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    api.getAllBooks().then((data) => setBooks(data));
  }, []);
  if (books.length === 0) return <h1>hello</h1>;
  return (
    <div className="App">
      <ul>
        <h1>Books from my database</h1>
        {books.map((book) => (
          <li>{book.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
