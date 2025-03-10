import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart2,
  Zap,
  RefreshCw,
  ArrowRightLeft,
  TrendingUp,
  Search,
  Repeat,
  PiggyBank,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import Dex from "./dex";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Zap className="w-8 h-8 text-[#ed5409]" />
          <span className="text-xl font-bold">ArbitrAgent</span>
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link
            href="#features"
            className="hover:text-[#ffcb67] transition-colors"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="hover:text-[#ffcb67] transition-colors"
          >
            How It Works
          </Link>
          <Link href="#cta" className="hover:text-[#ffcb67] transition-colors">
            Get Started
          </Link>
        </nav>
        <Link href="https://t.me/ArbitrageAISonicBot">
        <Button
          variant="outline"
          className="hidden hover:bg-[#ed5409] text-black hover:text-white border-none md:inline-flex"
        >
          Launch on Telegram
        </Button></Link>
      </header>

      <main className="flex-grow">
        <section className="relative py-36 md:py-64 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/13.jpg"
              alt="Background"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Maximize Profits with AI-Powered Arbitrage
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Our advanced AI agent scans Sonic Chain pairs to find the best
              arbitrage opportunities and executes swaps automatically.
            </p>
            <Link href="/agent">
            <Button
            
              size="lg"
              className="text-lg bg-[#313131] hover:bg-[#212121] px-8 py-6"
            >
              Start Trading <ArrowRight className="ml-2 h-6 w-6" />
            </Button></Link>
          </div>
        </section>

        <section id="about" className="py-20 bg-[#313131]">
          <Dex />
        </section>

        <section id="features" className="bg-[#212121] py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Key Features
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<BarChart2 className="w-12 h-12 text-[#ed5409]" />}
                title="Real-time Scanning"
                description="Continuously monitors Sonic Chain pairs for profitable arbitrage opportunities."
              />
              <FeatureCard
                icon={<RefreshCw className="w-12 h-12 text-[#ed5409]" />}
                title="Automated Swaps"
                description="Executes trades automatically to capture profits from price discrepancies."
              />
              <FeatureCard
                icon={<ArrowRightLeft className="w-12 h-12 text-[#ed5409]" />}
                title="Multi-pair Analysis"
                description="Analyzes multiple trading pairs simultaneously to find the best opportunities."
              />
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              How It Works
            </h2>
            <div className="relative">
              <div className="absolute left-1/2 md:left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#ed5409] hidden md:block"></div>
              <div className="space-y-12 md:space-y-20">
                <TimelineItem
                  icon={<Search className="w-6 h-6 md:w-8 md:h-8" />}
                  title="Scan Pairs"
                  description="Our AI agent continuously scans trading pairs on Sonic Chain, analyzing price differences across multiple exchanges."
                  align="right"
                />
                <TimelineItem
                  icon={<TrendingUp className="w-6 h-6 md:w-8 md:h-8" />}
                  title="Identify Opportunities"
                  description="The agent uses advanced algorithms to identify price discrepancies that can lead to profitable arbitrage, considering factors like transaction costs and slippage."
                  align="left"
                />
                <TimelineItem
                  icon={<Repeat className="w-6 h-6 md:w-8 md:h-8" />}
                  title="Execute Trades"
                  description="When a profitable opportunity is found, the agent automatically executes the necessary swaps with lightning speed, ensuring maximum profit potential."
                  align="right"
                />
                <TimelineItem
                  icon={<PiggyBank className="w-6 h-6 md:w-8 md:h-8" />}
                  title="Profit"
                  description="You earn profits from the price differences, all handled automatically by our AI. The system continuously reinvests and compounds your gains."
                  align="left"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="cta" className="bg-[#ed5409] py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Profiting?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join now and let our AI-powered arbitrage agent work for you 24/7
              on the Sonic Chain.
            </p>
            <Link href="/agent">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Get Started Now
            </Button></Link>
          </div>
        </section>
      </main>

      <footer className="bg-[#212121] py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Zap className="w-6 h-6 text-[#ed5409]" />
            <span className="text-lg font-semibold">ArbitrAgent</span>
          </div>
          <nav className="flex space-x-4">
            <Link href="#" className="hover:text-[#ffcb67] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[#ffcb67] transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-[#ffcb67] transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

interface TimelineItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  align: "left" | "right";
}

function TimelineItem({ icon, title, description, align }: TimelineItemProps) {
  return (
    <div
      className={`flex flex-col md:flex-row items-center ${
        align === "left" ? "md:flex-row-reverse" : ""
      }`}
    >
      <div
        className={`w-full md:w-1/2 ${
          align === "left" ? "md:pr-8 md:text-right" : "md:pl-8"
        } mb-4 md:mb-0`}
      >
        <div className="bg-[#313131] p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-[#515151]">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
      <div className="w-14 h-14 bg-[#ed5409] rounded-full flex items-center justify-center z-10 transform transition-all duration-300 hover:scale-110 hover:bg-[#ed5409]">
        {icon}
      </div>
      <div className="w-1/2"></div>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-black p-6 rounded-lg">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}
