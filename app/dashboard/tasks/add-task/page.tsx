"use client";

import { createTask } from "@/app/form/(tasks)/actions";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { Sparkles, Calendar as CalendarIcon, AlertTriangle } from "lucide-react";

const initialMessage = {
  message: "",
  success: false,
};

const priorities = ["low", "medium", "high", "urgent"];
const statuses = ["todo", "in-progress", "done", "cancelled"];

export default function EssentialTaskPage() {
  const [state, formAction, isPending] = useActionState(
    createTask,
    initialMessage,
  );

  const router = useRouter();

  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      toast.success(state.message);
      setTimeout(() => {
        router.push("/dashboard/tasks");
      }, 1200);
    } else {
      toast.error(state.message);
    }
  }, [state, router]);

  return (
    <div className="min-h-screen bg-[#070A13] text-gray-200 font-sans flex items-center justify-center p-6 relative overflow-hidden flex-1">
      
      {/* Glow Effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-3xl w-full bg-gradient-to-b from-gray-900/40 to-gray-950/60 border border-gray-800/60 p-8 rounded-2xl shadow-2xl backdrop-blur-xl relative z-10">
        
        {/* Header */}
        <div className="mb-8 border-b border-gray-900 pb-5">
          <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1.5 rounded-full text-[11px] font-bold text-indigo-400 tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Task Creation</span>
          </div>
          <h1 className="text-2xl font-black tracking-tight text-white">
            Essential <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Task</span>
          </h1>
          <p className="text-gray-400 text-xs font-light mt-1">
            Define the core objective without clutter.
          </p>
        </div>

        <form action={formAction} className="space-y-5">
          {/* Task Title */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">
              Task Title
            </label>
            <input
              name="title"
              type="text"
              required
              placeholder="What needs to be done?"
              className="w-full bg-[#0D1220] border border-gray-800 rounded-xl px-4 py-3 text-sm text-gray-100 placeholder-gray-600 focus:outline-none focus:border-indigo-500 transition-all duration-150"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Add context, links, or notes..."
              rows={4}
              className="w-full bg-[#0D1220] border border-gray-800 rounded-xl px-4 py-3 text-sm text-gray-100 placeholder-gray-600 focus:outline-none focus:border-indigo-500 transition-all duration-150 resize-none"
            />
          </div>

          {/* Due Date + Priority */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* DUE DATE */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                Due Date
              </label>
              <input
                type="date"
                name="dueDate"
                required
                className="w-full bg-[#0D1220] border border-gray-800 rounded-xl px-4 py-3 text-sm text-gray-400 focus:outline-none focus:border-indigo-500 transition-all duration-150 custom-date-icon"
              />
            </div>
            
            {/* PRIORITY */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                Priority
              </label>
              <select
                name="priority"
                className="w-full bg-[#0D1220] border border-gray-800 rounded-xl px-4 py-3 text-sm text-gray-300 focus:outline-none focus:border-indigo-500 transition-all duration-150 uppercase tracking-wide font-mono text-[12px]"
              >
                {priorities.map((p) => (
                  <option key={p} value={p} className="bg-[#0D1220] text-gray-300">{p}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Status */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">
              Status
            </label>
            <select
              name="status"
              className="w-full bg-[#0D1220] border border-gray-800 rounded-xl px-4 py-3 text-sm text-gray-300 focus:outline-none focus:border-indigo-500 transition-all duration-150 uppercase tracking-wide font-mono text-[12px]"
            >
              {statuses.map((s) => (
                <option key={s} value={s} className="bg-[#0D1220] text-gray-300">{s}</option>
              ))}
            </select>
          </div>

          {/* Actions Footer */}
          <div className="pt-6 border-t border-gray-900/60 mt-8">
            <div className="flex items-center justify-end gap-3">
              <button 
                type="button"
                onClick={() => router.back()}
                className="px-5 py-3 text-xs font-semibold text-gray-500 hover:text-gray-300 transition-colors"
              >
                Cancel
              </button>
              <button 
                type="submit"
                disabled={isPending}
                className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold px-6 py-3 rounded-xl shadow-lg shadow-indigo-600/10 transition-all active:scale-[0.98] disabled:opacity-50"
              >
                {isPending ? "Creating..." : "Create Task"}
              </button>
            </div>
          </div>
        </form>

      </div>
    </div>
  );
}