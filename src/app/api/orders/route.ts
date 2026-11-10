import { NextResponse } from "next/server";
import { z } from "zod";
import { catalog } from "@/lib/catalog";
import { prisma } from "@/lib/prisma";

const orderSchema = z.object({
  packageSlug: z.string().min(1),
  playerId: z.string().trim().min(4).max(40),
  contactNumber: z.string().trim().min(8).max(20),
  paymentMethod: z.enum(["bKash", "Nagad", "Rocket", "অন্যান্য"]),
  transactionId: z.string().trim().max(100).optional()
});

export async function POST(request: Request) {
  const parsed = orderSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "তথ্যগুলো যাচাই করে আবার দিন।" }, { status: 400 });
  const selected = catalog.find((item) => item.slug === parsed.data.packageSlug);
  if (!selected) return NextResponse.json({ error: "এই প্যাকেজটি পাওয়া যাচ্ছে না।" }, { status: 404 });
  try {
    const orderCode = `MTS-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
    const order = await prisma.order.create({ data: {
      orderCode, productSlug: selected.productSlug, productName: selected.productName,
      packageSlug: selected.slug, packageName: selected.title, amountPaisa: selected.amountPaisa,
      playerId: parsed.data.playerId, contactNumber: parsed.data.contactNumber,
      paymentMethod: parsed.data.paymentMethod, transactionId: parsed.data.transactionId || null
    }, select: { orderCode: true } });
    return NextResponse.json(order, { status: 201 });
  } catch {
    return NextResponse.json({ error: "সার্ভার/ডেটাবেস এখনো কনফিগার করা হয়নি। পরে চেষ্টা করুন।" }, { status: 503 });
  }
}
