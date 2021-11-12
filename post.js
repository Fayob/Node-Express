const express = require("express");
const app = express();

// static assets
app.use(express.static("./public"));
// parse form data
app.use(express.urlencoded({ extended: false }));

app.post("/action_page.php", (req, res) => {
  //  console.log(req.body);
  res.send("Login Successful");
  /* const { uname, psw } = req.body;
  if (uname & psw) {
    return res.status(200).send("Log in S");
  }
  res.send("Provide neccessary information");*/
});

app.listen(5000, () => {
  console.log("Server listening on port 5000...");
});
