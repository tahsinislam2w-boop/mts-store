export type TopUpPackage = {
  slug: string;
  title: string;
  amountPaisa: number;
  productSlug: string;
  productName: string;
};

// Demo catalog only. Replace prices and availability with your authorized supplier's data.
export const catalog: TopUpPackage[] = [
  { slug: "ff-100", title: "100 Diamonds", amountPaisa: 10000, productSlug: "free-fire", productName: "Free Fire" },
  { slug: "ff-310", title: "310 Diamonds", amountPaisa: 25000, productSlug: "free-fire", productName: "Free Fire" },
  { slug: "ff-520", title: "520 Diamonds", amountPaisa: 40000, productSlug: "free-fire", productName: "Free Fire" },
  { slug: "pubg-60", title: "60 UC", amountPaisa: 9900, productSlug: "pubg-mobile", productName: "PUBG Mobile" },
  { slug: "ml-86", title: "86 Diamonds", amountPaisa: 12500, productSlug: "mobile-legends", productName: "Mobile Legends" }
];
