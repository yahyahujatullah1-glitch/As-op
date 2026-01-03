"use client";
import { MessageCircle, Youtube, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <div className="flex flex-col relative bg-[#0a0e27] overflow-hidden">
        {/* DOMINATE Background Text */}
        <div className="relative flex items-center justify-center py-20 overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
            <div className="relative z-10 text-center px-4">
                <h1 className="text-6xl md:text-9xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-secondary via-white to-primary tracking-tighter opacity-10 select-none">
                    DOMINATE
                </h1>
            </div>
        </div>

        {/* Footer Content */}
        <footer className="relative w-full border-t border-white/5 z-20 bg-[#0a0e27]">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-secondary to-transparent opacity-80 shadow-[0_0_15px_#06b6d4]"></div>
            
            <div className="container mx-auto px-4 py-12 flex flex-col items-center">
                
                <h2 className="font-orbitron text-white tracking-widest text-3xl font-bold mb-2 uppercase">
                    AS OP <span className="text-primary">Community</span>
                </h2>
                <div className="h-1 w-16 bg-gradient-to-r from-primary to-red-500 rounded-full mb-4"></div>
                <p className="font-rajdhani text-slate-400 text-lg font-medium tracking-wide mb-8">Built for AS OP Community</p>

                {/* Big Action Buttons */}
                <div className="flex flex-wrap justify-center gap-6 mb-10">
                    <a href="https://discord.gg/KeSfjVGmT2" target="_blank" className="flex items-center gap-3 bg-[#5865F2] hover:bg-[#4752C4] text-white h-14 px-8 rounded-lg font-bold font-rajdhani uppercase tracking-wider transition-transform hover:-translate-y-1 shadow-lg">
                        <MessageCircle size={24} />
                        Join the Squad
                    </a>
                    <a href="https://youtube.com/@as_op_plays?si=tQFaFCVCdqm0obSQ" target="_blank" className="flex items-center gap-3 bg-[#1f1f1f] border border-white/10 hover:border-primary/50 hover:bg-primary/10 text-white h-14 px-8 rounded-lg font-bold font-rajdhani uppercase tracking-wider transition-transform hover:-translate-y-1">
                        <Youtube size={24} className="text-primary" />
                        Watch Streams
                    </a>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

                {/* Bottom Bar: Copyright & Social Icons */}
                <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6">
                    <p className="text-slate-500 text-xs md:text-sm order-2 md:order-1 font-rajdhani">
                        © 2025 AS OP Gaming. All rights reserved.
                    </p>
                    
                    <div className="flex gap-6 order-1 md:order-2">
                        <a href="https://discord.gg/KeSfjVGmT2" target="_blank" className="text-slate-400 hover:text-[#5865F2] transition-colors hover:scale-110">
                            <MessageCircle className="w-6 h-6" />
                        </a>
                        <a href="https://youtube.com/@as_op_plays?si=tQFaFCVCdqm0obSQ" target="_blank" className="text-slate-400 hover:text-primary transition-colors hover:scale-110">
                            <Youtube className="w-6 h-6" />
                        </a>
                        <a href="https://www.instagram.com/asop.official/" target="_blank" className="text-slate-400 hover:text-[#E1306C] transition-colors hover:scale-110">
                            <Instagram className="w-6 h-6" />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    </div>
  );
}
