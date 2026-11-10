# MTS Store

বাংলা-প্রথম, মোবাইল-উপযোগী গেম টপ-আপ স্টোরের প্রাথমিক সংস্করণ। Next.js, TypeScript, PostgreSQL এবং Prisma ব্যবহার করা হয়েছে।

## এখন যা আছে
- মোবাইল-উপযোগী storefront ও ডেমো সার্ভিস/প্যাকেজ
- সার্ভার-সাইড প্যাকেজ মূল্য যাচাই করে অর্ডার তৈরি করার API
- PostgreSQL-এর Prisma schema-তে অর্ডার ও অ্যাডমিন ইউজার মডেল
- অর্ডার জমা হলে অর্ডার কোড দেখানো

## গুরুত্বপূর্ণ
এটি এখনো প্রাথমিক demo scaffold; production-ready সম্পূর্ণ স্টোর নয়। প্যাকেজের দাম/সরবরাহকারীর তথ্য demo হিসেবে আছে। আসল টপ-আপের আগে অনুমোদিত supplier/API, পেমেন্ট ব্যবস্থা, নিরাপদ admin authentication, rate limiting, privacy/terms এবং deployment secrets কনফিগার করতে হবে। গ্রাহকের game password বা OTP নেবেন না।

## চালানোর জন্য
1. Node.js 20+ ও PostgreSQL লাগবে।
2. `.env.example` কপি করে `.env` করুন এবং `DATABASE_URL`-এ আপনার PostgreSQL connection string বসান।
3. `npm install`
4. `npx prisma generate`
5. `npx prisma migrate dev --name init`
6. `npm run dev`
7. ব্রাউজারে `http://localhost:3000` খুলুন।

## Demo catalog সম্পাদনা
`src/lib/catalog.ts`-এ প্যাকেজ তালিকা আছে। মূল্য `amountPaisa`-এ পয়সা হিসেবে লিখতে হবে। এগুলো বাস্তব সরবরাহকারী-নির্ধারিত দাম নয়।

## API
`POST /api/orders` — JSON fields: `packageSlug`, `playerId`, `contactNumber`, `paymentMethod`, optional `transactionId`। API প্যাকেজের মূল্য সার্ভার catalog থেকে নেয়, ব্রাউজার-দেওয়া মূল্য বিশ্বাস করে না।
