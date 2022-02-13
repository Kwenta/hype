import { ethers } from "ethers";
import poolAbi from "../lib/abis/AelinPool";
import { erc20Abi } from "../lib/abis/ERC20";
import { useQuery } from "react-query";
import { KWENTA_AELIN_POOL, OPTIMISM_SUSD } from "../constants/addresses";

type PoolBalances = {
  purchaseTokenDecimals: number;
  purchaseTokenSymbol: string;
  isPrivatePool: boolean;
  totalAmountAccepted: string;
  totalAmountWithdrawn: string;
  totalSupply: number;
};

const provider = new ethers.providers.AlchemyProvider(
  10,
  process.env.NEXT_PUBLIC_ALCHEMY_PROJECT_ID
);

const usePoolBalancesQuery = () => {
  return useQuery<PoolBalances>(
    ["poolBalances"],
    async () => {
      const poolContract = new ethers.Contract(
        KWENTA_AELIN_POOL,
        poolAbi,
        provider
      );

      const tokenContract = new ethers.Contract(
        OPTIMISM_SUSD,
        erc20Abi,
        provider
      );

      const results = await Promise.allSettled([
        tokenContract.decimals(),
        tokenContract.symbol(),
        poolContract.hasAllowList(),
        poolContract.totalAmountAccepted(),
        poolContract.totalAmountWithdrawn(),
        poolContract.totalSupply(),
      ]);

      const [
        decimals,
        symbol,
        hasAllowList,
        totalAmountAccepted,
        totalAmountWithdrawn,
        unformattedTotalSupply,
      ] = results.map((result) => {
        if (result.status === "fulfilled") return result.value;
        if (result.status === "rejected") return 0;
      });

      return {
        purchaseTokenDecimals: decimals,
        purchaseTokenSymbol: symbol,
        isPrivatePool: hasAllowList,
        totalAmountAccepted: totalAmountAccepted.toString(),
        totalAmountWithdrawn: totalAmountWithdrawn.toString(),
        totalSupply: Number(
          ethers.utils.formatUnits(unformattedTotalSupply, decimals)
        ),
      };
    },
    { enabled: !!provider }
  );
};

export default usePoolBalancesQuery;