import { useQuery, UseQueryOptions } from "react-query";
import { ethers } from "ethers";
import { KWENTA_AELIN_POOL } from "../constants/addresses";

const usePoolQuery = (options?: UseQueryOptions<any | null>) => {
  return useQuery<any | null>(
    ["pool", "value"],
    async () => {
      try {
        const KwentaAelinPool = new ethers.Contract(
          KWENTA_AELIN_POOL,
          AelinPoolAbi
        );
      } catch (error) {
        console.log(error);
      }
    },
    { ...options }
  );
};

export default usePoolQuery;
