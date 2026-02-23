import { useParams, Link, useNavigate } from "react-router-dom";
import { allPlaces } from "@/data/places";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, MapPin, Lightbulb, Star } from "lucide-react";
import { useEffect } from "react";

const PlaceDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const place = allPlaces.find((p) => p.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!place) {
        return (
            <div className="min-h-screen bg-primary flex flex-col items-center justify-center p-6 text-center">
                <h1 className="font-serif text-4xl font-bold text-primary-foreground mb-4">Place Not Found</h1>
                <p className="text-muted-foreground mb-8">We couldn't find the location you're looking for.</p>
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 border border-accent/40 px-6 py-3 font-sans text-sm uppercase tracking-widest text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all"
                >
                    <ArrowLeft size={16} />
                    Back to Home
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-primary">
            <Navbar />

            <main className="pt-32 pb-24 lg:pb-32">
                <div className="mx-auto max-w-7xl px-6">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-accent/60 hover:text-accent transition-colors mb-12 group"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="font-sans text-xs uppercase tracking-[0.2em]">Explore More Locations</span>
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                        <div className="space-y-12 animate-fade-up">
                            <div>
                                <span className="font-sans text-sm uppercase tracking-[0.3em] text-accent font-medium mb-4 block">
                                    {place.tag}
                                </span>
                                <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight text-primary-foreground mb-6">
                                    {place.name}
                                </h1>
                                {place.vibe && (
                                    <p className="font-sans text-xl text-accent font-medium italic border-l-2 border-accent pl-6 py-1">
                                        "{place.vibe}"
                                    </p>
                                )}
                            </div>

                            <div className="prose prose-invert max-w-none">
                                <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-wrap">
                                    {place.description}
                                </p>
                            </div>

                            {place.features && (
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {place.features.map((feature) => (
                                        <div key={feature} className="flex items-center gap-4 p-4 border border-accent/10 bg-secondary/20">
                                            <Star size={18} className="text-accent shrink-0" />
                                            <span className="font-sans text-sm text-primary-foreground font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {place.tips && (
                                <div className="space-y-6">
                                    <h3 className="font-serif text-2xl font-bold text-primary-foreground flex items-center gap-3">
                                        <Lightbulb size={24} className="text-accent" />
                                        Pro Tips
                                    </h3>
                                    <ul className="space-y-4">
                                        {place.tips.map((tip, idx) => (
                                            <li key={idx} className="flex gap-4 p-4 rounded-lg bg-accent/5 border border-accent/10">
                                                <span className="font-sans text-accent font-bold tabular-nums">{(idx + 1).toString().padStart(2, '0')}</span>
                                                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{tip}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
                            <div className="overflow-hidden border border-accent/20 shadow-2xl bg-secondary/10">
                                <img
                                    src={place.img}
                                    alt={place.name}
                                    className="w-full h-auto object-contain hover:scale-105 transition-transform duration-1000 max-h-[80vh]"
                                />
                            </div>
                            <div className="absolute -bottom-8 -left-8 w-40 h-40 border border-accent/20 hidden lg:block" />
                            <div className="absolute -top-8 -right-8 w-40 h-40 border border-accent/20 hidden lg:block" />

                            <div className="mt-8 p-6 border border-accent/20 bg-secondary/30 backdrop-blur-sm">
                                <div className="flex items-center gap-3 text-accent mb-2">
                                    <MapPin size={20} />
                                    <span className="font-sans text-sm uppercase tracking-widest font-bold">Location Details</span>
                                </div>
                                <p className="font-sans text-sm text-muted-foreground">
                                    Located in the heart of Bengaluru, accessible via major transport links.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default PlaceDetail;
