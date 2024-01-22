const path = require("path");

console.log(path.sep);

console.log(path.extname(__filename));

console.log(__dirname);

const joinPath = path.join("MUHAMMAD","BILAL","FILE.TXT");
console.log(joinPath);

console.log(path.parse(__filename));