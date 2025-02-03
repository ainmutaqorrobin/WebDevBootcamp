import React from "react";
import RegularList from "./components/lists/RegularList";
import { authors } from "./data/authors";
import DetailAuthor from "./components/authors/DetailAuthor";
import FullDetailAuthor from "./components/authors/FullDetailAuthor";

function App() {
  return (
    <>
      <RegularList
        items={authors}
        sourceName={"author"}
        Component={DetailAuthor}
      />
      <p>
        ========================================================================================
      </p>
      <RegularList
        items={authors}
        sourceName={"author"}
        Component={FullDetailAuthor}
      />
    </>
  );
}

export default App;
