import { useRef } from "react";
function HomePage() {
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
      .then((data) => console.log(data));
  }
  return (
    <div>
      <h1>The Home Page</h1>
      <form>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input type="email" id="email" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your feedback Address</label>
          <textarea rows="7" id="feedback" ref={feedbackRef}></textarea>
        </div>
        <button onClick={onSubmit}>Send Feedback</button>
      </form>
    </div>
  );
}
export default HomePage;
