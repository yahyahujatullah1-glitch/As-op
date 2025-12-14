"use client";
import { motion } from "framer-motion";
import { SITE_DATA } from "@/lib/data";
import { Gamepad2, Youtube } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-grid -z-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-float" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4 text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-4 px-4 py-1 rounded-full border border-neon/50 bg-neon/10 text-neon text-sm font-bold tracking-wider uppercase"
        >
          Official Community Portal
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-orbitron text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 glow-text mb-6 tracking-tighter"
        >
          {SITE_DATA.hero.title}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          {SITE_DATA.hero.subtitle}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <a 
            href={SITE_DATA.links.items[0].url} 
            target="_blank"
            className="group relative flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-xl font-bold transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(139,92,246,0.5)]"
          >
            <Gamepad2 className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            {SITE_DATA.hero.ctaPrimary}
          </a>
          
          <a 
            href={SITE_DATA.links.items[1].url}
            target="_blank" 
            className="group flex items-center justify-center gap-3 bg-transparent border border-white/20 hover:border-red-500 text-white hover:bg-red-500/10 px-10 py-4 rounded-xl font-bold transition-all hover:scale-105"
          >
            <Youtube className="w-5 h-5 text-red-500 group-hover:text-red-400" />
            {SITE_DATA.hero.ctaSecondary}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
