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
    <div className="min-h-screen bg-[#070A13] text-gray-200 font-sans p-6 md:p-10 relative overflow-hidden flex-1">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-8">
        <header className="w-full border-b border-gray-900 pb-2">
          <WelcomePage tasks={tasks} />
        </header>

        <FilterTabs activeFilter={filter} />

        <main className="w-full">
          <Suspense key={filter} fallback={<TaskSkeleton />}>
            <TaskList filter={filter} />
          </Suspense>
        </main>
      </div>
    </div>
  );
}
