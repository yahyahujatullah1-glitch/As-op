"use client";
import { motion } from "framer-motion";
import { SITE_DATA } from "@/lib/data";
import { Disc, Youtube, Instagram } from "lucide-react";

// Map string keys to actual Icons
const iconMap: any = {
  discord: Disc,
  youtube: Youtube,
  instagram: Instagram,
};

export default function Links() {
  return (
    <section className="py-24 relative overflow-hidden">
        {/* Background Accent */}
       <div className="absolute left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-primary/10 to-transparent -z-10" />

      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4 text-white">
            {SITE_DATA.links.title}
            </h2>
            <div className="h-1 w-20 bg-neon mx-auto rounded-full shadow-[0_0_15px_#ec4899]" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SITE_DATA.links.items.map((link, idx) => {
            const Icon = iconMap[link.icon];
            return (
              <motion.a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className={`glass-card p-8 flex flex-col items-center justify-center gap-4 group border border-white/5 transition-all duration-300 ${link.color}`}
              >
                <div className="p-4 rounded-2xl bg-white/5 group-hover:bg-white/10 transition-colors">
                  <Icon className="w-10 h-10" />
                </div>
                <span className="font-orbitron font-bold text-xl tracking-wide text-white group-hover:text-white">
                    {link.name}
                </span>
                <span className="text-xs text-gray-500 font-inter uppercase tracking-widest group-hover:text-gray-300">
                    Click to Visit
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
