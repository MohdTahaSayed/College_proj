const express = require("express");
const path = require("path");

const app = express();
const PORT = 4000;

// Configure EJS as the template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware to serve static files
app.use(express.static(path.join(__dirname, "public")));

// Route 1: Home page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Route 2: JSON response
app.get("/api", (req, res) => {
    res.json({
        project: "UrineSense",
        message: "Express routing is working",
        status: "Success"
    });
});

// Route 3: Dynamic EJS page
app.get("/results", (req, res) => {
    const results = [
        { parameter: "pH", reading: "6.0" },
        { parameter: "Protein", reading: "Reference comparison pending" },
        { parameter: "Glucose", reading: "Reference comparison pending" }
    ];

    res.render("results", {
        title: "UrineSense Analysis Results",
        sampleId: "SAMPLE-001",
        results: results
    });
});

// Route 4: Handle unknown routes
app.use((req, res) => {
    res.status(404).send("404 - Page Not Found");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Express server running at http://localhost:${PORT}`);
});