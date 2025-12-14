"use client";
import { motion } from "framer-motion";
import { Shield, Gamepad2, Headphones, Trophy, ArrowRight, MessageCircle, Mic } from "lucide-react";

export default function ServerInfo() {
  return (
    <div className="relative z-10 flex w-full flex-col overflow-hidden py-20 bg-[#0a0e27]">
      
      {/* --- Background Effects (Exact match to code(4).html) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]"></div>
        <div className="absolute top-[40%] left-[20%] w-[200px] h-[200px] bg-primary/10 rounded-full blur-[80px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>
      </div>

      <div className="flex h-full grow flex-col relative z-10">
        <div className="flex flex-1 justify-center px-4 md:px-10 lg:px-20">
          <div className="flex flex-col max-w-[1200px] flex-1">
            
            {/* Header Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-2 pb-8 pt-5 text-center md:text-left"
            >
              <h2 className="text-secondary text-sm md:text-base font-bold font-rajdhani tracking-[0.2em] uppercase mb-2 flex items-center justify-center md:justify-start">
                <span className="inline-block w-2 h-2 bg-secondary rounded-full mr-3 shadow-[0_0_10px_#06b6d4]"></span>
                Server Information
              </h2>
              <h1 className="text-white text-4xl md:text-6xl font-black font-orbitron leading-tight tracking-tight drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]">
                WHAT IS <span className="text-primary">AS OP?</span>
              </h1>
            </motion.div>

            {/* Split Layout */}
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 py-6 items-start">
              
              {/* Left Column (Sticky Text) */}
              <div className="flex flex-col gap-8 lg:w-5/12 lg:sticky lg:top-24">
                <motion.div 
                   initial={{ opacity: 0, x: -30 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   className="flex flex-col gap-6"
                >
                  <h3 className="text-white text-2xl md:text-3xl font-bold font-orbitron leading-tight">
                    The Ultimate <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-500">Gaming Hub</span>
                  </h3>
                  <p className="text-gray-300 text-lg font-normal leading-relaxed font-inter">
                    Dive into the Grand Mobile RP marketplace with guaranteed safe trading and a toxicity-free environment. Whether you're here to dominate the market or just chill, we've got a spot for you in our digital sanctuary.
                  </p>
                  <p className="text-gray-400 text-sm font-normal leading-relaxed border-l-2 border-primary/50 pl-4 font-inter">
                    Join thousands of gamers who have found their home in AS OP. Experience low latency, high engagement, and zero tolerance for toxicity.
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col sm:flex-row gap-4 pt-2"
                >
                  <button className="group relative flex min-w-[180px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-8 bg-primary text-white gap-3 text-base font-bold leading-normal tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(220,38,38,0.5)] font-rajdhani uppercase">
                    <MessageCircle className="w-5 h-5 group-hover:animate-bounce" />
                    <span className="truncate">Join Discord</span>
                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary to-red-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  </button>
                  <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-14 px-6 border border-white/10 bg-white/5 text-white gap-2 text-base font-semibold font-rajdhani uppercase transition-all hover:bg-white/10 hover:border-white/20">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              </div>

              {/* Right Column (Grid Cards) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:w-7/12 w-full">
                
                {/* Card 1: Safe Trading (Col Span 2) */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-md border border-white/5 p-6 rounded-xl flex flex-col gap-4 group transition-all duration-300 hover:border-primary/50 hover:bg-white/10 hover:-translate-y-1 relative overflow-hidden md:col-span-2 shadow-lg"
                >
                  <div className="absolute top-0 right-0 p-32 bg-primary/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-all"></div>
                  <div className="flex items-center gap-4 z-10">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20 text-primary border border-primary/30 shadow-[0_0_15px_rgba(220,38,38,0.2)]">
                      <Shield className="w-6 h-6" />
                    </div>
                    <h3 className="text-white text-xl font-bold font-orbitron">Safe Trading Protocol</h3>
                  </div>
                  <p className="text-gray-400 text-base leading-relaxed z-10 font-inter">
                    Our verified middlemen and secure transaction protocols ensure 100% safety for every trade. Never worry about scammers again.
                  </p>
                </motion.div>

                {/* Card 2: Grand Mobile RP */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-white/5 backdrop-blur-md border border-white/5 p-6 rounded-xl flex flex-col gap-4 group transition-all duration-300 hover:border-secondary/50 hover:bg-white/10 hover:-translate-y-1 relative overflow-hidden shadow-lg"
                >
                  <div className="flex items-center justify-between z-10 mb-2">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-secondary/20 text-secondary border border-secondary/30 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                      <Gamepad2 className="w-6 h-6" />
                    </div>
                    <Gamepad2 className="text-white/20 w-10 h-10" />
                  </div>
                  <h3 className="text-white text-lg font-bold font-orbitron z-10">Grand Mobile RP</h3>
                  <p className="text-gray-400 text-sm leading-relaxed z-10 font-inter">
                    Exclusive marketplace for high-level accounts, rare currency, and unique in-game items.
                  </p>
                </motion.div>

                {/* Card 3: Chill & Music */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-white/5 backdrop-blur-md border border-white/5 p-6 rounded-xl flex flex-col gap-4 group transition-all duration-300 hover:border-red-500/50 hover:bg-white/10 hover:-translate-y-1 relative overflow-hidden shadow-lg"
                >
                  <div className="flex items-center justify-between z-10 mb-2">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-red-500/20 text-red-500 border border-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                      <Headphones className="w-6 h-6" />
                    </div>
                    <Mic className="text-white/20 w-10 h-10" />
                  </div>
                  <h3 className="text-white text-lg font-bold font-orbitron z-10">Chill & Music</h3>
                  <p className="text-gray-400 text-sm leading-relaxed z-10 font-inter">
                    A toxicity-free zone to hang out in voice channels, listen to 24/7 music bots, and game in peace.
                  </p>
                </motion.div>

                {/* Card 4: Tournaments (Col Span 2) */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-white/5 backdrop-blur-md border border-white/5 p-6 rounded-xl flex items-center gap-4 group transition-all duration-300 hover:border-primary/50 hover:bg-white/10 hover:-translate-y-1 relative overflow-hidden md:col-span-2 shadow-lg"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 text-white border border-white/20">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-white text-base font-bold font-orbitron">Weekly Tournaments</h3>
                    <span className="text-secondary text-xs font-medium tracking-wide uppercase font-rajdhani">Active Now</span>
                  </div>
                </motion.div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
