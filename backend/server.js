import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors({
  origin: "http://localhost:5173",  // ✅ Vite runs on 5173
  methods: ["GET", "POST"],
  credentials: true
}));

// Example route to get Retell call token
app.get("/get-call-token", async (req, res) => {
  try {
    const response = await fetch("https://api.retellai.com/v2/call-tokens", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.RETELL_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        agentId: process.env.RETELL_AGENT_ID
      })
    });

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("❌ Error fetching token:", err);
    res.status(500).json({ error: "Failed to get call token" });
  }
});

app.listen(3001, () => {
  console.log("✅ Backend running on http://localhost:3001");
});