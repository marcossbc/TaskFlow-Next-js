"use client";

import React, { useState } from "react";
import { 
  Search, 
  BookOpen, 
  Sliders, 
  ShieldCheck, 
  Zap, 
  HelpCircle, 
  ChevronDown,
  ArrowRight,
  MessageSquare
} from "lucide-react";

// FAQ Data Structure
const faqs = [
  {
    question: "How do I create and assign a new task?",
    answer: "Navigate to the 'My Tasks' view from the sidebar, click on the '+ New Task' button at the top right, fill in the details, and select a team member from the assignment dropdown."
  },
  {
    question: "Can I integrate TaskFlow with other calendar apps?",
    answer: "Yes! In your 'Preferences' tab, you can copy your unique iCal sync link to feed your TaskFlow schedule directly into Google Calendar, Outlook, or Apple Calendar."
  },
  {
    question: "What happens when my 14-day trial ends?",
    answer: "Your workspace will be temporarily paused, but no data will be deleted. You can upgrade to a premium plan anytime from the billing section to restore full access."
  },
  {
    question: "Is my workspace data secure and encrypted?",
    answer: "Absolutely. TaskFlow encrypts data at rest and in transit using industry-standard AES-256 encryption, backed by NextAuth secure session managements."
  }
];

export default function HelpPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#070A13] text-gray-200 font-sans p-6 md:p-10 relative overflow-hidden flex-1">
      
      {/* Decorative Aura Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-12">
        
        {/* 1. HERO SEARCH SECTION */}
        <div className="text-center space-y-4 pt-4">
          <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1.5 rounded-full text-[11px] font-bold text-indigo-400 tracking-widest uppercase">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Knowledge Base</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            How can we <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">help you</span> today?
          </h1>
          <p className="text-gray-400 text-sm font-light max-w-lg mx-auto">
            Search our knowledge base for operational updates, custom setups, and workflow automation tips.
          </p>
          
          {/* Custom Search Input */}
          <div className="max-w-xl mx-auto relative mt-6 group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-500 group-focus-within:text-indigo-400 transition-colors" />
            </div>
            <input
              type="text"
              placeholder="Search documentation, guides, and FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0D1220]/60 border border-gray-800/80 rounded-2xl pl-12 pr-4 py-4 text-sm text-gray-100 placeholder-gray-600 focus:outline-none focus:border-indigo-500/60 focus:ring-4 focus:ring-indigo-500/5 transition-all shadow-xl shadow-black/10"
            />
          </div>
        </div>

        {/* 2. CORE CATEGORIES (GRID) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="p-5 bg-gradient-to-b from-gray-900/40 to-gray-950/60 border border-gray-800/60 rounded-2xl hover:border-indigo-500/30 transition-all group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 group-hover:bg-indigo-600 transition-colors">
              <BookOpen className="w-5 h-5 text-indigo-400 group-hover:text-white" />
            </div>
            <h3 className="text-sm font-semibold text-white mt-4 mb-1">User Guides</h3>
            <p className="text-xs text-gray-500 font-light leading-relaxed">Learn the absolute basics of workspace tracking.</p>
          </div>

          <div className="p-5 bg-gradient-to-b from-gray-900/40 to-gray-950/60 border border-gray-800/60 rounded-2xl hover:border-purple-500/30 transition-all group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20 group-hover:bg-purple-600 transition-colors">
              <Sliders className="w-5 h-5 text-purple-400 group-hover:text-white" />
            </div>
            <h3 className="text-sm font-semibold text-white mt-4 mb-1">Preferences</h3>
            <p className="text-xs text-gray-500 font-light leading-relaxed">Custom configuration of notifications & themes.</p>
          </div>

          <div className="p-5 bg-gradient-to-b from-gray-900/40 to-gray-950/60 border border-gray-800/60 rounded-2xl hover:border-pink-500/30 transition-all group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center border border-pink-500/20 group-hover:bg-pink-600 transition-colors">
              <ShieldCheck className="w-5 h-5 text-pink-400 group-hover:text-white" />
            </div>
            <h3 className="text-sm font-semibold text-white mt-4 mb-1">Security</h3>
            <p className="text-xs text-gray-500 font-light leading-relaxed">Two-factor auth and session encryption logs.</p>
          </div>

          <div className="p-5 bg-gradient-to-b from-gray-900/40 to-gray-950/60 border border-gray-800/60 rounded-2xl hover:border-emerald-500/30 transition-all group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-600 transition-colors">
              <Zap className="w-5 h-5 text-emerald-400 group-hover:text-white" />
            </div>
            <h3 className="text-sm font-semibold text-white mt-4 mb-1">Automations</h3>
            <p className="text-xs text-gray-500 font-light leading-relaxed">Connect hooks and set auto-due date triggers.</p>
          </div>

        </div>

        {/* 3. FAQ ACCORDION SECTION */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-gray-900 pb-3">
            <h2 className="text-lg font-bold text-white tracking-wide">Frequently Asked Questions</h2>
            <span className="text-xs text-indigo-400 font-mono">Updated recently</span>
          </div>

          <div className="space-y-2">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index} 
                  className="bg-gray-900/20 border border-gray-800/60 rounded-xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    type="button"
                    className="w-full flex items-center justify-between p-4 text-left font-medium text-sm text-gray-200 hover:text-white transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown 
                      size={16} 
                      className={`text-gray-500 transition-transform duration-300 ${isOpen ? "transform rotate-180 text-indigo-400" : ""}`} 
                    />
                  </button>
                  
                  {/* Expandable Content Area */}
                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-40 border-t border-gray-900/60" : "max-h-0"
                    }`}
                  >
                    <p className="p-4 text-xs font-light text-gray-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. LIVE SUPPORT CTA */}
        <div className="p-6 bg-gradient-to-r from-indigo-950/30 via-[#0D1220]/60 to-gray-950/40 border border-indigo-500/10 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-4 text-center sm:text-left flex-col sm:flex-row">
            <div className="w-12 h-12 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Still need assistance?</h4>
              <p className="text-xs text-gray-500 font-light mt-0.5">Our dedicated engineering team is online to solve issues.</p>
            </div>
          </div>
          <button 
            type="button"
            className="inline-flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold px-5 py-3 rounded-xl shadow-lg shadow-indigo-600/10 transition-all hover:-translate-y-0.5 shrink-0"
          >
            <span>Contact Support</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
}