const rimraf = require("rimraf");
const glob = require("glob");
const fs = require("fs");

const distFolderPath = __dirname + "/../dist/";

glob("**/*.*", { cwd: distFolderPath }, (err, filePaths) => {
  const files = {};
  for (const file of filePaths) {
    files[file] = fs.readFileSync(distFolderPath + file, "utf8");
  }

  const packageContent = `export default ${JSON.stringify(files)};`;

  fs.writeFileSync(__dirname + "/../index.js", packageContent);
});
