const express = require("express");
// dotenv configuration
require("dotenv").config();
const app = express();

//connection to the database
const connect_db = require("./config/db_connection");
// import body parser
app.use(express.json());
connect_db();

//testing the server
app.get("/", (req, res) => {
  res.send("Hello World!");
});
//contact Route
app.use("/api/contact", require("./routes/contact"));
//user Route
app.use("/api/user", require("./routes/user"));
//road Route
app.use("/api/road", require("./routes/road"));
//message Route
app.use("/api/message", require("./routes/messages"));
//reservation Route
app.use("/api/reservation", require("./routes/reservation"));

const PORT = process.env.PORT;
app.listen(PORT, (error) => {
  error
    ? console.log("there is an error connecting to the server")
    : console.log("server connect to :" + PORT);
});
