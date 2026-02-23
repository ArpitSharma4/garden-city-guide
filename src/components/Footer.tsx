const Footer = () => (
  <footer className="bg-primary py-16">
    <div className="mx-auto max-w-7xl px-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <p className="font-serif text-2xl font-bold text-primary-foreground">
            Explore <span className="text-gradient-gold">Bengaluru</span>
          </p>
          <p className="font-sans text-sm text-primary-foreground/60 mt-2">Your curated guide to the Garden City.</p>
        </div>
        <p className="font-sans text-xs text-primary-foreground/40 tracking-wide">
          © {new Date().getFullYear()} Explore Bengaluru. Crafted by Arpit Sharma.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
