"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  Send,
  Bot,
  User,
  ExternalLink,
  ChevronDown,
  RotateCcw,
} from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: "welcome",
    role: "assistant",
    content:
      "Hello! 👋 I'm your **TSGH AI Student Advisor**. Whether you're looking for verified scholarships, want to join **Growth Beyond Grades**, or need virtual work experience through **ELITE Campus × Kryptr**, I'm here to help!",
  },
];

const PROMPT_SUGGESTIONS = [
  "🎓 Find open scholarships",
  "🌱 What is Growth Beyond Grades?",
  "💼 How does ELITE Campus work?",
  "🤝 How to volunteer with TSGH?",
  "💬 Join WhatsApp community",
];

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTeaser, setShowTeaser] = useState(true);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setShowTeaser(false);
    }
  }, [messages, isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || isLoading) return;

    const userMessage: Message = {
      id: `msg-${Date.now()}`,
      role: "user",
      content: query,
    };

    const newHistory = [...messages, userMessage];
    setMessages(newHistory);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newHistory.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!res.ok) throw new Error("Network error");
      const data = await res.json();

      const botReply: Message = {
        id: `bot-${Date.now()}`,
        role: "assistant",
        content: data.reply || "I'm here to help! Explore our Opportunities Hub or connect on WhatsApp.",
      };

      setMessages((prev) => [...prev, botReply]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-err-${Date.now()}`,
          role: "assistant",
          content:
            "I'm temporarily having trouble connecting to the network, but you can explore our verified listings on the [Opportunities Hub](/opportunities) or join our active [WhatsApp Community](https://chat.whatsapp.com/K9svkTf3bNM2HlwknLpIOH?s=cl&p=a&iam=2)!",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setMessages(INITIAL_MESSAGES);
  };

  // Helper to parse markdown links and bold formatting safely
  const renderFormattedText = (text: string) => {
    const lines = text.split("\n");
    return lines.map((line, lineIdx) => {
      // Check for bullet line
      const isBullet = line.startsWith("• ") || line.startsWith("- ") || line.startsWith("* ");
      const cleanLine = isBullet ? line.replace(/^[•\-*]\s+/, "") : line;

      // Parse bold **text** and links [text](url)
      const parts = cleanLine.split(/(\[.*?\]\(.*?\)|\*\*.*?\*\*)/g);

      const content = parts.map((part, partIdx) => {
        // Link: [label](url)
        if (part.startsWith("[") && part.includes("](") && part.endsWith(")")) {
          const match = part.match(/\[(.*?)\]\((.*?)\)/);
          if (match) {
            const [, label, url] = match;
            const isInternal = url.startsWith("/");
            if (isInternal) {
              return (
                <Link
                  key={partIdx}
                  href={url}
                  onClick={() => setIsOpen(false)}
                  className="text-blue-600 dark:text-blue-400 font-bold underline hover:text-blue-700 inline-flex items-center gap-0.5"
                >
                  {label}
                </Link>
              );
            }
            return (
              <a
                key={partIdx}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 dark:text-emerald-400 font-bold underline hover:text-emerald-700 inline-flex items-center gap-0.5"
              >
                {label} <ExternalLink className="w-2.5 h-2.5 inline" />
              </a>
            );
          }
        }

        // Bold: **text**
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={partIdx} className="font-extrabold text-slate-900 dark:text-white">
              {part.slice(2, -2)}
            </strong>
          );
        }

        return <span key={partIdx}>{part}</span>;
      });

      if (isBullet) {
        return (
          <div key={lineIdx} className="flex items-start gap-1.5 my-0.5 pl-1">
            <span className="text-blue-500 font-bold leading-tight">•</span>
            <div className="flex-1">{content}</div>
          </div>
        );
      }

      return (
        <p key={lineIdx} className={line.trim() === "" ? "h-2" : "my-1"}>
          {content}
        </p>
      );
    });
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      
      {/* Floating Teaser Pill (Unobtrusive) */}
      {!isOpen && showTeaser && (
        <div className="mb-3 max-w-[280px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 flex items-start gap-2.5 animate-fade-in">
          <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 text-xs font-bold shadow-xs">
            AI
          </div>
          <div className="min-w-0">
            <div className="text-xs font-bold text-slate-900 dark:text-white">
              TSGH Student Advisor
            </div>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-snug mt-0.5">
              Need help finding scholarships or program info? Ask me!
            </p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTeaser(false);
            }}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-0.5"
            aria-label="Dismiss teaser"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-2.5 px-4 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          aria-label="Open TSGH AI Chatbot"
        >
          <div className="relative w-6 h-6 rounded-full overflow-hidden border border-white/40">
            <Image
              src="/images/logo.jpg"
              alt="TSGH Logo"
              fill
              sizes="24px"
              className="object-cover"
            />
          </div>
          <span className="text-xs sm:text-sm font-bold tracking-tight">Ask TSGH AI</span>
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
          </span>
        </button>
      )}

      {/* Responsive Chat Window (Desktop Popover / Mobile Full Sheet) */}
      {isOpen && (
        <div className="w-[92vw] sm:w-[400px] h-[85vh] sm:h-[560px] max-h-[700px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-2xl flex flex-col overflow-hidden animate-fade-in transition-all">
          
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white flex items-center justify-between shadow-sm">
            <div className="flex items-center space-x-2.5">
              <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-emerald-400 shrink-0">
                <Image
                  src="/images/logo.jpg"
                  alt="TSGH AI Advisor"
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-xs sm:text-sm font-black leading-tight">TSGH AI Advisor</h3>
                  <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-emerald-500/30 text-emerald-300 font-bold">
                    Gemini AI
                  </span>
                </div>
                <p className="text-[10px] text-slate-300">Beyond Grades. Beyond Limitations.</p>
              </div>
            </div>

            <div className="flex items-center space-x-1">
              <button
                onClick={handleReset}
                title="Restart chat"
                className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Restart chat"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Close chat"
                className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close chat"
              >
                <ChevronDown className="w-5 h-5 sm:hidden" />
                <X className="w-4 h-4 hidden sm:block" />
              </button>
            </div>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs sm:text-sm">
            {messages.map((msg) => {
              const isBot = msg.role === "assistant";
              return (
                <div
                  key={msg.id}
                  className={`flex items-start gap-2 ${isBot ? "justify-start" : "justify-end"}`}
                >
                  {isBot && (
                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5 shadow-2xs">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div
                    className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                      isBot
                        ? "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-xs shadow-2xs"
                        : "bg-blue-600 text-white rounded-tr-xs shadow-sm font-medium"
                    }`}
                  >
                    {renderFormattedText(msg.content)}
                  </div>

                  {!isBot && (
                    <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                      <User className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              );
            })}

            {/* Loading indicator */}
            {isLoading && (
              <div className="flex items-start gap-2 animate-fade-in">
                <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-2xl rounded-tl-xs text-slate-500 flex items-center gap-1.5 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce [animation-delay:0.4s]" />
                  <span className="text-[11px] ml-1">Consulting TSGH Advisor...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompt Suggestions */}
          <div className="px-3 py-2 border-t border-slate-200/60 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-[11px]">
              {PROMPT_SUGGESTIONS.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(s)}
                  className="px-2.5 py-1 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all shrink-0 font-medium shadow-2xs"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Input Bar */}
          <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Ask about scholarships, cohorts, Kryptr..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
                className="flex-1 px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 dark:disabled:bg-slate-800 text-white transition-colors shrink-0 shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      )}
    </div>
  );
}

