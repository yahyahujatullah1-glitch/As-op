"use client";
import { motion } from "framer-motion";
import { Store, PartyPopper, MessageSquare, Joystick } from "lucide-react";

export default function Offerings() {
  return (
    <section className="relative overflow-hidden px-6 py-20 bg-[#0a0e27]">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      
      <div className="mx-auto flex max-w-[1200px] flex-col items-center text-center relative z-10">
        
        <div className="mb-6 inline-flex items-center rounded border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold font-rajdhani text-primary uppercase tracking-widest">
            <span className="mr-2 flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Join the Revolution
        </div>

        <h1 className="font-orbitron mb-6 max-w-4xl text-5xl md:text-7xl font-black uppercase leading-tight tracking-tight text-white">
            Unlock the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-400 to-secondary">Full Experience</span>
        </h1>
        
        <p className="mb-16 max-w-2xl text-lg text-gray-400 font-rajdhani tracking-wide">
            Join the fastest growing community for Grand Mobile RP and beyond. Explore our exclusive features designed for elite gamers.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 w-full text-left">
            
            {/* Card 1: Grand Mobile RP - Link to Discord */}
            <a href="https://discord.gg/KeSfjVGmT2" target="_blank" className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#13162e] transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_0_30px_-5px_rgba(220,38,38,0.3)] cursor-pointer">
                <div className="relative h-48 w-full overflow-hidden bg-gray-900">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#13162e] to-transparent z-10"></div>
                    <div className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070&auto=format&fit=crop")' }}></div>
                    <div className="absolute right-3 top-3 z-20 rounded bg-green-500/20 px-2 py-1 text-[10px] font-bold text-green-400 backdrop-blur-md border border-green-500/30 font-rajdhani">ACTIVE</div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 text-primary">
                        <Store className="w-5 h-5" />
                    </div>
                    <h3 className="font-orbitron mb-2 text-xl font-bold text-white group-hover:text-primary transition-colors">Grand Mobile RP</h3>
                    <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-400 font-inter">Secure trading for Grand Mobile RP assets. Buy, sell, and trade safely.</p>
                    <div className="mt-auto w-full rounded-lg bg-primary py-2.5 text-center text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all group-hover:bg-red-700">Visit Marketplace</div>
                </div>
            </a>

            {/* Card 2: Giveaways - Link to Discord */}
            <a href="https://discord.gg/KeSfjVGmT2" target="_blank" className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#13162e] transition-all hover:-translate-y-1 hover:border-red-400/50 hover:shadow-[0_0_30px_-5px_rgba(239,68,68,0.3)] cursor-pointer">
                <div className="relative h-48 w-full overflow-hidden bg-gray-900">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#13162e] to-transparent z-10"></div>
                    <div className="absolute inset-0 bg-cover bg-center opacity-70 group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1513884923967-4b182ef1671f?q=80&w=2074&auto=format&fit=crop")' }}></div>
                    <div className="absolute right-3 top-3 z-20 rounded bg-red-500/20 px-2 py-1 text-[10px] font-bold text-red-500 backdrop-blur-md border border-red-500/30 font-rajdhani">WEEKLY</div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/20 text-red-500">
                        <PartyPopper className="w-5 h-5" />
                    </div>
                    <h3 className="font-orbitron mb-2 text-xl font-bold text-white group-hover:text-red-500 transition-colors">Epic Giveaways</h3>
                    <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-400 font-inter">Exclusive rewards for active members including Nitro & currency boosters.</p>
                    <div className="mt-auto w-full rounded-lg border border-red-500/30 bg-red-500/10 py-2.5 text-center text-sm font-bold text-red-500 transition-all group-hover:bg-red-500 group-hover:text-white">View Rewards</div>
                </div>
            </a>

            {/* Card 3: Community Lounge - Link to Discord */}
            <a href="https://discord.gg/KeSfjVGmT2" target="_blank" className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#13162e] transition-all hover:-translate-y-1 hover:border-secondary/50 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.3)] cursor-pointer">
                <div className="relative h-48 w-full overflow-hidden bg-gray-900">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#13162e] to-transparent z-10"></div>
                    <div className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop")' }}></div>
                    <div className="absolute right-3 top-3 z-20 rounded bg-secondary/20 px-2 py-1 text-[10px] font-bold text-secondary backdrop-blur-md border border-secondary/30 font-rajdhani">24/7 LIVE</div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/20 text-secondary">
                        <MessageSquare className="w-5 h-5" />
                    </div>
                    <h3 className="font-orbitron mb-2 text-xl font-bold text-white group-hover:text-secondary transition-colors">Community Lounge</h3>
                    <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-400 font-inter">Voice channels, music bots, and chill vibes available 24/7.</p>
                    <div className="mt-auto w-full rounded-lg border border-secondary/30 bg-secondary/10 py-2.5 text-center text-sm font-bold text-secondary transition-all group-hover:bg-secondary group-hover:text-white">Join Chat</div>
                </div>
            </a>

            {/* Card 4: Arcade (Coming Soon - Not Clickable) */}
            <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-[#0f1120] opacity-80 transition-all hover:opacity-100">
                <div className="relative h-48 w-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1120] to-transparent z-10"></div>
                    <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop")' }}></div>
                    <div className="absolute right-3 top-3 z-20 rounded bg-white/10 px-2 py-1 text-[10px] font-bold text-gray-300 backdrop-blur-md border border-white/20 font-rajdhani">COMING SOON</div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 text-gray-400">
                        <Joystick className="w-5 h-5" />
                    </div>
                    <h3 className="font-orbitron mb-2 text-xl font-bold text-gray-300">Arcade & Economy</h3>
                    <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-500 font-inter">Custom bots and mini-games to earn server currency.</p>
                    <div className="mt-auto w-full rounded-lg border border-white/10 bg-white/5 py-2.5 text-center text-sm font-bold text-gray-500 cursor-not-allowed">Notify Me</div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
}
