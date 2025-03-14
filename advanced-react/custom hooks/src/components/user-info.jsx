import axios from "axios";
import { useDataSource } from "../hooks/data-source-hook";
import { useCallback } from "react";

const fetchUser = async (resourceUrl) => {
  const response = await axios.get(resourceUrl);
  return response.data;
};

const getFromLocalStorage = (key) => () => {
  console.log("triggered");

  return localStorage.getItem(key);
};

export const UserInfo = ({ userId }) => {
  const memoizedLocalStorage = useCallback(
    () => getFromLocalStorage("test"),
    []
  );
  const memoizedFunction = useCallback(
    () => fetchUser(`/users/${userId}`),
    [userId]
  );
  const message = useDataSource(memoizedLocalStorage);
  console.log(message);

  const user = useDataSource(memoizedFunction);
  const { name, age, country, books } = user || {};

  return user ? (
    <>
      <h2>{name}</h2>
      <p>Age: {age} years</p>
      <p>Country: {country}</p>
      <h2>Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book}> {book} </li>
        ))}
      </ul>
    </>
  ) : (
    <h1>Loading...</h1>
  );
};
