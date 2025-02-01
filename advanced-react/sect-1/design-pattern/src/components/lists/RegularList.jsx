function RegularList({ items, sourceName, Component }) {
  return (
    <>
      {items.map((item, i) => (
        <Component key={i} {...{ [sourceName]: item }} />
      ))}
    </>
  );
}

export default RegularList;
