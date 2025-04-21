import { onchainEnum, onchainTable, primaryKey } from "ponder";

export const buy = onchainTable("buyFromListings", (t) => ({
  id: t.text().primaryKey(),
  tokenAddress: t.text().notNull(),
  to: t.text().notNull(),
  amount: t.integer().notNull(),
}));


