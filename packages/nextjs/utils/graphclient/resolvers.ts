import { Resolvers } from "../../.graphclient";

const chains = ["arbitrum", "mainnet"];

export const resolvers: Resolvers = {
  Subgraph: {
    deployedChain: async root => {
      if (!root.deployedChain) {
        // we are always passing this from the query resolver
        // in case it isn't reached here we should panic.
        throw new Error("deployedChain not found");
      }
      return root.deployedChain;
    },
  },
  Query: {
    crossSubgraphs: async (root: any, args: any, context: any, info: any) => {
      console.log("crossSubgraphs", root, args, context, info);

      const results = await Promise.all(
        chains.map(source =>
          context[source].Query.subgraphs({
            root,
            args,
            context,
            info,
          }).then((subgraphs: any) =>
            subgraphs.map((subgraph: any) => ({ ...subgraph, deployedChain: source.toUpperCase() })),
          ),
        ),
      ).then(allSubgraphs => allSubgraphs.flat());

      return results;
    },
  },
};
