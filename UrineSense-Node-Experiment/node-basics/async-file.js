const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "sample-async.txt");

fs.writeFile(
    filePath,
    "UrineSense - Asynchronous File Operation Demonstration.",
    (writeError) => {

        if (writeError) {
            console.error("Error writing file:", writeError.message);
            return;
        }

        console.log("File written successfully.");

        fs.readFile(filePath, "utf8", (readError, data) => {

            if (readError) {
                console.error("Error reading file:", readError.message);
                return;
            }

            console.log("File contents:");
            console.log(data);
        });
    }
);

console.log("File operations started.");