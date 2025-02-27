const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const multer = require("multer");
const path = require("path");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const upload = multer({ dest: "uploads/" });

app.use(express.static("public")); // Serve frontend files

// Handle file uploads
app.post("/upload", upload.array("files"), (req, res) => {
    console.log("Files received:", req.files.map(f => f.originalname));
    res.send("Files uploaded successfully!");
});

// WebSocket connection for real-time status
wss.on("connection", ws => {
    console.log("Client connected");
    ws.on("close", () => console.log("Client disconnected"));
});

// Start the server
server.listen(3000, () => console.log("Server running on http://localhost:3000"));
