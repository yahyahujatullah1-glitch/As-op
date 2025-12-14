"use client";
import { motion } from "framer-motion";
import { SITE_DATA } from "@/lib/data";
import { ShieldCheck, Gamepad2, Headphones, Trophy, ArrowRight, MessageCircle } from "lucide-react";

export default function ServerInfo() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      
      {/* Decorative Glows */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* LEFT SIDE: Text Content (Sticky) */}
          <div className="lg:w-5/12 lg:sticky lg:top-24 flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-2"
            >
              <h2 className="text-secondary text-sm font-rajdhani font-bold tracking-[0.2em] uppercase mb-2 flex items-center">
                <span className="w-2 h-2 bg-secondary rounded-full mr-3 shadow-[0_0_10px_#06b6d4]"></span>
                Server Information
              </h2>
              <h1 className="text-white text-5xl md:text-7xl font-black font-orbitron leading-tight tracking-wide drop-shadow-xl">
                WHAT IS <span className="text-primary">AS OP?</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              <h3 className="text-white text-3xl font-bold font-orbitron">
                The Ultimate <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Gaming Hub</span>
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed font-inter">
                Dive into the Grand Mobile RP marketplace with guaranteed safe trading and a toxicity-free environment. Whether you're here to dominate the market or just chill, we've got a spot for you in our digital sanctuary.
              </p>
              
              <div className="border-l-2 border-primary/30 pl-6 py-2">
                <p className="text-gray-500 text-sm font-rajdhani font-semibold tracking-wide">
                  JOIN THOUSANDS OF GAMERS WHO HAVE FOUND THEIR HOME IN AS OP. EXPERIENCE LOW LATENCY, HIGH ENGAGEMENT, AND ZERO TOLERANCE FOR TOXICITY.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="https://discord.gg/bbJ6pnEFA2" 
                  target="_blank"
                  className="group flex items-center gap-3 bg-gradient-to-r from-primary to-red-900 text-white px-8 py-4 rounded-lg font-bold font-rajdhani text-sm tracking-wide shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:-translate-y-1 transition-all"
                >
                  <MessageCircle className="w-5 h-5 group-hover:animate-bounce" />
                  JOIN DISCORD
                </a>
                <button className="flex items-center gap-2 bg-surface border border-white/10 text-white px-8 py-4 rounded-lg font-bold font-rajdhani text-sm tracking-wide hover:bg-white/5 transition-colors group">
                  LEARN MORE <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Feature Cards Grid */}
          <div className="lg:w-7/12 w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card 1: Safe Trading (Full Width) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-surface border border-white/5 rounded-2xl p-8 md:col-span-2 group hover:border-primary/50 hover:bg-[#151829] transition-all duration-300 relative overflow-hidden"
            >
               <div className="absolute top-0 right-0 p-32 bg-primary/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-all" />
               
               <div className="flex items-center gap-4 mb-4 relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shadow-[0_0_15px_rgba(220,38,38,0.2)]">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-orbitron text-white">Safe Trading Protocol</h3>
               </div>
               <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                  Our verified middlemen and secure transaction protocols ensure 100% safety for every trade. Never worry about scammers again. We protect your assets like they are our own.
               </p>
            </motion.div>

            {/* Card 2: Grand Mobile RP */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-surface border border-white/5 rounded-2xl p-8 group hover:border-secondary/50 hover:bg-[#151829] transition-all duration-300"
            >
               <div className="flex justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-cyan-900/20 flex items-center justify-center text-secondary border border-secondary/20 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                    <Gamepad2 className="w-6 h-6" />
                  </div>
                  <Gamepad2 className="text-white/5 w-16 h-16 absolute right-4 top-4 rotate-12" />
               </div>
               <h3 className="text-lg font-bold font-orbitron text-white mb-2">Grand Mobile RP</h3>
               <p className="text-gray-400 text-sm">Exclusive marketplace for high-level accounts, rare currency, and unique in-game items.</p>
            </motion.div>

            {/* Card 3: Chill & Music */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-surface border border-white/5 rounded-2xl p-8 group hover:border-red-500/50 hover:bg-[#151829] transition-all duration-300"
            >
               <div className="flex justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-red-900/20 flex items-center justify-center text-red-400 border border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.1)]">
                    <Headphones className="w-6 h-6" />
                  </div>
                  <Headphones className="text-white/5 w-16 h-16 absolute right-4 top-4 -rotate-12" />
               </div>
               <h3 className="text-lg font-bold font-orbitron text-white mb-2">Chill & Music</h3>
               <p className="text-gray-400 text-sm">A toxicity-free zone to hang out in voice channels, listen to 24/7 music bots, and game in peace.</p>
            </motion.div>

            {/* Card 4: Tournaments (Full Width) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-surface border border-white/5 rounded-2xl p-6 md:col-span-2 flex items-center gap-5 hover:border-white/20 transition-all"
            >
               <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                  <Trophy className="w-6 h-6 text-yellow-400" />
               </div>
               <div className="flex flex-col">
                  <h3 className="font-bold font-orbitron text-white text-lg">Weekly Tournaments</h3>
                  <div className="flex items-center gap-2 mt-1">
                     <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
                     <span className="text-secondary text-xs font-bold font-rajdhani tracking-widest uppercase">Active Now</span>
                  </div>
               </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
