import { onchainEnum, onchainTable, primaryKey } from "ponder";

export const buyevent = onchainTable("buyFromListings", (t) => ({
  id: t.text().primaryKey(),
  tokenAddress: t.text().notNull(),
  to: t.text().notNull(),
  amount: t.bigint().notNull(),
}));


