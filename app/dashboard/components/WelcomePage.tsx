import { Task } from "@/app/types/Task";
import { Plus, Sparkles, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import React from "react";

const WelcomePage = ({ tasks }: { tasks: Task[] }) => {
  // Waxaan xisaabinaynaa task-yada weli dhiman (kuwa aan "done" ahayn)
  const pendingTasks = tasks.filter(task => task.status !== "done" && task.status !== "completed").length;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-gray-800/80 bg-gradient-to-r from-indigo-950/40 via-gray-900/40 to-purple-950/30 p-6 md:p-8 shadow-2xl backdrop-blur-xl w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      
      {/* Glow Effects ee gudaha banner-ka */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Qaybta Qoraalka (Text Section) */}
      <div className="space-y-2 relative z-10">
        <div className="inline-flex items-center space-x-1.5 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 rounded-md text-[11px] font-bold text-indigo-400 tracking-wider uppercase">
          <LayoutDashboard className="w-3.5 h-3.5" />
          <span>Overview</span>
        </div>
        
        <h1 className="text-2xl md:text-3xl font-black tracking-tight text-white flex items-center gap-2">
          Productivity <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Dashboard</span>
          <Sparkles className="w-5 h-5 text-amber-400 hidden sm:inline" />
        </h1>
        
        <p className="text-xs md:text-sm text-gray-400 font-light max-w-xl">
          Welcome back! You have{" "}
          <span className="text-indigo-400 font-bold font-mono px-1.5 py-0.5 bg-indigo-500/10 rounded border border-indigo-500/20">
            {pendingTasks}
          </span>{" "}
          tasks to complete today. Keep up the momentum!
        </p>
      </div>

      {/* Badanka Add Task (Button Section) */}
      <Link
        href="/dashboard/tasks/add-task"
        className="relative z-10 shrink-0 inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs px-5 py-3 rounded-xl shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/30 active:scale-[0.98] transition-all duration-200 group w-full sm:w-auto"
      >
        <div className="flex gap-1.5 items-center">
          <Plus size={15} className="group-hover:rotate-90 transition-transform duration-200" />
          <span>Add Task</span>
        </div>
      </Link>
      
    </div>
  );
};

export default WelcomePage;