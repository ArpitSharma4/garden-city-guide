import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experiences from "@/components/Experiences";
import FeaturedLocations from "@/components/FeaturedLocations";
import Neighborhoods from "@/components/Neighborhoods";
import Gallery from "@/components/Gallery";
import Founder from "@/components/Founder";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <Experiences />
      <FeaturedLocations />
      <Neighborhoods />
      <Gallery />
      <Founder />
    </main>
    <Footer />
  </>
);

export default Index;
