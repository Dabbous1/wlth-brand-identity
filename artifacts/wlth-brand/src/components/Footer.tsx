import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12 px-6 mt-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-serif font-bold text-2xl text-wealth-gradient">WLTH.</div>
        <div className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Acumen Holding. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
