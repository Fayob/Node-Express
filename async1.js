const { readFile, writeFile } = require("fs").promises;
//const util = require("util");
//const readPromise = util.promisify(readFile);
//const writePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFile("thus.txt", "utf8");
    const second = await readFile("this.txt", "utf8");
    await writeFile(
      "merged.txt",
      `This is what should be inside the file: ${second} ${first} `,
      { flag: "w" }
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};
start();
