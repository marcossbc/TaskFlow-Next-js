import { getUserTasks } from "@/app/form/(tasks)/actions";
import { Task } from "@/app/types/Task";
import Menu from "./Menu";
import { Calendar, AlertCircle, CheckCircle2, Circle } from "lucide-react";

export default async function TaskList({ filter }: { filter: string }) {
  const { data } = await getUserTasks();
  const allTasks: Task[] = data ?? [];

  const tasks =
    filter === "all"
      ? allTasks
      : allTasks.filter((task) => task.status === filter);

  // Maareynta Midabyada Priority-ga ee naqshadda madow (Urgent waa lagu daray)
  const getPriorityStyles = (priority: string) => {
    switch (priority?.toLowerCase()) {
      case "urgent":
        return "bg-purple-500/10 border-purple-500/30 text-purple-400";
      case "high":
        return "bg-red-500/10 border-red-500/20 text-red-400";
      case "medium":
        return "bg-amber-500/10 border-amber-500/20 text-amber-400";
      default: // Low
        return "bg-emerald-500/10 border-emerald-500/20 text-emerald-400";
    }
  };

  return (
    <div className="w-full">
      {tasks.length === 0 ? (
        // Naqshadda Empty State oo la iftiimiyay si ay u muuqato
        <div className="flex flex-col items-center justify-center py-16 px-6 bg-[#0D1220]/50 border border-gray-800/60 rounded-2xl text-center backdrop-blur-sm">
          <div className="bg-gray-800/50 p-4 rounded-full mb-4">
            <AlertCircle className="w-8 h-8 text-indigo-400" />
          </div>
          <h3 className="text-gray-200 font-semibold mb-1">No tasks found</h3>
          <p className="text-sm text-gray-500 font-light">There are no tasks matching your current filter.</p>
        </div>
      ) : (
        // Nidaamka Grid-ka oo responsive ah
        <ul className="gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {tasks.map((task: Task) => (
            <li
              key={task._id}
              className="group bg-[#0D1220] hover:bg-[#111729] border border-gray-800/80 p-5 rounded-2xl shadow-lg hover:shadow-indigo-500/5 hover:border-indigo-500/40 transition-all duration-300 relative overflow-hidden flex flex-col justify-between min-h-[190px]"
            >
              {/* Status Indicator Glow Line - Hadda waa mid aad u khafiif ah */}
              <div className={`absolute top-0 left-0 w-full h-[2px] transition-colors duration-300 ${
                task.status === "completed" ? "bg-emerald-500/50" : "bg-indigo-500/50"
              }`} />

              {/* Qaybta Sare ee Card-ka */}
              <div className="flex justify-between items-start gap-3 mb-4">
                <div className="flex items-start gap-3 flex-1 min-w-0 pt-1">
                  {/* Astaanta Wareegga ah */}
                  <div className="shrink-0 mt-0.5">
                    {task.status === "completed" ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    ) : (
                      <Circle className="w-5 h-5 text-gray-600 group-hover:text-indigo-400 transition-colors" />
                    )}
                  </div>
                  
                  {/* Cinwaanka iyo Faahfaahinta (pl-6 waa laga saaray si ay isku toosaan) */}
                  <div className="space-y-1.5 flex-1 min-w-0">
                    <h2 className={`text-[15px] font-bold truncate tracking-wide transition-colors ${
                      task.status === "completed" ? "text-gray-500 line-through" : "text-gray-100 group-hover:text-white"
                    }`}>
                      {task.title}
                    </h2>
                    <p className="text-[13px] text-gray-400 font-light line-clamp-2 leading-relaxed">
                      {task.description}
                    </p>
                  </div>
                </div>
                
                {/* Meeshii Sadexda dhibcood (Menu) */}
                <div className="shrink-0 z-10 bg-gray-900/50 rounded-md opacity-80 hover:opacity-100 transition-opacity">
                  <Menu task={task} />
                </div>
              </div>

              {/* Qaybta Hoose (Footer Card) */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-800/80 mt-auto">
                {/* Due Date */}
                <div className="flex items-center gap-1.5 text-gray-500 bg-gray-900/50 px-2.5 py-1 rounded-md">
                  <Calendar size={13} className="text-gray-400" />
                  <span className="text-[11px] font-medium tracking-wide">
                    {new Date(task.dueDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                  </span>
                </div>

                {/* Dynamic Priority Badge */}
                <div className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border ${getPriorityStyles(task.priority)}`}>
                  {task.priority}
                </div>
              </div>

            </li>
          ))}
        </ul>
      )}
    </div>
  );
}