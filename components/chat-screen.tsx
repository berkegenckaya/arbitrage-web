"use client"

import { useState, useRef, useEffect } from "react"
import axios from "axios"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import ReactMarkdown from "react-markdown"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Send, Bot, User } from 'lucide-react'

type Message = {
  text: string
  isUser: boolean
}

export default function ChatScreen() {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputMessage.trim()) return

    const userMessage: Message = { text: inputMessage, isUser: true }
    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsLoading(true)

    try {
      const response = await axios.post(
        "http://localhost:3001/message",
        {
          message: inputMessage,
          threadId: "thread_g8rmlqEYD3wRH3CDVaFr7152"
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        }
      )

      if (response.data.assistant_response && typeof response.data.assistant_response === "string") {
        const messageText = response.data.assistant_response
        const apiMessage: Message = { text: messageText, isUser: false }
        setMessages((prev) => [...prev, apiMessage])
      } else {
        throw new Error("Yanıt beklenen formatta değil")
      }
    } catch (error: any) {
      console.error("Mesaj gönderme hatası:", error, error.response?.data)
      const errorMessage: Message = { text: "Error happened", isUser: false }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-7xl  h-[700px] flex flex-col bg-black border border-[#313131]">
      <CardContent className="flex-grow overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
            <div className={`flex items-start space-x-2 max-w-[70%] ${message.isUser ? "flex-row-reverse" : ""}`}>
              <div className={`p-1 rounded-full ${message.isUser ? "bg-[#ed5409]" : "bg-gray-700"}`}>
                {message.isUser ? <User size={24} /> : <Bot size={24} />}
              </div>
              <div className={`p-3 rounded-lg ${message.isUser ? "bg-[#ed5409] text-white" : "bg-gray-800 text-gray-100"}`}>
                <ReactMarkdown>{message.text}</ReactMarkdown>
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-[70%] p-3 rounded-lg bg-gray-800 text-gray-100">Analyzing</div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </CardContent>
      <CardFooter className="p-4 bg-[#ed5409]">
        <form onSubmit={handleSendMessage} className="flex w-full space-x-2">
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Mesajınızı yazın..."
            className="flex-grow bg-[#313131] text-white border-gray-700 focus:border-[#ed5409] focus:ring-[#ed5409]"
          />
          <Button type="submit" disabled={isLoading} className="bg-[#ed5409] border border-black hover:bg-[#ff6a2c] text-white">
            <Send size={20} />
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}
