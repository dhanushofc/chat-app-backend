# 🛠️ Real-Time Chat App (Backend)

This is the **Node.js backend** for a real-time chat application powered by **Socket.IO** and connected to **MongoDB Atlas** using **Mongoose**.  
It works seamlessly with the frontend deployed on **Vercel** and is hosted live on **Render**.

---

## 🌐 Live Backend API

🔗 https://chat-app-backend-dxyi.onrender.com  
Used by the frontend to send and receive messages.

---

## ⚙️ Tech Stack

- Node.js
- Express.js
- Socket.IO (Server)
- MongoDB Atlas
- Mongoose
- Render (Deployment)

---

## 🚀 Features

- Real-time communication using WebSocket (Socket.IO)
- Broadcast messages to all connected users
- Supports secure MongoDB connections via `.env`
- Handles CORS for frontend-backend integration

---

## 🧪 How to Run Locally

```bash
git clone https://github.com/dhanushofc/chat-app-backend.git
cd chat-app-backend
npm install
Create a .env file in the root folder:

env
Copy
Edit
MONGO_URI=your-mongodb-connection-url
Start the server:

bash
Copy
Edit
node server.js
Your backend will run at:
http://localhost:5000

☁️ Deployment Notes
Deployed using Render

The MongoDB URI is securely stored as an environment variable (MONGO_URI)

Connects to frontend hosted on Vercel via Socket.IO

📬 Related Repository
🖥️ Frontend:
https://github.com/dhanushofc/chat-app-frontend

🙋‍♂️ Author
Ginkala Dhanush
GitHub: @dhanushofc
