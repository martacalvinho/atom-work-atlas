// Centralized external links for ATOM Playbook

export const OFFICIAL_LINKS = {
  // Wallets
  keplr: "https://www.keplr.app/",
  leap: "https://www.leapwallet.io/",
  cosmostation: "https://wallet.cosmostation.io/",
  
  // Documentation
  cosmosHub: "https://hub.cosmos.network/",
  cosmosHubDelegators: "https://hub.cosmos.network/main/delegators/",
  
  // Liquid Staking
  stride: {
    app: "https://app.stride.zone/",
    docs: "https://docs.stride.zone/",
    atomGuide: "https://docs.stride.zone/docs/stake/atom/"
  },
  pstake: {
    app: "https://cosmos.pstake.finance/",
    docs: "https://pstake.finance/",
    blog: "https://blog.pstake.finance/"
  },
  quicksilver: {
    app: "https://app.quicksilver.zone/",
    docs: "https://docs.quicksilver.zone/",
    overview: "https://docs.quicksilver.zone/overview/"
  },
  
  // DEX/Liquidity
  osmosis: {
    app: "https://app.osmosis.zone/",
    docs: "https://docs.osmosis.zone/",
    pool1: "https://app.osmosis.zone/pool/1",
    pool1282: "https://app.osmosis.zone/pool/1282",
    pool1283: "https://app.osmosis.zone/pool/1283",
    ammDocs: "https://docs.osmosis.zone/overview/amm/"
  },
  
  // Lending
  mars: {
    app: "https://app.marsprotocol.io/",
    docs: "https://docs.marsprotocol.io/",
    blog: "https://blog.marsprotocol.io/"
  },
  ux: {
    app: "https://app.ux.xyz/",
    docs: "https://docs.ux.xyz/"
  },
  kujira: {
    ghost: "https://ghost.kujira.network/",
    docs: "https://docs.kujira.app/",
    ghostDocs: "https://docs.kujira.app/ghost/overview"
  },
  
  // Perpetuals
  dydx: {
    app: "https://dydx.exchange/",
    docs: "https://dydx.exchange/developers",
    help: "https://help.dydx.trade/"
  },
  injective: {
    helix: "https://helixapp.com/",
    docs: "https://docs.injective.network/",
    blog: "https://blog.injective.com/"
  },
  levana: {
    app: "https://perps.levana.finance/",
    docs: "https://docs.levana.finance/",
    research: "https://reflexivityresearch.com/"
  }
} as const;

export const ANALYTICS_LINKS = {
  osmosis: "https://info.osmosis.zone/",
  mintscan: "https://www.mintscan.io/cosmos",
  coingecko: "https://www.coingecko.com/en/coins/cosmos",
  defillama: "https://defillama.com/chain/Cosmos"
} as const;

// Risk education resources
export const RISK_RESOURCES = {
  impermanentLoss: "https://academy.binance.com/en/articles/impermanent-loss-explained",
  liquidation: "https://docs.marsprotocol.io/docs/overview/liquidations",
  slashing: "https://hub.cosmos.network/main/validators/validator-faq.html#what-is-slashing",
  funding: "https://help.dydx.trade/en/articles/4800191-perpetual-funding"
} as const;