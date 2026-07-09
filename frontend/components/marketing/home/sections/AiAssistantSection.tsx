"use client";

import { Sparkles, ArrowRight, Bot, Zap, LineChart, Code } from "lucide-react";
import { motion } from "framer-motion";

export function AiAssistantSection() {
  const capabilities = [
    { name: "SEO Optimization", icon: <LineChart className="h-5 w-5" /> },
    { name: "Ad Campaigns", icon: <Zap className="h-5 w-5" /> },
    { name: "Code Generation", icon: <Code className="h-5 w-5" /> },
    { name: "Workflow Automation", icon: <Bot className="h-5 w-5" /> },
  ];

  return (
    <section className="relative overflow-hidden bg-brand-ink py-24 text-white sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary-900/20 via-brand-ink to-brand-ink" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="flex max-w-fit items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-1.5 text-sm font-semibold text-primary-400">
              <Sparkles className="h-4 w-4" /> Meet Growthik AI
            </div>
            <h2 className="mt-6 text-3xl font-black leading-tight sm:text-4xl">
              Your intelligent copilot for business growth
            </h2>
            <p className="mt-6 text-lg font-semibold leading-relaxed text-white/70">
              From writing optimized blog posts to generating full React components, Growthik AI understands your business context and executes tasks autonomously across the platform.
            </p>
            
            <div className="mt-10 grid grid-cols-2 gap-4">
              {capabilities.map((cap, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  key={cap.name} 
                  className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/5 p-4 transition-colors hover:bg-white/10"
                >
                  <div className="rounded-md bg-primary-600/20 p-2 text-primary-400">
                    {cap.icon}
                  </div>
                  <span className="font-semibold">{cap.name}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 flex">
              <button className="group flex items-center gap-2 font-semibold text-primary-400 hover:text-primary-300">
                Explore all AI capabilities <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative lg:ml-auto"
          >
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-primary-600 to-purple-600 opacity-30 blur-2xl"></div>
            <div className="relative flex h-[500px] w-full max-w-md flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A] shadow-2xl">
              <div className="flex items-center gap-3 border-b border-white/10 bg-white/5 p-4">
                <Sparkles className="h-5 w-5 text-primary-400" />
                <span className="font-semibold">Growthik AI</span>
              </div>
              <div className="flex-1 space-y-4 p-4">
                <div className="flex justify-end">
                  <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-primary-600 p-3 text-sm font-medium">
                    Analyze our Q3 SEO performance and suggest keywords for Q4.
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-2xl rounded-tl-sm border border-white/10 bg-white/5 p-3 text-sm font-medium text-white/80">
                    <p>I've analyzed the data. Your top performing keyword was "SaaS marketing tools" (+24% MoM).</p>
                    <p className="mt-2">For Q4, I suggest targeting:</p>
                    <ul className="mt-1 list-inside list-disc opacity-80">
                      <li>AI marketing automation</li>
                      <li>Enterprise SEO platforms</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="border-t border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-4 py-2">
                  <span className="text-sm font-medium text-white/40">Ask Growthik AI...</span>
                  <div className="ml-auto rounded-full bg-primary-600 p-1">
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}