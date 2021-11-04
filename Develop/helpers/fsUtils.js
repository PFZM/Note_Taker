const fs = require("fs");
const util = require("util");

const readFromFile = util.promisify(fs.readFile);

const writeToFile = (destination, content) => {
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`data written to ${destination}`)
  );
};

const appendToFile = (destination, content) => {
  fs.appendFile(destination, JSON.stringify(content, null, 4), (err) =>
    err
      ? console.error(err)
      : console.info(`appended successfull to ${destination}`)
  );
};

module.exports = { readFromFile, appendToFile };
