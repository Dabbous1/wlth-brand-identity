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

const ease = [0.16, 1, 0.3, 1];

function AppIcon({ size, bg, border, radius, font = 'Philosopher' }: {
  size: number; bg: string; border?: string; radius?: number; font?: string;
}) {
  const r = radius ?? size * 0.22;
  const fontSize = size * 0.38;

  return (
    <div style={{
      width: size, height: size, borderRadius: r, background: bg,
      border: border ?? 'none', display: 'flex', alignItems: 'center',
      justifyContent: 'center', flexShrink: 0,
    }}>
      <span style={{
        fontFamily: `${font}, serif`, fontWeight: 700, fontSize, lineHeight: 1,
        background: GRADIENT, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        backgroundClip: 'text', letterSpacing: '-0.01em',
      }}>
        W
      </span>
    </div>
  );
}

export default function AppLogos() {
  return (
    <section id="app-logos" className="relative py-40 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-secondary/20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="mb-20"
        >
          <span className="section-label mb-4 block">09 · Icon</span>
          <h2 className="font-serif text-5xl md:text-6xl font-bold leading-[1.05] mb-6">
            App <span className="text-wealth-gradient">Icon</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-lg">
            The monogram <span style={{ fontFamily: 'Philosopher, serif', fontWeight: 700 }}>W</span> — rendered in the wealth gradient on a solid ground. One mark, every surface.
          </p>
          <div className="w-16 h-px bg-primary/40 mt-8" />
        </motion.div>

        {/* Size scale */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="mb-24"
        >
          <h3 className="font-serif text-xl font-bold mb-10 text-foreground/80">Size scale</h3>
          <div className="flex flex-wrap items-end gap-10">
            {sizes.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5, ease }}
                className="flex flex-col items-center gap-3"
              >
                <AppIcon size={s.px} bg="#FAF7F0" border="1px solid #E4DCC9" />
                <div className="text-center">
                  <p className="text-xs font-semibold">{s.label}</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5 max-w-[100px] leading-snug">{s.context}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Approved backgrounds */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="mb-24"
        >
          <h3 className="font-serif text-xl font-bold mb-10 text-foreground/80">Approved backgrounds</h3>
          <div className="flex flex-wrap gap-8">
            {backgrounds.map((v, i) => (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5, ease }}
                className="flex flex-col items-center gap-3"
              >
                <AppIcon size={80} bg={v.bg} border={v.border} />
                <p className="text-xs font-medium">{v.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Two voice variants */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="mb-20"
        >
          <h3 className="font-serif text-xl font-bold mb-10 text-foreground/80">Two voices, one icon</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Consumer */}
            <div className="rounded-2xl border border-border/60 bg-[#FAF7F0] p-8 flex flex-col gap-6">
              <span className="text-[10px] font-mono tracking-[0.2em] text-[#BD8E25] uppercase">Consumer · Philosopher</span>
              <div className="flex items-end gap-6">
                {[96, 64, 40].map(sz => <AppIcon key={sz} size={sz} bg="#FFFFFF" border="1px solid #E4DCC9" font="Philosopher" />)}
              </div>
              <div>
                <p className="text-sm font-semibold text-[#23201A]">Humanist · Open · Approachable</p>
                <p className="text-sm text-[#5A554B] mt-1">Light ground, cream-to-white surface.</p>
              </div>
            </div>

            {/* Institutional */}
            <div className="rounded-2xl border border-[#3A3022] bg-[#15110A] p-8 flex flex-col gap-6">
              <span className="text-[10px] font-mono tracking-[0.2em] text-[#BD8E25] uppercase">Institutional · Cardo</span>
              <div className="flex items-end gap-6">
                {[96, 64, 40].map(sz => <AppIcon key={sz} size={sz} bg="#1E1810" border="1px solid #3A3022" font="Cardo" />)}
              </div>
              <div>
                <p className="text-sm font-semibold text-[#F4ECDA]">Scholarly · High-contrast · Rigorous</p>
                <p className="text-sm text-[#C4B89E] mt-1">Deep base, warm brown-black surface.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Clearspace */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="p-8 rounded-2xl border border-border/60 bg-card flex flex-col sm:flex-row items-center gap-8"
        >
          <div className="relative flex-shrink-0" style={{ width: 128, height: 128 }}>
            <div className="absolute inset-0 rounded-2xl border-2 border-dashed border-primary/25" style={{ margin: 12 }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <AppIcon size={80} bg="#FAF7F0" border="1px solid #E4DCC9" />
            </div>
            {['top-0 left-1/2 -translate-x-1/2', 'bottom-0 left-1/2 -translate-x-1/2', 'left-0 top-1/2 -translate-y-1/2', 'right-0 top-1/2 -translate-y-1/2'].map((pos) => (
              <span key={pos} className={`absolute ${pos} text-[10px] font-mono text-primary/50`}>X</span>
            ))}
          </div>
          <div>
            <h4 className="font-serif text-lg font-bold mb-2">Clearspace</h4>
            <p className="text-muted-foreground leading-relaxed text-sm max-w-md">
              Keep a margin of <span className="font-mono text-primary text-xs">X</span> — the cap height of the monogram — clear on every side.
              Minimum rendered size: <span className="font-mono text-primary text-xs">32 × 32 px</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
