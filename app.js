const express = require("express");
const request = require("request");
const app = express();

app.get("/log-ip", (req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  console.log("IP address: ${ip}");
  // Log the IP address to a file or database
  res.send("IP address logged successfully");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
