import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const pillars = [
  {
    title: "Purpose",
    description: "Humans are driven by needs and wants, and wealth is a core human need everywhere. Most Egyptians try to satisfy that need through diminishing, low-ROI activities that burn them out over a lifetime. Our purpose is to change that — to make this core human need work for you instead of against you."
  },
  {
    title: "Vision",
    description: "To make investing a default habit for every Egyptian household — turning the nation's idle savings into engine fuel for a genuinely growth-oriented economy."
  },
  {
    title: "Positioning",
    description: "For everyday Egyptians — from first-time savers to the mass-affluent — who are stuck between shallow trading apps and out-of-reach private banks, WLTH. is the wealth management platform that makes sophisticated, guided investing genuinely accessible to all, instead of forcing you to choose between simple-but-shallow or powerful-but-exclusive platforms."
  },
  {
    title: "Only-ness",
    description: "We are the ONLY Egyptian wealth platform that turns proprietary institutional strategies into retail products engineered natively for Egypt's macro reality: ~25% T-Bills, structural inflation, and a floating pound."
  }
];

export default function BrandFoundation() {
  return (
    <section id="foundation" className="py-32 px-6 bg-secondary/30 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Brand Foundation</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">The promise that guides every decision, every interface, and every interaction.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border hover:border-primary/30 transition-colors duration-300">
                <CardContent className="p-8">
                  <h3 className="font-serif text-2xl font-bold mb-4 text-primary">{pillar.title}</h3>
                  <p className="text-lg leading-relaxed text-foreground/80">{pillar.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
