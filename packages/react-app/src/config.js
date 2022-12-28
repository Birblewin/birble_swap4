import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x52a9a43295823a5359605e6752fb94e981ab1a68"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/h_7gQ560SYHlifTklaMkDiwJP9io_yOV",
  },
};