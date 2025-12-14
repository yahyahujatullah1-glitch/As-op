"use client";
import { motion } from "framer-motion";
import { SITE_DATA } from "@/lib/data";
import { Disc, Youtube, Instagram, ArrowUpRight } from "lucide-react";

// Professional Brand Configurations
const brandConfig: any = {
  discord: {
    icon: Disc,
    color: "#5865F2",
    label: "Join The Server",
    sub: "Official Community Hub",
    bg: "hover:bg-[#5865F2]/10",
    border: "hover:border-[#5865F2]",
    shadow: "hover:shadow-[0_0_30px_rgba(88,101,242,0.3)]"
  },
  youtube: {
    icon: Youtube,
    color: "#FF0000",
    label: "Subscribe Now",
    sub: "High-Tier Gameplay",
    bg: "hover:bg-[#FF0000]/10",
    border: "hover:border-[#FF0000]",
    shadow: "hover:shadow-[0_0_30px_rgba(255,0,0,0.3)]"
  },
  instagram: {
    icon: Instagram,
    color: "#E1306C",
    label: "Follow Updates",
    sub: "Behind The Scenes",
    bg: "hover:bg-[#E1306C]/10",
    border: "hover:border-[#E1306C]",
    shadow: "hover:shadow-[0_0_30px_rgba(225,48,108,0.3)]"
  }
};

export default function Links() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4 text-white">
            {SITE_DATA.links.title}
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SITE_DATA.links.items.map((link, idx) => {
            // Get the styling config for this specific social network
            const config = brandConfig[link.icon.toLowerCase()] || brandConfig.discord;
            const Icon = config.icon;

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
                whileHover={{ y: -8, scale: 1.02 }}
                className={`
                  relative overflow-hidden rounded-2xl p-8
                  bg-[#0f1225] border border-white/5 
                  transition-all duration-300 group
                  flex flex-col items-center text-center
                  ${config.border} ${config.shadow}
                `}
              >
                {/* Background Hover Glow */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-transparent via-transparent to-${config.color}/5`} />
                
                {/* Icon Container */}
                <div 
                  className="mb-6 p-4 rounded-2xl bg-white/5 border border-white/5 relative z-10 group-hover:bg-white/10 transition-colors"
                  style={{ color: config.color }} // Inline style for dynamic brand color
                >
                  <Icon className="w-12 h-12" strokeWidth={1.5} />
                </div>

                {/* Text Content */}
                <div className="relative z-10">
                  <h3 className="font-orbitron font-bold text-2xl text-white mb-1">
                    {config.label}
                  </h3>
                  <p className="text-gray-500 text-sm tracking-widest uppercase font-medium group-hover:text-gray-300 transition-colors">
                    {config.sub}
                  </p>
                </div>

                {/* External Link Arrow (Appears on Hover) */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <ArrowUpRight className="w-5 h-5 text-gray-400" />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
