import { ethers } from "ethers";
import poolAbi from "../lib/abis/AelinPool";
import { useQuery } from "react-query";
import { KWENTA_AELIN_POOL } from "../constants/addresses";

type PoolBalances = {
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

      const results = await Promise.allSettled([poolContract.totalSupply()]);

      const [unformattedTotalSupply] = results.map((result) => {
        if (result.status === "fulfilled") return result.value;
        if (result.status === "rejected") return 0;
      });

      return {
        totalSupply: Number(
          ethers.utils.formatUnits(unformattedTotalSupply, 18)
        ),
      };
    },
    { enabled: !!provider }
  );
};

export default usePoolBalancesQuery;
