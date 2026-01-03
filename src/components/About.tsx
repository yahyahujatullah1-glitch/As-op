"use client";
import { motion } from "framer-motion";
import { Disc, Youtube, Twitch, ArrowRight, Gamepad2, Video, Share2 } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section className="relative py-16 px-4 sm:px-6 bg-[#0a0e27]">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />

      <div className="w-full max-w-[1000px] mx-auto relative z-10">
        
        {/* Glass Card */}
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#131118]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 w-full relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-70"></div>

          <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">
            
            {/* Avatar */}
            <div className="relative flex-shrink-0 group">
              <div className="absolute -inset-1 bg-gradient-to-br from-secondary via-primary to-red-500 rounded-full opacity-75 blur-md group-hover:opacity-100 transition duration-500"></div>
              <div className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-2 border-white/20 bg-black">
                <Image 
                    src="https://i.ibb.co/CpCfYw2c/AS-OP-Channel-Logo-removebg-preview.png"
                    alt="AS OP Logo"
                    fill
                    className="object-contain p-6 transform transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute bottom-5 right-5 w-5 h-5 bg-green-500 border-2 border-[#131118] rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 text-center lg:text-left">
              
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-4">
                <div className="flex items-center gap-2 px-3 py-1 rounded border border-secondary/30 bg-secondary/10">
                  <Gamepad2 className="text-secondary w-4 h-4" />
                  <span className="text-secondary text-xs font-bold font-rajdhani tracking-widest uppercase">Gamer</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded border border-red-500/30 bg-red-500/10">
                  <Video className="text-red-500 w-4 h-4" />
                  <span className="text-red-500 text-xs font-bold font-rajdhani tracking-widest uppercase">Content Creator</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded border border-primary/30 bg-primary/10">
                  <Share2 className="text-primary w-4 h-4" />
                  <span className="text-primary text-xs font-bold font-rajdhani tracking-widest uppercase">Grand Mobile RP</span>
                </div>
              </div>

              <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-2 leading-tight">
                  Who is <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-500 drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]">AS OP</span>?
              </h2>
              <p className="text-gray-400 font-rajdhani text-xl font-medium mb-6 tracking-wide">
                  Gamer | Visionary | Community Leader
              </p>
              
              <div className="h-px w-20 bg-gradient-to-r from-primary to-transparent mb-6 mx-auto lg:mx-0"></div>

              <div className="space-y-4 text-gray-300 text-base leading-relaxed font-light mb-8 max-w-2xl font-inter">
                <p>AS OP isn't just a gamertag; it's a digital movement forged in the neon-lit trenches of competitive gaming. We are architecting the ultimate sanctuary for roleplay enthusiasts and high-octane gamers.</p>
                <p>From the streets of Grand Mobile RP to the competitive arenas, our mission is simple: <strong className="text-white">elevate the game</strong>.</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start mt-auto">
                <div className="flex gap-4">
                    {/* UPDATED LINK */}
                    <a href="https://discord.gg/KeSfjVGmT2" target="_blank" className="group flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-[#5865F2] hover:border-[#5865F2] hover:scale-110 transition-all duration-300">
                      <Disc className="w-5 h-5 text-white/70 group-hover:text-white" />
                    </a>
                    <a href="https://youtube.com/@as_op_plays?si=tQFaFCVCdqm0obSQ" target="_blank" className="group flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-[#FF0000] hover:border-[#FF0000] hover:scale-110 transition-all duration-300">
                      <Youtube className="w-5 h-5 text-white/70 group-hover:text-white" />
                    </a>
                </div>
                {/* UPDATED LINK */}
                <a href="https://discord.gg/KeSfjVGmT2" target="_blank" className="w-full sm:w-auto flex items-center justify-center gap-2 h-12 px-8 rounded-xl bg-gradient-to-r from-primary to-[#b91c1c] text-white font-bold font-orbitron tracking-wide hover:shadow-[0_0_25px_rgba(220,38,38,0.6)] hover:-translate-y-1 transition-all duration-300">
                  <span>JOIN THE COMMUNITY</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Footer - UPDATED NUMBER */}
        <div className="grid grid-cols-3 gap-4 mt-8 px-4 opacity-60">
            <div className="text-center">
                <p className="text-2xl font-orbitron font-bold text-white">1.1K+</p> 
                <p className="text-xs font-rajdhani text-secondary uppercase tracking-widest">Members</p>
            </div>
            <div className="text-center border-l border-white/10">
                <p className="text-2xl font-orbitron font-bold text-white">24/7</p>
                <p className="text-xs font-rajdhani text-red-500 uppercase tracking-widest">Active RP</p>
            </div>
            <div className="text-center border-l border-white/10">
                <p className="text-2xl font-orbitron font-bold text-white">Lvl 99</p>
                <p className="text-xs font-rajdhani text-primary uppercase tracking-widest">Experience</p>
            </div>
        </div>

      </div>
    </section>
  );
}
