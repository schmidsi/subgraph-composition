import { useEffect, useState } from "react";
import { ExecutionResult } from "graphql";
import type { NextPage } from "next";
import { SubgraphsDocument, SubgraphsQuery, execute } from "~~/.graphclient";
import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  const [result, setResult] = useState<ExecutionResult<SubgraphsQuery>>();

  useEffect(() => {
    execute(SubgraphsDocument, {}).then(result => {
      setResult(result);
      console.log(result);
    });
  }, []);

  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-4xl font-bold">Query The Graph</span>
          </h1>
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <ul>
            {result?.data?.subgraphs.map(subgraph => (
              <li key={subgraph.id}>{subgraph.metadata?.displayName}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
