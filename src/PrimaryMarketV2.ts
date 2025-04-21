import { ponder } from "ponder:registry";

ponder.on("PrimaryMarketV2:BuyFromListing", async ({ event, context }) => {
  console.log(event.args);
});

ponder.on("PrimaryMarketV2:CanceledListing", async ({ event, context }) => {
  console.log(event.args);
});

ponder.on("PrimaryMarketV2:Initialized", async ({ event, context }) => {
  console.log(event.args);
});

ponder.on("PrimaryMarketV2:NewListing", async ({ event, context }) => {
  console.log(event.args);
});
