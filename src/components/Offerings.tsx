"use client";
import { motion } from "framer-motion";
import { SITE_DATA } from "@/lib/data";

export default function Offerings() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-black/20">
      <div className="container mx-auto px-4">
        <h2 className="font-orbitron text-center text-3xl md:text-5xl font-bold mb-12 text-white">
          {SITE_DATA.offerings.title}
        </h2>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SITE_DATA.offerings.items.map((offer, idx) => (
            <motion.div 
              key={idx}
              variants={item}
              className="glass-card p-6 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-orbitron text-xl font-bold text-primary">{offer.title}</h3>
                {offer.status === "Coming Soon" ? (
                  <span className="text-[10px] bg-gray-700 text-gray-300 px-2 py-1 rounded-full uppercase tracking-wider">Soon</span>
                ) : (
                  <span className="text-[10px] bg-green-900/50 text-green-400 px-2 py-1 rounded-full uppercase tracking-wider">Active</span>
                )}
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {offer.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
