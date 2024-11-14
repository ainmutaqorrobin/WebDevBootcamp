import { useRef, useState } from "react";
function HomePage() {
  const [feedback, setFeedback] = useState([]);
  const emailRef = useRef();
  const feedbackRef = useRef();

  function onSubmit(event) {
    event.preventDefault();

    const email = emailRef.current.value;
    const feedback = feedbackRef.current.value;

    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify({ email, feedback }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then(() => {
        loadFeedback();
        emailRef.current.value = "";
        feedbackRef.current.value = "";
      });
  }

  function loadFeedback() {
    fetch("/api/feedback")
      .then((response) => response.json())
      .then((data) => setFeedback(data.feedback));
  }
  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input type="email" id="email" ref={emailRef} required />
        </div>
        <div>
          <label htmlFor="feedback">Your feedback Address</label>
          <textarea
            rows="7"
            id="feedback"
            ref={feedbackRef}
            required
          ></textarea>
        </div>
        <button>Send Feedback</button>
      </form>
      <hr />
      <button onClick={loadFeedback}>Load Feedback</button>
      <ul>
        {feedback.map((item) => (
          <div key={item.id}>
            <li>
              <p>Email: {item.email}</p>
              <p>Feedback: {item.feedback}</p>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
export default HomePage;
