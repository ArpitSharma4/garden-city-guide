import { Camera } from "lucide-react";

const photos = [
  { src: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=500&q=80", label: "Sunrise at Nandi Hills" },
  { src: "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=500&q=80", label: "Lalbagh Glass House" },
  { src: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=500&q=80", label: "Bengaluru Skyline" },
  { src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&q=80", label: "South Indian Cuisine" },
  { src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=500&q=80", label: "Cubbon Park Mornings" },
  { src: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&q=80", label: "Heritage Architecture" },
];

const Gallery = () => (
  <section id="gallery" className="py-24 lg:py-32 bg-secondary/50">
    <div className="mx-auto max-w-7xl px-6">
      <div className="max-w-2xl mb-16">
        <p className="font-sans text-sm uppercase tracking-[0.3em] text-accent font-medium mb-4">
          <Camera size={14} className="inline mr-2" />
          Photography Spots
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Instagram Gallery</h2>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {photos.map((p, i) => (
          <div key={i} className="break-inside-avoid overflow-hidden group cursor-pointer card-editorial">
            <div className={`overflow-hidden ${i % 3 === 0 ? "aspect-[3/4]" : i % 3 === 1 ? "aspect-square" : "aspect-[4/5]"}`}>
              <img src={p.src} alt={p.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
            </div>
            <div className="p-4 bg-card">
              <p className="font-sans text-xs uppercase tracking-wider text-muted-foreground">{p.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;
