import React, { useState } from "react";
import "./Contacts.css";

function Contacts() {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const GEMINI_API_KEY = "AIzaSyAtOX-Yvymqz8ogViLD1EyzdqLPK85W3wQ"; 
  const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

  const toggleChat = () => setChatOpen(!chatOpen);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const res = await fetch(GEMINI_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [{ role: "user", parts: [{ text: input }] }],
        }),
      });

      const data = await res.json();
      const botText =
        data?.candidates?.[0]?.content?.parts?.[0]?.text || "Нет ответа от AI.";

      const botMessage = { role: "bot", text: botText };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Ошибка при вызове Gemini:", error);
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Ошибка связи с AI." },
      ]);
    }
  };

  return (
    <div className="contact-card">
      <h1>Привет, путешественник! 🌍</h1>
      <p>Я — ваш локальный помощник и гид. Свяжитесь со мной любым удобным способом:</p>

      <div className="social-links">
        <a href="https://wa.me/77001234567" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        <a href="mailto:youremail@example.com">Email</a>
        <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer">Telegram</a>
        <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>

      <button className="btn" onClick={toggleChat}>Написать мне</button>

      {chatOpen && (
        <div className="chat-box">
          <h3>Здравствуйте! 👋  
Я — ваш виртуальный помощник. Чем могу помочь?</h3>
          <div className="chat-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={msg.role}>
                <b>{msg.role === "user" ? "Вы" : "AI"}:</b> {msg.text}
              </div>
            ))}
          </div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Введите сообщение..."
          />
          <button onClick={handleSend}>Отправить</button>
        </div>
      )}
    </div>
  );
}

export default Contacts;
