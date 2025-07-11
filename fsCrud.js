const fs = require('fs');

// console.log(process.argv);

const operation = process.argv[2];
if (!operation == 'write') {
    const name = process.argv[3];
    const content = process.argv[4];
    console.log(`Operation: ${operation}, Name: ${name}, Content: ${content}`);
     
    fs.writeFileSync()
}


//fs file creation, reading, updating, and deletion example

//create a file using fs.writeFile
// fs.writeFileSync("files/banana.txt", "This is a sample data file created using fs.writeFileSync method.");


//delete a file using fs.unlink
// fs.unlink("files/banana.txt", (err) => {
//     if (err) {
//         console.error("Error deleting file:", err);
//         return;
//     }
//     console.log("File deleted successfully.");
// });

//read a file using fs.readFile
// fs.readFile("files/banana.txt", "utf8", (err, data) => {
//     if (err) {
//         console.error("Error reading file:", err);
//         return;
//     }
//     console.log("File content:", data);
// });


//update a file using fs.appendFile

// fs.appendFile("files/banana.txt", "\nThis is an appended data.", (err) => {
//     if (err) {
//         console.error("Error updating file:", err);
//         return;
//     }
//     console.log("File updated successfully.");
// });

