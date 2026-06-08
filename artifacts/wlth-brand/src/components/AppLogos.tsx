import React from 'react';
import { motion } from 'framer-motion';

const GRADIENT = 'linear-gradient(18deg, #7E5A12 0%, #BD8E25 30%, #D7A736 62%, #E3B340 82%, #F6D87A 100%)';

type IconSize = { label: string; px: number; context: string };

const sizes: IconSize[] = [
  { label: 'App Store',   px: 120, context: '1024 × 1024 px — store listing' },
  { label: 'Home Screen', px: 80,  context: '180 × 180 px — iOS @3×'        },
  { label: 'Spotlight',   px: 52,  context: '120 × 120 px — search results'  },
  { label: 'Notification',px: 36,  context: '60 × 60 px — alerts & badges'   },
  { label: 'Favicon',     px: 24,  context: '32 × 32 px — browser tab'       },
];

type BgVariant = { label: string; bg: string; fg: string; border?: string };

const backgrounds: BgVariant[] = [
  { label: 'Cream',     bg: '#FAF7F0', fg: '#23201A', border: '1px solid #E4DCC9' },
  { label: 'Deep Base', bg: '#15110A', fg: '#F4ECDA' },
  { label: 'Navy',      bg: '#1F2A44', fg: '#FAF7F0' },
  { label: 'Teal',      bg: '#0E7C66', fg: '#FAF7F0' },
  { label: 'White',     bg: '#FFFFFF', fg: '#23201A', border: '1px solid #E4DCC9' },
];

function AppIcon({
  size,
  bg,
  border,
  radius,
  font = 'Philosopher',
}: {
  size: number;
  bg: string;
  border?: string;
  radius?: number;
  font?: string;
}) {
  const r = radius ?? size * 0.22;
  const fontSize = size * 0.38;

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: r,
        background: bg,
        border: border ?? 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <span
        style={{
          fontFamily: `${font}, serif`,
          fontWeight: 700,
          fontSize,
          lineHeight: 1,
          background: GRADIENT,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          letterSpacing: '-0.01em',
        }}
      >
        W
      </span>
    </div>
  );
}

export default function AppLogos() {
  return (
    <section id="app-logos" className="py-32 px-6 border-t border-border bg-secondary/20">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-sm font-mono tracking-widest text-primary uppercase mb-3">03 · Logo</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">App Icon</h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            The monogram <span style={{ fontFamily: 'Philosopher, serif', fontWeight: 700 }}>W</span> — rendered in the wealth gradient on a solid ground. One mark, every surface.
          </p>
        </motion.div>

        {/* Size scale */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="font-serif text-xl font-bold mb-8 text-foreground/80">Size scale</h3>
          <div className="flex flex-wrap items-end gap-10">
            {sizes.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex flex-col items-center gap-3"
              >
                <AppIcon size={s.px} bg="#FAF7F0" border="1px solid #E4DCC9" />
                <div className="text-center">
                  <p className="text-xs font-semibold text-foreground">{s.label}</p>
                  <p className="text-xs text-muted-foreground mt-0.5 max-w-[100px] leading-snug">{s.context}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Background contexts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="font-serif text-xl font-bold mb-8 text-foreground/80">Approved backgrounds</h3>
          <div className="flex flex-wrap gap-6">
            {backgrounds.map((v, i) => (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex flex-col items-center gap-3"
              >
                <AppIcon size={80} bg={v.bg} border={v.border} />
                <p className="text-xs font-semibold text-foreground">{v.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Two voice variants side by side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-serif text-xl font-bold mb-8 text-foreground/80">Two voices, one icon</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* Consumer */}
            <div className="rounded-2xl border border-border bg-[#FAF7F0] p-8 flex flex-col gap-6">
              <span className="text-xs font-mono tracking-widest text-primary uppercase">Consumer · Philosopher</span>
              <div className="flex items-end gap-6">
                {[96, 64, 40].map(sz => (
                  <AppIcon key={sz} size={sz} bg="#FFFFFF" border="1px solid #E4DCC9" font="Philosopher" />
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Humanist · Open · Approachable</p>
                <p className="text-sm text-muted-foreground mt-1">Light ground, cream-to-white surface.</p>
              </div>
            </div>

            {/* Institutional */}
            <div className="rounded-2xl border border-[#3A3022] bg-[#15110A] p-8 flex flex-col gap-6">
              <span className="text-xs font-mono tracking-widest text-[#BD8E25] uppercase">Institutional · Cardo</span>
              <div className="flex items-end gap-6">
                {[96, 64, 40].map(sz => (
                  <AppIcon key={sz} size={sz} bg="#1E1810" border="1px solid #3A3022" font="Cardo" />
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-[#F4ECDA]">Scholarly · High-contrast · Rigorous</p>
                <p className="text-sm text-[#C4B89E] mt-1">Deep base, warm brown-black surface.</p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Clearspace rule */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl border border-border bg-card flex flex-col sm:flex-row items-center gap-8"
        >
          {/* Visual clearspace diagram */}
          <div className="relative flex-shrink-0" style={{ width: 128, height: 128 }}>
            <div
              className="absolute inset-0 rounded-2xl border-2 border-dashed border-primary/30"
              style={{ margin: 12 }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <AppIcon size={80} bg="#FAF7F0" border="1px solid #E4DCC9" />
            </div>
            {/* X markers */}
            <span className="absolute top-0 left-1/2 -translate-x-1/2 text-[10px] font-mono text-primary">X</span>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[10px] font-mono text-primary">X</span>
            <span className="absolute left-0 top-1/2 -translate-y-1/2 text-[10px] font-mono text-primary">X</span>
            <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[10px] font-mono text-primary">X</span>
          </div>
          <div>
            <h4 className="font-serif text-lg font-bold mb-2">Clearspace</h4>
            <p className="text-muted-foreground leading-relaxed text-sm max-w-md">
              Keep a margin of <span className="font-mono text-primary text-xs">X</span> — the cap height of the monogram — clear on every side. Minimum rendered size: <span className="font-mono text-primary text-xs">32 × 32 px</span>. Below this, legibility breaks down.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
