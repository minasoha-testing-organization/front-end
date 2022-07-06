const app = require("express")();
const createError = require("http-errors");
const cors = require("cors");
const fs = require("fs");
const handleError = require("./middlewares/handleError");
const characters = require("./data/characters.json");

// Config

const PORT = 3030;
app.use(cors());

app.listen(PORT, () => {
 console.log(`API is up and listening on port ${PORT}.`);
});

// Routes

/*
 * Returns a test message to check API functionality.
 */

app.use("/test", (req, res) => {
 res.json({ message: "API is working." });
});

// Returns the text data
app.use("/text", (req, res, next) => {
 // getting the text file data and returning it as a json object
 const textData = fs.readFileSync("./data/alice.txt", "utf8");
 // break textData into an array of lines
 const textDataArray = textData.split("\n");
 try {
  res.status(200).json(textDataArray);
 } catch (error) {
  next({ status: 500, message: error.message });
 }
});

// Returns the characters
app.use("/characters", (req, res, next) => {
 try {
  res.status(200).json(characters);
 } catch (error) {
  next({ status: 500, message: error.message });
 }
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
 next(createError(404));
});

// error handler
app.use(handleError);
