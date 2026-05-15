<div align="center">

# 💬 Multi-Room Chat Application

### 🚀 Real-Time Communication Platform with Room-Based Messaging using Socket.IO

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>
  <img src="https://img.shields.io/badge/Socket.IO-010101?style=for-the-badge&logo=socket.io&logoColor=white"/>
  <img src="https://img.shields.io/badge/WebSocket-RealTime-success?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Chat-MultiRoom-blue?style=for-the-badge"/>
</p>

</div>

---

# 📌 Overview

This project is a **real-time multi-room chat web application** built with **Node.js**, **Express.js**, and **Socket.IO**.

The application enables multiple users to communicate instantly through different discussion rooms using **WebSocket-based real-time messaging**.

The project demonstrates:

- Real-time communication systems
- Event-driven architecture
- Client-server interaction
- Room-based messaging systems
- Frontend and backend integration

---

# ✨ Features

✅ Real-time messaging powered by Socket.IO  
✅ Multiple chat rooms with dynamic room switching  
✅ Username-based login system  
✅ Join and leave notifications  
✅ Instant message broadcasting  
✅ Default global discussion room  
✅ Event-driven architecture  
✅ Responsive and interactive chat interface  

---

# 📸 Application Preview

## 💬 Chat Interface

<p align="center">
  <img width="1000" src="https://github.com/user-attachments/assets/3359adff-f41b-429a-a1f3-820495e520b7"/>
</p>

<div align="center">

Users **Souad** and **Khaoula** chatting in real time inside the `#global` room.

</div>

---

# 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js |
| Framework | Express.js |
| Real-Time Communication | Socket.IO |
| Frontend | HTML, CSS, Vanilla JavaScript |
| Architecture | Client-Server |
| Communication Protocol | WebSocket |

---

# 📂 Project Structure

```bash
application-chat-multi-rooms/
│
├── public/
│   ├── index.html
│   ├── login.html
│   ├── app.js
│   ├── login.js
│   ├── style.css
│   ├── login.css
│   └── chat-app.png
│
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

# ⚙️ System Workflow

<div align="center">

```text
Client Browser
      │
      │ WebSocket Connection
      ▼
Express + Socket.IO Server
      │
      ├── join-room
      ├── send-message
      └── disconnect
```

</div>

---

# ▶️ Installation

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/Souadzriouil/application-chat-multi-rooms.git
cd application-chat-multi-rooms
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Start the Server

```bash
npm start
```

---

# 🚀 Usage

1. Open your browser and go to:

```bash
http://localhost:3000
```

2. Enter your username on the login page

3. Join the default `#global` room automatically

4. Exchange messages instantly with connected users

5. Create or join additional discussion rooms

---

# 🧠 Key Concepts Demonstrated

- Real-Time Communication
- WebSockets
- Socket.IO Events
- Event-Driven Architecture
- Client-Server Systems
- Multi-Room Chat Management
- Frontend & Backend Integration

---

# 🔮 Future Improvements

- [ ] JWT/Firebase authentication system
- [ ] MongoDB or PostgreSQL message persistence
- [ ] Online users management
- [ ] Typing indicators
- [ ] File and image sharing
- [ ] Modern UI redesign
- [ ] Cloud deployment (Railway / Render / Vercel)
- [ ] AI chatbot integration for rooms

---

# 👩‍💻 Author

<div align="center">

## Souad Zriouil

### AI Engineer | Data Scientist | Machine Learning | NLP | LLM

<p align="center">
  <a href="https://github.com/Souadzriouil">
    <img src="https://img.shields.io/badge/GitHub-Souadzriouil-181717?style=for-the-badge&logo=github"/>
  </a>

  <a href="https://www.linkedin.com/in/souad-zriouil-54b19b267">
    <img src="https://img.shields.io/badge/LinkedIn-Souad%20Zriouil-0077B5?style=for-the-badge&logo=linkedin"/>
  </a>
</p>

</div>

---

# ⭐ Support

If you find this project useful, feel free to star the repository — it helps support future development and improvements.

<div align="center">

⭐ Star the repo if you like the project!

</div>
