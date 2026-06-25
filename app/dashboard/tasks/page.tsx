import { Suspense } from "react";
import TaskList from "../components/TaskList";
import TaskSkeleton from "../components/TaskSkeleton";
import { CheckSquare } from "lucide-react";

interface Props {
  searchParams: Promise<{ filter?: string }>;
}

export default async function TaskPage({ searchParams }: Props) {
  const { filter: rawFilter } = await searchParams;
  const filter = rawFilter || "all";

  return (
    <div className="min-h-screen bg-[#070A13] text-gray-200 font-sans p-6 md:p-10 relative overflow-hidden flex-1">
      
      {/* Glow Backgrounds */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10 space-y-8">
        
        {/* Upper Title Section */}
        <div className="space-y-2 border-b border-gray-900 pb-5">
          <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1.5 rounded-full text-[11px] font-bold text-indigo-400 tracking-widest uppercase">
            <CheckSquare className="w-3.5 h-3.5" />
            <span>Workspace Tracking</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            My <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Tasks</span>
          </h1>
          <p className="text-gray-400 text-sm font-light">
            Review, filter, and modify your ongoing workspace objectives and sprint goals.
          </p>
        </div>

        {/* Dynamic Suspense Content Area */}
        <main className="w-full">
          <Suspense key={filter} fallback={<TaskSkeleton />}>
            <TaskList filter={filter} />
          </Suspense>
        </main>
        
      </div>
    </div>
  );
}