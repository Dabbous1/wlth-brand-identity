import React from 'react';
import { motion } from 'framer-motion';

export default function LogoSystem() {
  return (
    <section id="logo" className="py-32 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Logo System</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Four capitals, a full stop, and the signature gold gradient.</p>
        </motion.div>

        {/* Primary Lockups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="relative p-8 md:p-16 bg-[#FAF7F0] rounded-2xl flex items-center justify-center border border-border">
            <span className="font-serif font-bold text-5xl md:text-6xl tracking-tight text-wealth-gradient">WLTH.</span>
            <span className="absolute top-3 left-4 text-xs font-semibold tracking-wide uppercase text-[#23201A]">Consumer Light</span>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="relative p-8 md:p-16 bg-[#15110A] rounded-2xl flex items-center justify-center">
            <span className="font-serif font-bold text-5xl md:text-6xl tracking-tight text-wealth-gradient">WLTH.</span>
            <span className="absolute top-3 left-4 text-xs font-semibold tracking-wide uppercase text-[#FAF7F0]">Consumer Dark</span>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="relative p-8 md:p-16 bg-[#FAF7F0] rounded-2xl flex items-center justify-center border border-border">
            <span className="text-5xl md:text-6xl tracking-tight text-wealth-gradient" style={{ fontFamily: 'Cardo, serif' }}>WLTH.</span>
            <span className="absolute top-3 left-4 text-xs font-semibold tracking-wide uppercase text-[#23201A]">Institutional Light</span>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="relative p-8 md:p-16 bg-[#15110A] rounded-2xl flex items-center justify-center">
            <span className="text-5xl md:text-6xl tracking-tight text-wealth-gradient" style={{ fontFamily: 'Cardo, serif' }}>WLTH.</span>
            <span className="absolute top-3 left-4 text-xs font-semibold tracking-wide uppercase text-[#FAF7F0]">Institutional Dark</span>
          </motion.div>
        </div>

        {/* Misuse */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-serif text-2xl font-bold mb-2">Logo Misuse</h3>
          <p className="text-muted-foreground mb-8">The integrity of the mark depends on consistency. Never do the following.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

            {/* 1. Don't recolour */}
            <div className="p-6 bg-destructive/5 border border-destructive/20 rounded-xl flex flex-col items-center justify-center gap-4 text-center min-h-[140px]">
              <div className="h-14 flex items-center justify-center">
                <span className="font-serif font-bold text-3xl tracking-tight" style={{ color: '#c0392b' }}>WLTH.</span>
              </div>
              <span className="text-sm font-medium text-destructive">Don't recolour</span>
            </div>

            {/* 2. Don't stretch */}
            <div className="p-6 bg-destructive/5 border border-destructive/20 rounded-xl flex flex-col items-center justify-center gap-4 text-center min-h-[140px]">
              <div className="h-14 flex items-center justify-center">
                <span className="font-serif font-bold text-3xl tracking-tight text-foreground" style={{ display: 'inline-block', transform: 'scaleX(1.6)', transformOrigin: 'center' }}>WLTH.</span>
              </div>
              <span className="text-sm font-medium text-destructive">Don't stretch</span>
            </div>

            {/* 3. Don't rotate */}
            <div className="p-6 bg-destructive/5 border border-destructive/20 rounded-xl flex flex-col items-center justify-center gap-4 text-center min-h-[140px]">
              <div className="h-14 flex items-center justify-center">
                <span className="font-serif font-bold text-3xl tracking-tight text-foreground" style={{ display: 'inline-block', transform: 'rotate(-18deg)' }}>WLTH.</span>
              </div>
              <span className="text-sm font-medium text-destructive">Don't rotate</span>
            </div>

            {/* 4. Don't add shadow */}
            <div className="p-6 bg-destructive/5 border border-destructive/20 rounded-xl flex flex-col items-center justify-center gap-4 text-center min-h-[140px]">
              <div className="h-14 flex items-center justify-center">
                <span className="font-serif font-bold text-3xl tracking-tight text-foreground" style={{ textShadow: '4px 4px 8px rgba(0,0,0,0.5), -2px -2px 4px rgba(0,0,0,0.3)' }}>WLTH.</span>
              </div>
              <span className="text-sm font-medium text-destructive">Don't add shadow</span>
            </div>

            {/* 5. Don't outline */}
            <div className="p-6 bg-destructive/5 border border-destructive/20 rounded-xl flex flex-col items-center justify-center gap-4 text-center min-h-[140px]">
              <div className="h-14 flex items-center justify-center">
                <span className="font-serif font-bold text-3xl tracking-tight" style={{ WebkitTextStroke: '1.5px #23201A', color: 'transparent' }}>WLTH.</span>
              </div>
              <span className="text-sm font-medium text-destructive">Don't outline</span>
            </div>

            {/* 6. Don't crowd */}
            <div className="p-6 bg-destructive/5 border border-destructive/20 rounded-xl flex flex-col items-center justify-center gap-4 text-center min-h-[140px]">
              <div className="h-14 flex items-center justify-center gap-0">
                <span className="font-sans text-sm text-muted-foreground">Lorem</span>
                <span className="font-serif font-bold text-3xl tracking-tight text-foreground">WLTH.</span>
                <span className="font-sans text-sm text-muted-foreground">Lorem</span>
              </div>
              <span className="text-sm font-medium text-destructive">Don't crowd</span>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
