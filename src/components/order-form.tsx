"use client";

import { useState } from "react";
import type { TopUpPackage } from "@/lib/catalog";

export default function OrderForm({ packages }: { packages: TopUpPackage[] }) {
  const [packageSlug, setPackageSlug] = useState(packages[0]?.slug ?? "");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setMessage("");
    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ packageSlug, playerId: form.get("playerId"), contactNumber: form.get("contactNumber"), paymentMethod: form.get("paymentMethod"), transactionId: form.get("transactionId") })
    });
    const result = await response.json();
    setBusy(false);
    if (!response.ok) return setMessage(result.error ?? "অর্ডার জমা হয়নি। আবার চেষ্টা করুন।");
    setMessage(`অর্ডার জমা হয়েছে। অর্ডার কোড: ${result.orderCode} — এটি সংরক্ষণ করুন।`);
    event.currentTarget.reset();
  }

  return <form className="order-form" onSubmit={submit}><label>গেম প্যাকেজ<select value={packageSlug} onChange={(e) => setPackageSlug(e.target.value)}>{packages.map((item) => <option value={item.slug} key={item.slug}>{item.productName} — {item.title} — ৳{(item.amountPaisa / 100).toFixed(2)}</option>)}</select></label><label>Player ID<input name="playerId" required minLength={4} maxLength={40} placeholder="আপনার Player ID" /></label><label>যোগাযোগের মোবাইল নম্বর<input name="contactNumber" required minLength={8} maxLength={20} placeholder="01XXXXXXXXX" /></label><label>পেমেন্ট পদ্ধতি<select name="paymentMethod" required defaultValue="bKash"><option>bKash</option><option>Nagad</option><option>Rocket</option><option>অন্যান্য</option></select></label><label>Transaction ID (যদি পেমেন্ট করে থাকেন)<input name="transactionId" maxLength={100} placeholder="ঐচ্ছিক" /></label><button className="button primary submit" disabled={busy}>{busy ? "জমা হচ্ছে…" : "অর্ডার জমা দিন"} <span>→</span></button><p className="form-foot">এটি ডেমো অর্ডার ফর্ম। কোনো পেমেন্ট এখনো প্রসেস হয় না।</p>{message && <p className="form-message" role="status">{message}</p>}</form>;
}
