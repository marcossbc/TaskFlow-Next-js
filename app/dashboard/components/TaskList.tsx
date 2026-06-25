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

  // Maareynta Midabyada Priority-ga ee naqshadda madow
  const getPriorityStyles = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-500/10 border-red-500/20 text-red-400";
      case "medium":
        return "bg-amber-500/10 border-amber-500/20 text-amber-400";
      default:
        return "bg-emerald-500/10 border-emerald-500/20 text-emerald-400";
    }
  };

  return (
    <div className="w-full">
      {tasks.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-12 bg-gray-900/10 border border-gray-900 rounded-2xl text-center">
          <AlertCircle className="w-8 h-8 text-gray-600 mb-3" />
          <p className="text-sm text-gray-500 font-light">No tasks found in this section.</p>
        </div>
      ) : (
        // Nidaamka Grid-ka oo responsive ah (1 tiir ilaa 4 tiir)
        <ul className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {tasks.map((task: Task) => (
            <li
              key={task._id}
              className="group bg-gradient-to-b from-gray-900/30 to-gray-950/50 border border-gray-800/60 p-5 rounded-2xl shadow-xl shadow-black/10 hover:border-indigo-500/30 hover:-translate-y-0.5 transition-all duration-200 relative overflow-hidden flex flex-col justify-between min-h-[180px]"
            >
              {/* Status Indicator Glow Line */}
              <div className={`absolute top-0 left-0 w-full h-[2px] ${
                task.status === "completed" ? "bg-emerald-500/40" : "bg-indigo-500/40"
              }`} />

              <div className="flex justify-between items-start gap-2 mb-3">
                <div className="space-y-1.5 flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    {task.status === "completed" ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    ) : (
                      <Circle className="w-4 h-4 text-indigo-400 shrink-0" />
                    )}
                    <h2 className="text-[14px] font-bold text-gray-100 truncate tracking-wide group-hover:text-white transition-colors">
                      {task.title}
                    </h2>
                  </div>
                  <p className="text-xs text-gray-500 font-light line-clamp-2 leading-relaxed pl-6">
                    {task.description}
                  </p>
                </div>
                
                {/* Meeshii Sadexda dhibcood (Menu) */}
                <div className="shrink-0 z-10">
                  <Menu task={task} />
                </div>
              </div>

              {/* Qaybta Hoose (Footer Card) */}
              <div className="flex items-center justify-between pt-3 border-t border-gray-900/60 mt-auto pl-6">
                {/* Due Date */}
                <div className="flex items-center gap-1.5 text-gray-500">
                  <Calendar size={12} className="text-gray-600" />
                  <span className="text-[10.5px] font-mono">
                    {new Date(task.dueDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                  </span>
                </div>

                {/* Dynamic Priority Badge */}
                <div className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider border ${getPriorityStyles(task.priority)}`}>
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