import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

export default function TwoVoices() {
  return (
    <section id="voices" className="py-32 px-6 bg-secondary/20 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Brand System: Two Voices</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">One brand, adapted for two distinct audiences.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full overflow-hidden border-border bg-background">
              <div className="h-2 bg-wealth-gradient" />
              <CardContent className="p-10">
                <div className="mb-8">
                  <span className="inline-block px-3 py-1 rounded-full bg-secondary text-sm font-medium text-muted-foreground mb-4">Consumer</span>
                  <h3 className="text-4xl font-bold text-wealth-gradient mb-2" style={{ fontFamily: 'Philosopher, serif' }}>Philosopher</h3>
                  <p className="text-lg text-foreground/80">Warm, approachable, and humanist.</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>First-time savers to mass-affluent</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Focuses on warmth, empowerment, and access</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Light backgrounds, airy layouts</span>
                  </li>
                </ul>

                <div className="p-6 bg-secondary/50 rounded-lg border border-border">
                  <p className="font-serif text-2xl italic text-foreground">"Wealth, working for you."</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full overflow-hidden border-border bg-[#15110A] text-[#F4ECDA]">
              <div className="h-2 bg-wealth-gradient" />
              <CardContent className="p-10">
                <div className="mb-8">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-sm font-medium text-white/60 mb-4">Institutional</span>
                  <h3 className="text-4xl font-bold text-wealth-gradient mb-2" style={{ fontFamily: 'Cardo, serif' }}>Cardo</h3>
                  <p className="text-lg text-white/80">Scholarly, high-contrast, and rigorous.</p>
                </div>
                
                <ul className="space-y-4 mb-8 text-white/80">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Mandates, partners, and AM clients</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Focuses on pedigree, stewardship, and rigour</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Dark backgrounds, high-contrast typography</span>
                  </li>
                </ul>

                <div className="p-6 bg-white/5 rounded-lg border border-white/10">
                  <p className="text-2xl italic" style={{ fontFamily: 'Cardo, serif' }}>"Sophisticated, guided investing."</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
