import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BrandFoundation from '@/components/BrandFoundation';
import CoreValues from '@/components/CoreValues';
import TwoVoices from '@/components/TwoVoices';
import BrandPersonality from '@/components/BrandPersonality';
import VoiceTone from '@/components/VoiceTone';
import WealthGradient from '@/components/WealthGradient';
import ColourSystem from '@/components/ColourSystem';
import Typography from '@/components/Typography';
import LogoSystem from '@/components/LogoSystem';
import AppLogos from '@/components/AppLogos';
import Governance from '@/components/Governance';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/15 selection:text-foreground font-sans">
      <Navbar />
      <main>
        <Hero />
        <BrandFoundation />
        <CoreValues />
        <TwoVoices />
        <BrandPersonality />
        <VoiceTone />
        <WealthGradient />
        <ColourSystem />
        <Typography />
        <LogoSystem />
        <AppLogos />
        <Governance />
      </main>

      {/* Cinematic closing */}
      <footer className="relative min-h-[80vh] flex flex-col items-center justify-center bg-[#15110A] text-[#F4ECDA] overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-[#BD8E25]/10 rounded-full blur-[180px] pointer-events-none animate-glow-pulse" />

        {/* Noise texture */}
        <div className="absolute inset-0 noise-overlay" />

        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(#F4ECDA 1px, transparent 1px), linear-gradient(90deg, #F4ECDA 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 text-center px-6"
        >
          {/* Logo mark */}
          <div className="mb-8">
            <span className="font-serif font-bold text-7xl md:text-8xl lg:text-[120px] tracking-[-0.02em] gold-shimmer">
              WLTH.
            </span>
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl font-serif mb-12 text-white/70 tracking-wide">
            Wealth, working for you.
          </p>

          {/* Gold divider */}
          <div className="w-12 h-px bg-wealth-gradient mx-auto mb-10 opacity-60" />

          {/* Meta */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[10px] font-mono tracking-[0.2em] uppercase text-white/30">
            <span>Acumen Holding</span>
            <span className="w-0.5 h-0.5 rounded-full bg-white/20" />
            <span>Brand Guidelines v1.0</span>
            <span className="w-0.5 h-0.5 rounded-full bg-white/20" />
            <span>June 2026</span>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}
