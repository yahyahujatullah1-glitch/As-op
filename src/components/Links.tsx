"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle, Youtube, ShoppingBag, Gavel } from "lucide-react";

export default function Links() {
  return (
    <section className="py-24 relative bg-[#0a0e27]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-rajdhani tracking-wider text-secondary uppercase mb-2">
             <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
             Operations Center
          </div>
          <h1 className="text-4xl sm:text-6xl font-orbitron font-black text-white tracking-wide uppercase leading-tight drop-shadow-lg">
             Important <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary animate-pulse">Links</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Discord */}
            <motion.a 
                href="https://discord.gg/bbJ6pnEFA2"
                target="_blank"
                whileHover={{ y: -5 }}
                className="group relative p-6 rounded-2xl flex flex-col gap-4 border border-white/5 border-l-4 border-l-primary bg-[#13162e] hover:bg-[#1a1e3b] overflow-hidden lg:col-span-1 lg:row-span-2"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex flex-col h-full justify-between gap-6">
                    <div className="flex justify-between items-start">
                        <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            <MessageCircle className="w-8 h-8" />
                        </div>
                        <ArrowUpRight className="text-gray-500 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-orbitron font-bold text-white mb-2 group-hover:text-primary transition-colors">Discord Server</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">The heart of our community. Join voice channels, participate in events, and chat with members.</p>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-rajdhani text-gray-500 uppercase tracking-wider group-hover:text-secondary transition-colors">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> 152 Online Now
                    </div>
                </div>
            </motion.a>

            {/* Other links (Youtube, Marketplace, Rules) - Same logic, just make sure hrefs are correct */}
            {/* ... (Previous code for other cards remains consistent, ensure youtube link is updated) ... */}
             <motion.a href="https://youtube.com/@as_op_plays?si=tQFaFCVCdqm0obSQ" target="_blank" whileHover={{ y: -5 }} className="group p-6 rounded-2xl flex flex-col gap-4 border border-white/5 border-l-4 border-l-red-500 bg-[#13162e] hover:border-red-500 hover:shadow-[0_0_20px_rgba(239,68,68,0.15)] transition-all">
                <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors">
                        <Youtube className="w-6 h-6" />
                    </div>
                    <ArrowUpRight className="text-gray-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                    <h3 className="text-xl font-orbitron font-bold text-white mb-1">YouTube Channel</h3>
                    <p className="text-gray-400 text-sm">Tutorials, highlights, and streams.</p>
                </div>
            </motion.a>

             <motion.a href="https://discord.gg/bbJ6pnEFA2" target="_blank" whileHover={{ y: -5 }} className="group p-6 rounded-2xl flex flex-col gap-4 border border-white/5 border-l-4 border-l-secondary bg-[#13162e] hover:border-secondary hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all">
                <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                        <ShoppingBag className="w-6 h-6" />
                    </div>
                    <ArrowUpRight className="text-gray-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                    <h3 className="text-xl font-orbitron font-bold text-white mb-1">Marketplace</h3>
                    <p className="text-gray-400 text-sm">Buy, sell, and trade rare in-game items securely.</p>
                </div>
            </motion.a>

             <motion.a href="#" whileHover={{ y: -5 }} className="group p-6 rounded-2xl flex flex-col gap-4 border border-white/5 border-l-4 border-l-red-400 bg-[#13162e] hover:border-red-400 hover:shadow-[0_0_20px_rgba(248,113,113,0.15)] transition-all">
                <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-lg bg-red-400/10 flex items-center justify-center text-red-400 group-hover:bg-red-400 group-hover:text-white transition-colors">
                        <Gavel className="w-6 h-6" />
                    </div>
                    <ArrowUpRight className="text-gray-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                    <h3 className="text-xl font-orbitron font-bold text-white mb-1">Server Rules</h3>
                    <p className="text-gray-400 text-sm">Code of conduct, guidelines, and bannable offenses.</p>
                </div>
            </motion.a>

        </div>
      </div>
    </section>
  );
}
