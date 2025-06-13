import express from "express";
import bodyParser from "body-parser";
import PG from "pg";
import { CreateUser } from "./util/createuser.js";
import { CheckUser } from "./util/checkuser.js";
import { HashPassword, VerifyPassword } from "./util/encryption.js";
import session from "express-session";
import passport from "passport";
import { Strategy } from "passport-local";

const app = express();
const port = 3000;

const db = new PG.Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  password: "123",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// session middleware to handle user session in Express
app.use(
  session({
    secret: "roysegak", // secret key to sign session ID cookie (protect against tampering)
    resave: false, // don't save session again if nothing has changed
    saveUninitialized: true, // save new sessions (even if not modified) - can be useful for login tracking
    cookie: { maxAge: 1000 * 60 * 60 * 24 }, // session cookie expires in 24 hours
  })
);

// initialize Passport middleware for authentication
app.use(passport.initialize());

// enables persistent login sessions (passport will use session to remember the user)
app.use(passport.session());

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

// protected route: only accessible if the user is authenticated (i.e. logged in)
app.get("/secrets", (req, res) => {
  if (!req.isAuthenticated()) return res.redirect("/login"); // redirect to login if not authenticated

  res.render("secrets.ejs"); // if authenticated, render the secrets page
});

// register route: handle form submission to create new user
app.post("/register", async (req, res) => {
  const { username: email, password } = req.body;

  // basic validation
  if (!email || !password) {
    return res.status(400).json({ message: "Please enter email and password" });
  }

  // hash password before saving
  const hashedPassword = await HashPassword(password);
  try {
    const user = await CreateUser(email, hashedPassword, db); // save user to DB
    if (user) {
      req.login(user, (err) => res.redirect("/secrets")); // login also triggers serializeUser
    }
  } catch (error) {
    return res.status(404).json({ message: error.message }); // handle duplicate user or DB error
  }
});

// login route: uses passport-local strategy to authenticate
app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/secrets", // on success, go to protected page
    failureRedirect: "/login", // on failure, go back to login form
  })
);

// register the "local" strategy with passport
passport.use(
  new Strategy(async function verify(username, password, cb) {
    const email = username;
    try {
      const user = await CheckUser(email, db); // check if user exists
      const verifyResult = await VerifyPassword(password, user.password); // verify password
      if (!verifyResult) return cb(null, false); // password doesn't match
      if (verifyResult) return cb(null, user); // success - pass user to passport
    } catch (error) {
      return cb(error); // DB error or unexpected issue
    }
  })
);

// serializeUser is called after successful login (req.login or passport.authenticate)
// choose what to store in session (in this case, the whole user object)
// only executes ONCE after login to create session
passport.serializeUser((user, cb) => {
  cb(null, user); // stored in session (you can also just store user.id for lighter session)
});

// deserializeUser is called on EVERY request after login
// takes the object from session and makes it available as req.user
passport.deserializeUser((user, cb) => {
  cb(null, user); // attaches full user object to req.user
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
