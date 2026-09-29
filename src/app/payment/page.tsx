"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import BrandLogo from "./components/BrandLogo";

export default function PaymentPage() {
  const [paid, setPaid] = useState(false);
  const [orderId, setOrderId] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("sf_logged_in") !== "true") {
      window.location.href = "/login";
    }
  }, []);

  function completeDemoPayment() {
    const id = `SF-${Date.now().toString().slice(-8)}`;
    sessionStorage.setItem("sf_adoption_paid", "true");
    sessionStorage.setItem("sf_order_id", id);
    setOrderId(id);
    setPaid(true);
  }

  if (paid) {
    return (
      <main className="paymentPage">
        <header className="siteHeader">
          <Link href="/" className="brand">
            <BrandLogo />
          </Link>
        </header>
        <section className="successWrap">
          <div className="successIcon">✓</div>
          <p className="sectionEyebrow">ADOPTION CONFIRMED</p>
          <h1>Your tree journey has begun.</h1>
          <p>Your Red Diamond Guava tree adoption is confirmed. We’ll keep you connected to the farm through the season.</p>
          <div className="successOrder">
            <span>Order ID</span><strong>{orderId}</strong>
          </div>
          <Link href="/dashboard" className="primaryButton">Go to My Tree <span>→</span></Link>
        </section>
      </main>
    );
  }

  return (
    <main className="paymentPage">
      <header className="siteHeader">
        <Link href="/" className="brand">
          <BrandLogo />
        </Link>
        <Link href="/adopt/confirm" className="backHome">← Back</Link>
      </header>

      <section className="paymentWrap">
        <div className="paymentIntro">
          <p className="sectionEyebrow">PAYMENT</p>
          <h1>Complete your adoption</h1>
          <p>This is a demo checkout for now. No real payment will be charged.</p>
        </div>

        <div className="paymentGrid">
          <section className="paymentCard">
            <p className="sectionEyebrow">PAYMENT METHOD</p>
            <div className="paymentMethod active">
              <span className="radioDot selected" />
              <div><b>Online Payment</b><small>UPI, cards and net banking will be connected later.</small></div>
            </div>
            <button className="primaryButton payButton" onClick={completeDemoPayment}>
              Pay ₹2,999 <span>→</span>
            </button>
            <p className="secureNote">🔒 Demo mode • No money will be charged.</p>
          </section>

          <aside className="paymentSummary">
            <p className="sectionEyebrow">ORDER SUMMARY</p>
            <h2>Red Diamond Guava</h2>
            <div className="summaryRow"><span>Tree adoption</span><strong>₹2,999</strong></div>
            <div className="summaryRow"><span>Season</span><strong>2026–27</strong></div>
            <div className="summaryRow"><span>Harvest target</span><strong>10 kg</strong></div>
            <div className="summaryTotal"><span>Total</span><strong>₹2,999</strong></div>
          </aside>
        </div>
      </section>
    </main>
  );
}