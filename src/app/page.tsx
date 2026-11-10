import { catalog } from "@/lib/catalog";
import OrderForm from "@/components/order-form";

export default function Home() {
  return (
    <main>
      <header className="topbar"><a className="brand" href="#home"><span className="brand-mark">M</span> MTS <b>STORE</b></a><nav><a href="#services">সার্ভিস</a><a href="#order">অর্ডার</a><a href="#help">সাহায্য</a></nav><a className="status-link" href="#order">অর্ডার ট্র্যাক করুন</a></header>
      <section id="home" className="hero wrap">
        <div className="hero-copy"><span className="eyebrow">গেমিং টপ-আপ, সহজ ও দ্রুত</span><h1>আপনার পছন্দের গেম<br /><em>টপ-আপ করুন</em></h1><p>গেম নির্বাচন করুন, Player ID দিন এবং অর্ডার জমা দিন। অর্ডার আপাতত ম্যানুয়ালি যাচাই করা হবে।</p><a className="button primary" href="#order">এখনই অর্ডার করুন <span>→</span></a><div className="trust"><span>● নিরাপদ অর্ডার</span><span>● পাসওয়ার্ড লাগে না</span></div></div>
        <div className="hero-card"><div className="orb">✦</div><div className="hero-card-label">MTS GAME STORE</div><div className="hero-card-title">LEVEL UP<br /><strong>YOUR GAME</strong></div><div className="hero-card-bottom"><span>GAMING TOP-UP</span><span>✦ ✦ ✦</span></div></div>
      </section>
      <section id="services" className="wrap section"><div className="section-heading"><div><span className="eyebrow">আমাদের ক্যাটালগ</span><h2>জনপ্রিয় সার্ভিস</h2></div><span className="muted">ডেমো তালিকা—সরবরাহকারী নিশ্চিত হলে প্যাকেজ সক্রিয় করুন</span></div><div className="service-grid">{[...new Set(catalog.map((p) => p.productName))].map((name, i) => <a className="service-card" href="#order" key={name}><span className={`game-icon icon-${i}`}>{name === "Free Fire" ? "FF" : name === "PUBG Mobile" ? "UC" : "ML"}</span><span><b>{name}</b><small>প্যাকেজ দেখুন <span>→</span></small></span></a>)}</div></section>
      <section id="order" className="wrap section order-section"><div className="section-heading"><div><span className="eyebrow">কয়েক ধাপেই অর্ডার</span><h2>টপ-আপ অর্ডার দিন</h2></div></div><div className="order-layout"><div className="order-note"><div className="step"><b>01</b><span><strong>প্যাকেজ বাছুন</strong><small>সার্ভিস ও প্যাকেজ নির্বাচন করুন</small></span></div><div className="step"><b>02</b><span><strong>Player ID লিখুন</strong><small>আপনার গেম আইডি ঠিকভাবে দিন</small></span></div><div className="step"><b>03</b><span><strong>পেমেন্ট তথ্য দিন</strong><small>ম্যানুয়াল যাচাই শেষে অর্ডার আপডেট হবে</small></span></div><p className="notice">⚠️ আপনার গেমের পাসওয়ার্ড বা OTP কখনো দেবেন না।</p></div><OrderForm packages={catalog} /></div></section>
      <footer id="help"><div className="wrap footer-inner"><a className="brand" href="#home"><span className="brand-mark">M</span> MTS <b>STORE</b></a><span>© {new Date().getFullYear()} MTS Store. Demo storefront.</span><span>সহায়তা: আপনার ব্যবসার যোগাযোগের তথ্য যোগ করুন</span></div></footer>
    </main>
  );
}
