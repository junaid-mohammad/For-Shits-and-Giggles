// ------------------------------
// Import Dependencies
// ------------------------------
import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

// ------------------------------
// App Configuration
// ------------------------------
const app = express();
const port = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from the "public" directory
app.use(express.static("public"));

// Parse URL-encoded bodies (for form submissions)
app.use(bodyParser.urlencoded({ extended: true }));

// ------------------------------
// Routes
// ------------------------------

// GET /
// Render the homepage with default form values and no joke/error initially
app.get("/", (req, res) => {
  res.render("index.ejs", { 
    joke: null,
    error: null,
    categories: "Any",
    blacklist: "",
    type: "",
    contains: "",
    language: "en"
  });
});

// POST /
// Handle form submission, call JokeAPI, and render the result
app.post("/", async (req, res) => {
  const { categories, blacklist, type, contains, language } = req.body;

  // Build the JokeAPI URL dynamically based on user input
  let url = `https://v2.jokeapi.dev/joke/${categories || "Any"}`;

  const params = [];
  if (blacklist) params.push(`blacklistFlags=${blacklist}`);
  if (type) params.push(`type=${type}`);
  if (contains) params.push(`contains=${contains}`);
  if (language) params.push(`lang=${language}`);
  params.push("amount=1"); // Limit to one joke per request

  if (params.length > 0) {
    url += "?" + params.join("&");
  }

  try {
    // Fetch joke from external API
    const response = await axios.get(url);
    const result = response.data;

    // Render the page with the joke and preserve form selections
    res.render("index.ejs", {
      joke: result,
      error: null,
      categories,
      blacklist,
      type,
      contains,
      language
    });

  } catch (error) {
    console.error("Error fetching joke:", error.message);

    // On failure, show error and preserve form selections
    res.render("index.ejs", {
      joke: null,
      error: "Oops! Couldn't fetch a joke. Try again.",
      categories,
      blacklist,
      type,
      contains,
      language
    });
  }
});

// ------------------------------
// Start Server
// ------------------------------
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

// This code is a simple Express.js application that serves a web page where users can request jokes from the JokeAPI.
// ------------------------------
// End of file
// ------------------------------