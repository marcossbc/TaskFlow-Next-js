"use client";

import Link from "next/link";
import { register } from "../form/actions";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Layers, Sparkles } from "lucide-react";

const initialMessage = {
  message: "",
  success: false,
};

export default function RegisterPage() {
  const [state, formAction, isPending] = useActionState(register, initialMessage);
  const router = useRouter();

  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      toast.success(state.message);
      setTimeout(() => {
        router.push("/login");
      }, 1300);
    } else {
      toast.error(state.message);
    }
  }, [state, router]);

  return (

  
    <div className="min-h-screen bg-[#0B0F19] text-gray-100 font-sans selection:bg-indigo-500 selection:text-white flex overflow-hidden relative">
       
      
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* LEFT SIDE: Visual Brand Showcase (Hidden on Mobile) */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-gray-950 via-[#0D1220] to-gray-950 border-r border-gray-800/60 p-12 flex-col justify-between relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[80px]" />
        
        {/* Logo */}
        <div className="flex items-center space-x-3 relative z-10">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <Layers className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            TaskFlow
          </span>
        </div>

        {/* Big Catchy Text */}
        <div className="space-y-6 relative z-10 my-auto">
          
          <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/30 px-3 py-1.5 rounded-full text-xs font-semibold text-purple-400 tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get Started Free</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
            Create Your <br />
            <span className="bg-gradient-to-r  from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              NEW ACCOUNT 
            </span>
          </h1>
          <p className="text-gray-400 font-light max-w-md leading-relaxed">
            Join thousands of developers and teams organizing their workflows, tracking hours, and completing big projects seamlessly.
          </p>
        </div>

        {/* Footer info */}
        <p className="text-xs text-gray-500 relative z-10">
          © 2026 TaskFlow Systems Inc. All rights reserved.
        </p>
      </div>

      {/* RIGHT SIDE: Clean Modern Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-8 relative z-10">
        <div className="w-full max-w-md space-y-8">
          
          <div className="text-center lg:text-left space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Create a new account
            </h2>
            <p className="text-sm text-gray-400 font-light">
              Get started with your free account google authuaction.
            </p>
          </div>

          <div className="bg-gradient-to-b from-gray-900/50 to-gray-950/50 border border-gray-800/80 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
            <form action={formAction} className="flex flex-col gap-4">
              
              {/* Full Name Input */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="username"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-800 bg-[#0D1220] text-sm text-gray-100 placeholder:text-gray-600 focus:outline-none focus:border-indigo-500 transition-all duration-150"
                />
              </div>

              {/* Email Input */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="gmail@example.com"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-800 bg-[#0D1220] text-sm text-gray-100 placeholder:text-gray-600 focus:outline-none focus:border-indigo-500 transition-all duration-150"
                />
              </div>

              {/* Password Input */}
              <div className="flex flex-col gap-2">
                <label htmlFor="password" className="text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-800 bg-[#0D1220] text-sm text-gray-100 placeholder:text-gray-600 focus:outline-none focus:border-indigo-500 transition-all duration-150"
                />
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="w-full mt-2 inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-3 rounded-xl shadow-lg shadow-indigo-600/20 transition-all active:scale-[0.98] disabled:opacity-50"
              >
                {isPending ? "Registering Account..." : "Create Account"}
              </button>
            </form>
          </div>

          <p className="text-center lg:text-left text-sm text-gray-400 font-light">
            Already have an account?{" "}
            <Link href="/login" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}