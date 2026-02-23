import { Camera } from "lucide-react";

const photos = [
  { src: "/nandihills.jpeg", label: "Sunrise at Nandi Hills" },
  { src: "/Lalbagh.jpeg", label: "Lalbagh Botanical Garden" },
  { src: "/Bengaluru’s-Vidhana-Soudha-could-be-worth-over-Rs-3900-crores-FB-1200x700-compressed.jpg", label: "Vidhana Soudha" },
  { src: "/cubbon.jpg", label: "Cubbon Park Mornings" },
  { src: "/churchstreet.jpg", label: "Vibrant Church Street" },
  { src: "/commercialstreet.jpg", label: "Commercial Street Shopping" },
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
