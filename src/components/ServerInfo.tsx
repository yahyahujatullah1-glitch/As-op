"use client";
import { motion } from "framer-motion";
import { SITE_DATA } from "@/lib/data";
import { CheckCircle2, ShieldCheck } from "lucide-react";

export default function ServerInfo() {
  return (
    <section className="py-20 relative">
      <div className="absolute right-0 top-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-6">
              {SITE_DATA.serverInfo.title}
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              {SITE_DATA.serverInfo.description}
            </p>
            <div className="flex items-center gap-2 text-neon mb-8">
                <ShieldCheck /> 
                <span className="font-bold">Trusted Marketplace</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid gap-4"
          >
            {SITE_DATA.serverInfo.features.map((feature, index) => (
              <div key={index} className="glass-card p-4 flex items-center gap-4 hover:border-primary/50 transition-colors">
                <CheckCircle2 className="text-secondary w-6 h-6" />
                <span className="text-lg font-medium">{feature}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
