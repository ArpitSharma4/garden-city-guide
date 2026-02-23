import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { featuredLocations } from "@/data/places";

const FeaturedLocations = () => (
  <section id="locations" className="py-24 lg:py-32 bg-primary">
    <div className="mx-auto max-w-7xl px-6">
      <div className="max-w-2xl mb-16">
        <p className="font-sans text-sm uppercase tracking-[0.3em] text-accent font-medium mb-4">Must Visit</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground">Featured Locations</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredLocations.map((loc) => (
          <Link
            key={loc.name}
            to={`/explore/${loc.slug}`}
            className="group cursor-pointer overflow-hidden border border-accent/20 hover:border-accent/50 transition-all duration-500"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img src={loc.img} alt={loc.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
            </div>
            <div className="p-6 bg-primary">
              <span className="font-sans text-xs uppercase tracking-widest text-accent">{loc.tag}</span>
              <h3 className="font-serif text-lg font-semibold text-primary-foreground mt-1 flex items-center gap-2">
                <MapPin size={14} className="text-accent" strokeWidth={1.5} />
                {loc.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedLocations;
