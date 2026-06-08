import React from 'react';
import { motion } from 'framer-motion';

const values = [
  { letter: "W", title: "Wisdom",              desc: "Guide with judgment; make the complex clear." },
  { letter: "E", title: "Empowerment",         desc: "Leave the user more capable, never more dependent." },
  { letter: "A", title: "Accessibility",       desc: "Institutional-grade investing, opened to all. No gating." },
  { letter: "L", title: "Longevity",           desc: "We think in decades. We are built for a lifetime." },
  { letter: "T", title: "Transparency & Trust", desc: "Clear on fees and risk — even when it costs us." },
  { letter: "H", title: "Humanity",            desc: "Warmth in a cold industry. No dark patterns." },
];

const ease = [0.16, 1, 0.3, 1];

export default function CoreValues() {
  return (
    <section id="values" className="relative py-40 px-6">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="mb-20"
        >
          <span className="section-label mb-4 block">01 · Values</span>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
            The <span className="text-wealth-gradient">WEALTH</span> acrostic.
          </h2>
          <p className="text-lg text-muted-foreground max-w-lg">
            Each letter tested against real cost. Six principles that govern every product decision.
          </p>
          <div className="w-16 h-px bg-primary/40 mt-8" />
        </motion.div>

        <div className="flex flex-col">
          {values.map((v, i) => (
            <motion.div
              key={v.letter}
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06, duration: 0.6, ease }}
              className="group relative"
            >
              {/* Top border on first item */}
              {i === 0 && <div className="absolute top-0 left-0 right-0 h-px bg-border/60" />}

              <div className="flex items-stretch gap-0 py-10 md:py-12 border-b border-border/60">
                {/* Counter */}
                <div className="hidden md:flex items-center w-12 flex-shrink-0">
                  <span className="font-mono text-[10px] text-muted-foreground/40 tabular-nums">0{i + 1}</span>
                </div>

                {/* Acrostic letter */}
                <div className="flex-shrink-0 w-16 md:w-24 flex items-center justify-center">
                  <span
                    className="font-serif font-bold text-5xl md:text-7xl leading-none select-none transition-transform duration-500 group-hover:scale-110"
                    style={{
                      background: 'linear-gradient(18deg, #7E5A12 0%, #BD8E25 30%, #D7A736 62%, #E3B340 82%, #F6D87A 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {v.letter}
                  </span>
                </div>

                {/* Vertical divider */}
                <div className="w-px bg-border/50 flex-shrink-0 mx-4 md:mx-8 self-stretch" />

                {/* Content */}
                <div className="flex flex-col justify-center flex-1 min-w-0">
                  <h3 className="font-serif text-xl md:text-2xl font-bold mb-1.5 group-hover:text-primary transition-colors duration-400">
                    {v.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                    {v.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
