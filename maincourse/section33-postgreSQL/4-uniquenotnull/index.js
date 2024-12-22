import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  password: "123",
  host: "localhost",
  port: 5432,
  database: "world",
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  let countries = [];

  const result = await db.query("SELECT country_code FROM visited_countries");
  result.rows.forEach((country) => countries.push(country.country_code));

  res.render("index.ejs", {
    countries,
    total: countries.length,
  });
});

app.post("/add", async (req, res) => {
  const { country } = req.body;
  const countryReference = (
    await db.query("SELECT country_code,country_name FROM countries ")
  ).rows;

  const enteredCountry = countryReference.find(
    (obj) => country === obj.country_name
  );

  await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [
    enteredCountry.country_code,
  ]);

  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
