import axios from "axios";
import { useDataSource } from "../hooks/data-source-hook";
import { useCallback } from "react";

const fetchUser = (resourceUrl) => async () => {
  const response = await axios.get(resourceUrl);
  return response.data;
};

export const UserInfo = ({ userId }) => {
  const memoizedFunction = useCallback(fetchUser(`/users/${userId}`), [userId]);
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
