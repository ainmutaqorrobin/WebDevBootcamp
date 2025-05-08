import { Await, useLoaderData } from "react-router";
import { MainContainer, MainHeading } from "./styled-elements";
import { Suspense } from "react";
import { mainLoader } from "./main-loader";

const MainComponent = () => {
  const { promise } = useLoaderData();

  return (
    <MainContainer>
      <MainHeading>
        Main - {""}
        <Suspense fallback="fetching...">
          <Await resolve={promise}>{(data) => <strong>{data}</strong>}</Await>
        </Suspense>
      </MainHeading>
    </MainContainer>
  );
};

export const mainRoute = { element: <MainComponent />, loader: mainLoader };
