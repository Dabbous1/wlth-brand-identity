import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const lightPalette = [
  { name: 'Cream', role: 'Base', hex: '#FAF7F0' },
  { name: 'Surface', role: 'Cards', hex: '#FFFFFF' },
  { name: 'Sand', role: 'Alt surface', hex: '#F3EEE2' },
  { name: 'Ink', role: 'Primary text', hex: '#23201A' },
  { name: 'Ink Soft', role: 'Secondary text', hex: '#5A554B' },
  { name: 'Hairline', role: 'Borders', hex: '#E4DCC9' },
  { name: 'Gold Solid', role: 'Brand primary', hex: '#BD8E25' },
  { name: 'Gold Deep', role: 'Brand dark', hex: '#8A6516' },
  { name: 'Navy', role: 'Charts', hex: '#1F2A44' },
  { name: 'Teal', role: 'Success', hex: '#0E7C66' },
  { name: 'Slate', role: 'Neutral', hex: '#7A8B8F' },
];

const darkPalette = [
  { name: 'Base', role: 'Background', hex: '#15110A' },
  { name: 'Surface', role: 'Cards', hex: '#1E1810' },
  { name: 'Surface Alt', role: 'Elevated', hex: '#272014' },
  { name: 'Ink Light', role: 'Primary text', hex: '#F4ECDA' },
  { name: 'Ink Soft', role: 'Secondary text', hex: '#C4B89E' },
  { name: 'Hairline', role: 'Borders', hex: '#3A3022' },
  { name: 'Gold Lifted', role: 'Brand primary', hex: '#E3B340' },
  { name: 'Gold Base', role: 'Brand accent', hex: '#BD8E25' },
  { name: 'Deep Bronze', role: 'Brand dark', hex: '#8A6516' },
  { name: 'Navy', role: 'Charts', hex: '#2A3A5C' },
  { name: 'Teal', role: 'Success', hex: '#16A085' },
  { name: 'Slate', role: 'Neutral', hex: '#9AAAAE' },
];

const ease = [0.16, 1, 0.3, 1];

export default function ColourSystem() {
  const [showDark, setShowDark] = useState(false);
  const palette = showDark ? darkPalette : lightPalette;

  return (
    <section id="colors" className="relative py-40 px-6">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8"
        >
          <div>
            <span className="section-label mb-4 block">06 · Palette</span>
            <h2 className="font-serif text-5xl md:text-6xl font-bold leading-[1.05] mb-4">
              Colour <span className="text-wealth-gradient">System</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-md">The foundational palette for interfaces and brand moments.</p>
            <div className="w-16 h-px bg-primary/40 mt-6" />
          </div>

          {/* Toggle */}
          <div className="flex items-center gap-3 bg-secondary/80 px-4 py-2.5 rounded-full border border-border/60">
            <Label htmlFor="palette-toggle" className={`cursor-pointer text-xs font-mono tracking-wider uppercase transition-colors ${!showDark ? 'text-primary' : 'text-muted-foreground'}`}>
              Light
            </Label>
            <Switch id="palette-toggle" checked={showDark} onCheckedChange={setShowDark} />
            <Label htmlFor="palette-toggle" className={`cursor-pointer text-xs font-mono tracking-wider uppercase transition-colors ${showDark ? 'text-primary' : 'text-muted-foreground'}`}>
              Dark
            </Label>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={showDark ? 'dark' : 'light'}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5"
          >
            {palette.map((color, i) => (
              <motion.div
                key={color.hex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className="group cursor-default"
              >
                <div
                  className="aspect-[4/3] w-full rounded-xl shadow-sm mb-3 transition-all duration-400 group-hover:shadow-xl group-hover:scale-[1.04] border border-black/5"
                  style={{ backgroundColor: color.hex }}
                />
                <div className="space-y-0.5">
                  <h4 className="text-sm font-medium leading-tight">{color.name}</h4>
                  <p className="text-[11px] text-muted-foreground">{color.role}</p>
                  <p className="text-[10px] font-mono text-muted-foreground/60">{color.hex}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
