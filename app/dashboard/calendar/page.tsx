"use client";
import React, { useState } from "react";
import { 
  ChevronLeft, 
  ChevronRight, 
  Calendar as CalendarIcon, 
  Plus, 
  Clock, 
  AlertCircle 
} from "lucide-react";
import Link from "next/link";

// Tusaale ahaan Task-yo ku xiran taariikhda (Kani dambe waxaad ka soo jiidi doontaa Database-ka)
const dummyTasks = [
  { id: "1", title: "Review UI/UX Designs", date: "2026-06-28", priority: "high", time: "10:00 AM" },
  { id: "2", title: "MongoDB Database Migration", date: "2026-06-30", priority: "urgent", time: "02:30 PM" },
  { id: "3", title: "Fix Sidebar Mobile Bugs", date: "2026-06-30", priority: "medium", time: "09:00 AM" },
  { id: "4", title: "Team Weekly Sync", date: "2026-07-02", priority: "low", time: "11:00 AM" },
];

const priorityColors: Record<string, string> = {
  urgent: "bg-red-500/20 text-red-400 border-red-500/30",
  high: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  medium: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
  low: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
};

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 5, 27)); // June 2026

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Magacyada Mieha iyo Maalmaha
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Xisabinta maalmaha bisha
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const handlePrevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const handleNextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  // Generato maalmaha calendar-ka ioo dhamaystiran
  const calendarCells = [];
  // Boosaska maran ee bilowga bisha (Empty slots)
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarCells.push(null);
  }
  // Maalmaha dhabta ah ee bisha
  for (let i = 1; i <= daysInMonth; i++) {
    calendarCells.push(i);
  }

  return (
    <div className="p-4 md:p-8 space-y-6 max-w-7xl mx-auto text-gray-200 font-sans min-h-screen">
      
      {/* 1. HEADER SECTION */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-gradient-to-r from-indigo-950/20 via-gray-900/40 to-purple-950/20 p-6 rounded-2xl border border-gray-800/60 backdrop-blur-xl relative overflow-hidden shadow-2xl">
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="space-y-1 relative z-10">
          <div className="inline-flex items-center space-x-1.5 bg-purple-500/10 border border-purple-500/20 px-2.5 py-1 rounded-md text-[11px] font-bold text-purple-400 tracking-wider uppercase">
            <CalendarIcon className="w-3.5 h-3.5" />
            <span>Schedule</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-black tracking-tight text-white">
            Interactive <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Calendar</span>
          </h1>
          <p className="text-xs text-gray-400 font-light">Manage, track, and optimize your daily workflows visually.</p>
        </div>

        <Link
          href="/dashboard/tasks/add-task"
          className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-lg shadow-indigo-600/20 active:scale-95 transition-all duration-200 gap-1.5 self-stretch sm:self-auto"
        >
          <Plus size={14} />
          <span>New Event</span>
        </Link>
      </div>

      {/* 2. CALENDAR CONTROLS */}
      <div className="flex items-center justify-between bg-gray-950/40 border border-gray-800/60 p-4 rounded-xl backdrop-blur-md">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-white tracking-wide">{months[month]}</span>
          <span className="text-sm font-mono text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">{year}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <button 
            onClick={handlePrevMonth}
            className="p-2 rounded-lg bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:bg-gray-800 transition-all"
          >
            <ChevronLeft size={16} />
          </button>
          <button 
            onClick={() => setCurrentDate(new Date(2026, 5, 27))} // Maanta
            className="px-3 py-1.5 rounded-lg bg-indigo-600/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold hover:bg-indigo-600 hover:text-white transition-all"
          >
            Today
          </button>
          <button 
            onClick={handleNextMonth}
            className="p-2 rounded-lg bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:bg-gray-800 transition-all"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* 3. MAIN CALENDAR GRID */}
      <div className="bg-[#070A13]/60 border border-gray-800/60 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-md">
        {/* Days Header */}
        <div className="grid grid-cols-7 border-b border-gray-800/60 bg-gray-900/40 text-center py-3">
          {daysOfWeek.map((day) => (
            <span key={day} className="text-xs font-bold text-gray-500 uppercase tracking-widest">{day}</span>
          ))}
        </div>

        {/* Days Grid */}
        <div className="grid grid-cols-7 auto-rows-[120px] md:auto-rows-[140px] divide-x divide-y divide-gray-800/40">
          {calendarCells.map((day, index) => {
            if (day === null) {
              return <div key={`empty-${index}`} className="bg-gray-950/20 opacity-40" />;
            }

            // Formatting taariikhda cell-ka si loo barbardhigo dummyTasks
            const currentCellDateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
            const dayTasks = dummyTasks.filter(t => t.date === currentCellDateStr);
            const isToday = day === 27 && month === 5 && year === 2026; // June 27, 2026

            return (
              <div 
                key={`day-${day}`} 
                className={`p-2 flex flex-col justify-between transition-all hover:bg-gray-900/30 relative group select-none ${
                  isToday ? "bg-indigo-950/20" : ""
                }`}
              >
                {/* Day Number */}
                <div className="flex justify-between items-center">
                  <span className={`text-xs font-bold font-mono p-1 rounded-md w-6 h-6 flex items-center justify-center ${
                    isToday 
                      ? "bg-indigo-500 text-white shadow-md shadow-indigo-500/30" 
                      : "text-gray-400 group-hover:text-gray-200"
                  }`}>
                    {day}
                  </span>
                </div>

                {/* Tasks Container ee maalin kasta */}
                <div className="flex-1 mt-1.5 space-y-1 overflow-y-auto custom-scrollbar relative z-10 max-h-[85px]">
                  {dayTasks.map((task) => (
                    <div 
                      key={task.id} 
                      className={`text-[10px] md:text-[11px] px-2 py-1 rounded-md border truncate font-medium flex flex-col gap-0.5 shadow-sm transition-all hover:scale-[1.01] ${priorityColors[task.priority]}`}
                      title={`${task.title} at ${task.time}`}
                    >
                      <span className="font-semibold tracking-wide truncate">{task.title}</span>
                      <div className="flex items-center gap-1 text-[9px] opacity-80">
                        <Clock size={9} />
                        <span>{task.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}