import express from "express";
import bodyParser from "body-parser";
import PG from "pg";
import { CreateUser } from "./util/createuser.js";
import { CheckUser } from "./util/checkuser.js";

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

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const { username: email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Please enter email and password" });
  }

  try {
    const result = await CreateUser(email, password, db);
    if (result) {
      return res.render("secrets.ejs");
    }
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
});

app.post("/login", async (req, res) => {
  const { username: email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Please enter email and password" });
  }

  const user = await CheckUser(email, db);
  if (user.password !== password)
    return res.status(400).json({ message: "Wrong password" });
  if (user) return res.render("secrets.ejs");

  return res.status(400).json({ message: "This user is not registered" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
