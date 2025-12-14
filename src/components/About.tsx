"use client";
import { motion } from "framer-motion";
import { SITE_DATA } from "@/lib/data";
import Image from "next/image";

export default function About() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-surface border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl"
        >
          {/* Top Line Decoration */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

          <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
            
            {/* Avatar Section with LOGO */}
            <div className="relative flex-shrink-0 group">
              {/* Red Glow Behind */}
              <div className="absolute inset-0 bg-primary blur-3xl opacity-20 rounded-full group-hover:opacity-40 transition-opacity" />
              
              <div className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-surface bg-black shadow-[0_0_30px_rgba(220,38,38,0.3)]">
                {/* YOUR LOGO HERE */}
                <Image 
                    src="https://i.ibb.co/CpCfYw2c/AS-OP-Channel-Logo-removebg-preview.png"
                    alt="AS OP Logo"
                    fill
                    className="object-contain p-4"
                />
              </div>
              {/* Status Dot */}
              <div className="absolute bottom-4 right-4 w-6 h-6 bg-green-500 border-4 border-surface rounded-full animate-pulse" />
            </div>

            {/* Text Content */}
            <div className="flex flex-col flex-1 text-center lg:text-left">
              
              {/* Tags */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-6">
                {['Gamer', 'Content Creator', 'Grand Mobile RP'].map((tag, i) => (
                    <span key={i} className="px-3 py-1.5 rounded border border-white/10 bg-white/5 text-xs font-rajdhani font-bold tracking-widest text-primary uppercase">
                        {tag}
                    </span>
                ))}
              </div>

              <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-2 leading-tight">
                Who is <span className="text-primary drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]">AS OP</span>?
              </h2>
              <p className="text-gray-400 font-rajdhani text-xl font-medium mb-8 tracking-wide">
                Gamer | Visionary | Community Leader
              </p>

              <div className="h-px w-20 bg-primary mb-6 mx-auto lg:mx-0" />

              <div className="space-y-4 text-gray-300 text-base leading-relaxed font-light mb-10 max-w-2xl">
                <p>{SITE_DATA.about.description}</p>
                <p>From the streets of Grand Mobile RP to the competitive arenas, our mission is simple: <strong className="text-white">elevate the game</strong>.</p>
              </div>

              <button className="w-full sm:w-auto flex items-center justify-center gap-2 h-12 px-8 rounded bg-gradient-to-r from-primary to-red-800 text-white font-bold font-rajdhani tracking-wide hover:shadow-[0_0_20px_rgba(220,38,38,0.5)] hover:-translate-y-1 transition-all mx-auto lg:mx-0">
                <span>JOIN THE COMMUNITY</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
