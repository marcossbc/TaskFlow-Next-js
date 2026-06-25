"use client";

import React, { useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { 
  User, 
  Mail, 
  Shield, 
  CheckCircle2, 
  Clock, 
  Briefcase,
  Sparkles,
  Camera,
  Lock
} from "lucide-react";
import { toast } from "sonner";

export default function ProfilePage() {
  const { data: session } = useSession();
  const [isUpdating, setIsUpdating] = useState(false);

  const username = session?.user?.name || "User";
  const email = session?.user?.email || "user@example.com";
  const image = session?.user?.image;

  // Initials haddii sawir jirin
  const initials = username
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setIsUpdating(true);
    
    // Simulating API Call
    setTimeout(() => {
      setIsUpdating(false);
      toast.success("Profile updated successfully!");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#070A13] text-gray-200 font-sans p-6 md:p-10 relative overflow-hidden flex-1">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-85 h-85 bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-8">
        
        {/* HEADER */}
        <div className="space-y-2 border-b border-gray-900 pb-5">
          <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1.5 rounded-full text-[11px] font-bold text-indigo-400 tracking-widest uppercase">
            <User className="w-3.5 h-3.5" />
            <span>Account Control</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            Profile <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Metrics</span>
          </h1>
          <p className="text-gray-400 text-sm font-light">
            Manage your public identity, security credentials, and track your workspace productivity.
          </p>
        </div>

        {/* SECTION 1: IDENTITY CARD & STATS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Glassmorphism Profile Avatar Card */}
          <div className="p-6 bg-gradient-to-b from-gray-900/40 to-gray-950/60 border border-gray-800/60 rounded-2xl flex flex-col items-center justify-center text-center relative overflow-hidden shadow-xl">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
            
            <div className="relative group cursor-pointer mb-4">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-2xl font-black text-white overflow-hidden shadow-lg ring-4 ring-gray-950">
                {image ? (
                  <Image src={image} alt={username} width={96} height={96} className="w-full h-full object-cover" />
                ) : (
                  initials || "TF"
                )}
              </div>
              <div className="absolute inset-0 bg-black/60 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <Camera className="w-5 h-5 text-gray-300" />
              </div>
            </div>

            <h3 className="text-base font-bold text-white tracking-wide truncate max-w-full">{username}</h3>
            <p className="text-xs text-gray-500 font-mono mt-1 truncate max-w-full">{email}</p>
            
            <div className="mt-4 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-[10px] font-mono text-indigo-400 flex items-center gap-1.5">
              <Shield className="w-3 h-3" />
              <span>Verified Member</span>
            </div>
          </div>

          {/* Productivity Dashboard Stats Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            <div className="p-5 bg-gradient-to-b from-gray-900/20 to-gray-950/40 border border-gray-900 rounded-2xl flex flex-col justify-between">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div className="mt-4">
                <span className="text-2xl font-black text-white block">142</span>
                <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wider block mt-1">Tasks Completed</span>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-b from-gray-900/20 to-gray-950/40 border border-gray-900 rounded-2xl flex flex-col justify-between">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                <Clock className="w-4 h-4" />
              </div>
              <div className="mt-4">
                <span className="text-2xl font-black text-white block">38.5h</span>
                <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wider block mt-1">Hours Tracked</span>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-b from-gray-900/20 to-gray-950/40 border border-gray-900 rounded-2xl flex flex-col justify-between">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
                <Briefcase className="w-4 h-4" />
              </div>
              <div className="mt-4">
                <span className="text-2xl font-black text-white block">6</span>
                <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wider block mt-1">Active Projects</span>
              </div>
            </div>

          </div>
        </div>

        {/* SECTION 2: EDIT PROFILE FORM */}
        <div className="bg-gradient-to-b from-gray-900/30 to-gray-950/50 border border-gray-800/60 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
          <h2 className="text-base font-bold text-white mb-6 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span>Update Account Credentials</span>
          </h2>

          <form onSubmit={handleUpdateProfile} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Full Name Input */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Full Name
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-4 flex items-center text-gray-600"><User className="w-4 h-4" /></span>
                  <input
                    id="name"
                    type="text"
                    defaultValue={username}
                    required
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-800 bg-[#0D1220] text-sm text-gray-100 focus:outline-none focus:border-indigo-500 transition-all duration-150"
                  />
                </div>
              </div>

              {/* Email Input (Disabled/Static) */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email Address (Immutable)
                </label>
                <div className="relative opacity-60">
                  <span className="absolute inset-y-0 left-4 flex items-center text-gray-600"><Mail className="w-4 h-4" /></span>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    disabled
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-900 bg-gray-950 text-sm text-gray-500 cursor-not-allowed focus:outline-none"
                  />
                </div>
              </div>

            </div>

            {/* Password Modification Header */}
            <div className="border-t border-gray-900/60 pt-4 mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* New Password */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="pass" className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                    New Password
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-4 flex items-center text-gray-600"><Lock className="w-4 h-4" /></span>
                    <input
                      id="pass"
                      type="password"
                      placeholder="••••••••"
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-800 bg-[#0D1220] text-sm text-gray-100 focus:outline-none focus:border-indigo-500 transition-all duration-150"
                    />
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="confirmPass" className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Confirm New Password
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-4 flex items-center text-gray-600"><Lock className="w-4 h-4" /></span>
                    <input
                      id="confirmPass"
                      type="password"
                      placeholder="••••••••"
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-800 bg-[#0D1220] text-sm text-gray-100 focus:outline-none focus:border-indigo-500 transition-all duration-150"
                    />
                  </div>
                </div>

              </div>
            </div>

            {/* Save Actions Button */}
            <div className="flex justify-end pt-4 border-t border-gray-900/60">
              <button
                type="submit"
                disabled={isUpdating}
                className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold px-6 py-3 rounded-xl shadow-lg shadow-indigo-600/10 transition-all active:scale-[0.98] disabled:opacity-50"
              >
                {isUpdating ? "Saving changes..." : "Save Preferences"}
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}