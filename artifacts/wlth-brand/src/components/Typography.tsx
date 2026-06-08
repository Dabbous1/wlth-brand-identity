import React from 'react';
import { motion } from 'framer-motion';

export default function Typography() {
  return (
    <section id="typography" className="py-32 px-6 bg-secondary/20 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Typography</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">Four purpose-driven typefaces that balance warmth, authority, and clarity.</p>
        </motion.div>

        <div className="space-y-16">
          {/* Consumer Specimen */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            <div className="lg:col-span-4">
              <h3 className="font-serif text-2xl font-bold mb-2">Philosopher</h3>
              <p className="text-sm text-muted-foreground mb-4">Weights: 400, 700<br/>Role: Consumer display, headlines</p>
            </div>
            <div className="lg:col-span-8 p-6 md:p-12 bg-background border border-border rounded-2xl shadow-sm overflow-hidden">
              <div className="text-4xl sm:text-5xl md:text-[64px] leading-tight font-serif">
                Wealth, <span className="text-wealth-gradient font-bold">working for you.</span>
              </div>
            </div>
          </motion.div>

          {/* Institutional Specimen */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            <div className="lg:col-span-4">
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Cardo, serif' }}>Cardo</h3>
              <p className="text-sm text-muted-foreground mb-4">Weights: 400, 700<br/>Role: Institutional display</p>
            </div>
            <div className="lg:col-span-8 p-6 md:p-12 bg-[#15110A] text-[#F4ECDA] rounded-2xl shadow-sm overflow-hidden">
              <div className="text-3xl sm:text-4xl md:text-[56px] leading-tight mb-6 md:mb-8" style={{ fontFamily: 'Cardo, serif' }}>
                Sophisticated, guided investing.
              </div>
              <div className="font-mono text-primary text-base md:text-xl border-t border-white/10 pt-4 md:pt-6">
                EGP 84.2M &middot; 312 mandates &middot; +12.7% YTD
              </div>
            </div>
          </motion.div>

          {/* Scale */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            <div className="lg:col-span-4">
              <h3 className="text-2xl font-bold mb-2">UI & Scale</h3>
              <p className="text-sm text-muted-foreground">Inter for body/UI. JetBrains Mono for data.</p>
            </div>
            <div className="lg:col-span-8 overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-6 pr-4 align-middle text-sm text-muted-foreground">Display</td>
                    <td className="py-6 font-serif font-bold text-5xl leading-[1.1]">The quick brown fox</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-6 pr-4 align-middle text-sm text-muted-foreground">H1</td>
                    <td className="py-6 font-serif font-bold text-[34px] leading-[1.2]">The quick brown fox</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-6 pr-4 align-middle text-sm text-muted-foreground">H2</td>
                    <td className="py-6 font-semibold text-[26px] leading-[1.3]">The quick brown fox</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-6 pr-4 align-middle text-sm text-muted-foreground">Body</td>
                    <td className="py-6 text-[16px] leading-[1.6]">The quick brown fox jumps over the lazy dog.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-6 pr-4 align-middle text-sm text-muted-foreground">Data</td>
                    <td className="py-6 font-mono text-[17px] text-primary">1,234,567.89 EGP</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
