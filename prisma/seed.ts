import { PrismaClient } from "@prisma/client";
import { catalog } from "../src/lib/catalog";

const prisma = new PrismaClient();

async function main() {
  console.log(`Catalog configured with ${catalog.length} demo packages.`);
}

main().finally(async () => prisma.$disconnect());
