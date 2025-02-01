import React from "react";
import RegularList from "./components/lists/RegularList";
import { authors } from "./data/authors";
import SmallListItems from "./components/authors/SmallListItems";
import LargeListItems from "./components/authors/LargeListItems";

function App() {
  return (
    <>
      <RegularList
        items={authors}
        sourceName={"author"}
        Component={SmallListItems}
      />
      <p>
        ========================================================================================
      </p>
      <RegularList
        items={authors}
        sourceName={"author"}
        Component={LargeListItems}
      />
    </>
  );
}

export default App;
