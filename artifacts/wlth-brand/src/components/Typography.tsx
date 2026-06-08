import React from 'react';
import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1];

export default function Typography() {
  return (
    <section id="typography" className="relative py-40 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-secondary/20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="mb-24"
        >
          <span className="section-label mb-4 block">07 · Type</span>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
            Typo<span className="text-wealth-gradient">graphy</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-lg">Four purpose-driven typefaces that balance warmth, authority, and clarity.</p>
          <div className="w-16 h-px bg-primary/40 mt-8" />
        </motion.div>

        <div className="space-y-20">
          {/* Consumer: Philosopher */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
          >
            <div className="lg:col-span-3 space-y-3">
              <span className="font-mono text-[10px] text-primary/50 tracking-wider">CONSUMER</span>
              <h3 className="font-serif text-3xl font-bold">Philosopher</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Weights: 400, 700<br />
                Role: Consumer display, headlines
              </p>
            </div>
            <div className="lg:col-span-9 relative p-8 md:p-14 bg-background border border-border/60 rounded-2xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-px bg-wealth-gradient opacity-60" />
              <div className="text-4xl sm:text-5xl md:text-[72px] leading-[1.05] font-serif tracking-[-0.01em]">
                Wealth, <span className="text-wealth-gradient font-bold">working<br />for you.</span>
              </div>
            </div>
          </motion.div>

          {/* Institutional: Cardo */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
          >
            <div className="lg:col-span-3 space-y-3">
              <span className="font-mono text-[10px] text-primary/50 tracking-wider">INSTITUTIONAL</span>
              <h3 className="text-3xl font-bold" style={{ fontFamily: 'Cardo, serif' }}>Cardo</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Weights: 400, 700<br />
                Role: Institutional display
              </p>
            </div>
            <div className="lg:col-span-9 relative p-8 md:p-14 bg-[#15110A] text-[#F4ECDA] rounded-2xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-px bg-wealth-gradient opacity-60" />
              <div className="text-3xl sm:text-4xl md:text-[60px] leading-[1.1] mb-8" style={{ fontFamily: 'Cardo, serif' }}>
                Sophisticated,<br />guided investing.
              </div>
              <div className="flex items-center gap-6 font-mono text-sm md:text-base text-[#E3B340] border-t border-white/10 pt-6">
                <span>EGP 84.2M</span>
                <span className="w-1 h-1 rounded-full bg-[#E3B340]/40" />
                <span>312 mandates</span>
                <span className="w-1 h-1 rounded-full bg-[#E3B340]/40" />
                <span>+12.7% YTD</span>
              </div>
            </div>
          </motion.div>

          {/* UI & Scale */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
          >
            <div className="lg:col-span-3 space-y-3">
              <span className="font-mono text-[10px] text-primary/50 tracking-wider">SYSTEM</span>
              <h3 className="text-3xl font-bold">UI & Scale</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Inter for body/UI.<br />JetBrains Mono for data.</p>
            </div>
            <div className="lg:col-span-9 overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <tbody>
                  {[
                    { label: 'Display', text: 'The quick brown fox', className: 'font-serif font-bold text-5xl leading-[1.1]' },
                    { label: 'H1', text: 'The quick brown fox', className: 'font-serif font-bold text-[34px] leading-[1.2]' },
                    { label: 'H2', text: 'The quick brown fox', className: 'font-semibold text-[26px] leading-[1.3]' },
                    { label: 'Body', text: 'The quick brown fox jumps over the lazy dog.', className: 'text-[16px] leading-[1.6]' },
                    { label: 'Data', text: '1,234,567.89 EGP', className: 'font-mono text-[17px] text-primary tabular-nums' },
                  ].map(({ label, text, className }) => (
                    <tr key={label} className="border-b border-border/60 group">
                      <td className="py-7 pr-6 align-middle w-20">
                        <span className="text-[10px] font-mono text-muted-foreground/50 tracking-wider uppercase">{label}</span>
                      </td>
                      <td className={`py-7 ${className} group-hover:text-primary transition-colors duration-400`}>
                        {text}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
