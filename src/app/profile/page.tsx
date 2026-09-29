"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import BrandLogo from "./components/BrandLogo";

export default function ProfilePage() {
  const [delivery, setDelivery] = useState("10kg");
  const [saved, setSaved] = useState(false);

  function submit(e: FormEvent) {
    e.preventDefault();
    setSaved(true);
  }

  return (
    <main className="profilePage">
      <header className="siteHeader">
        <Link href="/" className="brand">
          <BrandLogo />
        </Link>
        <Link href="/dashboard" className="backHome">← Dashboard</Link>
      </header>

      <section className="profileHeader">
        <div>
          <p className="sectionEyebrow">STEP 2 OF 3</p>
          <h1>Your details</h1>
          <p>Tell us where to send your fresh Red Diamond Guavas when your harvest is ready.</p>
        </div>
        <div className="profileProgress">
          <span className="active">1</span><i /><span className="active">2</span><i /><span>3</span>
        </div>
      </section>

      <form className="profileLayout" onSubmit={submit}>
        <section className="profileFormCard">
          <p className="sectionEyebrow">CUSTOMER INFORMATION</p>
          <h2>About you</h2>

          <div className="fieldGrid">
            <label>
              Full name
              <input required placeholder="Enter your full name" />
            </label>
            <label>
              Mobile number
              <input value="+91 ••••••••••" readOnly />
            </label>
            <label className="fullField">
              Email address
              <input type="email" placeholder="you@example.com" />
            </label>
          </div>

          <div className="formDivider" />

          <p className="sectionEyebrow">DELIVERY ADDRESS</p>
          <h2>Where should we deliver?</h2>

          <div className="fieldGrid">
            <label className="fullField">
              Address
              <textarea required rows={3} placeholder="House / flat number, street, area" />
            </label>
            <label>
              City
              <input required placeholder="Bengaluru" defaultValue="Bengaluru" />
            </label>
            <label>
              PIN code
              <input required inputMode="numeric" maxLength={6} placeholder="560001" />
            </label>
          </div>
        </section>

        <aside className="profileSide">
          <div className="deliveryCard">
            <p className="sectionEyebrow">DELIVERY PREFERENCE</p>
            <h2>How would you like your harvest?</h2>
            <p className="muted">Your estimated seasonal harvest is <strong>25–30 kg</strong>.</p>

            <button type="button" className={`deliveryOption ${delivery === "standard" ? "10 kg" : "10 kg" ? "chosen" : ""}`} onClick={() => setDelivery("flexible")}>
              <span className="radioDot" />
              <span>
                <b>10 kg Delivery</b>
                <small>10 kg per delivery</small>
              </span>
            </button>

            <div className="deliveryNote">
              🍈 We will message you when your harvest is ready so you can confirm the delivery.
            </div>

            <button className="primaryButton saveProfileButton" type="submit">
              Save & Continue <span>→</span>
            </button>

            {saved && (
              <div className="savedMessage">
                ✓ Details saved for this demo. Next step: adoption confirmation.
              </div>
            )}
          </div>

          <div className="profileMiniCard">
            <span>YOUR PLAN</span>
            <b>Red Diamond Guava Tree</b>
            <strong>₹2,999 / season</strong>
          </div>
        </aside>
      </form>
    </main>
  );
}