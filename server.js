//modules
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

//PORT
const PORT = process.env.PORT || 3000;

//set app to Express
const app = express();

//url processing + JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//static folder
app.use(express.static("public"));

//mongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

require("./routes/htmlRoutes")(app);
// require("./routes/apiRoutes")(app);

// Start the server
app.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
  });