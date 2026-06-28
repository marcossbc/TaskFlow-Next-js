"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Layers, Sparkles } from "lucide-react";

export default function LoginPage() {
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  const handleCredentialsLogin = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    setIsPending(true);

    const formData = new FormData(e.currentTarget);

    const result = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    setIsPending(false);

    if (result?.error) {
      toast.error("Invalid email or password");
    } else {
      toast.success("Successfully logged in");
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-gray-100 font-sans selection:bg-indigo-500 selection:text-white flex overflow-hidden relative">
      
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-gray-950 via-[#0D1220] to-gray-950 border-r border-gray-800/60 p-12 flex-col justify-between relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[80px]" />
        
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
          <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/30 px-3 py-1.5 rounded-full text-xs font-semibold text-indigo-400 tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Welcome Back</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
            Login For account <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Sign in to your account
            </span>
          </h1>
          <p className="text-gray-400 font-light max-w-md leading-relaxed">
            Log back into your workspace to manage your tasks, sync with your team, and maintain peak efficiency.
          </p>
        </div>

        {/* Footer info */}
        <p className="text-xs text-gray-500 relative z-10">
          © 2026 TaskFlow Systems Inc. All rights reserved.
        </p>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-8 relative z-10">
        <div className="w-full max-w-md space-y-8">
          
          <div className="text-center lg:text-left space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Sign in to your account
            </h2>
            <p className="text-sm text-gray-400 font-light">
              Enter your credentials to access your dashboard.
            </p>
          </div>

          <div className="bg-gradient-to-b from-gray-900/50 to-gray-950/50 border border-gray-800/80 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
            
            <button
              type="button"
              onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
              className="w-full flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl border border-gray-800 text-sm font-medium text-gray-200 hover:bg-gray-800 hover:text-white transition-all duration-150 shadow-md"
            >
              <GoogleIcon />
              <span>Continue with Google</span>
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 my-6">
              <span className="flex-1 h-px bg-gray-800/80"></span>
              <span className="text-xs text-gray-500 font-mono">or</span>
              <span className="flex-1 h-px bg-gray-800/80"></span>
            </div>

            {/* Login Form */}
            <form onSubmit={handleCredentialsLogin} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-medium text-gray-300">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-800 bg-[#0D1220] text-sm text-gray-100 placeholder:text-gray-600 focus:outline-none focus:border-indigo-500 transition-all duration-150"
                />
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <label htmlFor="password" className="text-xs font-medium text-gray-300">
                    Password
                  </label>
                </div>
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
                {isPending ? "Logging in..." : "Login to Workspace"}
              </button>
            </form>
          </div>

          <p className="text-center lg:text-left text-sm text-gray-400 font-light">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}