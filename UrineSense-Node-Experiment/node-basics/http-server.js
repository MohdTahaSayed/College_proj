const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>UrineSense</title>
            </head>
            <body>
                <h1>Welcome to UrineSense</h1>
                <p>Node.js HTTP Server is Running!</p>
                <p>Urine Test Strip Reader - Colorimetry</p>
                <a href="/api">View JSON Response</a>
            </body>
            </html>
        `);

    } else if (req.url === "/api") {
        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify({
            project: "UrineSense",
            technology: "Node.js",
            message: "Basic routing demonstrated successfully",
            status: "Success"
        }));

    } else {
        res.writeHead(404, {
            "Content-Type": "text/plain"
        });

        res.end("404 - Page Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});