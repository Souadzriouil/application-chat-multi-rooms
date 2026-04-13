# 💬 Multi-Room Chat Application

> A real-time multi-room chat web application built with **Node.js**, **Express**, and **Socket.IO** — enabling instant messaging across multiple discussion spaces.

---

## 🚀 Overview

This project demonstrates a real-time communication system using **WebSockets**. Multiple users can connect simultaneously, create or join chat rooms, and exchange messages instantly.

**Core goals of this project:**

- Real-time data handling with event-driven architecture
- Seamless backend and frontend integration
- Scalable room-based communication model

---

## ✨ Features

- ⚡ Real-time messaging powered by Socket.IO
- 🏠 Multiple chat rooms — join existing or create new ones
- 👤 Username-based login system
- 🔔 Join/leave notifications for room members
- 📡 Instant message broadcasting
- 🌐 Default global chat room on entry
- 🔄 Event-driven architecture throughout

---

## 📸 Screenshots

### Chat Interface

<img width="1919" height="1018" alt="Screenshot_chat" src="https://github.com/user-attachments/assets/3359adff-f41b-429a-a1f3-820495e520b7" />

> Users **Souad** and **Khaoula** chatting in real time inside the `#global` room. The sidebar shows active rooms (`#global`, `#chess`) and the online users list. Messages are bubble-styled and aligned by sender.

---

## 🛠️ Tech Stack

| Layer     | Technology            |
|-----------|-----------------------|
| Runtime   | Node.js               |
| Framework | Express.js            |
| WebSocket | Socket.IO             |
| Frontend  | HTML, CSS, Vanilla JS |

---

## 📁 Project Structure

```
application-chat-multi-rooms/
├── public/
│   ├── index.html       # Main chat interface
│   ├── login.html       # Login / username entry page
│   ├── app.js           # Frontend Socket.IO logic
│   ├── login.js         # Login page interactions
│   ├── style.css        # Chat interface styles
│   ├── login.css        # Login page styles
│   └── chat-app.png     # App preview image
├── server.js            # Express + Socket.IO server
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/Souadzriouil/application-chat-multi-rooms.git
cd application-chat-multi-rooms
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the server

```bash
npm start
```

---

## ▶️ Usage

1. Open your browser and go to `http://localhost:3000`
2. Enter your **username** on the login page
3. You'll be placed in the default **#global** room automatically
4. **Send messages** in real time — they appear instantly for all users in the room
5. Browse the **Rooms** panel to join an existing room or create a new one with the `+` button

---

## 🗺️ How It Works

```
Client (Browser)
    │
    │  WebSocket (Socket.IO)
    ▼
Express Server (server.js)
    │
    ├── on('join-room')    → broadcasts join notification to room
    ├── on('send-message') → broadcasts message to room members
    └── on('disconnect')   → broadcasts leave notification
```

---

## 🔮 Future Improvements

- [ ] Authentication system (JWT or Firebase)
- [ ] Message persistence (MongoDB or PostgreSQL)
- [ ] Online users list per room
- [ ] Typing indicator (`User is typing...`)
- [ ] File and image sharing
- [ ] Modern UI redesign
- [ ] Cloud deployment (Railway, Render, or Vercel)
- [ ] AI chatbot integration per room

---

## 👩‍💻 Author

**Souad Zriouil**  
AI Engineer | Data Scientist | Machine Learning | NLP | LLM  

[![GitHub](https://img.shields.io/badge/GitHub-Souadzriouil-black?logo=github)](https://github.com/Souadzriouil)

---

## ⭐ Support

If you find this project useful, feel free to **star** the repository — it helps others discover it and motivates further development! 🙌
