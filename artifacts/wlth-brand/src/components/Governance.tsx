import React from 'react';
import { motion } from 'framer-motion';

const principles = [
  {
    number: '01',
    title: 'Lead with warmth',
    description: 'The financial industry is notoriously cold. We counteract this with humanist typography, warm color tones, and conversational copy.',
  },
  {
    number: '02',
    title: 'Clarity about Risk & Fees',
    description: 'Show fees and risks as plainly as returns. Trust is built through radical transparency, never hiding the cost of service.',
  },
  {
    number: '03',
    title: 'Design for a lifetime',
    description: "We aren't building a social network. Avoid dark patterns and engagement traps. Build tools that users trust over decades.",
  },
];

const ease = [0.16, 1, 0.3, 1];

export default function Governance() {
  return (
    <section id="governance" className="relative py-40 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="mb-20"
        >
          <span className="section-label mb-4 block">10 · Application</span>
          <h2 className="font-serif text-5xl md:text-6xl font-bold leading-[1.05] mb-6">
            Gover<span className="text-wealth-gradient">nance</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-lg">Tone in every pixel. How we apply the brand in product.</p>
          <div className="w-16 h-px bg-primary/40 mt-8" />
        </motion.div>

        <div className="space-y-0">
          {principles.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.7, ease }}
              className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 py-12 border-b border-border/60 last:border-b-0"
            >
              {/* Number + title */}
              <div className="md:col-span-4 flex items-baseline gap-4">
                <span className="font-mono text-xs text-primary/50 tabular-nums">{p.number}</span>
                <h3 className="font-serif text-2xl font-bold group-hover:text-primary transition-colors duration-500">
                  {p.title}
                </h3>
              </div>

              {/* Description */}
              <div className="md:col-span-8 md:pl-8 md:border-l md:border-border/40">
                <p className="text-lg leading-relaxed text-foreground/75">
                  {p.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
