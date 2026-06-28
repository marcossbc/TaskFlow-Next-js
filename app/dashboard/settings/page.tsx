"use client";
import React, { useState } from "react";
import { 
  Settings as SettingsIcon, 
  User, 
  Bell, 
  Shield, 
  Sliders, 
  Save,
  CheckCircle
} from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function SettingsPage() {
  const { data: session } = useSession();
  const [activeTab, setActiveTab] = useState("profile");
  const [isSaved, setIsSaved] = useState(false);

  const username = session?.user?.name || "User";
  const email = session?.user?.email || "user@example.com";
  const image = session?.user?.image;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000); 
  };

  const tabs = [
    { id: "profile", label: "Account Profile", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security & Privacy", icon: Shield },
  ];

  return (
    <div className="p-4 md:p-8 space-y-6 max-w-5xl mx-auto text-gray-200 font-sans min-h-screen">
      
      {/* 1. HEADER SECTION */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-gradient-to-r from-indigo-950/20 via-gray-900/40 to-purple-950/20 p-6 rounded-2xl border border-gray-800/60 backdrop-blur-xl relative overflow-hidden shadow-2xl">
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="space-y-1 relative z-10">
          <div className="inline-flex items-center space-x-1.5 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 rounded-md text-[11px] font-bold text-indigo-400 tracking-wider uppercase">
            <Sliders className="w-3.5 h-3.5" />
            <span>Preferences</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-black tracking-tight text-white">
            Workspace <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Settings</span>
          </h1>
          <p className="text-xs text-gray-400 font-light">Customize your account, notifications, and workflow environments.</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 items-start">
      
        <nav className="w-full md:w-64 flex flex-row md:flex-col gap-1.5 p-1.5 bg-gray-950/40 border border-gray-800/60 rounded-xl backdrop-blur-md overflow-x-auto shrink-0">
          {tabs.map(({ id, label, icon: Icon }) => {
            const isActive = activeTab === id;
            return (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                type="button"
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-xs md:text-[13px] font-medium tracking-wide transition-all whitespace-nowrap w-full justify-center md:justify-start ${
                  isActive
                    ? "bg-indigo-600/10 border border-indigo-500/30 text-indigo-400 shadow-lg"
                    : "text-gray-400 hover:text-gray-200 hover:bg-gray-900/30"
                }`}
              >
                <Icon size={16} />
                <span>{label}</span>
              </button>
            );
          })}
        </nav>

        
        <div className="flex-1 w-full bg-[#070A13]/60 border border-gray-800/60 rounded-2xl shadow-2xl p-5 md:p-6 backdrop-blur-md relative">
          
       
          {isSaved && (
            <div className="absolute top-4 right-4 flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-3 py-1.5 rounded-lg text-xs font-medium animate-fade-in-down">
              <CheckCircle size={14} />
              <span>Changes saved successfully!</span>
            </div>
          )}

          <form onSubmit={handleSave} className="space-y-6">
            
            {/* TAB 1: PROFILE */}
            {activeTab === "profile" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-1">Profile Information</h3>
                  <p className="text-xs text-gray-500">This data is linked with your Google Provider account.</p>
                </div>
                
                {/* User Avatar Card */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-950/30 border border-gray-800/40">
                  <div className="w-14 h-14 rounded-full bg-indigo-600 flex items-center justify-center text-lg font-bold text-white overflow-hidden ring-2 ring-indigo-500/30 shrink-0">
                    {image ? (
                      <Image src={image} alt={username} width={56} height={56} className="object-cover w-full h-full" />
                    ) : (
                      username[0].toUpperCase()
                    )}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-200">{username}</h4>
                    <p className="text-xs text-indigo-400 font-mono">{email}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-400">Full Name</label>
                    <input 
                      type="text" 
                      defaultValue={username}
                      className="w-full px-3 py-2.5 rounded-xl bg-gray-950/50 border border-gray-800 focus:border-indigo-500/50 focus:outline-none font-sans text-xs text-gray-300 transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-400">Email Address</label>
                    <input 
                      type="email" 
                      disabled
                      defaultValue={email}
                      className="w-full px-3 py-2.5 rounded-xl bg-gray-950/20 border border-gray-800/40 font-mono text-xs text-gray-500 cursor-not-allowed"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: NOTIFICATIONS */}
            {activeTab === "notifications" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-1">Notification Preferences</h3>
                  <p className="text-xs text-gray-500">Choose how you want to be alerted regarding your deadlines.</p>
                </div>

                <div className="space-y-3">
                  <label className="flex items-start gap-3 p-3 rounded-xl bg-gray-950/30 border border-gray-800/40 cursor-pointer hover:bg-gray-950/50 transition-all">
                    <input type="checkbox" defaultChecked className="mt-1 accent-indigo-500 rounded" />
                    <div>
                      <span className="text-xs font-semibold text-gray-200 block">Email Reminders</span>
                      <span className="text-[11px] text-gray-500">Receive automated daily summaries of your pending tasks.</span>
                    </div>
                  </label>

                  <label className="flex items-start gap-3 p-3 rounded-xl bg-gray-950/30 border border-gray-800/40 cursor-pointer hover:bg-gray-950/50 transition-all">
                    <input type="checkbox" defaultChecked className="mt-1 accent-indigo-500 rounded" />
                    <div>
                      <span className="text-xs font-semibold text-gray-200 block">Overdue Alerts</span>
                      <span className="text-[11px] text-gray-500">Get immediate warnings when an urgent task hits its deadline.</span>
                    </div>
                  </label>
                </div>
              </div>
            )}

            {/* TAB 3: SECURITY */}
            {activeTab === "security" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-1">Security & Privacy</h3>
                  <p className="text-xs text-gray-500">Manage authorization states and third-party integrations.</p>
                </div>

                <div className="p-4 rounded-xl bg-indigo-950/10 border border-indigo-500/10 space-y-2">
                  <span className="text-xs font-semibold text-indigo-400 block">Google Account Connected</span>
                  <p className="text-[11px] text-gray-400 leading-relaxed">
                    Your session authentication is completely delegated to Google OAuth 2.0. To update passwords or modify multi-factor auth (MFA), please access your official Google Security Dashboard.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-400">Current Scope Role</label>
                  <input 
                    type="text" 
                    disabled 
                    value="Authorized Workspace Member (v1.0)"
                    className="w-full px-3 py-2.5 rounded-xl bg-gray-950/20 border border-gray-800/40 font-mono text-[11px] text-gray-500 cursor-not-allowed"
                  />
                </div>
              </div>
            )}

            {/* ACTION FOOTER */}
            <div className="pt-4 border-t border-gray-800/40 flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-lg shadow-indigo-600/20 active:scale-95 transition-all gap-1.5 w-full sm:w-auto"
              >
                <Save size={14} />
                <span>Save Changes</span>
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}