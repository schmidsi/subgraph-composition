# 🛠️ Combining Multiple Subgraphs with Graph Client

[![Cover Image](cover.png)](https://bit.ly/47afnwj)

## Steps

### Create new Scaffold-ETH project

Learn more about Scaffold-ETH here: https://scaffoldeth.io/

1. Run init command:

```bash
npx create-eth@latest
```

->

```bash
 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 | Create Scaffold-ETH 2 app |
 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+

? Your project name: subgraph-composition
? What solidity framework do you want to use? None
? Install packages? Yes

  ✔ 📁 Create project directory /Users/schmidsi/Development/@schmidsi/subgraph-composition
  ✔ 🚀 Creating a new Scaffold-ETH 2 app in subgraph-composition
  ✔ 📦 Installing dependencies with yarn, this could take a while
  ✔ 📡 Initializing Git repository

  Congratulations! Your project has been scaffolded! 🎉

  Next steps:

  cd subgraph-composition

  	In a new terminal window, start the frontend
  	yarn start

  Thanks for using Scaffold-ETH 2 🙏, Happy Building!
```

2. Check if it worked:

```bash

cd subgraph-composition
yarn start
```

Navigate to: http://localhost:3000

### Get an API Key for The Graph

Go to: https://thegraph.com/studio/apikeys/

--> `dc9b1200d80a1c064c90462b9c04f264` This is mine, you should create your own.

### Find the subgraphs that we want to query

- https://thegraph.com/explorer/subgraphs/DjUVVVSuKcCCTZSVzVXLioSd7AdqwGEyBrY4Ru5tuqzX?view=Playground&chain=arbitrum-one
- https://thegraph.com/explorer/subgraphs/AwyZBdna4vTAHiqBWsrQ5ErFRMi6HCgGEkQMgNBseWTL?view=Playground&chain=arbitrum-one

1. Let's start with one. Get the query URL:

`https://gateway-arbitrum.network.thegraph.com/api/[api-key]/subgraphs/id/AwyZBdna4vTAHiqBWsrQ5ErFRMi6HCgGEkQMgNBseWTL`

2. Replace `[api-key]` with your API key:

`https://gateway-arbitrum.network.thegraph.com/api/dc9b1200d80a1c064c90462b9c04f264/subgraphs/id/AwyZBdna4vTAHiqBWsrQ5ErFRMi6HCgGEkQMgNBseWTL`

### Initalize Graph Client

Learn more about Graph Client: https://github.com/graphprotocol/graph-client/

1. Install GraphQL dependencies

```bash
yarn add graphql
```

2. Install the Graph Client CLI locally (this is different from Graph CLI)

```bash
yarn add -D @graphprotocol/client-cli
```

3. Create the configuration file:

```yml
# .graphclientrc.yml
sources:
  - name: mainnet
    handler:
      graphql:
        endpoint: https://gateway-arbitrum.network.thegraph.com/api/dc9b1200d80a1c064c90462b9c04f264/subgraphs/id/AwyZBdna4vTAHiqBWsrQ5ErFRMi6HCgGEkQMgNBseWTL
```

4. Build the client:

```bash
yarn graphclient build
```

## Notes

Complete query:

```graphql
{
  subgraphs(
    first: 1000
    orderBy: currentSignalledTokens
    orderDirection: desc
    where: { entityVersion: 2 }
  ) {
    active
    createdAt
    creatorAddress
    currentSignalledTokens
    id
    migrated
    oldID
    updatedAt
    versionCount
    currentVersion {
      createdAt
      entityVersion
      id
      metadataHash
      version
      subgraphDeployment {
        id
        originalName
        ipfsHash
      }
    }
    metadata {
      id
      image
      nftImage
      website
      description
      displayName
      codeRepository
    }
  }
}
```
