"use client";
import Link from "next/link";
// import Link from "next/navigation";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CheckSquare,
  Calendar,
  Settings,
  HelpCircle,
  LogOut,
  Contact,
  Layers,
  ChevronRight,
} from "lucide-react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Image from "next/image";

const nameSkeleton = (
  <span className="inline-block w-16 h-3 bg-gray-800 rounded animate-pulse" />
);
const emailSkeleton = (
  <span className="inline-block w-24 h-2 mt-1.5 bg-gray-800 rounded animate-pulse" />
);

const navItems = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "My Tasks", href: "/dashboard/tasks", icon: CheckSquare },
  { label: "Profile Matrics", href: "/dashboard/profile", icon: Contact },
  { label: "Schedule", href: "/dashboard/calendar", icon: Calendar },
  { label: "Preferences", href: "/dashboard/settings", icon: Settings },
];

export default function Sidebar() {
  const { data: session } = useSession();

  const username = session?.user?.name || "";
  const email = session?.user?.email || "";
  const image = session?.user?.image;

  const initials = username
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen flex flex-col bg-[#070A13] border-r border-indigo-500/10 sticky top-0 text-gray-200 font-sans select-none overflow-hidden">
      
      {/* Background Decorative Glow (Aura) */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-indigo-600/10 rounded-full blur-[50px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-36 h-36 bg-purple-600/5 rounded-full blur-[60px] pointer-events-none" />

      {/* 1. PREMIUM BRAND HEADER */}
      <div className="px-6 h-24 flex items-center justify-between relative z-10">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-[1px] shadow-lg shadow-indigo-500/10">
            <div className="w-full h-full bg-[#070A13] rounded-xl flex items-center justify-center">
              <Layers className="w-4 h-4 text-indigo-400" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-black tracking-widest text-white uppercase bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              TaskFlow
            </span>
            <span className="text-[9px] text-indigo-400 font-mono tracking-wider uppercase">Workspace v1.0</span>
          </div>
        </div>
      </div>

      {/* 2. CARD-STYLE USER PROFILE (Glassmorphism Concept) */}
      <div className="px-4 mb-4 relative z-10">
        <div className="p-3.5 bg-gradient-to-b from-gray-900/40 to-gray-950/60 border border-gray-800/60 rounded-2xl backdrop-blur-md flex items-center gap-3 shadow-xl shadow-black/20">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-xs font-bold text-white shrink-0 overflow-hidden ring-2 ring-gray-900/50">
            {image ? (
              <Image
                src={image}
                alt={username}
                width={36}
                height={36}
                className="w-full h-full object-cover"
              />
            ) : (
              initials || "IMG"
            )}
          </div>
          <div className="overflow-hidden flex-1">
            <div className="text-[12.5px] font-semibold text-gray-100 truncate tracking-wide">
              {username || nameSkeleton}
            </div>
            <div className="text-[10.5px] text-gray-500 truncate font-mono">
              {email || emailSkeleton}
            </div>
          </div>
        </div>
      </div>

      {/* 3. FLOATING LINK NAVIGATION */}
      <nav className="flex-1 flex flex-col gap-1.5 px-4 py-4 overflow-y-auto relative z-10 custom-scrollbar">
        <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest pl-3 mb-1 block">Menu Options</span>
        
        {navItems.map(({ label, href, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-[13px] transition-all duration-300 relative group ${
                isActive
                  ? "bg-gradient-to-r from-indigo-950/40 via-indigo-900/20 to-transparent text-indigo-400 font-medium border-l-2 border-indigo-500 pl-[12px]"
                  : "text-gray-400 hover:text-gray-200 hover:bg-gray-900/30"
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon 
                  size={16} 
                  className={`transition-transform duration-300 ${
                    isActive 
                      ? "text-indigo-400" 
                      : "text-gray-500 group-hover:text-indigo-400 group-hover:scale-110"
                  }`} 
                />
                <span className="tracking-wide">{label}</span>
              </div>
              
              {/* Sleek arrow that appears on hover for inactive links */}
              <ChevronRight 
                size={12} 
                className={`transition-all duration-300 opacity-0 -translate-x-2 ${
                  isActive ? "opacity-100 translate-x-0 text-indigo-400" : "group-hover:opacity-100 group-hover:translate-x-0 text-gray-600"
                }`} 
              />
            </Link>
          );
        })}
      </nav>

      {/* 4. ISOLATED FOOTER ACTION BUTTONS */}
      <div className="p-4 bg-[#05070D]/80 border-t border-gray-900/60 relative z-10">
        <div className="flex flex-col gap-1">
          <Link
            href="/help"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-[12.5px] text-gray-500 hover:text-gray-300 hover:bg-gray-900/30 transition-all duration-200"
          >
            <HelpCircle size={15} className="text-gray-600" />
            <span className="tracking-wide">Documentation</span>
          </Link>
          
          <button
            onClick={() => signOut({ callbackUrl: "/login" })}
            type="button"
            className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-[12.5px] text-gray-500 hover:bg-red-950/10 hover:text-red-400 transition-all duration-200 group"
          >
            <LogOut size={15} className="text-gray-600 group-hover:text-red-400/80 transition-colors" />
            <span className="font-semibold tracking-wide">Secure Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
}