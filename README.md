# 🛠️ Real-Time Chat App (Backend)

This is the **Node.js backend** for the Real-Time Chat App.  
It handles WebSocket communication with **Socket.IO**, connects to MongoDB using **Mongoose**, and powers the frontend deployed on Vercel.

---

## 🌐 Live Backend API

👉 [https://chat-app-backend-dxyi.onrender.com](https://chat-app-backend-dxyi.onrender.com)

> This URL is used by the frontend for real-time messaging.

---

## ⚙️ Tech Stack

- 🟢 Node.js
- 🌐 Express.js
- ⚡ Socket.IO (Server)
- 🍃 MongoDB Atlas
- 🔗 Mongoose
- ☁️ Hosted on Render

---

## 🔌 Features

- Real-time WebSocket messaging using Socket.IO
- Broadcast messages to all connected users
- Uses MongoDB Atlas to manage messages (optional)
- `.env` support for safe database credentials
- CORS enabled for frontend-backend communication

---

## 📦 How to Run Locally

1. Clone the repo

```bash
git clone https://github.com/dhanushofc/chat-app-backend.git
cd chat-app-backend
npm install
Create a .env file in the root folder with the following content:

env
Copy
Edit
MONGO_URI=your-mongodb-uri-here
Start the server:

bash
Copy
Edit
node server.js
Your backend will run on:

arduino
Copy
Edit
http://localhost:5000
Make sure MongoDB URI is working if you're storing chat messages.

🚀 Deployment (Live on Render)
Backend is hosted on Render:
https://chat-app-backend-dxyi.onrender.com

MongoDB URI is securely stored in Render's Environment Variables as MONGO_URI

📬 Related Repositories
🔗 Frontend Repo
https://github.com/dhanushofc/chat-app-frontend

🙋‍♂️ Author
Ginkala Dhanush
GitHub Profile →

yaml
Copy
Edit

---

### ✅ Once Done

Say:
> ✅ README pasted  
And I’ll show you how to **pin both repos** to your GitHub profile (final touch for screening).
