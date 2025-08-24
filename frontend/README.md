# ShadowSupport 🎙️  

## 📖 Overview  
ShadowSupport is an AI-powered customer support platform that enables **real-time, voice-driven conversations** between users and an intelligent agent. It combines a **React (Vite) frontend** with a **Node.js/Express backend** and integrates with Retell AI SDK for live conversational experiences.  

The project supports features like appointment scheduling, enterprise-grade security, and real-time synchronization, making it a future-ready AI concierge solution.  

---

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

## ⚙️ Setup  

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/your-username/shadowsupport.git
cd shadowsupport

