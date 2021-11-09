console.log("Hello World");
console.error("Ooops Something went wrong");
console.dir({ name: "Andrew", age: 32 });
const fs = require("fs");
const os = require("os");

fs.writeFileSync("Hello.txt", "Hello Node, Here I Am");

const trew = 5 + 5;

console.log(trew);

console.log(`this is the uptime value ${os.uptime()} in seconds`);

const cup = {
  type: os.type,
  release: os.release,
  freemen: os.freemem,
  totalmem: os.totalmem,
};

console.log(cup);
