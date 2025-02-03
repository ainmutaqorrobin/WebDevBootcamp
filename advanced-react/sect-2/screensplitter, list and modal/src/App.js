import React from "react";
import Modal from "./components/Modal";
import FullDetailBook from "./components/books/FullDetailBook";
import { books } from "./data/books";
import NumberedList from "./components/lists/Numbered";

function App() {
  return (
    <>
      <Modal>
        <NumberedList
          Component={FullDetailBook}
          items={books}
          sourceName="book"
        />
      </Modal>
    </>
  );
}

export default App;
