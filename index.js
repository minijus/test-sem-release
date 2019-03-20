const fs = require("fs");

const VERSION = JSON.parse(fs.readFileSync("./package.json", "utf8")).version;
module.exports = {
  version: VERSION
};
