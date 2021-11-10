const { readFile } = require("fs");
const { resolve } = require("path");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
        return;
      } else {
        resolve(data);
      }
    });
  });
};

const start = async () => {
  try {
    const first = await getText("thus.txt");
    const second = await getText("this.txt");
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();

//getText("this.txt")
//.then((result) => console.log(result))
//.catch((err) => console.log(err));
