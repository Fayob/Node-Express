const express = require("express");
const app = express();

const route = require("./routes/route");

// static assets
app.use(express.static("./public"));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

app.use("/api/people", route);

app.listen(3000, () => {
  console.log("Server listening on port 3000...");
});
