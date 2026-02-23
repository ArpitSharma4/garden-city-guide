import { CloudSun, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = ["Experiences", "Locations", "Neighborhoods", "Gallery", "About"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="font-serif text-xl font-bold tracking-wide text-foreground">
          Explore <span className="text-gradient-gold">Bengaluru</span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <button key={l} onClick={() => scrollTo(l)} className="font-sans text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors uppercase">
              {l}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-1.5 text-sm text-muted-foreground font-sans">
            <CloudSun size={16} className="text-accent" />
            <span>BLR 24°C</span>
          </div>
          <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-accent/20 px-6 py-4 space-y-3 bg-background/95 backdrop-blur-md">
          {navLinks.map((l) => (
            <button key={l} onClick={() => scrollTo(l)} className="block w-full text-left font-sans text-sm uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors py-1">
              {l}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
