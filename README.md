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
# Clone the backend repository
git clone https://github.com/dhanushofc/chat-app-backend.git

# Move into the project folder
cd chat-app-backend

# Install required dependencies
npm install

# ➕ Create a .env file in the root folder (not pushed to GitHub)
# Inside it, add:
# MONGO_URI=your-mongodb-connection-url

# Start the backend server
node server.js

# ✅ Your backend will run at:
# http://localhost:5000

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
  
---
## ⚠️ License & Usage

❌ Unauthorized copying, modification, or commercial use of this code is strictly prohibited.

This project is protected under the **CC BY-NC-ND 4.0 License**.

© 2025 Ginkala Dhanush – For demo/learning only.

