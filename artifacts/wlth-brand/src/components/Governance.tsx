import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

export default function Governance() {
  return (
    <section id="governance" className="py-32 px-6 bg-secondary/30 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Governance</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Tone in every pixel. How we apply the brand in product.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0 }}>
            <Card className="h-full bg-background border-border shadow-sm">
              <CardContent className="p-8">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <span className="text-primary font-bold">1</span>
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">Lead with warmth</h3>
                <p className="text-muted-foreground">The financial industry is notoriously cold. We counteract this with humanist typography, warm color tones, and conversational copy.</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <Card className="h-full bg-background border-border shadow-sm">
              <CardContent className="p-8">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <span className="text-primary font-bold">2</span>
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">Clarity about Risk & Fees</h3>
                <p className="text-muted-foreground">Show fees and risks as plainly as returns. Trust is built through radical transparency, never hiding the cost of service.</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <Card className="h-full bg-background border-border shadow-sm">
              <CardContent className="p-8">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <span className="text-primary font-bold">3</span>
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">Design for a lifetime</h3>
                <p className="text-muted-foreground">We aren't building a social network. Avoid dark patterns and engagement traps. Build tools that users trust over decades.</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
