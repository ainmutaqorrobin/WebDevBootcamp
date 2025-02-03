import React from "react";
import RegularList from "./components/lists/RegularList";
import { authors } from "./data/authors";
import { books } from "./data/books";
import DetailAuthor from "./components/authors/DetailAuthor";
import FullDetailAuthor from "./components/authors/FullDetailAuthor";
import DetailBook from "./components/books/DetailBook";
import FullDetailBook from "./components/books/FullDetailBook";
import NumberedList from "./components/lists/Numbered";

function App() {
  return (
    <>
      <RegularList
        items={authors}
        sourceName={"author"}
        Component={DetailAuthor}
      />
      <NumberedList
        items={authors}
        sourceName={"author"}
        Component={FullDetailAuthor}
      />
      <p>
        ========================================================================================
      </p>
      <RegularList items={books} sourceName={"book"} Component={DetailBook} />
      <NumberedList
        items={books}
        sourceName={"book"}
        Component={FullDetailBook}
      />
    </>
  );
}

export default App;
