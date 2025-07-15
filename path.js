const path = require('path');

const file = "text/file.txt";

console.log(`The file is located at: ${path.resolve(file)}`);

// file directory
const dir = path.dirname(file);

console.log(`The directory is located at: ${path.resolve(dir)}`);


// console.log(___filename); // Full path to the current file
// console.log(___dirname); // Full path to the directory containing the current file

