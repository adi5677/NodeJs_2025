//Example of Synchronous Execution

// console.log("1. Synchronous Code:");
// console.log("This is a synchronous log statement.");
// console.log("This statement will execute immediately after the previous one.");

// Example of Asynchronous Code Execution
// console.log("Async vs Sync Example");

// setTimeout(() => {
//     console.log("---------------------");
// }, 0);

// console.log("1. Synchronous Code:");

const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log("File content:", data);
}
);

