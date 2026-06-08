import React from 'react';
import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1];

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />

      {/* Animated golden glow */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[160px] pointer-events-none animate-glow-pulse" />
      <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none animate-glow-pulse" style={{ animationDelay: '2s' }} />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }} />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Overline */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="mb-10"
        >
          <span className="section-label tracking-[0.4em]">Brand Identity System</span>
        </motion.div>

        {/* Main wordmark — each letter staggers in */}
        <div className="overflow-hidden mb-8">
          <motion.h1
            className="font-serif font-bold text-[72px] sm:text-[100px] md:text-[140px] lg:text-[180px] leading-[0.85] tracking-[-0.02em] gold-shimmer"
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease }}
          >
            WLTH.
          </motion.h1>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease }}
          className="text-xl sm:text-2xl md:text-3xl font-serif text-foreground/70 mb-16 tracking-wide"
        >
          Wealth, working for you.
        </motion.p>

        {/* Decorative divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8, ease }}
          className="w-24 h-px bg-wealth-gradient mx-auto mb-10 origin-center"
        />

        {/* Meta info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-xs font-mono text-muted-foreground tracking-wider uppercase"
        >
          <span>Acumen Holding</span>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-primary/40" />
          <span>Version 1.0</span>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-primary/40" />
          <span>June 2026</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-muted-foreground/50">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-primary/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
