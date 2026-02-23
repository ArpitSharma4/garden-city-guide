import { TreePine, Landmark, UtensilsCrossed, Music, ShoppingBag, Mountain } from "lucide-react";

const categories = [
  { icon: TreePine, title: "Nature", desc: "Parks, lakes & botanical gardens" },
  { icon: Landmark, title: "Heritage", desc: "Temples, palaces & historic sites" },
  { icon: UtensilsCrossed, title: "Food", desc: "Street food trails & fine dining" },
  { icon: Music, title: "Nightlife", desc: "Live music, pubs & rooftop bars" },
  { icon: ShoppingBag, title: "Shopping", desc: "Silk markets & boutique streets" },
  { icon: Mountain, title: "Weekend Trips", desc: "Hill stations & nature escapes" },
];

const Experiences = () => (
  <section id="experiences" className="py-24 lg:py-32">
    <div className="mx-auto max-w-7xl px-6">
      <div className="max-w-2xl mb-16">
        <p className="font-sans text-sm uppercase tracking-[0.3em] text-accent font-medium mb-4">Curated For You</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Experiences</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="card-editorial bg-card p-8 group cursor-pointer">
            <Icon size={28} className="text-accent mb-6 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
            <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{title}</h3>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experiences;
