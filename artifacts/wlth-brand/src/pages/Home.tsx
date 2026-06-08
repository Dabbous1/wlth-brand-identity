import React from 'react';
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
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground font-sans">
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
      {/* Full viewport closing section as requested */}
      <footer className="relative min-h-[70vh] flex flex-col items-center justify-center bg-[#15110A] text-[#F4ECDA] overflow-hidden">
        <div className="absolute inset-0 bg-wealth-gradient opacity-20 mix-blend-overlay" />
        <div className="relative z-10 text-center px-6">
          <div className="inline-block p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 mb-8">
            <h2 className="font-serif font-bold text-6xl tracking-tight text-wealth-gradient">WLTH.</h2>
          </div>
          <p className="text-xl md:text-2xl font-serif mb-8 text-white/90">Wealth, working for you.</p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-sm font-mono text-white/50">
            <span>Acumen Holding</span>
            <span>&middot;</span>
            <span>Brand Guidelines v1.0</span>
            <span>&middot;</span>
            <span>June 2026</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
