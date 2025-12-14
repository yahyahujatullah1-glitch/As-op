"use client";
import { motion } from "framer-motion";
import { SITE_DATA } from "@/lib/data";
import { Disc, Youtube, ShoppingCart, BookOpen } from "lucide-react";

const iconMap: any = {
  discord: Disc,
  youtube: Youtube,
  shopping: ShoppingCart,
  book: BookOpen
};

export default function Links() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-orbitron text-center text-3xl md:text-4xl font-bold mb-12 text-white">
          {SITE_DATA.links.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SITE_DATA.links.items.map((link, idx) => {
            const Icon = iconMap[link.icon] || Disc;
            return (
              <motion.a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="glass-card p-6 flex items-center gap-4 group hover:bg-white/10 transition-all cursor-pointer"
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 text-primary transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="font-bold text-lg">{link.name}</span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
