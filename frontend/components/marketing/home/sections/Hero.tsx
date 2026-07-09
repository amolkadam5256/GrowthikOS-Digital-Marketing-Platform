"use client";

import Link from "next/link";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-ink pt-20 text-white lg:pt-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-900/40 via-brand-ink to-brand-ink" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mx-auto mb-8 flex max-w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-semibold backdrop-blur"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary-500"></span>
            GrowthikOS 2.0 is live. <Link href="/changelog" className="text-primary-400 hover:underline">See what's new &rarr;</Link>
          </motion.div>
          <h1 className="mx-auto max-w-4xl text-4xl font-black leading-tight sm:text-5xl">
            The AI-Powered Business Operating System
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-semibold leading-relaxed text-white/70">
            Build websites, manage SEO, run ads, automate workflows, and create white-label reports—all in one intelligent platform guided by AI agents.
          </p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link href="/signup" className="flex h-12 items-center gap-2 rounded-sm bg-primary-600 px-8 text-sm font-black text-white transition hover:bg-primary-500">
              Start Free Trial <ArrowRight className="h-4 w-4" />
            </Link>
            <button className="flex h-12 items-center gap-2 rounded-sm border border-white/20 px-8 text-sm font-black text-white transition hover:bg-white/10">
              <Play className="h-4 w-4" /> Watch Demo
            </button>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-white/50"
          >
            <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary-500" /> No credit card required</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary-500" /> 14-day free trial</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary-500" /> Cancel anytime</span>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          className="relative mt-20"
        >
          <div className="absolute -inset-1 rounded-xl bg-gradient-to-b from-primary-500/30 to-transparent opacity-50 blur-xl"></div>
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0A0A0A] shadow-2xl">
             <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
               <div className="flex gap-1.5">
                 <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
                 <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
                 <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
               </div>
               <div className="ml-4 flex h-6 w-full max-w-md items-center rounded bg-black/50 px-3 text-xs text-white/40">app.growthikos.com/dashboard</div>
             </div>
             <img src="/images/portfolio/growthikmedia-official-website.jpg" alt="Dashboard preview" className="w-full opacity-80 mix-blend-screen" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}