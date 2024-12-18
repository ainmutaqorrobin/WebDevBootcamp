import { useState } from "react";
import classes from "./auth-form.module.css";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
async function createUser(formData) {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }

  return data;
}
function AuthForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  function resetForm() {
    setFormData({ email: "", password: "" });
  }

  function switchAuthModeHandler() {
    setIsLogin(!isLogin);
  }

  function handleInput(e) {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    console.log(formData);

    if (isLogin) {
      const result = await signIn("credentials", {
        redirect: false,
        email: formData.email,
        password: formData.password,
      });
      if (result.ok) {
        router.replace("/profile");
      }
    } else {
      try {
        const result = await createUser(formData);
        console.log(result);
      } catch (error) {
        console.log(error);
      } finally {
        resetForm();
      }
    }
  }
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={onSubmit}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            required
            onChange={handleInput}
            value={formData.email}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            onChange={handleInput}
            value={formData.password}
          />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
