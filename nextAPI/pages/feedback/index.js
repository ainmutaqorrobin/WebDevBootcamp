import React from "react";
import { buildPath, extractData } from "../api/feedback";

function feedback({ feedbackItems }) {
  return (
    <ul>
      {feedbackItems.map((item) => (
        <div key={item.id}>
          <li>
            <p>Email: {item.email}</p>
            <p>Feedback: {item.feedback}</p>
          </li>
        </div>
      ))}
    </ul>
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
