function NumberedList({ items, sourceName, Component }) {
  return (
    <>
      {items.map((item, i) => (
        <>
          <h3>{i + 1}</h3>
          <Component key={i} {...{ [sourceName]: item }} />
        </>
      ))}
    </>
  );
}

export default NumberedList;
