import React from "react";

function CakeContainer({ number, age }) {
  return (
    <div>
      <h2>Number of cakes {number}</h2>
      <button>Buy Cake {age}</button>
    </div>
  );
}

export default CakeContainer;
