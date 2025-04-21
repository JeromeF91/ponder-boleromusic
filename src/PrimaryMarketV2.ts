import { ponder } from "ponder:registry";

import schema from "ponder:schema";

ponder.on("PrimaryMarketV2:BuyFromListing", async ({ event, context }) => {
  //console.log(event.args);

  const buyevent = await context.db.insert(schema.buyevent).values({
    id: event.args.purchaseId,
    tokenAddress: event.args.tokenAddress,
    to: event.args.to,
    amount: event.args.amount,
    
  });
});
