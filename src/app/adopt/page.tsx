import Link from "next/link";
import BrandLogo from "../components/BrandLogo";
import AdoptCTA from "./AdoptCTA";

const plans = [
  {
    title: "Tree Adoption",
    price: "₹2,999",
    suffix: "/ season",
    points: [
      "One dedicated Red Diamond Guava tree",
      "25–30 kg seasonal harvest target",
      "Farm photos and growth updates",
      "Harvest scheduling support",
    ],
    selected: true,
  },
];

export default function AdoptPage() {
  return (
    <main className="adoptPage">
      <header className="siteHeader">
        <Link href="/" className="brand">
          <BrandLogo />
        </Link>
        <Link href="/" className="backHome">← Back to Home</Link>
      </header>

      <section className="adoptHero">
        <div className="adoptHeroImage" />
        <div className="adoptHeroOverlay" />
        <div className="adoptHeroContent">
          <p className="eyebrow">RED DIAMOND GUAVA • PENUKONDA</p>
          <h1>Your tree.<br />Your harvest.</h1>
          <p>Become part of Sulochana Farms and enjoy guavas grown with care on your own adopted tree.</p>
        </div>
      </section>

      <section className="adoptMain">
        <div className="adoptIntro">
          <p className="sectionEyebrow">STEP 1 OF 3</p>
          <h2>Choose your tree plan</h2>
          <p>Start with one season. We take care of the farming; you stay connected to the journey.</p>
        </div>

        <div className="adoptLayout">
          <article className="planCard selectedPlan">
            <div className="planBadge">MOST SIMPLE</div>
            <div className="planTop">
              <div>
                <h3>Red Diamond Guava Tree</h3>
                <p>One tree • One season</p>
              </div>
              <div className="planPrice">
                <strong>₹2,999</strong>
                <span>/ season</span>
              </div>
            </div>

            <div className="planDivider" />

            <ul>
              {plans[0].points.map((point) => (
                <li key={point}><span>✓</span>{point}</li>
              ))}
            </ul>

            <div className="harvestBox">
              <div><span>Expected seasonal harvest</span><strong>25–30 kg</strong></div>
              <div><span>Farm location</span><strong>Penukonda</strong></div>
            </div>
          </article>

          <aside className="orderCard">
            <p className="sectionEyebrow">YOUR ORDER</p>
            <h3>Adopt 1 Guava Tree</h3>
            <div className="orderLine"><span>Tree adoption</span><strong>₹2,999</strong></div>
            <div className="orderLine muted"><span>Season</span><strong>2026–27</strong></div>
            <div className="orderTotal"><span>Total</span><strong>₹2,999</strong></div>

            <AdoptCTA />

            <p className="secureNote">🔒 Secure checkout • You can add delivery details after login</p>
          </aside>
        </div>
      </section>

      <section className="adoptSteps">
        <div>
          <span>01</span>
          <b>Choose your tree</b>
          <small>Select the adoption plan above.</small>
        </div>
        <div>
          <span>02</span>
          <b>We grow it</b>
          <small>Our farm team handles the tree.</small>
        </div>
        <div>
          <span>03</span>
          <b>Receive your harvest</b>
          <small>We coordinate fresh delivery.</small>
        </div>
      </section>

      <footer>
        <div className="footerBrand">
          <Link href="/" className="brand">
            <BrandLogo />
          </Link>
          <p>Penukonda, Andhra Pradesh • Fresh farm delivery to Bengaluru</p>
        </div>
        <p className="copyright">© 2026 Sulochana Farms • Red Diamond guava image: Wikimedia Commons (CC BY-SA 4.0)</p>
      </footer>
    </main>
  );
}
