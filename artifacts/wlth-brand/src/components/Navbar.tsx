import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-background/90 backdrop-blur-xl border-b border-border shadow-sm'
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="w-full px-6 h-14 flex items-center justify-between">
        <a href="#" className="font-serif font-bold text-lg tracking-tight text-wealth-gradient hover:opacity-80 transition-opacity">
          WLTH.
        </a>
        <div className="flex items-center gap-6">
          <a href="#foundation" className="hidden sm:inline text-[11px] font-mono tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300">
            Foundation
          </a>
          <a href="#gradient" className="hidden sm:inline text-[11px] font-mono tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300">
            Gradient
          </a>
          <a href="#typography" className="hidden sm:inline text-[11px] font-mono tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300">
            Typography
          </a>
          <a href="#logo" className="hidden sm:inline text-[11px] font-mono tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300">
            Logo
          </a>
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              data-testid="button-theme-toggle"
            >
              {theme === 'dark' ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
}
