import React from 'react';
import { motion } from 'framer-motion';

export default function WealthGradient() {
  const stops = [
    { color: '#7E5A12', name: 'Deep bronze', pos: '0%' },
    { color: '#BD8E25', name: 'Primary gold', pos: '30%' },
    { color: '#D7A736', name: 'Mid gold', pos: '62%' },
    { color: '#E3B340', name: 'Bright gold', pos: '82%' },
    { color: '#F6D87A', name: 'Foil highlight', pos: '100%' },
  ];

  return (
    <section id="gradient" className="py-32 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">The Wealth Gradient</h2>
          <p className="text-xl font-serif italic text-muted-foreground border-l-2 border-primary pl-6 py-2">
            "Gold alone says luxury. A gold that moves — catching light, deepening into shadow — says wealth: weight, growth, compounding."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full h-48 md:h-64 rounded-2xl bg-wealth-gradient shadow-xl mb-12"
        />

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {stops.map((stop, i) => (
            <motion.div
              key={stop.pos}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col gap-2"
            >
              <div className="h-12 w-full rounded-md border border-border/20 shadow-sm" style={{ backgroundColor: stop.color }} />
              <div className="text-sm font-medium">{stop.name}</div>
              <div className="text-xs font-mono text-muted-foreground">{stop.color} · {stop.pos}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
