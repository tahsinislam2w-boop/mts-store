import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MTS Store | Game Top-Up",
  description: "সহজে গেম টপ-আপ অর্ডার করুন এবং অর্ডারের অবস্থা ট্র্যাক করুন।"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="bn"><body>{children}</body></html>;
}
