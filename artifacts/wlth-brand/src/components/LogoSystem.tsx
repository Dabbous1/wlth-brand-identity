import React from 'react';
import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1];

const misuse = [
  { label: "Don't recolour", style: { color: '#c0392b' }, className: 'font-serif font-bold text-3xl tracking-tight' },
  { label: "Don't stretch", style: { display: 'inline-block', transform: 'scaleX(1.6)', transformOrigin: 'center' }, className: 'font-serif font-bold text-3xl tracking-tight text-foreground' },
  { label: "Don't rotate", style: { display: 'inline-block', transform: 'rotate(-18deg)' }, className: 'font-serif font-bold text-3xl tracking-tight text-foreground' },
  { label: "Don't add shadow", style: { textShadow: '4px 4px 8px rgba(0,0,0,0.5), -2px -2px 4px rgba(0,0,0,0.3)' }, className: 'font-serif font-bold text-3xl tracking-tight text-foreground' },
  { label: "Don't outline", style: { WebkitTextStroke: '1.5px #23201A', color: 'transparent' } as React.CSSProperties, className: 'font-serif font-bold text-3xl tracking-tight' },
  { label: "Don't crowd", isSpecial: true },
];

export default function LogoSystem() {
  return (
    <section id="logo" className="relative py-40 px-6">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="mb-24 text-center"
        >
          <span className="section-label mb-4 block">08 · Mark</span>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
            Logo <span className="text-wealth-gradient">System</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">Four capitals, a full stop, and the signature gold gradient.</p>
          <div className="w-16 h-px bg-primary/40 mt-8 mx-auto" />
        </motion.div>

        {/* Primary Lockups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-28">
          {[
            { label: 'Consumer Light', bg: '#FAF7F0', textColor: '', font: 'Philosopher, serif', border: true, labelColor: '#23201A' },
            { label: 'Consumer Dark', bg: '#15110A', textColor: '', font: 'Philosopher, serif', border: false, labelColor: '#FAF7F0' },
            { label: 'Institutional Light', bg: '#FAF7F0', textColor: '', font: 'Cardo, serif', border: true, labelColor: '#23201A' },
            { label: 'Institutional Dark', bg: '#15110A', textColor: '', font: 'Cardo, serif', border: false, labelColor: '#FAF7F0' },
          ].map((lockup, i) => (
            <motion.div
              key={lockup.label}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.6, ease }}
              className={`relative p-10 md:p-16 rounded-2xl flex items-center justify-center min-h-[200px] group ${lockup.border ? 'border border-border/60' : ''}`}
              style={{ backgroundColor: lockup.bg }}
            >
              <span
                className="font-bold text-5xl md:text-6xl lg:text-7xl tracking-tight text-wealth-gradient transition-transform duration-500 group-hover:scale-105"
                style={{ fontFamily: lockup.font }}
              >
                WLTH.
              </span>
              <span
                className="absolute top-4 left-5 text-[10px] font-mono tracking-[0.15em] uppercase"
                style={{ color: lockup.labelColor }}
              >
                {lockup.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Misuse */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
        >
          <h3 className="font-serif text-2xl md:text-3xl font-bold mb-3">Logo Misuse</h3>
          <p className="text-muted-foreground mb-10 max-w-md">The integrity of the mark depends on consistency. Never do the following.</p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {misuse.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5, ease }}
                className="p-6 bg-destructive/[0.03] border border-destructive/15 rounded-xl flex flex-col items-center justify-center gap-4 text-center min-h-[140px]"
              >
                <div className="h-14 flex items-center justify-center">
                  {item.isSpecial ? (
                    <div className="flex items-center gap-0">
                      <span className="font-sans text-sm text-muted-foreground">Lorem</span>
                      <span className="font-serif font-bold text-3xl tracking-tight text-foreground">WLTH.</span>
                      <span className="font-sans text-sm text-muted-foreground">Lorem</span>
                    </div>
                  ) : (
                    <span className={item.className} style={item.style}>WLTH.</span>
                  )}
                </div>
                <span className="text-xs font-mono tracking-wider text-destructive/70 uppercase">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
