import React, { Fragment, useState } from "react";
import { buildPath, extractData } from "../api/feedback";

function feedback({ feedbackItems }) {
  const [feedbackData, setFeedbackData] = useState();
  function loadFeedbackHandler(id) {
    fetch(`/api/${id}`).then((response) =>
      response.json().then((data) => {
        setFeedbackData(data.data);
      })
    );
  }

  return (
    <Fragment>
      {feedbackData ? <p>{feedbackData.feedback}</p> : ""}
      <ul>
        {feedbackItems.map((item) => (
          <div key={item.id}>
            <li>
              Email: {item.email}{" "}
              <button onClick={() => loadFeedbackHandler(item.id)}>
                Show Details
              </button>
            </li>
          </div>
        ))}
      </ul>
    </Fragment>
  );
}

export async function getStaticProps() {
  const filePath = buildPath();
  const data = extractData(filePath);

  return {
    props: {
      feedbackItems: data,
    },
  };
}

export default feedback;
