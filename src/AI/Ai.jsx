import axios from 'axios'
import { useState } from 'react'
import './Ai.css' 

function Ai() {
  const [answer, setAnswer] = useState([])
  const [question, setQuestion] = useState('')

  function ask() {
    if (!question.trim()) return
    axios.post(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAtOX-Yvymqz8ogViLD1EyzdqLPK85W3wQ',
      {
        contents: [{ parts: [{ text: question }] }]
      },
      {
        headers: { 'Content-type': 'application/json' }
      }
    )
    .then(response => {
      const reply = response.data.candidates?.[0].content?.parts?.[0]?.text
      setAnswer([...answer, { question, answer: reply }])
      setQuestion('')
    })
  }

  return (
    <div className="chat-wrapper">
      <div className="chat-container">
        {answer.map((n, index) => (
          <div key={index}>
            <div className="chat-message user"><p>{n.question}</p></div>
            <div className="chat-message assistant"><p>{n.answer}</p></div>
          </div>
        ))}
      </div>

      <div className="input-container">
        <input 
          type="text" 
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask something..."
        />
        <button onClick={ask}>Ask</button>
      </div>
    </div>
  )
}

export default Ai
