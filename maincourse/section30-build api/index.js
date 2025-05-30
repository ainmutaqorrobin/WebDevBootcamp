import express from "express";
import bodyParser from "body-parser";
import { Joi, validate, ValidationError } from "express-validation";
import { jokes } from "./data.js";

const app = express();
app.use(express.json());
const port = 3000;
const masterKey = "4VGP2DN-6EWM4SJ-N6FGRHV-Z3PR3TT";

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

app.use(bodyParser.urlencoded({ extended: true }));

const updateJokeValidation = {
  body: Joi.object({
    jokeId: Joi.number().required().messages({
      "any.required": "jokeId is required",
    }),
    jokeType: Joi.string().required().messages({
      "any.required": "jokeType is required",
    }),
    jokeText: Joi.string().required().messages({
      "any.required": "jokeText is required",
    }),
  }).options({ abortEarly: false }),
};

const updatePartialJokeValidation = {
  body: Joi.object({
    jokeId: Joi.number().strict().required().messages({
      "any.required": "Id is required",
    }),
    jokeText: Joi.string().messages({
      "string.base": "Text must be a string",
    }),
    jokeType: Joi.string().messages({
      "string.base": "Type must be a string",
    }),
  })
    .or("jokeText", "jokeType") // ✅ At least one of these is required
    .messages({
      "object.missing": "You must provide at least jokeText or jokeType",
    })
    .options({ abortEarly: false }),
};

//1. GET a random joke
app.get("/random", (req, res) => {
  return res.json({
    message: "success",
    status: 200,
    joke: jokes[getRandomNumber(100)],
  });
});

//2. GET a specific joke
app.get("/joke/:id", (req, res) => {
  const { id } = req.params;
  const jokeId = +id;

  if (!jokeId) {
    return res.status(404).json({ message: "Please provide id", status: 404 });
  }

  const getJoke = jokes.find((joke) => joke.id === jokeId);
  if (!getJoke) {
    return res.status(404).json({
      message: `No joke found with ID ${jokeId}`,
      status: 404,
    });
  }
  return res
    .status(200)
    .json({ message: "success", status: 200, joke: getJoke });
});

//3. GET a jokes by filtering on the joke type
app.get("/jokeType/:type", (req, res) => {
  const { type } = req.params;
  if (!type) {
    return res
      .status(404)
      .json({ status: 404, message: "Please provide joke type" });
  }

  const selectedJokes = jokes.filter((joke) => joke.jokeType === type);
  if (selectedJokes.length === 0) {
    return res.status(400).json({
      status: 400,
      message: "There are no jokes based on provide type",
    });
  }
  return res
    .status(200)
    .json({ status: 200, message: "success", jokes: selectedJokes });
});
//4. POST a new joke
app.post("/joke", (req, res) => {
  const { jokeText, jokeType } = req.body;
  if (!jokeText || !jokeType) {
    return res.status(400).json({
      status: 400,
      message: "Please provide both joke text and joke type",
    });
  }

  const newJoke = {
    id: jokes.length + 1,
    jokeText,
    jokeType,
  };

  jokes.push(newJoke);
  return res
    .status(201)
    .json({ status: 201, message: "new joke added", jokes });
});

//5. PUT a joke
app.put("/updateJoke", validate(updateJokeValidation), (req, res) => {
  const { jokeId, jokeText, jokeType } = req.body;
  const index = jokes.findIndex((joke) => joke.id === +jokeId);

  if (index === -1) {
    return res.status(400).json({
      status: 400,
      message: "There is no joke based on provided Id",
    });
  }

  jokes[index] = {
    id: +jokeId,
    jokeText,
    jokeType,
  };

  return res.status(200).json({ message: "Joke updated", jokes });
});

//6. PATCH a joke
app.patch(
  "/updatePartialJoke",
  validate(updatePartialJokeValidation),
  (req, res) => {
    const { jokeId, jokeText, jokeType } = req.body;
    const allowedFields = ["jokeText", "jokeType"];

    const index = jokes.findIndex((joke) => joke.id === jokeId);
    if (index === -1) {
      return res
        .status(404)
        .json({ message: "Joke not found with the provided Id" });
    }

    Object.keys(req.body).forEach((key) => {
      if (key !== "jokeId" && allowedFields.includes(key)) {
        jokes[index][key] = req.body[key];
      }
    });

    return res.status(200).json({ message: "joke updated", jokes });
  }
);
//7. DELETE Specific joke
app.delete("/joke/:id", (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ message: "Please provide joke id" });
  const index = jokes.findIndex((joke) => joke.id === +id);

  if (index === -1)
    return res
      .status(404)
      .json({ message: "There is no joke exist from provided id" });

  jokes.splice(index, 1);

  return res.status(200).json({ message: "deleted selected joke", jokes });
});

//8. DELETE All jokes
app.delete("/allJoke", (req, res) => {
  jokes.length = 0;

  return res.status(200).json({ message: "all jokes deleted", jokes });
});
//error message middleware
app.use((err, req, res, next) => {
  if (err instanceof ValidationError) {
    // Correctly extract messages from details.body (array of error objects)
    const messages = (err.details?.body || []).map((detail) => detail.message);

    return res.status(err.statusCode).json({
      status: err.statusCode,
      errors: messages,
    });
  }

  return res.status(500).json({
    status: 500,
    message: "Internal Server Error",
  });
});

app.listen(port, () => {
  console.log(`Successfully started server on port ${port}.`);
});
