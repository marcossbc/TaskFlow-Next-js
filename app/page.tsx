"use client"; // Safkan ayaa xallinaya khaladka asaga oo ka dhigaya Client Component

import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Play, 
  Sparkles, 
  Layers, 
  Clock, 
  ShieldCheck, 
  CheckSquare, 
  BarChart3, 
  Zap,
  Smartphone,
  Users,
  Globe,
  MessageSquare,
  Share2
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-gray-100 font-sans selection:bg-indigo-500 selection:text-white overflow-x-hidden">
      
      {/* 1. HEADER / NAVIGATION */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#0B0F19]/70 border-b border-gray-800/60 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <Layers className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              TaskFlow <span className="text-indigo-500 text-xs font-semibold px-2 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 ml-1">System</span>
            </span>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-400">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#capabilities" className="hover:text-white transition-colors">Capabilities</a>
            <a href="#overview" className="hover:text-white transition-colors">Overview</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <Link 
              href="/login" 
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors hidden sm:block"
            >
              Sign In
            </Link>
            <Link 
              href="/login" 
              className="text-sm font-medium bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative pt-36 pb-24 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6">
              <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/30 px-3 py-1.5 rounded-full text-xs font-semibold text-indigo-400 tracking-wide uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Smart Task Management</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Task Management <br />
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  for Your Business
                </span>
              </h1>
              
              <p className="text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
                A modern platform designed to track your team&apos;s daily operations, organize complex projects, and monitor performance. Beautifully tailored to ensure everything gets done on time.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link 
                  href="/login" 
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-8 py-4 rounded-xl shadow-xl shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all hover:-translate-y-0.5"
                >
                  <span>Get Started Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                
                <button className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gray-900 hover:bg-gray-800 border border-gray-800 text-gray-300 font-medium px-8 py-4 rounded-xl transition-all">
                  <Play className="w-4 h-4 fill-current text-indigo-400" />
                  <span>How it Works</span>
                </button>
              </div>
            </div>

            {/* Right Multi-Layer Visual Showcase */}
            <div className="lg:col-span-5 relative mt-12 lg:mt-0 flex justify-center">
              
              {/* Back Card */}
              <div className="relative w-72 h-[450px] bg-gradient-to-b from-gray-900 to-gray-950 border border-gray-800 rounded-[2.5rem] p-3 shadow-2xl transform -rotate-6 translate-x-[-20px] z-10 hidden sm:block">
                <div className="w-full h-full bg-[#0D1220] rounded-[2rem] border border-gray-800/50 p-4 flex flex-col justify-between overflow-hidden relative">
                  <div className="w-20 h-4 bg-gray-900 rounded-full mx-auto mb-4" />
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <Smartphone className="w-5 h-5 text-purple-400" />
                    </div>
                    <div className="h-4 bg-gray-800 rounded w-3/4" />
                    <div className="h-3 bg-gray-800/60 rounded w-1/2" />
                  </div>
                  <div className="w-full h-40 bg-gradient-to-t from-purple-500/20 to-indigo-500/5 rounded-xl border border-purple-500/10 flex items-center justify-center">
                    <div className="text-center p-2">
                      <div className="text-[10px] text-purple-400 font-bold">Mobile View</div>
                      <div className="text-[8px] text-gray-500">Track tasks on the go</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Front Dashboard Card */}
              <div className="absolute sm:relative top-0 w-full max-w-[360px] sm:max-w-none sm:w-80 h-[450px] bg-gradient-to-b from-gray-900 to-gray-950 border border-indigo-500/30 rounded-3xl p-4 shadow-2xl transform sm:rotate-3 sm:translate-x-[-40px] z-20 backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-gray-800 pb-3 mb-4">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/40" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
                    <div className="w-3 h-3 rounded-full bg-green-500/40" />
                  </div>
                  <div className="text-[11px] font-mono text-gray-500">live-feed@taskflow</div>
                </div>
                
                <div className="font-mono text-xs text-indigo-300 space-y-4 overflow-hidden h-[340px]">
                  <p className="text-gray-500">// Real-time Activity Logs</p>
                  
                  <div className="space-y-2">
                    <p className="text-emerald-400">✓ Project Website Redesign Completed</p>
                    <p className="text-gray-400 text-[10px] pl-4">by Alex Johnson • 2m ago</p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-indigo-400">⚡ New Milestone Created: Phase 2</p>
                    <p className="text-gray-400 text-[10px] pl-4">Marketing Campaign • 15m ago</p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-purple-400">👥 Sarah added to UI Design Board</p>
                    <p className="text-gray-400 text-[10px] pl-4">Access level: Editor • 1h ago</p>
                  </div>
                  
                  <div className="mt-6 p-3 bg-indigo-950/40 border border-indigo-500/20 rounded-xl relative overflow-hidden">
                    <div className="absolute right-2 top-2 w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                    <p className="text-[11px] text-gray-400">Overall Team Productivity</p>
                    <p className="text-lg font-bold text-white mt-1">+24.5% This Week</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <hr className="border-gray-900 max-w-7xl mx-auto" />

      {/* 3. CORE FEATURES */}
      <section id="features" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
              Powerful Workspace System
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Everything you need to stay organized
            </h2>
            <p className="text-gray-400 font-light">
              Manage your operations smoothly with high-performance tools configured for immediate team alignment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <div className="bg-gradient-to-b from-gray-900/60 to-gray-950/60 border border-gray-800 hover:border-indigo-500/40 p-8 rounded-2xl transition-all group hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 group-hover:bg-indigo-600 transition-colors">
                <CheckSquare className="w-6 h-6 text-indigo-400 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mt-6 mb-2">Advanced Task Tracking</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Create tasks, assign due dates, set priorities, and view your work through clear lists and boards.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-b from-gray-900/60 to-gray-950/60 border border-gray-800 hover:border-purple-500/40 p-8 rounded-2xl transition-all group hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20 group-hover:bg-purple-600 transition-colors">
                <Users className="w-6 h-6 text-purple-400 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mt-6 mb-2">Team Collaboration</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Assign subtasks to team members, leave clear update comments, and collaborate instantly.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-b from-gray-900/60 to-gray-950/60 border border-gray-800 hover:border-pink-500/40 p-8 rounded-2xl transition-all group hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center border border-pink-500/20 group-hover:bg-pink-600 transition-colors">
                <BarChart3 className="w-6 h-6 text-pink-400 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mt-6 mb-2">Performance Metrics</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Monitor individual and overall project progress over time with high-quality data visualizations.
              </p>
            </div>

          </div>

          {/* Quick Checklist Matrix */}
          <div className="mt-16 p-8 bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 border border-gray-800 rounded-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>High-quality Modern Interface</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Real-time Notification Alerts</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Clean & Polished UI Layout</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Highly Customizable System</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. MEGA FOOTER */}
      <footer className="border-t border-gray-800/80 bg-[#070A12] pt-20 pb-10 relative overflow-hidden">
        {/* Soft footer glow */}
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-b-gray-900">
            
            {/* Column 1: Info & Brand */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-indigo-600 to-purple-500 flex items-center justify-center">
                  <Layers className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-bold text-white tracking-tight">TaskFlow</span>
              </div>
              <p className="text-sm text-gray-400 font-light leading-relaxed max-w-sm">
                Streamlining workplace collaboration and execution. Bring efficiency back to your teams with a system tailored for excellence.
              </p>
              {/* Social Handles */}
              <div className="flex space-x-4 pt-2">
                <a href="#" className="w-9 h-9 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-indigo-500 transition-all">
                  <Globe className="w-4 h-4" />
                </a>
                <a href="#" className="w-9 h-9 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-indigo-500 transition-all">
                  <MessageSquare className="w-4 h-4" />
                </a>
                <a href="#" className="w-9 h-9 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-indigo-500 transition-all">
                  <Share2 className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Column 2: Product Links */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-xs font-semibold text-gray-200 uppercase tracking-wider">Product</h4>
              <ul className="space-y-2.5 text-sm text-gray-400 font-light">
                <li><a href="#features" className="hover:text-indigo-400 transition-colors">Project Boards</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Time Tracking</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Automations</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Integrations</a></li>
              </ul>
            </div>

            {/* Column 3: Company Links */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-xs font-semibold text-gray-200 uppercase tracking-wider">Company</h4>
              <ul className="space-y-2.5 text-sm text-gray-400 font-light">
                <li><a href="#" className="hover:text-indigo-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Press Kit</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Column 4: Newsletter */}
            <div className="lg:col-span-4 space-y-4">
              <h4 className="text-xs font-semibold text-gray-200 uppercase tracking-wider">Stay Updated</h4>
              <p className="text-sm text-gray-400 font-light">
                Subscribe to receive operational tips and features release notifications.
              </p>
              <form className="flex flex-col sm:flex-row gap-2 pt-2" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-[#0D1220] border border-gray-800 rounded-xl px-4 py-3 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-5 py-3 rounded-xl transition-all shrink-0 shadow-lg shadow-indigo-600/10"
                >
                  Join
                </button>
              </form>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-10 flex flex-col sm:flex-row items-center justify-between text-gray-500 text-xs gap-4">
            <p>© 2026 TaskFlow Systems Inc. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Cookies Settings</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}