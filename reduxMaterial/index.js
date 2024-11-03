import { legacy_createStore as createStore } from "redux";
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "Customer purchased cake.",
  };
}
function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: "Customer purchased ice cream.",
  };
}

const shelf = {
  numOfCakes: 10,
  numOfIceCreams: 20,
};

const reducer = (state = shelf, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("Initial store ", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Updated store ", store.getState())
);

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
