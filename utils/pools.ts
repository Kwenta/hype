import { utils } from "ethers";

export enum Status {
  PoolOpen = "PoolOpen",
  SeekingDeal = "SeekingDeal",
  FundingDeal = "FundingDeal",
  ProRataRedemption = "ProRataRedemption",
  OpenRedemption = "OpenRedemption",
  DealOpen = "DealOpen",
  Closed = "Closed",
}

export const calculateStatus = ({
  poolStatus,
  purchaseExpiry,
}: {
  poolStatus: Status;
  purchaseExpiry: number;
}): Status => {
  const now = Date.now();
  if (poolStatus === Status.PoolOpen && now > purchaseExpiry) {
    return Status.SeekingDeal;
  }
  return poolStatus;
};

export const parsePool = ({
  id,
  timestamp,
  name,
  symbol,
  duration,
  purchaseToken,
  purchaseExpiry,
  purchaseDuration,
  purchaseTokenCap,
  sponsor,
  sponsorFee,
  poolStatus,
  contributions,
  dealAddress,
  purchaseTokenDecimals,
  hasAllowList,
}: any) => {
  let formattedName = "";
  let formattedSymbol = "";
  try {
    formattedName = utils.parseBytes32String(name.split("-")[1]);
    formattedSymbol = utils.parseBytes32String(symbol.split("-")[1]);
  } catch (e) {
    formattedName = name.split("-")[1];
    formattedSymbol = symbol.split("-")[1];
  }
  return {
    id,
    timestamp: Number(timestamp) * 1000,
    name: formattedName,
    symbol: formattedSymbol,
    duration: Number(duration) * 1000,
    purchaseTokenDecimals: purchaseTokenDecimals ?? 0,
    purchaseToken,
    purchaseExpiry: Number(purchaseExpiry) * 1000,
    purchaseTokenCap,
    sponsor,
    contributions,
    purchaseDuration,
    sponsorFee,
    poolStatus: calculateStatus({
      poolStatus,
      purchaseExpiry: Number(purchaseExpiry) * 1000,
    }),
    dealAddress,
    hasAllowList,
  };
};
