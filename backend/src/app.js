const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const memberRoutes = require("./routes/member");

// Load all environment variables
dotenv.config({ path: "../.env" });

// Create an express instance
const app = express();

// Resolves Cross Origin Resource Sharing issues
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
app.use(cors());

// Allows for JSON parsing for request body
app.use(express.json());

// Expose the "member" route to the server
app.use("/member", memberRoutes);

module.exports = app;
