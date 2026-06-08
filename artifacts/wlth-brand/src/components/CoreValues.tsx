import React from 'react';
import { motion } from 'framer-motion';

const values = [
  { letter: "W", title: "Wisdom",              desc: "Guide with judgment; make the complex clear." },
  { letter: "E", title: "Empowerment",         desc: "Leave the user more capable, never more dependent." },
  { letter: "A", title: "Accessibility",       desc: "Institutional-grade investing, opened to all. No gating." },
  { letter: "L", title: "Longevity",           desc: "We think in decades. We are built for a lifetime." },
  { letter: "T", title: "Transparency & Trust",desc: "Clear on fees and risk — even when it costs us." },
  { letter: "H", title: "Humanity",            desc: "Warmth in a cold industry. No dark patterns." },
];

export default function CoreValues() {
  return (
    <section id="values" className="py-32 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-sm font-mono tracking-widest text-primary uppercase mb-3">01 · Foundation</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Core Values</h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            The WEALTH acrostic — each tested against real cost.
          </p>
        </motion.div>

        <div className="flex flex-col">
          {values.map((v, i) => (
            <motion.div
              key={v.letter}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`flex items-stretch gap-0 group ${i < values.length - 1 ? 'border-b border-border' : ''}`}
            >
              {/* Large acrostic letter */}
              <div className="flex-shrink-0 w-20 md:w-28 flex items-center justify-center py-8 md:py-10">
                <span
                  className="font-serif font-bold text-5xl md:text-7xl leading-none select-none"
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

              {/* Vertical hairline */}
              <div className="w-px bg-border flex-shrink-0 my-4" />

              {/* Value content */}
              <div className="flex flex-col justify-center px-4 md:px-8 lg:px-12 py-8 md:py-10 flex-1">
                <h3 className="font-serif text-xl md:text-2xl font-bold mb-1 group-hover:text-primary transition-colors duration-300">
                  {v.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  {v.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
