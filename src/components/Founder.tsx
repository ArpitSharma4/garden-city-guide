import { Quote } from "lucide-react";

const Founder = () => (
  <section id="about" className="py-24 lg:py-32">
    <div className="mx-auto max-w-7xl px-6">
      <div className="max-w-5xl mx-auto text-center">
        <p className="font-sans text-sm uppercase tracking-[0.3em] text-accent font-medium mb-12">Letter from the Curators</p>

        <div className="card-editorial bg-card p-10 md:p-16">
          <Quote size={32} className="text-accent/40 mx-auto mb-8" strokeWidth={1} />

          <p className="font-serif text-xl md:text-2xl text-foreground leading-relaxed italic mb-10">
            "Bengaluru isn't just a city — it's a feeling. From the misty mornings at Nandi Hills to the electric nights of Indiranagar, every corner tells a story. This platform is our love letter to the city we call home."
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-muted gold-ring flex items-center justify-center">
                <span className="font-serif text-2xl font-bold text-foreground">AS</span>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground">Arpit Sharma</h3>
                <p className="font-sans text-sm text-accent">Founder & Local Travel Curator</p>
              </div>
              <p className="font-sans text-sm text-muted-foreground max-w-xs leading-relaxed mt-2">
                Passionate about showcasing Bengaluru through authentic local experiences and curated travel guides.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-muted gold-ring flex items-center justify-center">
                <span className="font-serif text-2xl font-bold text-foreground">AK</span>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground">Ayush Kumar</h3>
                <p className="font-sans text-sm text-accent">Co-Founder & Technical Architect</p>
              </div>
              <p className="font-sans text-sm text-muted-foreground max-w-xs leading-relaxed mt-2">
                Engineering the digital pathways to help you discover the hidden gems and vibrant culture of Bengaluru.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Founder;
