import { ArrowDown } from "lucide-react";

const Hero = () => (
  <section className="min-h-screen flex items-center pt-20">
    <div className="mx-auto max-w-7xl w-full px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <div className="space-y-8 animate-fade-up">
        <p className="font-sans text-sm uppercase tracking-[0.3em] text-accent font-medium">
          The Garden City of India
        </p>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-foreground">
          Discover the<br />Heart of<br />
          <span className="text-gradient-gold italic">Bengaluru</span>
        </h1>
        <p className="font-sans text-lg text-muted-foreground max-w-md leading-relaxed">
          Where centuries-old heritage meets cosmopolitan energy. Explore curated experiences across India's most vibrant metropolis.
        </p>
        <button
          onClick={() => document.getElementById("experiences")?.scrollIntoView({ behavior: "smooth" })}
          className="inline-flex items-center gap-3 border border-accent/40 px-8 py-3.5 font-sans text-sm uppercase tracking-widest text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300"
        >
          Begin Exploring
          <ArrowDown size={14} />
        </button>
      </div>

      <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
        <div className="aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
          <img
            src="/Bengaluru’s-Vidhana-Soudha-could-be-worth-over-Rs-3900-crores-FB-1200x700-compressed.jpg"
            alt="Vidhana Soudha, Bengaluru"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-accent/40" />
        <div className="absolute -top-4 -right-4 w-24 h-24 border border-accent/40" />
      </div>
    </div>
  </section>
);

export default Hero;
