# ShadowSupport 🎙️  

## 📖 Overview  
ShadowSupport is an AI-powered customer support platform that enables **real-time, voice-driven conversations** between users and an intelligent agent. It combines a **React (Vite) frontend** with a **Node.js/Express backend** and integrates with Retell AI SDK for live conversational experiences.  

The project supports features like appointment scheduling, enterprise-grade security, and real-time synchronization, making it a future-ready AI concierge solution.  

---

**✨ Features**

1. 🎧 Voice Conversations – Real-time AI voice assistant powered by Retell AI.

2. 📅 Intelligent Scheduling – Book and manage appointments with AI guidance.

3. 🔒 Enterprise Security – Encrypted communication and compliance-ready.

4. ⚡ Real-Time Sync – Seamless updates across devices & platforms.

5. 🌗 Dark/Light Mode – Toggle between accessible themes for better UX.

## 🛠️ Tech Stack  
**Frontend:**  
- React (Vite)  
- Tailwind CSS  
- Lucide Icons  
- Retell Web SDK  

**Backend:**  
- Node.js  
- Express.js  
- CORS & dotenv  

**Other Tools & Services:**  
- Retell AI API  
- REST API Communication  
- Environment Variables for secure config  

**Technical Flowchart:**
  - A[User] -->|Opens Web App| B[React Frontend]
  - B -->|Fetch Call Token| C[Backend (Express)]
  - C -->|Requests Token| D[Retell AI API]
  - D -->|Generates Call Token| C
  - C -->|Returns Token| B
  - B -->|Start Voice Call| E[Retell Web SDK]
  - E -->|Real-time Conversation| D
  - D -->|AI Response| E
  - E -->|Streamed Voice| B
  - B -->|Plays to User| A
---

## ✅ Conclusion  
ShadowSupport is more than just a demo — it’s a **blueprint for the future of AI-driven customer engagement**. By combining a modern frontend, a secure backend, and the power of Retell AI, it enables seamless, natural, and intelligent conversations with users.  

This project can be extended further with:  
- 📱 Mobile app integration  
- 📊 Analytics dashboards for call insights  
- 🌍 Multilingual AI voice support  

🚀 With ShadowSupport, you’re not just building a chatbot — you’re creating an **AI concierge experience** that redefines customer support.  

--- 

## ⚙️ Setup  

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/your-username/shadowsupport.git
cd shadowsupport


cd backend
npm install

PORT=5000
OPENAI_API_KEY=your_openai_api_key_here

npm start

➡️ Backend available at http://localhost:5000

cd frontend
npm install

VITE_API_BASE_URL=http://localhost:5000

npm run dev

➡️ Frontend available at http://localhost:5173
