"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import BrandLogo from "./components/BrandLogo";

const stages = [
  { key: "planted", label: "Tree Planted", icon: "🌱", text: "Your Red Diamond Guava tree is planted and cared for." },
  { key: "growing", label: "Growing", icon: "🌿", text: "Healthy new growth is being monitored by our farm team." },
  { key: "flowering", label: "Flowering", icon: "🌼", text: "Flowering begins as the tree enters its fruiting cycle." },
  { key: "fruiting", label: "Fruit Developing", icon: "🍈", text: "Guava fruits are developing and being monitored." },
  { key: "harvest", label: "Harvest Ready", icon: "🧺", text: "10 kg is ready for today's harvest and delivery." },
];

export default function Dashboard() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [paid, setPaid] = useState(false);
  const [stage, setStage] = useState(1);
  const [orderId, setOrderId] = useState("—");
  const [delivery, setDelivery] = useState("Standard • 10 kg");

  useEffect(() => {
    if (sessionStorage.getItem("sf_logged_in") !== "true") {
      window.location.href = "/login";
      return;
    }
    setPaid(sessionStorage.getItem("sf_adoption_paid") === "true");
    setOrderId(sessionStorage.getItem("sf_order_id") || "—");
    setDelivery(sessionStorage.getItem("sf_delivery_preference") === "flexible" ? "Flexible • 10 kg" : "Standard • 10 kg");
    setLoggedIn(true);
  }, []);

  function logout() {
    sessionStorage.clear();
    window.location.href = "/";
  }

  if (!loggedIn) return null;

  return (
    <main className="treeDashboard">
      <header className="siteHeader">
        <Link href="/" className="brand">
          <BrandLogo />
        </Link>
        <div className="dashNav">
          <span className="loggedLabel">My Farm</span>
          <button onClick={logout}>Logout</button>
        </div>
      </header>

      <section className="treeHero">
        <div className="treeHeroCopy">
          <p className="sectionEyebrow">MY TREE</p>
          <h1>Your Red Diamond Guava tree.</h1>
          <p>Stay connected to your tree from planting to harvest. We’ll share important farm updates as your tree grows.</p><div className="sameDayBadge">🍈 <span><b>Harvest Today. Delivered Today.</b><small>Fresh 10 kg from your tree, packed and delivered the same day.</small></span></div>
          <div className="treeIdentity">
            <div><span>Tree ID</span><strong>RDG-PK-A-0247</strong></div>
            <div><span>Farm</span><strong>Penukonda</strong></div>
            <div><span>Season</span><strong>2026–27</strong></div>
          </div>
        </div>
        <div className="treeHeroImage" />
      </section>

      {!paid && (
        <section className="dashboardNotice">
          <div>
            <b>Your tree is reserved, but adoption is not completed.</b>
            <span>Complete the ₹2,999 adoption to activate your Tree ID and harvest journey.</span>
          </div>
          <Link href="/adopt" className="primaryButton">Complete Adoption <span>→</span></Link>
        </section>
      )}

      <section className="dashboardBody">
        <div className="progressSection">
          <div className="sectionTitle">
            <div>
              <p className="sectionEyebrow">TREE JOURNEY</p>
              <h2>From farm to harvest</h2>
            </div>
            <span className="harvestTarget">Harvest: 10 kg</span>
          </div>

          <div className="journey">
            {stages.map((item, index) => {
              const active = index <= stage;
              return (
                <div className={`journeyItem ${active ? "active" : ""}`} key={item.key}>
                  <div className="journeyIcon">{item.icon}</div>
                  {index < stages.length - 1 && <div className={`journeyLine ${index < stage ? "done" : ""}`} />}
                  <b>{item.label}</b>
                  <small>{item.text}</small>
                </div>
              );
            })}
          </div>
        </div>

        <div className="dashboardColumns">
          <article className="farmUpdates">
            <div className="sectionTitle">
              <div>
                <p className="sectionEyebrow">FARM UPDATES</p>
                <h2>Latest from your tree</h2>
              </div>
            </div>
            <div className="updateCard">
              <div className="updatePhoto" />
              <div>
                <span>SEPTEMBER 2026</span>
                <h3>Tree care update</h3>
                <p>Your tree is being maintained with regular irrigation, soil care and farm monitoring.</p>
              </div>
            </div>
            <div className="updateCard compact">
              <div className="updateIcon">🌿</div>
              <div>
                <span>AUGUST 2026</span>
                <h3>Healthy growth</h3>
                <p>New shoots are developing well.</p>
              </div>
            </div>
          </article>

          <aside className="dashboardSide">
            <div className="dashInfoCard">
              <p className="sectionEyebrow">HARVEST</p>
              <h3>10 kg</h3>
              <p>Estimated seasonal harvest from your adopted tree.</p>
              <div className="harvestBar"><span /></div>
              <small>Harvest progress will update as fruit develops.</small>
            </div>

            <div className="dashInfoCard">
              <p className="sectionEyebrow">DELIVERY</p>
              <h3>{delivery}</h3>
              <p>Your selected delivery preference.</p>
              <Link href="/profile" className="textLink">Change preference →</Link>
            </div>

            <div className="dashInfoCard">
              <p className="sectionEyebrow">ORDER</p>
              <h3>{paid ? "Adoption confirmed" : "Pending"}</h3>
              <p>Order ID: <strong>{orderId}</strong></p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}