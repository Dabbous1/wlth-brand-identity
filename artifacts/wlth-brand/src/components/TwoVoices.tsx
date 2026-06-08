import React from 'react';
import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1];

export default function TwoVoices() {
  return (
    <section id="voices" className="relative py-40 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-secondary/20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="mb-24 max-w-3xl"
        >
          <span className="section-label mb-4 block">02 · Voice</span>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
            Two voices, <span className="text-wealth-gradient">one brand.</span>
          </h2>
          <p className="text-lg text-muted-foreground">Adapted for two distinct audiences — unified by the same principles.</p>
          <div className="w-16 h-px bg-primary/40 mt-8" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Consumer Voice */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="relative bg-[#FAF7F0] p-8 md:p-12 lg:p-14 rounded-2xl shadow-xl"
          >
            <div className="h-1 w-16 bg-wealth-gradient rounded-full mb-8" />

            <span className="inline-block text-[10px] font-mono tracking-[0.2em] uppercase text-[#BD8E25] mb-6">Consumer</span>

            <h3 className="text-4xl md:text-5xl font-bold text-wealth-gradient mb-3" style={{ fontFamily: 'Philosopher, serif' }}>
              Philosopher
            </h3>
            <p className="text-lg text-[#5A554B] mb-10">Warm, approachable, and humanist.</p>

            <ul className="space-y-4 mb-10">
              {['First-time savers to mass-affluent', 'Warmth, empowerment, and access', 'Light backgrounds, airy layouts'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[#23201A]">
                  <div className="w-1 h-1 rounded-full bg-[#BD8E25] flex-shrink-0" />
                  <span className="text-[15px]">{item}</span>
                </li>
              ))}
            </ul>

            <div className="relative p-6 rounded-xl bg-white/60 border border-[#E4DCC9]">
              <p className="font-serif text-2xl italic text-[#23201A] leading-snug">
                "Wealth, working for you."
              </p>
            </div>
          </motion.div>

          {/* Institutional Voice */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="relative bg-[#15110A] p-8 md:p-12 lg:p-14 rounded-2xl shadow-xl"
          >
            <div className="h-1 w-16 bg-wealth-gradient rounded-full mb-8" />

            <span className="inline-block text-[10px] font-mono tracking-[0.2em] uppercase text-[#BD8E25] mb-6">Institutional</span>

            <h3 className="text-4xl md:text-5xl font-bold text-wealth-gradient mb-3" style={{ fontFamily: 'Cardo, serif' }}>
              Cardo
            </h3>
            <p className="text-lg text-[#C4B89E] mb-10">Scholarly, high-contrast, and rigorous.</p>

            <ul className="space-y-4 mb-10">
              {['Mandates, partners, and AM clients', 'Pedigree, stewardship, and rigour', 'Dark backgrounds, high-contrast typography'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[#F4ECDA]">
                  <div className="w-1 h-1 rounded-full bg-[#BD8E25] flex-shrink-0" />
                  <span className="text-[15px]">{item}</span>
                </li>
              ))}
            </ul>

            <div className="relative p-6 rounded-xl bg-white/5 border border-white/10">
              <p className="text-2xl italic text-[#F4ECDA] leading-snug" style={{ fontFamily: 'Cardo, serif' }}>
                "Sophisticated, guided investing."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
