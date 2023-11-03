const fs = require("fs");
const path = require("path");
const directoryPath = "../";

function dirTree(directoryPath, prefix = "") {
  const files = fs.readdirSync(directoryPath);
  files.forEach((file) => {
    const filePath = path.join(directoryPath, file);
    const isDirectory = fs.statSync(filePath).isDirectory();
    console.log(prefix,"|__", file);

    if (isDirectory) {
      const prePrefix = '    '
      dirTree(filePath, prePrefix);
    }
  });
}

dirTree(directoryPath);
