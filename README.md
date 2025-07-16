# 🛠️ Real-Time Chat App (Backend)

This is the Node.js backend for a real-time chat application powered by **Socket.IO** and connected to **MongoDB Atlas** using **Mongoose**.  
It works seamlessly with the frontend deployed on Vercel and is hosted live on Render.

---

## 🌐 Live Backend API

🔗 https://chat-app-backend-dxyi.onrender.com  
Used by the frontend to send and receive messages.

---

## ⚙️ Tech Stack

- 🟢 Node.js
- 🌐 Express.js
- ⚡ Socket.IO (Server)
- 🍃 MongoDB Atlas
- 🔗 Mongoose
- ☁️ Hosted on **Render**

---

## 🔌 Features

- Real-time bidirectional messaging
- WebSocket setup with cross-origin support
- Environment variable (`MONGO_URI`) for database
- Secure `.env` (not pushed to GitHub)

---

## 🧪 How to Run Locally

```bash
git clone https://github.com/dhanushofc/chat-app-backend.git
cd chat-app-backend
npm install

//Create a .env file in the root folder:
MONGO_URI=your-mongodb-connection-url

//Start the server:
node server.js

//Your backend will run at:
http://localhost:5000
```

---

## ☁️ Deployment

Hosted on Render

MongoDB URI is stored securely as an environment variable (MONGO_URI)

Frontend connects to this backend via Socket.IO

---

## 🖥️ Frontend Repo

🔗 [Chat App Frontend on GitHub](https://github.com/dhanushofc/chat-app-frontend)


---

## 🙋‍♂️ Author

- **Ginkala Dhanush**  
  [GitHub Profile →](https://github.com/dhanushofc)
