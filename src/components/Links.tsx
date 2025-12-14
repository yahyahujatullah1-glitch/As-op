"use client";
import { motion } from "framer-motion";
import { SITE_DATA } from "@/lib/data";
import { Disc, Youtube, ShoppingBag, BookOpen, ArrowUpRight } from "lucide-react";

const brandConfig: any = {
  discord: { icon: Disc, color: "text-[#5865F2]", border: "border-l-[#5865F2]", bg: "bg-[#5865F2]/10" },
  youtube: { icon: Youtube, color: "text-[#FF0000]", border: "border-l-[#FF0000]", bg: "bg-[#FF0000]/10" },
  instagram: { icon: ShoppingBag, color: "text-[#06b6d4]", border: "border-l-[#06b6d4]", bg: "bg-[#06b6d4]/10" }, // Using cyan for marketplace look
  default: { icon: BookOpen, color: "text-yellow-500", border: "border-l-yellow-500", bg: "bg-yellow-500/10" }
};

export default function Links() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10 text-xs font-rajdhani tracking-wider text-gray-400 uppercase mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                Operations Center
            </div>
            <h2 className="font-orbitron text-4xl md:text-6xl font-black uppercase text-white mb-4">
                Important <span className="text-primary">Links</span>
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SITE_DATA.links.items.map((link, idx) => {
            const config = brandConfig[link.icon.toLowerCase()] || brandConfig.default;
            const Icon = config.icon;

            return (
              <motion.a
                key={idx}
                href={link.url}
                target="_blank"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className={`
                  bg-surface border border-white/5 ${config.border} border-l-4 
                  rounded-xl p-8 flex flex-col justify-between group hover:bg-[#15192b] transition-all
                `}
              >
                <div className="flex justify-between items-start mb-8">
                  <div className={`w-14 h-14 rounded flex items-center justify-center ${config.bg} ${config.color} border border-white/5`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <ArrowUpRight className="text-gray-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-orbitron text-2xl font-bold text-white mb-2">{link.name}</h3>
                  <p className="text-gray-400 text-sm">Click to access the official {link.name}.</p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
