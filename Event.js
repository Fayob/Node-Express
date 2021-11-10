const EventEmitter = require("events");

const Emitter = new EventEmitter();

Emitter.on("response", (username, id) => {
  console.log(`${username} with id ${id} Data Recieved`);
});
Emitter.on("response", (username, age) => {
  console.log(`Another user: ${username}, age: ${age} Data Recieved`);
});

Emitter.emit("response", "john", 108);
