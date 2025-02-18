const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, Docker with Node.js!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// package.json
const packageJson = {
  "name": "nodejs-docker",
  "version": "1.0.0",
  "description": "A simple Node.js app for Docker",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.17.1"
  }
};

module.exports = packageJson;

