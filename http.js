const { readFileSync } = require("fs");
const http = require("http");

// get html file
const Page = readFileSync("assignment.html");

const server = http.createServer((req, res) => {
  // console.log(req.url);

  const url = req.url;
  // Home Page
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(Page);
    res.end();
    //About
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1> About Page </h1>");
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
