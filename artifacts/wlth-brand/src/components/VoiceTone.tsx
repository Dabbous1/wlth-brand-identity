import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';

const principles = ["Plain over jargon", "Honest about risk", "Guide, don't push"];

const pairs = [
  { yes: "Your wealth, working for you.", no: "Make your money work harder!!" },
  { yes: "Returns after inflation: +9.1%", no: "Massive 18% gains — don't miss out" },
  { yes: "Here's the risk on this strategy.", no: "Guaranteed growth, zero worries" },
];

const ease = [0.16, 1, 0.3, 1];

export default function VoiceTone() {
  return (
    <section id="tone" className="relative py-40 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="mb-20"
        >
          <span className="section-label mb-4 block">04 · Language</span>
          <h2 className="font-serif text-5xl md:text-6xl font-bold leading-[1.05] mb-6">
            Voice & <span className="text-wealth-gradient">Tone</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-lg">Plain-spoken, precise, and unequivocally on the user's side.</p>
          <div className="w-16 h-px bg-primary/40 mt-8" />
        </motion.div>

        {/* Three principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
          {principles.map((principle, i) => (
            <motion.div
              key={principle}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6, ease }}
              className="relative p-8 rounded-xl bg-background border border-border/60 text-center group hover:border-primary/30 transition-colors duration-400"
            >
              <span className="block font-mono text-[10px] text-primary/50 mb-3 tracking-wider">0{i + 1}</span>
              <span className="font-serif text-xl font-bold">{principle}</span>
            </motion.div>
          ))}
        </div>

        {/* Do / Don't pairs */}
        <div className="space-y-5">
          {pairs.map((pair, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6, ease }}
              className="grid grid-cols-1 md:grid-cols-2 gap-3"
            >
              {/* We say */}
              <div className="relative p-6 rounded-xl bg-background border border-[#0E7C66]/20 border-l-[3px] border-l-[#0E7C66] flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-[#0E7C66] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] font-mono tracking-[0.2em] uppercase text-[#0E7C66] mb-1.5">We say</span>
                  <span className="text-base leading-relaxed">"{pair.yes}"</span>
                </div>
              </div>

              {/* We don't say */}
              <div className="relative p-6 rounded-xl bg-background/50 border border-destructive/15 border-l-[3px] border-l-destructive/50 flex items-start gap-4 opacity-75">
                <XCircle className="w-5 h-5 text-destructive/60 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] font-mono tracking-[0.2em] uppercase text-destructive/60 mb-1.5">We don't say</span>
                  <span className="text-base leading-relaxed line-through decoration-destructive/30">"{pair.no}"</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
