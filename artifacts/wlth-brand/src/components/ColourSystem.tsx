import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const lightPalette = [
  { name: 'Cream (Base)', hex: '#FAF7F0' },
  { name: 'Surface', hex: '#FFFFFF' },
  { name: 'Sand (Alt)', hex: '#F3EEE2' },
  { name: 'Ink (Primary)', hex: '#23201A' },
  { name: 'Ink Soft', hex: '#5A554B' },
  { name: 'Hairline', hex: '#E4DCC9' },
  { name: 'Gold Solid', hex: '#BD8E25' },
  { name: 'Gold Deep', hex: '#8A6516' },
  { name: 'Navy', hex: '#1F2A44' },
  { name: 'Teal', hex: '#0E7C66' },
  { name: 'Slate', hex: '#7A8B8F' },
];

const darkPalette = [
  { name: 'Base', hex: '#15110A' },
  { name: 'Surface', hex: '#1E1810' },
  { name: 'Surface Alt', hex: '#272014' },
  { name: 'Ink (Light)', hex: '#F4ECDA' },
  { name: 'Ink Soft', hex: '#C4B89E' },
  { name: 'Hairline Dark', hex: '#3A3022' },
  { name: 'Gold Lifted', hex: '#E3B340' },
  { name: 'Gold Base', hex: '#BD8E25' },
  { name: 'Deep Bronze', hex: '#8A6516' },
  { name: 'Navy', hex: '#2A3A5C' },
  { name: 'Teal', hex: '#16A085' },
  { name: 'Slate', hex: '#9AAAAE' },
];

export default function ColourSystem() {
  const [showDark, setShowDark] = useState(false);
  const palette = showDark ? darkPalette : lightPalette;

  return (
    <section id="colors" className="py-32 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6"
        >
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Colour System</h2>
            <p className="text-lg text-muted-foreground">The foundational palette for interfaces and brand moments.</p>
          </div>
          <div className="flex items-center space-x-2 bg-secondary p-2 rounded-xl">
            <Label htmlFor="palette-toggle" className="cursor-pointer font-medium">Light Mode</Label>
            <Switch id="palette-toggle" checked={showDark} onCheckedChange={setShowDark} />
            <Label htmlFor="palette-toggle" className="cursor-pointer font-medium">Dark Mode</Label>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {palette.map((color, i) => (
            <motion.div
              key={`${showDark ? 'dark' : 'light'}-${color.hex}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="group"
            >
              <div 
                className="h-32 w-full rounded-2xl border border-border/50 shadow-sm mb-4 transition-transform group-hover:scale-105 group-hover:shadow-md"
                style={{ backgroundColor: color.hex }}
              />
              <div className="px-1">
                <h4 className="font-medium text-sm mb-1">{color.name}</h4>
                <p className="text-xs font-mono text-muted-foreground">{color.hex}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
