function isObject(data) {
  return typeof data === "object" && data !== null;
}

function RecursiveComponent({ data }) {
  if (!isObject(data)) {
    return <li> ======== {data}</li>;
  }

  const pairs = Object.entries(data);
  
  console.log(pairs);
  return (
    <>
      {pairs.map(([key, value]) => {
        return (
          <li key={key}>
            {key}:
            <ul>
              <RecursiveComponent data={value} />
            </ul>
          </li>
        );
      })}
    </>
  );
}

export default RecursiveComponent;
