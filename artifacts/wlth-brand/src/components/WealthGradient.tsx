import React from 'react';
import { motion } from 'framer-motion';

const stops = [
  { color: '#7E5A12', name: 'Deep bronze', pos: '0%' },
  { color: '#BD8E25', name: 'Primary gold', pos: '30%' },
  { color: '#D7A736', name: 'Mid gold', pos: '62%' },
  { color: '#E3B340', name: 'Bright gold', pos: '82%' },
  { color: '#F6D87A', name: 'Foil highlight', pos: '100%' },
];

const ease = [0.16, 1, 0.3, 1];

export default function WealthGradient() {
  return (
    <section id="gradient" className="relative py-40 px-6">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="max-w-3xl mb-20"
        >
          <span className="section-label mb-4 block">05 · Colour</span>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-8">
            The Wealth <span className="text-wealth-gradient">Gradient</span>
          </h2>
          <blockquote className="relative pl-6 border-l-2 border-primary/40">
            <p className="text-xl font-serif italic text-muted-foreground leading-relaxed">
              "Gold alone says luxury. A gold that moves — catching light, deepening into shadow — says wealth: weight, growth, compounding."
            </p>
          </blockquote>
          <div className="w-16 h-px bg-primary/40 mt-10" />
        </motion.div>

        {/* Large gradient banner with noise */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease }}
          className="relative w-full h-56 md:h-72 rounded-2xl overflow-hidden mb-16 shadow-2xl noise-overlay"
        >
          <div className="absolute inset-0 bg-wealth-gradient" />
          {/* Inner glow overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/15" />
        </motion.div>

        {/* Color stops */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {stops.map((stop, i) => (
            <motion.div
              key={stop.pos}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease }}
              className="group"
            >
              <div
                className="h-20 w-full rounded-xl shadow-sm mb-4 transition-all duration-300 group-hover:shadow-lg group-hover:scale-[1.03]"
                style={{ backgroundColor: stop.color }}
              />
              <div className="px-0.5">
                <h4 className="font-medium text-sm mb-0.5">{stop.name}</h4>
                <p className="text-xs font-mono text-muted-foreground">{stop.color}</p>
                <p className="text-[10px] font-mono text-muted-foreground/50 mt-0.5">{stop.pos}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
