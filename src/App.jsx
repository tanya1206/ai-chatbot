import { useState } from "react"
import ReactMarkdown from "react-markdown"
import "./App.css"

function App() {

  const [input, setInput] = useState("")

  const [loading, setLoading] = useState(false)

  const [messages, setMessages] = useState([
    {
      text: "Hello! How can I help you?",
      sender: "bot"
    }
  ])


  const handleSend = async () => {

    if (input.trim() === "") return

    const userMessage = {
      text: input,
      sender: "user"
    }

    setMessages((prev) => [...prev, userMessage])

    const currentInput = input

    setInput("")

    setLoading(true)

    try {

      const response = await fetch("http://127.0.0.1:8000/chat", {

        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          text: currentInput
        })

      })

      const data = await response.json()

      const botReply = {
        text: data.reply,
        sender: "bot"
      }

      setMessages((prev) => [...prev, botReply])

      setLoading(false)

    }

    catch (error) {

      console.log(error)

      setLoading(false)

    }

  }


  return (

    <div className="app">

      <div className="chat-container">

        <h1>AI Chatbot</h1>

        <div className="messages">

          {messages.map((msg, index) => (

            <div
              key={index}
              className={
                msg.sender === "user"
                  ? "user-message"
                  : "bot-message"
              }
            >

              <ReactMarkdown>
                {msg.text}
              </ReactMarkdown>

            </div>

          ))}


          {loading && (
            <div className="bot-message">
              Typing...
            </div>
          )}

        </div>


        <div className="input-area">

          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}

            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSend()
              }
            }}
          />

          <button onClick={handleSend}>
            Send
          </button>

        </div>

      </div>

    </div>

  )
}

export default App