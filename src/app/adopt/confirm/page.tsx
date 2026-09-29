"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import BrandLogo from "../../components/BrandLogo";

export default function ConfirmPage() {
  const [delivery, setDelivery] = useState("standard");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("sf_logged_in") !== "true") {
      window.location.href = "/login";
      return;
    }
    setDelivery(sessionStorage.getItem("sf_delivery_preference") || "standard");
    setReady(true);
  }, []);

  if (!ready) return null;

  return (
    <main className="confirmPage">
      <header className="siteHeader">
        <Link href="/" className="brand">
          <BrandLogo />
        </Link>
        <Link href="/profile" className="backHome">← Edit Details</Link>
      </header>

      <section className="confirmWrap">
        <div className="confirmIntro">
          <p className="sectionEyebrow">STEP 3 OF 3</p>
          <h1>Confirm your adoption</h1>
          <p>Your login, profile and delivery preference are already saved. Review everything before moving to payment.</p>
        </div>

        <div className="confirmGrid">
          <article className="confirmCard">
            <div className="confirmImage" />
            <div className="confirmCardBody">
              <p className="sectionEyebrow">YOUR TREE</p>
              <h2>Red Diamond Guava</h2>
              <p className="muted">Sulochana Farms • Penukonda</p>
              <div className="confirmStats">
                <div><span>Seasonal target</span><b>10 kg</b></div>
                <div><span>Plan</span><b>1 tree / season</b></div>
              </div>
            </div>
          </article>

          <aside className="summaryCard">
            <p className="sectionEyebrow">ORDER SUMMARY</p>
            <h2>Tree Adoption</h2>
            <div className="summaryRow"><span>Red Diamond Guava tree</span><strong>₹2,999</strong></div>
            <div className="summaryRow"><span>Season</span><strong>2026–27</strong></div>
            <div className="summaryRow"><span>Delivery preference</span><strong>{delivery === "standard" ? "10 kg" : "10 kg"}</strong></div>
            <div className="summaryTotal"><span>Total</span><strong>₹2,999</strong></div>

            <Link href="/payment" className="primaryButton confirmButton">
              Continue to Payment <span>→</span>
            </Link>
            <p className="secureNote">🔒 Secure checkout • Payment gateway will be connected later.</p>
          </aside>
        </div>
      </section>
    </main>
  );
}