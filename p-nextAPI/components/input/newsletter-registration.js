import { useContext, useRef } from "react";
import classes from "./newsletter-registration.module.css";
import { NotificationContext } from "../../store/notification-context";

function NewsletterRegistration() {
  const notifContext = useContext(NotificationContext);
  const emailRef = useRef();

  async function registrationHandler(event) {
    event.preventDefault();
    const email = emailRef.current.value;
    notifContext.showNotification({
      title: "Signing up...",
      message: "Registering new user ",
      status: "pending",
    });

    try {
      const response = await fetch("/api/account", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email }),
      });
      const data = await response.json();
      if (response.ok) {
        return notifContext.showNotification({
          title: "Success",
          message: "New user is registered",
          status: "success",
        });
      } else {
        throw new Error(data.message || "Something went wrong!");
      }
    } catch (error) {
      notifContext.showNotification({
        title: "Failed.",
        message: error.message || "Something went wrong!",
        status: "error",
      });
    }
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
