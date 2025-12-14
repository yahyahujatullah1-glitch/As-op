"use client";
import { motion } from "framer-motion";
import { SITE_DATA } from "@/lib/data";
import { Gamepad2, Youtube } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4 text-center z-10">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-orbitron text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-secondary glow-text mb-4"
        >
          {SITE_DATA.hero.title}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          {SITE_DATA.hero.subtitle}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#" className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/80 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-lg shadow-primary/25">
            <Gamepad2 className="w-5 h-5" />
            {SITE_DATA.hero.ctaPrimary}
          </a>
          <a href="#" className="flex items-center justify-center gap-2 bg-transparent border-2 border-secondary text-secondary hover:bg-secondary/10 px-8 py-4 rounded-full font-bold transition-all hover:scale-105">
            <Youtube className="w-5 h-5" />
            {SITE_DATA.hero.ctaSecondary}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
