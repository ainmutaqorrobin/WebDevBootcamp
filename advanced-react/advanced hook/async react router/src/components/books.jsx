import { Await, defer, useAsyncValue, useLoaderData } from "react-router";
import delay from "../util/delay";
import { MainHeading } from "./styled-elements";
import { Suspense } from "react";

const Books = () => {
  const { bookCountPromise, authorsPromise } = useLoaderData();

  return (
    <div>
      <MainHeading>Books</MainHeading>
      <p>
        <strong>Available Books: </strong>
        <Suspense fallback="Loading books...">
          <Await resolve={bookCountPromise}>
            <Display />
          </Await>
        </Suspense>
      </p>
      <p>
        <strong>Authors:</strong>
        <Suspense fallback="Loading authors...">
          <Await resolve={authorsPromise}>
            <Display />
          </Await>
        </Suspense>
      </p>
    </div>
  );
};

const Display = () => {
  const data = useAsyncValue();
  return <strong>{data}</strong>;
};

function loader() {
  const bookCountPromise = delay(10, 1000);
  const authorsPromise = delay("Codelicks", 2000);

  return defer({
    bookCountPromise,
    authorsPromise,
  });
}

export const booksRoute = { element: <Books />, loader };
