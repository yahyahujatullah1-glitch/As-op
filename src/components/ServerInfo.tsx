"use client";
import { motion } from "framer-motion";
import { SITE_DATA } from "@/lib/data";
import { Check, ShieldCheck } from "lucide-react";

export default function ServerInfo() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="glass-card p-8 md:p-12 border-l-4 border-l-secondary overflow-hidden relative">
          
          {/* Decorative Background Icon */}
          <ShieldCheck className="absolute -right-10 -bottom-10 w-96 h-96 text-white/5 rotate-12" />

          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-6 text-white">
                {SITE_DATA.serverInfo.title}
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                {SITE_DATA.serverInfo.description}
              </p>
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400">
                  <ShieldCheck className="w-5 h-5" /> 
                  <span className="font-bold tracking-wide">Scam-Free Guarantee</span>
              </div>
            </motion.div>

            <div className="grid gap-4">
              {SITE_DATA.serverInfo.features.map((feature, index) => (
                <motion.div 
                    key={index} 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-black/40 p-4 rounded-lg flex items-center gap-4 border border-white/5 hover:border-primary/50 transition-colors"
                >
                  <div className="bg-secondary/20 p-2 rounded-full text-secondary">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-lg font-medium text-gray-200">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
