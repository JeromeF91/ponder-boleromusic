import { ponder } from "ponder:registry";

ponder.on("PrimaryMarketV2:BuyFromListing", async ({ event, context }) => {
  //console.log(event.args);

  const buyevent = await context.db.insert(schema.buy).values({
    id: event.args.purchaseId,
    tokenAddress: event.args.tokenAddress,
    to: event.args.to,
    amount: event.args.amount,
    
  });
});
