import Link from "next/link";
import BrandLogo from "./components/BrandLogo";

const highlights = [
  { icon: "leaf", title: "Real Trees", text: "Your dedicated guava tree" },
  { icon: "fruit", title: "25–30 kg", text: "Seasonal harvest target" },
  { icon: "camera", title: "Farm Updates", text: "Photos as your tree grows" },
  { icon: "truck", title: "Fresh Delivery", text: "To Bengaluru" },
];

const steps = [
  { number: "01", title: "Adopt", text: "Choose a guava tree for ₹2,999/season" },
  { number: "02", title: "We Grow", text: "We care for your tree with love and expertise" },
  { number: "03", title: "Fresh Harvest", text: "Receive your farm-fresh guavas in easy deliveries" },
  { number: "04", title: "Enjoy & Renew", text: "Be part of a healthier, greener future" },
];

const benefits = [
  ["✚", "Rich in Vitamin C"],
  ["◌", "Good for Digestion"],
  ["⌁", "Naturally Grown"],
  ["♥", "Great Taste"],
  ["♧", "Good for the Planet"],
];



function HighlightIcon({ type }: { type: string }) {
  const symbols: Record<string, string> = {
    leaf: "⌁",
    fruit: "●",
    camera: "▣",
    truck: "▰",
  };
  return <span className="highlightIcon">{symbols[type]}</span>;
}

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <Link href="/" className="brand">
          <BrandLogo />
        </Link>

        <nav className="desktopNav" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="#story">Our Story</Link>
          <Link href="/adopt">Adopt a Tree</Link>
          <Link href="#updates">Farm Updates</Link>
          <Link href="#faq">FAQs</Link>
          <Link href="#contact">Contact</Link>
          <Link href="/login" className="loginButton">Login</Link>
        </nav>

        <button className="mobileMenu" aria-label="Open menu">☰</button>
      </header>

      <section className="hero">
        <div className="heroBackground" />
        <div className="heroOverlay" />

        <div className="heroContent">
          <p className="eyebrow">RED DIAMOND GUAVA • PENUKONDA</p>
          <h1>Adopt a<br />Guava Tree</h1>
          <h2>Grow a Healthier Tomorrow</h2>
          <p className="heroDescription">
            Your own tree. Fresh guavas. Direct from our farm in Penukonda
            to your family in Bengaluru.
          </p>

          <div className="highlightGrid">
            {highlights.map((item) => (
              <div className="highlight" key={item.title}>
                <HighlightIcon type={item.icon} />
                <span>
                  <b>{item.title}</b>
                  <small>{item.text}</small>
                </span>
              </div>
            ))}
          </div>

          <div className="heroActions">
            <Link href="/adopt" className="primaryButton">
              Adopt a Tree for ₹2,999 <span>→</span>
            </Link>
            <span className="heroTagline">Good Food. Happier Families.</span>
          </div>
        </div>
      </section>

      <section className="howSection" id="adopt">
        <p className="sectionEyebrow">SIMPLE • PERSONAL • FRESH</p>
        <h2>How It Works</h2>

        <div className="stepsGrid">
          {steps.map((step) => (
            <article className="stepCard" key={step.number}>
              <div className="stepCircle">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="storySection" id="story">
        <div className="storyImage" />
        <div className="storyContent">
          <p className="sectionEyebrow">FROM OUR LAND TO YOUR FAMILY</p>
          <h2>Naturally Grown.<br />Honestly Delivered.</h2>
          <p>
            At Sulochana Farms, we believe in real food, real relationships,
            and a greener tomorrow. Our tree adoption program connects you
            with our farm in Penukonda and brings fresh, farm-grown guavas
            closer to your home.
          </p>
          <Link href="#contact" className="outlineButton">Our Story <span>→</span></Link>
        </div>
      </section>

      <section className="whySection">
        <p className="sectionEyebrow">MORE THAN A FRUIT</p>
        <h2>Why Guava?</h2>

        <div className="benefitGrid">
          {benefits.map(([icon, title]) => (
            <div className="benefit" key={title}>
              <span>{icon}</span>
              <b>{title}</b>
            </div>
          ))}
        </div>

        <div className="featureBanner" id="updates">
          <div className="featureBannerImage" />
          <div>
            <p className="sectionEyebrow">FOLLOW THE JOURNEY</p>
            <h3>More Than a Fruit.<br />A Better Future.</h3>
            <p>Watch your tree grow from planting to flowering to harvest.</p>
            <Link href="/adopt" className="primaryButton">Adopt a Tree <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="finalCta">
        <div>
          <p className="sectionEyebrow">FRESH FROM PENUKONDA</p>
          <h2>Harvested with care.<br />Delivered fresh.</h2>
          <p>Our goal: harvest your guavas and move them towards Bengaluru in a single day.</p>
        </div>
        <Link href="/adopt" className="whiteButton">Start Your Tree <span>→</span></Link>
      </section>

      <section className="faqSection" id="faq">
        <p className="sectionEyebrow">COMMON QUESTIONS</p>
        <h2>Questions? We&apos;re here to help.</h2>
        <div className="faqGrid">
          <div><b>What does ₹2,999 include?</b><span>Tree adoption for one season and farm updates.</span></div>
          <div><b>How much fruit can I receive?</b><span>The current plan is designed around a 25–30 kg seasonal harvest target.</span></div>
          <div><b>How will delivery work?</b><span>You can choose a standard 10 kg delivery or a flexible 5–7 kg option.</span></div>
        </div>
      </section>

      <footer id="contact">
        <div className="footerBrand">
          <Link href="/" className="brand">
            <BrandLogo />
          </Link>
          <p>Penukonda, Andhra Pradesh • Fresh farm delivery to Bengaluru</p>
        </div>
        <div className="footerLinks">
          <Link href="#story">Our Story</Link>
          <Link href="#faq">FAQs</Link>
          <Link href="/login">Login</Link>
        </div>
        <p className="copyright">© 2026 Sulochana Farms • Red Diamond guava image: Wikimedia Commons (CC BY-SA 4.0)</p>
      </footer>
    </main>
  );
}
