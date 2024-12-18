const express = require("express"); // Import Express
const app = express(); // Create an Express app
const PORT = 3001; // Define the port
const mongoose = require("mongoose");
const homeRouter = require("./routes/home.route");
require("dotenv").config();
const dbUri = process.env.DB_CONNECTION_STRING; // Make sure this is set in your .env file
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello, World!");
});
// Start the server
console.log(dbUri);

mongoose
  .connect(dbUri, { dbName: "Luxify" })
  .then(() => {
    {
      console.log("Connected to database!");

      app.listen(PORT, () => {
        console.log(`i am on port ${PORT}`);
      });
    }
  })
  .catch(() => {
    console.log("Connection failed!");
  });
