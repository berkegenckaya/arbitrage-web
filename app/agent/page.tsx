import ChatScreen from "@/components/chat-screen";



export default function Page() {
  return (
    <main className="bg-black min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">AI Arbitrage Assistant</h1>
        <p className="text-gray-300 text-center mb-8">
          Chat with our AI to get real-time insights on arbitrage opportunities and trading strategies.
        </p>
        <ChatScreen />
      </div>
    </main>
  )
}

