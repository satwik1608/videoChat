const Server = require("socket.io");
const express = require("express");

const app = express();

const io = Server(3000);

io.on("connection", (socket) => {
  console.log("hello");
});
