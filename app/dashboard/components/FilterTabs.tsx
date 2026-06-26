"use client";

import { useRouter, usePathname } from "next/navigation";

const tabs = [
  { key: "all", label: "All Tasks" },
  { key: "todo", label: "To Do" },
  { key: "in-progress", label: "In Progress" },
  { key: "done", label: "Completed" }, 
];

export default function FilterTabs({ activeFilter }: { activeFilter: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleFilter = (key: string) => {
    router.push(`${pathname}?filter=${key}`);
  };

  return (
    <div className="flex items-center gap-1 sm:gap-2 border-b border-gray-900 pb-px overflow-x-auto no-scrollbar">
      {tabs.map(({ key, label }) => {
        const isActive = activeFilter === key;
        
        return (
          <button
            key={key}
            onClick={() => handleFilter(key)}
            className={`px-4 py-3 text-xs sm:text-sm font-medium transition-all duration-200 relative border-b-2 tracking-wide whitespace-nowrap outline-none ${
              isActive
                ? "border-indigo-500 text-white font-bold bg-indigo-500/5"
                : "border-transparent text-gray-500 hover:text-gray-300 hover:border-gray-800"
            }`}
          >
            <span>{label}</span>

            {isActive && (
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-[4px] bg-indigo-400 rounded-full blur-[2px] opacity-80" />
            )}
          </button>
        );
      })}
    </div>
  );
}