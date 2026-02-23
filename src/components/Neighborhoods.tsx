import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { neighborhoods } from "@/data/places";

const Neighborhoods = () => (
  <section id="neighborhoods" className="py-24 lg:py-32">
    <div className="mx-auto max-w-7xl px-6">
      <div className="max-w-2xl mb-16">
        <p className="font-sans text-sm uppercase tracking-[0.3em] text-accent font-medium mb-4">Explore By Area</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Neighborhood Guide</h2>
      </div>

      <div className="space-y-0">
        {neighborhoods.map((a, i) => (
          <Link
            key={a.name}
            to={`/explore/${a.slug}`}
            className="flex items-center justify-between py-6 border-b border-accent/20 group cursor-pointer hover:pl-4 transition-all duration-300"
          >
            <div className="flex items-baseline gap-6">
              <span className="font-sans text-sm text-accent/60 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground group-hover:text-gradient-gold transition-colors">{a.name}</h3>
                <p className="font-sans text-sm text-muted-foreground mt-1">{a.vibe}</p>
              </div>
            </div>
            <ArrowUpRight size={20} className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default Neighborhoods;
