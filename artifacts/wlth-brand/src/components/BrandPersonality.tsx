import React from 'react';
import { motion } from 'framer-motion';

const spectrums = [
  { left: "Warm", right: "Cold", value: 70 },
  { left: "Clear", right: "Complex", value: 65 },
  { left: "Confident", right: "Arrogant", value: 72 },
  { left: "Guiding", right: "Pushy", value: 74 },
  { left: "Sophisticated", right: "Elitist", value: 68 },
  { left: "Modern", right: "Trendy", value: 66 },
];

const ease = [0.16, 1, 0.3, 1];

export default function BrandPersonality() {
  return (
    <section id="personality" className="relative py-40 px-6">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="mb-20"
        >
          <span className="section-label mb-4 block">03 · Character</span>
          <h2 className="font-serif text-5xl md:text-6xl font-bold leading-[1.05] mb-6">
            Brand <span className="text-wealth-gradient">Personality</span>
          </h2>
          <p className="text-xl font-serif italic text-muted-foreground max-w-xl">
            "If WLTH. were a person: a trusted, sharp-minded guide — warm, never patronising."
          </p>
          <div className="w-16 h-px bg-primary/40 mt-8" />
        </motion.div>

        <div className="space-y-10">
          {spectrums.map((s, i) => {
            const fillWidth = 100 - s.value;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.06, duration: 0.5, ease }}
                className="group"
              >
                <div className="flex justify-between mb-3">
                  <span className="text-sm font-semibold text-primary">{s.left}</span>
                  <span className="text-sm text-muted-foreground/60">{s.right}</span>
                </div>

                <div className="relative h-1.5 w-full bg-secondary rounded-full overflow-visible">
                  {/* Gold fill */}
                  <motion.div
                    className="absolute top-0 left-0 h-full rounded-full"
                    style={{ background: 'linear-gradient(90deg, #7E5A12, #BD8E25, #D7A736, #E3B340, #F6D87A)' }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${fillWidth}%` }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 1.2, delay: i * 0.08, ease: "easeOut" }}
                  />

                  {/* Dot indicator */}
                  <motion.div
                    className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full border-2 border-primary bg-background shadow-md transition-transform duration-300 group-hover:scale-125"
                    initial={{ left: 0 }}
                    whileInView={{ left: `calc(${fillWidth}% - 7px)` }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 1.2, delay: i * 0.08, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
