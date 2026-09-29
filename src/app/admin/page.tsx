"use client";

import { useState } from "react";
import Link from "next/link";
import BrandLogo from "../components/BrandLogo";

const initialTrees = [
  { id: "SF-PK-001", status: "Adopted", stage: "Growing", customer: "Customer #1047", target: "10 kg" },
  { id: "SF-PK-002", status: "Adopted", stage: "Growing", customer: "Customer #1048", target: "10 kg" },
  { id: "SF-PK-003", status: "Available", stage: "Planted", customer: "—", target: "10 kg" },
  { id: "SF-PK-004", status: "Adopted", stage: "Flowering", customer: "Customer #1050", target: "10 kg" },
  { id: "SF-PK-005", status: "Available", stage: "Growing", customer: "—", target: "10 kg" },
  { id: "SF-PK-006", status: "Adopted", stage: "Fruit Developing", customer: "Customer #1052", target: "10 kg" },
];

const stageOptions = ["Planted", "Growing", "Flowering", "Fruit Developing", "Harvest Ready"];

export default function AdminDashboard() {
  const [tab, setTab] = useState("Overview");
  const [treeData, setTreeData] = useState(initialTrees);
  const [editingTree, setEditingTree] = useState<string | null>(null);
  const [savedMessage, setSavedMessage] = useState("");
  const [bulkStage, setBulkStage] = useState("Growing");
  const [selectedTrees, setSelectedTrees] = useState<string[]>([]);

  function toggleTree(id: string) {
    setSelectedTrees(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  }

  function toggleAll() {
    setSelectedTrees(prev => prev.length === treeData.length ? [] : treeData.map(t => t.id));
  }

  function applyBulkStage() {
    if (!selectedTrees.length) return;
    setTreeData(prev => prev.map(t => selectedTrees.includes(t.id) ? { ...t, stage: bulkStage } : t));
    setSavedMessage(`${selectedTrees.length} tree${selectedTrees.length > 1 ? "s" : ""} updated to ${bulkStage}.`);
    setSelectedTrees([]);
    setTimeout(() => setSavedMessage(""), 2500);
  }

  return (
    <main className="adminPage">
      <aside className="adminSidebar">
        <Link href="/" className="adminBrand">
          <BrandLogo className="adminBrandLogo" />
        </Link>

        <nav className="adminNav">
          {["Overview", "Trees", "Customers", "Harvest", "Deliveries"].map(item => (
            <button key={item} className={tab === item ? "active" : ""} onClick={() => setTab(item)}>
              <span>{item === "Overview" ? "▦" : item === "Trees" ? "🌱" : item === "Customers" ? "♙" : item === "Harvest" ? "🍈" : "📦"}</span>
              {item}
            </button>
          ))}
        </nav>

        <div className="adminFarmCard">
          <span>FARM</span>
          <b>Penukonda</b>
          <small>Red Diamond Guava Project</small>
        </div>
      </aside>

      <section className="adminMain">
        <header className="adminTopbar">
          <div>
            <p className="sectionEyebrow">FARM ADMIN</p>
            <h1>{tab}</h1>
          </div>
          <div className="adminUser">
            <span className="adminAvatar">SF</span>
            <span><b>Farm Manager</b><small>Administrator</small></span>
          </div>
        </header>

        <div className="adminContent">
          {tab === "Overview" && (
            <>
              <div className="adminWelcome">
                <div><h2>Good morning 👋</h2><p>Here’s what’s happening across your guava farm.</p></div>
                <span className="datePill">September 2026</span>
              </div>

              <div className="adminStats">
                <div><span>Total Trees</span><strong>1,500</strong><small>2 acre plantation</small></div>
                <div><span>Adopted Trees</span><strong>247</strong><small>16.5% adopted</small></div>
                <div><span>Available</span><strong>1,253</strong><small>Ready for adoption</small></div>
                <div><span>Harvest Watch</span><strong>42</strong><small>Approaching harvest</small></div>
              </div>

              <div className="adminGrid">
                <section className="adminPanel">
                  <div className="panelHead"><div><p className="sectionEyebrow">TREE MANAGEMENT</p><h3>Recent trees</h3></div><button onClick={() => setTab("Trees")}>View all →</button></div>
                  <div className="adminTable">
                    <div className="tableRow tableHead"><span>Tree ID</span><span>Status</span><span>Stage</span><span>Customer</span><span>Target</span></div>
                    {treeData.map(t => <div className="tableRow treeEditableRow" key={t.id}>
                      <b>{t.id}</b>
                      <span className={`status ${t.status.toLowerCase()}`}>{t.status}</span>
                      <span>
                        {editingTree === t.id ? (
                          <select className="stageSelect" value={t.stage} onChange={(e) => setTreeData(prev => prev.map(x => x.id === t.id ? {...x, stage: e.target.value} : x))}>
                            {stageOptions.map(stage => <option key={stage}>{stage}</option>)}
                          </select>
                        ) : t.stage}
                      </span>
                      <span>{t.customer}</span>
                      <strong>{t.target}</strong>
                      <button className="editTreeButton" onClick={() => {
                        if (editingTree === t.id) {
                          setEditingTree(null);
                          setSavedMessage(`${t.id} status updated to ${t.stage}.`);
                          setTimeout(() => setSavedMessage(""), 2500);
                        } else setEditingTree(t.id);
                      }}>{editingTree === t.id ? "Save" : "Update"}</button>
                    </div>)}
                  </div>
                </section>

                <section className="adminPanel">
                  <div className="panelHead"><div><p className="sectionEyebrow">DELIVERIES</p><h3>Today</h3></div><button onClick={() => setTab("Deliveries")}>Manage →</button></div>
                  <div className="deliveryStats"><div><b>12</b><span>Harvest Ready</span></div><div><b>8</b><span>Packed</span></div><div><b>5</b><span>Dispatched</span></div><div><b>3</b><span>Delivered</span></div></div>
                  <div className="adminTip">🍈 <span><b>5 orders</b> are ready for dispatch today.</span></div>
                </section>
              </div>

              <section className="adminPanel sameDayAdminPanel">
                <div className="panelHead">
                  <div><p className="sectionEyebrow">SAME-DAY HARVEST & DELIVERY</p><h3>Today’s dispatch board</h3></div>
                  <span className="harvestTarget">10 kg / order</span>
                </div>
                <div className="sameDayFlow">
                  <div><span>🍈</span><b>Harvest</b><small>Ready today</small></div>
                  <i>→</i>
                  <div><span>📦</span><b>Pack</b><small>10 kg fresh</small></div>
                  <i>→</i>
                  <div><span>🚚</span><b>Dispatch</b><small>Today</small></div>
                  <i>→</i>
                  <div><span>🏠</span><b>Deliver</b><small>Same day</small></div>
                </div>
                <div className="sameDayStats">
                  <div><b>12</b><span>Harvest Ready</span></div>
                  <div><b>8</b><span>Packed</span></div>
                  <div><b>5</b><span>Dispatched</span></div>
                  <div><b>3</b><span>Delivered</span></div>
                </div>
              </section>

              <section className="adminPanel harvestPanel">
                <div className="panelHead"><div><p className="sectionEyebrow">HARVEST</p><h3>Season progress</h3></div><span className="harvestTarget">2026–27</span></div>
                <div className="bigProgress"><span style={{width: "32%"}} /></div>
                <div className="harvestLegend"><span><b>480</b> trees growing</span><span><b>42</b> flowering / fruiting</span><span><b>12</b> harvest ready</span></div>
              </section>
            </>
          )}

          {tab !== "Overview" && (
            <section className="adminPanel expandedPanel">
              <div className="panelHead"><div><p className="sectionEyebrow">FARM MANAGEMENT</p><h3>{tab}</h3></div><span className="demoBadge">DEMO DATA</span></div>
              {tab === "Trees" && <>
                <div className="bulkToolbar">
                  <label className="selectAllControl">
                    <input type="checkbox" checked={selectedTrees.length === treeData.length && treeData.length > 0} onChange={toggleAll} />
                    <span>Select all trees</span>
                  </label>
                  <span className="selectedCount">{selectedTrees.length} selected</span>
                  <select className="bulkStageSelect" value={bulkStage} onChange={(e) => setBulkStage(e.target.value)}>
                    {stageOptions.map(stage => <option key={stage}>{stage}</option>)}
                  </select>
                  <button className="bulkApplyButton" disabled={!selectedTrees.length} onClick={applyBulkStage}>
                    Update Selected
                  </button>
                </div>
                <div className="stageGuide">
                  {stageOptions.map((stage, i) => <div key={stage}><span>{i + 1}</span><b>{stage}</b></div>)}
                </div>
                {savedMessage && <div className="savedMessage">✓ {savedMessage}</div>}
                <div className="adminTable">
                  {treeData.concat([
                    {id:"SF-PK-007",status:"Available",stage:"Planted",customer:"—",target:"10 kg"},
                    {id:"SF-PK-008",status:"Adopted",stage:"Growing",customer:"Customer #1054",target:"10 kg"}
                  ]).map(t => <div className="tableRow treeEditableRow" key={t.id}>
                    <span className="treeCheck"><input type="checkbox" checked={selectedTrees.includes(t.id)} onChange={() => toggleTree(t.id)} /></span>
                    <b>{t.id}</b>
                    <span className={`status ${t.status.toLowerCase()}`}>{t.status}</span>
                    <span>
                      <select className="stageSelect" value={t.stage}
                        onChange={(e) => setTreeData(prev => prev.map(x => x.id === t.id ? {...x, stage: e.target.value} : x))}>
                        {stageOptions.map(stage => <option key={stage}>{stage}</option>)}
                      </select>
                    </span>
                    <span>{t.customer}</span>
                    <strong>{t.target}</strong>
                    <button className="editTreeButton" onClick={() => {
                      setSavedMessage(`${t.id} status updated to ${t.stage}.`);
                      setTimeout(() => setSavedMessage(""), 2500);
                    }}>Save</button>
                  </div>)}
                </div>
              </>}{tab === "Customers" && <div className="adminTable"><div className="tableRow tableHead"><span>Customer</span><span>Tree ID</span><span>Adoption</span><span>Delivery</span><span>Status</span></div>{["Arun Kumar","Priya Reddy","Rahul Sharma","Meena Rao","Kiran Das"].map((n,i)=><div className="tableRow" key={n}><b>{n}</b><span>RDG-PK-A-0{247+i}</span><span>₹2,999</span><span>{i%2 ? "Flexible" : "Standard"}</span><span className="status adopted">Active</span></div>)}</div>}
              {tab === "Harvest" && <div className="managementCards">{[["42","Flowering / fruiting"],["12","Harvest ready"],["318 kg","Estimated this cycle"]].map(x=><div className="manageCard" key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</div>}
              {tab === "Deliveries" && <div className="managementCards">{[["12","Harvest Ready"],["8","Packed"],["5","Dispatched"],["3","Delivered"]].map(x=><div className="manageCard" key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</div>}
            </section>
          )}
        </div>
      </section>
    </main>
  );
}