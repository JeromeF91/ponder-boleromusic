import { createConfig } from "ponder";
import { http } from "viem";

import { PrimaryMarketV2Abi } from "./abis/PrimaryMarketV2Abi";

export default createConfig({
  networks: {
    matic: { chainId: 137, transport: http(process.env.PONDER_RPC_URL_137) },
  },
  database: {
    kind: "postgres",
    connectionString: "postgresql://user:pass@servername:5432/DB",
  },
  contracts: {
    PrimaryMarketV2: {
      network: "matic",
      address: "0xbc556070ade40612cb02a002232d7daa8118f86e",
      abi: PrimaryMarketV2Abi,
      startBlock: 64443359,
    },
  },
});
