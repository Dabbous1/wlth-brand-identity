import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const pairs = [
  { yes: "Your wealth, working for you.", no: "Make your money work harder!!" },
  { yes: "Returns after inflation: +9.1%", no: "Massive 18% gains — don't miss out" },
  { yes: "Here's the risk on this strategy.", no: "Guaranteed growth, zero worries" }
];

export default function VoiceTone() {
  return (
    <section id="tone" className="py-32 px-6 bg-secondary/30 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Voice & Tone</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">Plain-spoken, precise, and unequivocally on the user's side.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {["Plain over jargon", "Honest about risk", "Guide, don't push"].map((principle, i) => (
            <motion.div
              key={principle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 bg-background rounded-xl border border-border shadow-sm text-center font-serif text-xl font-bold text-foreground"
            >
              {principle}
            </motion.div>
          ))}
        </div>

        <div className="space-y-6">
          {pairs.map((pair, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <Card className="border-border bg-background border-l-4 border-l-[#0E7C66]">
                <CardContent className="p-6 flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#0E7C66] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-muted-foreground mb-1 uppercase tracking-wider">We say</div>
                    <div className="text-lg">"{pair.yes}"</div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-border bg-background/50 border-l-4 border-l-destructive/70 opacity-80 grayscale-[20%]">
                <CardContent className="p-6 flex items-start gap-4">
                  <XCircle className="w-6 h-6 text-destructive shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-muted-foreground mb-1 uppercase tracking-wider">We don't say</div>
                    <div className="text-lg line-through decoration-destructive/50">"{pair.no}"</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
