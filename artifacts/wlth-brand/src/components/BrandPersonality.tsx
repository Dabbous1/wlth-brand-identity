import React from 'react';
import { motion } from 'framer-motion';

const spectrums = [
  { left: "Warm", right: "Cold", value: 70, invert: true },
  { left: "Clear", right: "Complex", value: 65, invert: true },
  { left: "Confident", right: "Arrogant", value: 40, invert: true },
  { left: "Guiding", right: "Pushy", value: 35, invert: true },
  { left: "Sophisticated", right: "Elitist", value: 40, invert: true },
  { left: "Modern", right: "Trendy", value: 40, invert: true }
];

export default function BrandPersonality() {
  return (
    <section id="personality" className="py-32 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Brand Personality</h2>
          <p className="text-xl font-serif italic text-muted-foreground">
            "If WLTH. were a person: a trusted, sharp-minded guide — warm, never patronising."
          </p>
        </motion.div>

        <div className="space-y-12">
          {spectrums.map((s, i) => (
            <div key={i} className="relative">
              <div className="flex justify-between mb-3 font-medium text-sm">
                <span className={s.invert ? 'text-primary font-bold' : 'text-muted-foreground'}>{s.left}</span>
                <span className={!s.invert ? 'text-primary font-bold' : 'text-muted-foreground'}>{s.right}</span>
              </div>
              <div className="h-2 w-full bg-secondary rounded-full overflow-hidden relative">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-wealth-gradient rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${100 - s.value}%` }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                />
              </div>
              <motion.div
                className="absolute top-8 w-4 h-4 bg-background border-2 border-primary rounded-full shadow-sm -mt-[22px]"
                initial={{ left: 0 }}
                whileInView={{ left: `calc(${100 - s.value}% - 8px)` }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
