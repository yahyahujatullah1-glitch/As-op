"use client";
import { motion } from "framer-motion";
import { MessageCircle, PlayCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#0a0e27]">
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse -z-10" />
      
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
        
        {/* Status Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-xs font-rajdhani font-medium tracking-wide text-green-400 uppercase">Grand Mobile RP Live</span>
        </motion.div>

        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="font-orbitron text-7xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 mb-4 drop-shadow-[0_0_25px_rgba(220,38,38,0.3)]"
        >
          AS OP
        </motion.h1>

        {/* Subtitle */}
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-rajdhani text-xl md:text-2xl font-medium text-secondary mb-10 max-w-2xl uppercase tracking-widest drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]"
        >
            Gaming Community & <span className="text-white">Grand Mobile RP Marketplace</span>
        </motion.h2>

        <p className="text-gray-400 max-w-lg mb-12 text-base md:text-lg leading-relaxed font-inter">
            Join the most elite gaming community. Trade, compete, and dominate in the ultimate Grand Mobile RP experience.
        </p>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-5 w-full justify-center"
        >
          <button className="group relative flex items-center justify-center gap-3 w-full sm:w-auto h-14 px-8 rounded bg-primary text-white font-rajdhani font-bold text-lg tracking-wide overflow-hidden transition-all hover:scale-105 hover:bg-primary/90 shadow-[0_0_15px_rgba(220,38,38,0.4)]">
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Join Discord Server</span>
          </button>
          <button className="group flex items-center justify-center gap-3 w-full sm:w-auto h-14 px-8 rounded bg-transparent border border-white/20 text-white font-rajdhani font-bold text-lg tracking-wide transition-all hover:bg-white/5 hover:border-secondary hover:text-secondary hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]">
            <PlayCircle className="w-5 h-5 text-red-500 group-hover:text-secondary transition-colors" />
            <span>Watch on YouTube</span>
          </button>
        </motion.div>

        {/* Stats Grid */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 border-t border-white/5 pt-10 w-full max-w-4xl">
           {[
               { val: "50K+", label: "Members" },
               { val: "2.4M", label: "Trades" },
               { val: "24/7", label: "Support" },
               { val: "Top 1", label: "Ranked" }
           ].map((item, i) => (
               <div key={i} className="flex flex-col items-center">
                   <span className="font-orbitron text-3xl font-bold text-white">{item.val}</span>
                   <span className="text-xs text-gray-500 uppercase tracking-widest font-rajdhani font-bold">{item.label}</span>
               </div>
           ))}
        </div>

      </div>
    </section>
  );
}
