"use client";
import { motion } from "framer-motion";
import { SITE_DATA } from "@/lib/data";
import Image from "next/image";

export default function About() {
  return (
    <section className="py-20 bg-black/20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card max-w-4xl mx-auto p-8 md:p-12 flex flex-col md:flex-row items-center gap-8"
        >
          <div className="w-40 h-40 relative flex-shrink-0">
             {/* Placeholder for Avatar - Replace src with actual path in public/images */}
            <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-neon p-1">
              <div className="w-full h-full rounded-full bg-black overflow-hidden relative">
                 {/* Use a placeholder service or put an image in public/images/avatar.jpg */}
                 <div className="w-full h-full bg-gray-800 flex items-center justify-center text-xs text-gray-400">
                    Avatar
                 </div>
              </div>
            </div>
          </div>
          
          <div className="text-center md:text-left">
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4 text-white">
              {SITE_DATA.about.title}
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              {SITE_DATA.about.description}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
