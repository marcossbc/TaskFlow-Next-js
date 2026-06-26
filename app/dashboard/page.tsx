import { Suspense } from "react";
import { getUserTasks } from "../form/(tasks)/actions";
import { Task } from "../types/Task";
import FilterTabs from "./components/FilterTabs";
import TaskList from "./components/TaskList";
import TaskSkeleton from "./components/TaskSkeleton";
import WelcomePage from "./components/WelcomePage";

interface Props {
  searchParams: Promise<{ filter?: string }>;
}

export default async function Page({ searchParams }: Props) {
  const { filter: rawFilter } = await searchParams;
  const filter = rawFilter || "all";

  const { data } = await getUserTasks();
  const tasks: Task[] = data ?? [];

  return (
    // 1. Waxaan siinnay midabka madow ee rasmiga ah (#070A13) iyo layout siman
    <div className="min-h-screen bg-[#070A13] text-gray-200 font-sans p-6 md:p-10 relative overflow-hidden flex-1">
      
      {/* Glow Effect ka dhigaya gadaasha mid aad u casri ah */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Weelka dhexe ee xogta xajisanaya (Max-width) */}
      <div className="max-w-6xl mx-auto relative z-10 space-y-8">
        
        {/* Qaybta Soo dhawaynta (Welcome Page Header) */}
        <header className="w-full border-b border-gray-900 pb-2">
          <WelcomePage tasks={tasks} />
        </header>
        
        <FilterTabs activeFilter={filter} />
        
        {/* Qaybta Liiska Task-yada oo leh Loading Skeleton */}
        <main className="w-full">
          <Suspense key={filter} fallback={<TaskSkeleton />}>
            <TaskList filter={filter} /> 
          </Suspense>
        </main>
        
      </div>
    </div>
  );
}