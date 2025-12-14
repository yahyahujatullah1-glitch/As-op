"use client";
import { motion } from "framer-motion";
import { SITE_DATA } from "@/lib/data";
import { Gamepad2, Youtube } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-grid -z-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-xs font-rajdhani font-bold tracking-widest text-gray-300 uppercase">Grand Mobile RP Live</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="font-orbitron text-7xl md:text-9xl font-black text-white mb-4 tracking-tighter drop-shadow-[0_0_30px_rgba(220,38,38,0.3)]"
        >
          {SITE_DATA.hero.title}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-rajdhani text-xl md:text-2xl text-secondary mb-8 uppercase tracking-[0.2em]"
        >
          Gaming Community & <span className="text-white">Grand Mobile RP Marketplace</span>
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
            className="flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-red-800 text-white px-10 py-4 rounded font-rajdhani font-bold text-lg tracking-wide hover:scale-105 transition-transform shadow-[0_0_20px_rgba(220,38,38,0.4)]"
          >
            <Gamepad2 className="w-5 h-5" />
            {SITE_DATA.hero.ctaPrimary}
          </a>
          
          <a 
            href={SITE_DATA.links.items[1].url}
            target="_blank" 
            className="flex items-center justify-center gap-3 bg-transparent border border-white/20 hover:bg-white/5 text-white px-10 py-4 rounded font-rajdhani font-bold text-lg tracking-wide transition-all"
          >
            <Youtube className="w-5 h-5 text-primary" />
            {SITE_DATA.hero.ctaSecondary}
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-white/5 pt-12"
        >
            {[
                { label: "Members", val: "50K+" },
                { label: "Trades", val: "2.4M" },
                { label: "Support", val: "24/7" },
                { label: "Ranked", val: "Top 1" }
            ].map((stat, i) => (
                <div key={i}>
                    <div className="font-orbitron text-3xl font-bold text-white">{stat.val}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest font-rajdhani font-bold">{stat.label}</div>
                </div>
            ))}
        </motion.div>
      </div>
    </section>
  );
}
