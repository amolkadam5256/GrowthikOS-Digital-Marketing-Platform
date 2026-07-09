"use client";

import { BarChart3, Search, Mail, Megaphone, Users, Layout } from "lucide-react";
import { motion } from "framer-motion";

export function CoreProductGrid() {
  const products = [
    {
      title: "SEO Studio",
      description: "Advanced rank tracking, site audits, and AI-driven content optimization.",
      icon: <Search className="h-6 w-6" />,
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Ad Manager",
      description: "Unified cross-platform campaign management with predictive ROI.",
      icon: <Megaphone className="h-6 w-6" />,
      color: "from-orange-500/20 to-red-500/20",
    },
    {
      title: "Analytics Hub",
      description: "Real-time custom dashboards combining all your marketing data sources.",
      icon: <BarChart3 className="h-6 w-6" />,
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      title: "CRM & Sales",
      description: "Track leads, close deals, and manage pipelines automatically.",
      icon: <Users className="h-6 w-6" />,
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Email Marketing",
      description: "Visual builder for beautiful, highly converting automated sequences.",
      icon: <Mail className="h-6 w-6" />,
      color: "from-yellow-500/20 to-orange-500/20",
    },
    {
      title: "Website Builder",
      description: "No-code, component-based builder producing lightning-fast React sites.",
      icon: <Layout className="h-6 w-6" />,
      color: "from-indigo-500/20 to-blue-500/20",
    },
  ];

  return (
    <section className="bg-brand-ink py-24 text-white sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-black sm:text-4xl">Everything you need to scale</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-semibold text-white/60">
            A complete suite of integrated tools designed to replace your fragmented marketing stack.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              key={product.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A] p-8 transition-all hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
              <div className="relative z-10">
                <div className="mb-6 inline-flex rounded-xl bg-white/5 p-3 text-white">
                  {product.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold">{product.title}</h3>
                <p className="font-medium text-white/60 leading-relaxed">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}