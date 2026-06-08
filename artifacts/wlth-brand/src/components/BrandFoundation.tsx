import React from 'react';
import { motion } from 'framer-motion';

const pillars = [
  {
    title: "Purpose",
    description: "Humans are driven by needs and wants, and wealth is a core human need everywhere. Most Egyptians try to satisfy that need through diminishing, low-ROI activities that burn them out over a lifetime. Our purpose is to change that — to make this core human need work for you instead of against you."
  },
  {
    title: "Vision",
    description: "To make investing a default habit for every Egyptian household — turning the nation's idle savings into engine fuel for a genuinely growth-oriented economy."
  },
  {
    title: "Positioning",
    description: "For everyday Egyptians — from first-time savers to the mass-affluent — who are stuck between shallow trading apps and out-of-reach private banks, WLTH. is the wealth management platform that makes sophisticated, guided investing genuinely accessible to all."
  },
  {
    title: "Only-ness",
    description: "We are the ONLY Egyptian wealth platform that turns proprietary institutional strategies into retail products engineered natively for Egypt's macro reality: ~25% T-Bills, structural inflation, and a floating pound."
  }
];

const ease = [0.16, 1, 0.3, 1];

export default function BrandFoundation() {
  return (
    <section id="foundation" className="relative py-40 px-6 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header — editorial style */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="mb-24"
        >
          <span className="section-label mb-4 block">00 · Foundation</span>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 max-w-3xl">
            The promise that guides <span className="text-wealth-gradient">every decision.</span>
          </h2>
          <div className="w-16 h-px bg-primary/40 mt-8" />
        </motion.div>

        {/* Pillars — asymmetric editorial grid */}
        <div className="space-y-0">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease }}
              className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 py-12 border-b border-border/60 last:border-b-0"
            >
              {/* Title column */}
              <div className="md:col-span-3 flex items-baseline gap-4">
                <span className="font-mono text-xs text-primary/50 tabular-nums">0{i + 1}</span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors duration-500">
                  {pillar.title}
                </h3>
              </div>

              {/* Description column */}
              <div className="md:col-span-9 md:pl-8 md:border-l md:border-border/40">
                <p className="text-lg md:text-xl leading-relaxed text-foreground/75 max-w-2xl">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
