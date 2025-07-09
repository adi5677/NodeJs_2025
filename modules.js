// const fs = require('fs');
// const os = require('os');

const { log, warn } = require('console');

// fs.writeFileSync("dummy.txt", "This is a dummy file created using Node.js");

// console.log(os.platform());
// console.log(os.hostname());
// console.log(os.cpus());
// console.log(os.freemem());

console.log("abc");
console.log(process.cwd());
console.log(process.pid);

log("custome log")
warn("custome warn")