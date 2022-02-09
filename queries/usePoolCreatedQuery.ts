import { useQuery, UseQueryOptions } from "react-query";
import { KWENTA_AELIN_POOL } from "../constants/addresses";
import request, { gql } from "graphql-request";
import { GRAPH_ENDPOINT_OPTIMISM } from "../constants/endpoints";

const usePoolCreatedQuery = (options?: UseQueryOptions<any | null>) => {
  return useQuery<any | null>(
    ["pool", "created"],
    async () => {
      try {
        const response = await request(
          GRAPH_ENDPOINT_OPTIMISM,
          gql`
            query PoolCreated($id: ID!) {
              poolCreated(id: $id) {
                id
                name
                symbol
                purchaseTokenCap
                purchaseToken
                duration
                sponsorFee
                sponsor
                purchaseExpiry
                purchaseTokenDecimals
                timestamp
                poolStatus
                purchaseDuration
                contributions
                dealAddress
              }
            }
          `,
          { id: KWENTA_AELIN_POOL }
        );

        const { data } = response;

        if (data.errors && data.errors.length) {
          throw new Error(data.errors[0].message);
        }

        return data;
      } catch (error) {
        console.log(error);
      }
    },
    { ...options }
  );
};

export default usePoolCreatedQuery;
