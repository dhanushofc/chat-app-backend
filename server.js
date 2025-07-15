const express = require('express');
const socketio = require('socket.io');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB Error:", err));

const server = app.listen(5000, () => {
  console.log("🚀 Server running at http://localhost:5000");
});

const io = socketio(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

// ✅ Only ONE listener for each event
io.on('connection', (socket) => {
  console.log("🟢 User connected:", socket.id);

  socket.on('sendMessage', (msg) => {
    console.log("📨 Message received:", msg);
    io.emit('receiveMessage', msg); // Send to all clients
  });

  socket.on('disconnect', () => {
    console.log("🔴 User disconnected:", socket.id);
  });
});
