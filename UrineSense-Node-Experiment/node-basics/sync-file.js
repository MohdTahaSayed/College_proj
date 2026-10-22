const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "sample-sync.txt");

try {
    // Write data synchronously
    fs.writeFileSync(
        filePath,
        "UrineSense - Synchronous File Operation Demonstration."
    );

    console.log("File written successfully.");

    // Read data synchronously
    const data = fs.readFileSync(filePath, "utf8");

    console.log("File contents:");
    console.log(data);

} catch (error) {
    console.error("File operation failed:", error.message);
}