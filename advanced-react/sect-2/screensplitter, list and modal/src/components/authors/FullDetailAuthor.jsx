function FullDetailAuthor({ author }) {
  const { name, age, country, books } = author;

  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Country: {country}</p>
      <h2>Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book}>{book}</li>
        ))}
      </ul>
    </div>
  );
}

export default FullDetailAuthor;
