const { readFileSync } = require("fs");
const http = require("http");

// get html file
const HtmlPage = readFileSync("../HTML AND CSS/assignment.html");
const CSSPage = readFileSync("../HTML AND CSS/assignment.css");

const server = http.createServer((req, res) => {
  // console.log(req.url);

  const url = req.url;
  console.log(url);
  // Home Page
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(HtmlPage);
    res.end();
    //About
  } else if (url === "/assignment.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(CSSPage);
    res.end();
    //Contact page
  } else if (url === "/contact") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1> Contact Page </h1>");
    res.end();
    // page Not Found
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1> Oops the page you're requesting for does not exist </h1>");
    res.end();
  }
});

server.listen(3000);
