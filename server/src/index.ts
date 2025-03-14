import express, { Request, Response } from "express";
require("dotenv").config();
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Now only for testing.

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist')));

app.get("/api/ping", (req: Request, res: Response) => {
    res.send("IFDS server is running with TypeScript!");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
