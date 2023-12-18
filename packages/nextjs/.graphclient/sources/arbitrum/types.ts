// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace ArbitrumTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
  Int8: any;
};

export type AccountMetadata = {
  id: Scalars['ID'];
  /** True if it is an organization. False if it is an individual */
  isOrganization?: Maybe<Scalars['Boolean']>;
  /** Main repository of code for the graph account */
  codeRepository?: Maybe<Scalars['String']>;
  /** Description of the graph account */
  description?: Maybe<Scalars['String']>;
  /** Image URL */
  image?: Maybe<Scalars['String']>;
  /** Website URL */
  website?: Maybe<Scalars['String']>;
  /** Display name. Not unique */
  displayName?: Maybe<Scalars['String']>;
};

export type AccountMetadata_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  isOrganization?: InputMaybe<Scalars['Boolean']>;
  isOrganization_not?: InputMaybe<Scalars['Boolean']>;
  isOrganization_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isOrganization_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  codeRepository?: InputMaybe<Scalars['String']>;
  codeRepository_not?: InputMaybe<Scalars['String']>;
  codeRepository_gt?: InputMaybe<Scalars['String']>;
  codeRepository_lt?: InputMaybe<Scalars['String']>;
  codeRepository_gte?: InputMaybe<Scalars['String']>;
  codeRepository_lte?: InputMaybe<Scalars['String']>;
  codeRepository_in?: InputMaybe<Array<Scalars['String']>>;
  codeRepository_not_in?: InputMaybe<Array<Scalars['String']>>;
  codeRepository_contains?: InputMaybe<Scalars['String']>;
  codeRepository_contains_nocase?: InputMaybe<Scalars['String']>;
  codeRepository_not_contains?: InputMaybe<Scalars['String']>;
  codeRepository_not_contains_nocase?: InputMaybe<Scalars['String']>;
  codeRepository_starts_with?: InputMaybe<Scalars['String']>;
  codeRepository_starts_with_nocase?: InputMaybe<Scalars['String']>;
  codeRepository_not_starts_with?: InputMaybe<Scalars['String']>;
  codeRepository_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  codeRepository_ends_with?: InputMaybe<Scalars['String']>;
  codeRepository_ends_with_nocase?: InputMaybe<Scalars['String']>;
  codeRepository_not_ends_with?: InputMaybe<Scalars['String']>;
  codeRepository_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  description_not?: InputMaybe<Scalars['String']>;
  description_gt?: InputMaybe<Scalars['String']>;
  description_lt?: InputMaybe<Scalars['String']>;
  description_gte?: InputMaybe<Scalars['String']>;
  description_lte?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_contains_nocase?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  image_not?: InputMaybe<Scalars['String']>;
  image_gt?: InputMaybe<Scalars['String']>;
  image_lt?: InputMaybe<Scalars['String']>;
  image_gte?: InputMaybe<Scalars['String']>;
  image_lte?: InputMaybe<Scalars['String']>;
  image_in?: InputMaybe<Array<Scalars['String']>>;
  image_not_in?: InputMaybe<Array<Scalars['String']>>;
  image_contains?: InputMaybe<Scalars['String']>;
  image_contains_nocase?: InputMaybe<Scalars['String']>;
  image_not_contains?: InputMaybe<Scalars['String']>;
  image_not_contains_nocase?: InputMaybe<Scalars['String']>;
  image_starts_with?: InputMaybe<Scalars['String']>;
  image_starts_with_nocase?: InputMaybe<Scalars['String']>;
  image_not_starts_with?: InputMaybe<Scalars['String']>;
  image_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  image_ends_with?: InputMaybe<Scalars['String']>;
  image_ends_with_nocase?: InputMaybe<Scalars['String']>;
  image_not_ends_with?: InputMaybe<Scalars['String']>;
  image_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
  website_not?: InputMaybe<Scalars['String']>;
  website_gt?: InputMaybe<Scalars['String']>;
  website_lt?: InputMaybe<Scalars['String']>;
  website_gte?: InputMaybe<Scalars['String']>;
  website_lte?: InputMaybe<Scalars['String']>;
  website_in?: InputMaybe<Array<Scalars['String']>>;
  website_not_in?: InputMaybe<Array<Scalars['String']>>;
  website_contains?: InputMaybe<Scalars['String']>;
  website_contains_nocase?: InputMaybe<Scalars['String']>;
  website_not_contains?: InputMaybe<Scalars['String']>;
  website_not_contains_nocase?: InputMaybe<Scalars['String']>;
  website_starts_with?: InputMaybe<Scalars['String']>;
  website_starts_with_nocase?: InputMaybe<Scalars['String']>;
  website_not_starts_with?: InputMaybe<Scalars['String']>;
  website_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  website_ends_with?: InputMaybe<Scalars['String']>;
  website_ends_with_nocase?: InputMaybe<Scalars['String']>;
  website_not_ends_with?: InputMaybe<Scalars['String']>;
  website_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  displayName?: InputMaybe<Scalars['String']>;
  displayName_not?: InputMaybe<Scalars['String']>;
  displayName_gt?: InputMaybe<Scalars['String']>;
  displayName_lt?: InputMaybe<Scalars['String']>;
  displayName_gte?: InputMaybe<Scalars['String']>;
  displayName_lte?: InputMaybe<Scalars['String']>;
  displayName_in?: InputMaybe<Array<Scalars['String']>>;
  displayName_not_in?: InputMaybe<Array<Scalars['String']>>;
  displayName_contains?: InputMaybe<Scalars['String']>;
  displayName_contains_nocase?: InputMaybe<Scalars['String']>;
  displayName_not_contains?: InputMaybe<Scalars['String']>;
  displayName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  displayName_starts_with?: InputMaybe<Scalars['String']>;
  displayName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  displayName_not_starts_with?: InputMaybe<Scalars['String']>;
  displayName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  displayName_ends_with?: InputMaybe<Scalars['String']>;
  displayName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  displayName_not_ends_with?: InputMaybe<Scalars['String']>;
  displayName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AccountMetadata_filter>>>;
  or?: InputMaybe<Array<InputMaybe<AccountMetadata_filter>>>;
};

export type AccountMetadata_orderBy =
  | 'id'
  | 'isOrganization'
  | 'codeRepository'
  | 'description'
  | 'image'
  | 'website'
  | 'displayName';

/**
 * A state channel Allocation representing a single Indexer-SubgraphDeployment stake
 *
 */
export type Allocation = {
  /** Channel Address */
  id: Scalars['ID'];
  /** Indexer of this allocation */
  indexer: Indexer;
  /** Creator of the allocation - can be the operator or the indexer */
  creator: Scalars['Bytes'];
  /** If the Allocation is active it shows the indexer. If closed, it is null */
  activeForIndexer?: Maybe<Indexer>;
  /** Subgraph deployment that is being allocated to */
  subgraphDeployment: SubgraphDeployment;
  /** Tokens allocation in this allocation */
  allocatedTokens: Scalars['BigInt'];
  /** [DEPRECATED] Effective allocation that is realized upon closing */
  effectiveAllocation: Scalars['BigInt'];
  /** Epoch this allocation was created */
  createdAtEpoch: Scalars['Int'];
  /** Block at which this allocation was created */
  createdAtBlockHash: Scalars['Bytes'];
  /** Block number at which this allocation was created */
  createdAtBlockNumber: Scalars['Int'];
  /** Epoch this allocation was closed in */
  closedAtEpoch?: Maybe<Scalars['Int']>;
  /** Block hash at which this allocation was closed */
  closedAtBlockHash?: Maybe<Scalars['Bytes']>;
  /** Block number at which this allocation was closed */
  closedAtBlockNumber?: Maybe<Scalars['Int']>;
  /** Fees this allocation collected from query fees upon closing. Excludes curator reward and protocol tax */
  queryFeesCollected: Scalars['BigInt'];
  /** Query fee rebate amount claimed from the protocol through rebates mechanism. Does not include portion given to delegators */
  queryFeeRebates: Scalars['BigInt'];
  /** Query fee rebates collected from the protocol. Can differ from queryFeeRebates if multiple vouchers per allocation are allowed. */
  distributedRebates: Scalars['BigInt'];
  /** Curator rewards deposited to the curating bonding curve */
  curatorRewards: Scalars['BigInt'];
  /** Indexing rewards earned by this allocation. Includes delegator and indexer rewards */
  indexingRewards: Scalars['BigInt'];
  /** Indexing rewards earned by this allocation by indexers */
  indexingIndexerRewards: Scalars['BigInt'];
  /** Indexing rewards earned by this allocation by delegators */
  indexingDelegatorRewards: Scalars['BigInt'];
  /** [DEPRECATED] Pool in which this allocation was closed */
  poolClosedIn?: Maybe<Pool>;
  /** Fees paid out to delegators */
  delegationFees: Scalars['BigInt'];
  /** Status of the allocation */
  status: AllocationStatus;
  /** Timestamp this allocation was created at */
  createdAt: Scalars['Int'];
  /** Timestamp this allocation was closed at */
  closedAt?: Maybe<Scalars['Int']>;
  /** POI submitted with a closed allocation */
  poi?: Maybe<Scalars['Bytes']>;
  indexingRewardCutAtStart: Scalars['Int'];
  indexingRewardEffectiveCutAtStart: Scalars['BigDecimal'];
  queryFeeCutAtStart: Scalars['Int'];
  queryFeeEffectiveCutAtStart: Scalars['BigDecimal'];
  indexingRewardCutAtClose?: Maybe<Scalars['Int']>;
  indexingRewardEffectiveCutAtClose?: Maybe<Scalars['BigDecimal']>;
  queryFeeCutAtClose?: Maybe<Scalars['Int']>;
  queryFeeEffectiveCutAtClose?: Maybe<Scalars['BigDecimal']>;
  /** NOT IMPLEMENTED - Return for this allocation */
  totalReturn: Scalars['BigDecimal'];
  /** NOT IMPLEMENTED - Yearly annualzied return */
  annualizedReturn: Scalars['BigDecimal'];
  /** Status of the allocation for sorting */
  statusInt: Scalars['Int'];
  /** sets on closing */
  totalDelegatedTokensAtClose?: Maybe<Scalars['BigInt']>;
};

export type AllocationStatus =
  | 'Null'
  | 'Active'
  | 'Closed'
  | 'Finalized'
  | 'Claimed';

export type Allocation_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  indexer?: InputMaybe<Scalars['String']>;
  indexer_not?: InputMaybe<Scalars['String']>;
  indexer_gt?: InputMaybe<Scalars['String']>;
  indexer_lt?: InputMaybe<Scalars['String']>;
  indexer_gte?: InputMaybe<Scalars['String']>;
  indexer_lte?: InputMaybe<Scalars['String']>;
  indexer_in?: InputMaybe<Array<Scalars['String']>>;
  indexer_not_in?: InputMaybe<Array<Scalars['String']>>;
  indexer_contains?: InputMaybe<Scalars['String']>;
  indexer_contains_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_contains?: InputMaybe<Scalars['String']>;
  indexer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  indexer_starts_with?: InputMaybe<Scalars['String']>;
  indexer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_starts_with?: InputMaybe<Scalars['String']>;
  indexer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_ends_with?: InputMaybe<Scalars['String']>;
  indexer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_ends_with?: InputMaybe<Scalars['String']>;
  indexer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_?: InputMaybe<Indexer_filter>;
  creator?: InputMaybe<Scalars['Bytes']>;
  creator_not?: InputMaybe<Scalars['Bytes']>;
  creator_gt?: InputMaybe<Scalars['Bytes']>;
  creator_lt?: InputMaybe<Scalars['Bytes']>;
  creator_gte?: InputMaybe<Scalars['Bytes']>;
  creator_lte?: InputMaybe<Scalars['Bytes']>;
  creator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  creator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  creator_contains?: InputMaybe<Scalars['Bytes']>;
  creator_not_contains?: InputMaybe<Scalars['Bytes']>;
  activeForIndexer?: InputMaybe<Scalars['String']>;
  activeForIndexer_not?: InputMaybe<Scalars['String']>;
  activeForIndexer_gt?: InputMaybe<Scalars['String']>;
  activeForIndexer_lt?: InputMaybe<Scalars['String']>;
  activeForIndexer_gte?: InputMaybe<Scalars['String']>;
  activeForIndexer_lte?: InputMaybe<Scalars['String']>;
  activeForIndexer_in?: InputMaybe<Array<Scalars['String']>>;
  activeForIndexer_not_in?: InputMaybe<Array<Scalars['String']>>;
  activeForIndexer_contains?: InputMaybe<Scalars['String']>;
  activeForIndexer_contains_nocase?: InputMaybe<Scalars['String']>;
  activeForIndexer_not_contains?: InputMaybe<Scalars['String']>;
  activeForIndexer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  activeForIndexer_starts_with?: InputMaybe<Scalars['String']>;
  activeForIndexer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  activeForIndexer_not_starts_with?: InputMaybe<Scalars['String']>;
  activeForIndexer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  activeForIndexer_ends_with?: InputMaybe<Scalars['String']>;
  activeForIndexer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  activeForIndexer_not_ends_with?: InputMaybe<Scalars['String']>;
  activeForIndexer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  activeForIndexer_?: InputMaybe<Indexer_filter>;
  subgraphDeployment?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not?: InputMaybe<Scalars['String']>;
  subgraphDeployment_gt?: InputMaybe<Scalars['String']>;
  subgraphDeployment_lt?: InputMaybe<Scalars['String']>;
  subgraphDeployment_gte?: InputMaybe<Scalars['String']>;
  subgraphDeployment_lte?: InputMaybe<Scalars['String']>;
  subgraphDeployment_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphDeployment_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphDeployment_contains?: InputMaybe<Scalars['String']>;
  subgraphDeployment_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_contains?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_starts_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_ends_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_?: InputMaybe<SubgraphDeployment_filter>;
  allocatedTokens?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_not?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  allocatedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  effectiveAllocation?: InputMaybe<Scalars['BigInt']>;
  effectiveAllocation_not?: InputMaybe<Scalars['BigInt']>;
  effectiveAllocation_gt?: InputMaybe<Scalars['BigInt']>;
  effectiveAllocation_lt?: InputMaybe<Scalars['BigInt']>;
  effectiveAllocation_gte?: InputMaybe<Scalars['BigInt']>;
  effectiveAllocation_lte?: InputMaybe<Scalars['BigInt']>;
  effectiveAllocation_in?: InputMaybe<Array<Scalars['BigInt']>>;
  effectiveAllocation_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtEpoch?: InputMaybe<Scalars['Int']>;
  createdAtEpoch_not?: InputMaybe<Scalars['Int']>;
  createdAtEpoch_gt?: InputMaybe<Scalars['Int']>;
  createdAtEpoch_lt?: InputMaybe<Scalars['Int']>;
  createdAtEpoch_gte?: InputMaybe<Scalars['Int']>;
  createdAtEpoch_lte?: InputMaybe<Scalars['Int']>;
  createdAtEpoch_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAtEpoch_not_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAtBlockHash?: InputMaybe<Scalars['Bytes']>;
  createdAtBlockHash_not?: InputMaybe<Scalars['Bytes']>;
  createdAtBlockHash_gt?: InputMaybe<Scalars['Bytes']>;
  createdAtBlockHash_lt?: InputMaybe<Scalars['Bytes']>;
  createdAtBlockHash_gte?: InputMaybe<Scalars['Bytes']>;
  createdAtBlockHash_lte?: InputMaybe<Scalars['Bytes']>;
  createdAtBlockHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  createdAtBlockHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  createdAtBlockHash_contains?: InputMaybe<Scalars['Bytes']>;
  createdAtBlockHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  createdAtBlockNumber?: InputMaybe<Scalars['Int']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['Int']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['Int']>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['Int']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['Int']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['Int']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  closedAtEpoch?: InputMaybe<Scalars['Int']>;
  closedAtEpoch_not?: InputMaybe<Scalars['Int']>;
  closedAtEpoch_gt?: InputMaybe<Scalars['Int']>;
  closedAtEpoch_lt?: InputMaybe<Scalars['Int']>;
  closedAtEpoch_gte?: InputMaybe<Scalars['Int']>;
  closedAtEpoch_lte?: InputMaybe<Scalars['Int']>;
  closedAtEpoch_in?: InputMaybe<Array<Scalars['Int']>>;
  closedAtEpoch_not_in?: InputMaybe<Array<Scalars['Int']>>;
  closedAtBlockHash?: InputMaybe<Scalars['Bytes']>;
  closedAtBlockHash_not?: InputMaybe<Scalars['Bytes']>;
  closedAtBlockHash_gt?: InputMaybe<Scalars['Bytes']>;
  closedAtBlockHash_lt?: InputMaybe<Scalars['Bytes']>;
  closedAtBlockHash_gte?: InputMaybe<Scalars['Bytes']>;
  closedAtBlockHash_lte?: InputMaybe<Scalars['Bytes']>;
  closedAtBlockHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  closedAtBlockHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  closedAtBlockHash_contains?: InputMaybe<Scalars['Bytes']>;
  closedAtBlockHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  closedAtBlockNumber?: InputMaybe<Scalars['Int']>;
  closedAtBlockNumber_not?: InputMaybe<Scalars['Int']>;
  closedAtBlockNumber_gt?: InputMaybe<Scalars['Int']>;
  closedAtBlockNumber_lt?: InputMaybe<Scalars['Int']>;
  closedAtBlockNumber_gte?: InputMaybe<Scalars['Int']>;
  closedAtBlockNumber_lte?: InputMaybe<Scalars['Int']>;
  closedAtBlockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  closedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  queryFeesCollected?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_not?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_gt?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_lt?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_gte?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_lte?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeesCollected_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeeRebates?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_not?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_gt?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_lt?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_gte?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_lte?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeeRebates_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  distributedRebates?: InputMaybe<Scalars['BigInt']>;
  distributedRebates_not?: InputMaybe<Scalars['BigInt']>;
  distributedRebates_gt?: InputMaybe<Scalars['BigInt']>;
  distributedRebates_lt?: InputMaybe<Scalars['BigInt']>;
  distributedRebates_gte?: InputMaybe<Scalars['BigInt']>;
  distributedRebates_lte?: InputMaybe<Scalars['BigInt']>;
  distributedRebates_in?: InputMaybe<Array<Scalars['BigInt']>>;
  distributedRebates_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  curatorRewards?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_not?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_gt?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_lt?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_gte?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_lte?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  curatorRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingRewards?: InputMaybe<Scalars['BigInt']>;
  indexingRewards_not?: InputMaybe<Scalars['BigInt']>;
  indexingRewards_gt?: InputMaybe<Scalars['BigInt']>;
  indexingRewards_lt?: InputMaybe<Scalars['BigInt']>;
  indexingRewards_gte?: InputMaybe<Scalars['BigInt']>;
  indexingRewards_lte?: InputMaybe<Scalars['BigInt']>;
  indexingRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingIndexerRewards?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewards_not?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewards_gt?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewards_lt?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewards_gte?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewards_lte?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingIndexerRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingDelegatorRewards?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewards_not?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewards_gt?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewards_lt?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewards_gte?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewards_lte?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingDelegatorRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  poolClosedIn?: InputMaybe<Scalars['String']>;
  poolClosedIn_not?: InputMaybe<Scalars['String']>;
  poolClosedIn_gt?: InputMaybe<Scalars['String']>;
  poolClosedIn_lt?: InputMaybe<Scalars['String']>;
  poolClosedIn_gte?: InputMaybe<Scalars['String']>;
  poolClosedIn_lte?: InputMaybe<Scalars['String']>;
  poolClosedIn_in?: InputMaybe<Array<Scalars['String']>>;
  poolClosedIn_not_in?: InputMaybe<Array<Scalars['String']>>;
  poolClosedIn_contains?: InputMaybe<Scalars['String']>;
  poolClosedIn_contains_nocase?: InputMaybe<Scalars['String']>;
  poolClosedIn_not_contains?: InputMaybe<Scalars['String']>;
  poolClosedIn_not_contains_nocase?: InputMaybe<Scalars['String']>;
  poolClosedIn_starts_with?: InputMaybe<Scalars['String']>;
  poolClosedIn_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolClosedIn_not_starts_with?: InputMaybe<Scalars['String']>;
  poolClosedIn_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolClosedIn_ends_with?: InputMaybe<Scalars['String']>;
  poolClosedIn_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolClosedIn_not_ends_with?: InputMaybe<Scalars['String']>;
  poolClosedIn_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolClosedIn_?: InputMaybe<Pool_filter>;
  delegationFees?: InputMaybe<Scalars['BigInt']>;
  delegationFees_not?: InputMaybe<Scalars['BigInt']>;
  delegationFees_gt?: InputMaybe<Scalars['BigInt']>;
  delegationFees_lt?: InputMaybe<Scalars['BigInt']>;
  delegationFees_gte?: InputMaybe<Scalars['BigInt']>;
  delegationFees_lte?: InputMaybe<Scalars['BigInt']>;
  delegationFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegationFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  status?: InputMaybe<AllocationStatus>;
  status_not?: InputMaybe<AllocationStatus>;
  status_in?: InputMaybe<Array<AllocationStatus>>;
  status_not_in?: InputMaybe<Array<AllocationStatus>>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  closedAt?: InputMaybe<Scalars['Int']>;
  closedAt_not?: InputMaybe<Scalars['Int']>;
  closedAt_gt?: InputMaybe<Scalars['Int']>;
  closedAt_lt?: InputMaybe<Scalars['Int']>;
  closedAt_gte?: InputMaybe<Scalars['Int']>;
  closedAt_lte?: InputMaybe<Scalars['Int']>;
  closedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  closedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  poi?: InputMaybe<Scalars['Bytes']>;
  poi_not?: InputMaybe<Scalars['Bytes']>;
  poi_gt?: InputMaybe<Scalars['Bytes']>;
  poi_lt?: InputMaybe<Scalars['Bytes']>;
  poi_gte?: InputMaybe<Scalars['Bytes']>;
  poi_lte?: InputMaybe<Scalars['Bytes']>;
  poi_in?: InputMaybe<Array<Scalars['Bytes']>>;
  poi_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  poi_contains?: InputMaybe<Scalars['Bytes']>;
  poi_not_contains?: InputMaybe<Scalars['Bytes']>;
  indexingRewardCutAtStart?: InputMaybe<Scalars['Int']>;
  indexingRewardCutAtStart_not?: InputMaybe<Scalars['Int']>;
  indexingRewardCutAtStart_gt?: InputMaybe<Scalars['Int']>;
  indexingRewardCutAtStart_lt?: InputMaybe<Scalars['Int']>;
  indexingRewardCutAtStart_gte?: InputMaybe<Scalars['Int']>;
  indexingRewardCutAtStart_lte?: InputMaybe<Scalars['Int']>;
  indexingRewardCutAtStart_in?: InputMaybe<Array<Scalars['Int']>>;
  indexingRewardCutAtStart_not_in?: InputMaybe<Array<Scalars['Int']>>;
  indexingRewardEffectiveCutAtStart?: InputMaybe<Scalars['BigDecimal']>;
  indexingRewardEffectiveCutAtStart_not?: InputMaybe<Scalars['BigDecimal']>;
  indexingRewardEffectiveCutAtStart_gt?: InputMaybe<Scalars['BigDecimal']>;
  indexingRewardEffectiveCutAtStart_lt?: InputMaybe<Scalars['BigDecimal']>;
  indexingRewardEffectiveCutAtStart_gte?: InputMaybe<Scalars['BigDecimal']>;
  indexingRewardEffectiveCutAtStart_lte?: InputMaybe<Scalars['BigDecimal']>;
  indexingRewardEffectiveCutAtStart_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  indexingRewardEffectiveCutAtStart_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  queryFeeCutAtStart?: InputMaybe<Scalars['Int']>;
  queryFeeCutAtStart_not?: InputMaybe<Scalars['Int']>;
  queryFeeCutAtStart_gt?: InputMaybe<Scalars['Int']>;
  queryFeeCutAtStart_lt?: InputMaybe<Scalars['Int']>;
  queryFeeCutAtStart_gte?: InputMaybe<Scalars['Int']>;
  queryFeeCutAtStart_lte?: InputMaybe<Scalars['Int']>;
  queryFeeCutAtStart_in?: InputMaybe<Array<Scalars['Int']>>;
  queryFeeCutAtStart_not_in?: InputMaybe<Array<Scalars['Int']>>;
  queryFeeEffectiveCutAtStart?: InputMaybe<Scalars['BigDecimal']>;
  queryFeeEffectiveCutAtStart_not?: InputMaybe<Scalars['BigDecimal']>;
  queryFeeEffectiveCutAtStart_gt?: InputMaybe<Scalars['BigDecimal']>;
  queryFeeEffectiveCutAtStart_lt?: InputMaybe<Scalars['BigDecimal']>;
  queryFeeEffectiveCutAtStart_gte?: InputMaybe<Scalars['BigDecimal']>;
  queryFeeEffectiveCutAtStart_lte?: InputMaybe<Scalars['BigDecimal']>;
  queryFeeEffectiveCutAtStart_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  queryFeeEffectiveCutAtStart_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  indexingRewardCutAtClose?: InputMaybe<Scalars['Int']>;
  indexingRewardCutAtClose_not?: InputMaybe<Scalars['Int']>;
  indexingRewardCutAtClose_gt?: InputMaybe<Scalars['Int']>;
  indexingRewardCutAtClose_lt?: InputMaybe<Scalars['Int']>;
  indexingRewardCutAtClose_gte?: InputMaybe<Scalars['Int']>;
  indexingRewardCutAtClose_lte?: InputMaybe<Scalars['Int']>;
  indexingRewardCutAtClose_in?: InputMaybe<Array<Scalars['Int']>>;
  indexingRewardCutAtClose_not_in?: InputMaybe<Array<Scalars['Int']>>;
  indexingRewardEffectiveCutAtClose?: InputMaybe<Scalars['BigDecimal']>;
  indexingRewardEffectiveCutAtClose_not?: InputMaybe<Scalars['BigDecimal']>;
  indexingRewardEffectiveCutAtClose_gt?: InputMaybe<Scalars['BigDecimal']>;
  indexingRewardEffectiveCutAtClose_lt?: InputMaybe<Scalars['BigDecimal']>;
  indexingRewardEffectiveCutAtClose_gte?: InputMaybe<Scalars['BigDecimal']>;
  indexingRewardEffectiveCutAtClose_lte?: InputMaybe<Scalars['BigDecimal']>;
  indexingRewardEffectiveCutAtClose_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  indexingRewardEffectiveCutAtClose_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  queryFeeCutAtClose?: InputMaybe<Scalars['Int']>;
  queryFeeCutAtClose_not?: InputMaybe<Scalars['Int']>;
  queryFeeCutAtClose_gt?: InputMaybe<Scalars['Int']>;
  queryFeeCutAtClose_lt?: InputMaybe<Scalars['Int']>;
  queryFeeCutAtClose_gte?: InputMaybe<Scalars['Int']>;
  queryFeeCutAtClose_lte?: InputMaybe<Scalars['Int']>;
  queryFeeCutAtClose_in?: InputMaybe<Array<Scalars['Int']>>;
  queryFeeCutAtClose_not_in?: InputMaybe<Array<Scalars['Int']>>;
  queryFeeEffectiveCutAtClose?: InputMaybe<Scalars['BigDecimal']>;
  queryFeeEffectiveCutAtClose_not?: InputMaybe<Scalars['BigDecimal']>;
  queryFeeEffectiveCutAtClose_gt?: InputMaybe<Scalars['BigDecimal']>;
  queryFeeEffectiveCutAtClose_lt?: InputMaybe<Scalars['BigDecimal']>;
  queryFeeEffectiveCutAtClose_gte?: InputMaybe<Scalars['BigDecimal']>;
  queryFeeEffectiveCutAtClose_lte?: InputMaybe<Scalars['BigDecimal']>;
  queryFeeEffectiveCutAtClose_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  queryFeeEffectiveCutAtClose_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalReturn?: InputMaybe<Scalars['BigDecimal']>;
  totalReturn_not?: InputMaybe<Scalars['BigDecimal']>;
  totalReturn_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalReturn_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalReturn_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalReturn_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalReturn_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalReturn_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  annualizedReturn?: InputMaybe<Scalars['BigDecimal']>;
  annualizedReturn_not?: InputMaybe<Scalars['BigDecimal']>;
  annualizedReturn_gt?: InputMaybe<Scalars['BigDecimal']>;
  annualizedReturn_lt?: InputMaybe<Scalars['BigDecimal']>;
  annualizedReturn_gte?: InputMaybe<Scalars['BigDecimal']>;
  annualizedReturn_lte?: InputMaybe<Scalars['BigDecimal']>;
  annualizedReturn_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  annualizedReturn_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  statusInt?: InputMaybe<Scalars['Int']>;
  statusInt_not?: InputMaybe<Scalars['Int']>;
  statusInt_gt?: InputMaybe<Scalars['Int']>;
  statusInt_lt?: InputMaybe<Scalars['Int']>;
  statusInt_gte?: InputMaybe<Scalars['Int']>;
  statusInt_lte?: InputMaybe<Scalars['Int']>;
  statusInt_in?: InputMaybe<Array<Scalars['Int']>>;
  statusInt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalDelegatedTokensAtClose?: InputMaybe<Scalars['BigInt']>;
  totalDelegatedTokensAtClose_not?: InputMaybe<Scalars['BigInt']>;
  totalDelegatedTokensAtClose_gt?: InputMaybe<Scalars['BigInt']>;
  totalDelegatedTokensAtClose_lt?: InputMaybe<Scalars['BigInt']>;
  totalDelegatedTokensAtClose_gte?: InputMaybe<Scalars['BigInt']>;
  totalDelegatedTokensAtClose_lte?: InputMaybe<Scalars['BigInt']>;
  totalDelegatedTokensAtClose_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDelegatedTokensAtClose_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Allocation_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Allocation_filter>>>;
};

export type Allocation_orderBy =
  | 'id'
  | 'indexer'
  | 'indexer__id'
  | 'indexer__createdAt'
  | 'indexer__url'
  | 'indexer__geoHash'
  | 'indexer__defaultDisplayName'
  | 'indexer__stakedTokens'
  | 'indexer__allocatedTokens'
  | 'indexer__unstakedTokens'
  | 'indexer__lockedTokens'
  | 'indexer__tokensLockedUntil'
  | 'indexer__allocationCount'
  | 'indexer__totalAllocationCount'
  | 'indexer__queryFeesCollected'
  | 'indexer__queryFeeRebates'
  | 'indexer__rewardsEarned'
  | 'indexer__indexerIndexingRewards'
  | 'indexer__delegatorIndexingRewards'
  | 'indexer__indexerRewardsOwnGenerationRatio'
  | 'indexer__transferredToL2'
  | 'indexer__firstTransferredToL2At'
  | 'indexer__firstTransferredToL2AtBlockNumber'
  | 'indexer__firstTransferredToL2AtTx'
  | 'indexer__lastTransferredToL2At'
  | 'indexer__lastTransferredToL2AtBlockNumber'
  | 'indexer__lastTransferredToL2AtTx'
  | 'indexer__stakedTokensTransferredToL2'
  | 'indexer__idOnL2'
  | 'indexer__idOnL1'
  | 'indexer__delegatedCapacity'
  | 'indexer__tokenCapacity'
  | 'indexer__availableStake'
  | 'indexer__delegatedTokens'
  | 'indexer__ownStakeRatio'
  | 'indexer__delegatedStakeRatio'
  | 'indexer__delegatorShares'
  | 'indexer__delegationExchangeRate'
  | 'indexer__indexingRewardCut'
  | 'indexer__indexingRewardEffectiveCut'
  | 'indexer__overDelegationDilution'
  | 'indexer__delegatorQueryFees'
  | 'indexer__queryFeeCut'
  | 'indexer__queryFeeEffectiveCut'
  | 'indexer__delegatorParameterCooldown'
  | 'indexer__lastDelegationParameterUpdate'
  | 'indexer__forcedClosures'
  | 'indexer__totalReturn'
  | 'indexer__annualizedReturn'
  | 'indexer__stakingEfficiency'
  | 'indexer__notAllocatedTokens'
  | 'indexer__delegationRemaining'
  | 'indexer__indexerQueryFees'
  | 'indexer__delegatorsCount'
  | 'creator'
  | 'activeForIndexer'
  | 'activeForIndexer__id'
  | 'activeForIndexer__createdAt'
  | 'activeForIndexer__url'
  | 'activeForIndexer__geoHash'
  | 'activeForIndexer__defaultDisplayName'
  | 'activeForIndexer__stakedTokens'
  | 'activeForIndexer__allocatedTokens'
  | 'activeForIndexer__unstakedTokens'
  | 'activeForIndexer__lockedTokens'
  | 'activeForIndexer__tokensLockedUntil'
  | 'activeForIndexer__allocationCount'
  | 'activeForIndexer__totalAllocationCount'
  | 'activeForIndexer__queryFeesCollected'
  | 'activeForIndexer__queryFeeRebates'
  | 'activeForIndexer__rewardsEarned'
  | 'activeForIndexer__indexerIndexingRewards'
  | 'activeForIndexer__delegatorIndexingRewards'
  | 'activeForIndexer__indexerRewardsOwnGenerationRatio'
  | 'activeForIndexer__transferredToL2'
  | 'activeForIndexer__firstTransferredToL2At'
  | 'activeForIndexer__firstTransferredToL2AtBlockNumber'
  | 'activeForIndexer__firstTransferredToL2AtTx'
  | 'activeForIndexer__lastTransferredToL2At'
  | 'activeForIndexer__lastTransferredToL2AtBlockNumber'
  | 'activeForIndexer__lastTransferredToL2AtTx'
  | 'activeForIndexer__stakedTokensTransferredToL2'
  | 'activeForIndexer__idOnL2'
  | 'activeForIndexer__idOnL1'
  | 'activeForIndexer__delegatedCapacity'
  | 'activeForIndexer__tokenCapacity'
  | 'activeForIndexer__availableStake'
  | 'activeForIndexer__delegatedTokens'
  | 'activeForIndexer__ownStakeRatio'
  | 'activeForIndexer__delegatedStakeRatio'
  | 'activeForIndexer__delegatorShares'
  | 'activeForIndexer__delegationExchangeRate'
  | 'activeForIndexer__indexingRewardCut'
  | 'activeForIndexer__indexingRewardEffectiveCut'
  | 'activeForIndexer__overDelegationDilution'
  | 'activeForIndexer__delegatorQueryFees'
  | 'activeForIndexer__queryFeeCut'
  | 'activeForIndexer__queryFeeEffectiveCut'
  | 'activeForIndexer__delegatorParameterCooldown'
  | 'activeForIndexer__lastDelegationParameterUpdate'
  | 'activeForIndexer__forcedClosures'
  | 'activeForIndexer__totalReturn'
  | 'activeForIndexer__annualizedReturn'
  | 'activeForIndexer__stakingEfficiency'
  | 'activeForIndexer__notAllocatedTokens'
  | 'activeForIndexer__delegationRemaining'
  | 'activeForIndexer__indexerQueryFees'
  | 'activeForIndexer__delegatorsCount'
  | 'subgraphDeployment'
  | 'subgraphDeployment__id'
  | 'subgraphDeployment__ipfsHash'
  | 'subgraphDeployment__createdAt'
  | 'subgraphDeployment__deniedAt'
  | 'subgraphDeployment__originalName'
  | 'subgraphDeployment__stakedTokens'
  | 'subgraphDeployment__indexingRewardAmount'
  | 'subgraphDeployment__indexingIndexerRewardAmount'
  | 'subgraphDeployment__indexingDelegatorRewardAmount'
  | 'subgraphDeployment__queryFeesAmount'
  | 'subgraphDeployment__queryFeeRebates'
  | 'subgraphDeployment__curatorFeeRewards'
  | 'subgraphDeployment__signalledTokens'
  | 'subgraphDeployment__unsignalledTokens'
  | 'subgraphDeployment__signalAmount'
  | 'subgraphDeployment__pricePerShare'
  | 'subgraphDeployment__reserveRatio'
  | 'subgraphDeployment__subgraphCount'
  | 'subgraphDeployment__activeSubgraphCount'
  | 'subgraphDeployment__deprecatedSubgraphCount'
  | 'subgraphDeployment__transferredToL2'
  | 'subgraphDeployment__transferredToL2At'
  | 'subgraphDeployment__transferredToL2AtBlockNumber'
  | 'subgraphDeployment__transferredToL2AtTx'
  | 'subgraphDeployment__signalledTokensSentToL2'
  | 'subgraphDeployment__signalledTokensReceivedOnL2'
  | 'subgraphDeployment__currentSignalCount'
  | 'subgraphDeployment__indexersCount'
  | 'subgraphDeployment__allocationsCount'
  | 'subgraphDeployment__rewardsProportion'
  | 'allocatedTokens'
  | 'effectiveAllocation'
  | 'createdAtEpoch'
  | 'createdAtBlockHash'
  | 'createdAtBlockNumber'
  | 'closedAtEpoch'
  | 'closedAtBlockHash'
  | 'closedAtBlockNumber'
  | 'queryFeesCollected'
  | 'queryFeeRebates'
  | 'distributedRebates'
  | 'curatorRewards'
  | 'indexingRewards'
  | 'indexingIndexerRewards'
  | 'indexingDelegatorRewards'
  | 'poolClosedIn'
  | 'poolClosedIn__id'
  | 'poolClosedIn__allocation'
  | 'poolClosedIn__totalQueryFees'
  | 'poolClosedIn__claimedFees'
  | 'poolClosedIn__curatorRewards'
  | 'delegationFees'
  | 'status'
  | 'createdAt'
  | 'closedAt'
  | 'poi'
  | 'indexingRewardCutAtStart'
  | 'indexingRewardEffectiveCutAtStart'
  | 'queryFeeCutAtStart'
  | 'queryFeeEffectiveCutAtStart'
  | 'indexingRewardCutAtClose'
  | 'indexingRewardEffectiveCutAtClose'
  | 'queryFeeCutAtClose'
  | 'queryFeeEffectiveCutAtClose'
  | 'totalReturn'
  | 'annualizedReturn'
  | 'statusInt'
  | 'totalDelegatedTokensAtClose';

/**
 * Attestation of a dispute
 *
 */
export type Attestation = {
  /** Concatenation of the requestCID and responseCID */
  id: Scalars['ID'];
  /** Subgraph deployment being disputed */
  subgraphDeployment: SubgraphDeployment;
  /** RequestCID */
  requestCID: Scalars['String'];
  /** ResponseCID */
  responseCID: Scalars['String'];
  /** NOT IMPLEMENTED - Gas used by the attested query */
  gasUsed?: Maybe<Scalars['BigInt']>;
  /** NOT IMPLEMENTED - Bytes of attested query */
  responseNumBytes?: Maybe<Scalars['BigInt']>;
  /** V of the indexers signature */
  v: Scalars['Int'];
  /** R of the indexers signature */
  r: Scalars['String'];
  /** S of the indexers signature */
  s: Scalars['String'];
};

export type Attestation_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  subgraphDeployment?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not?: InputMaybe<Scalars['String']>;
  subgraphDeployment_gt?: InputMaybe<Scalars['String']>;
  subgraphDeployment_lt?: InputMaybe<Scalars['String']>;
  subgraphDeployment_gte?: InputMaybe<Scalars['String']>;
  subgraphDeployment_lte?: InputMaybe<Scalars['String']>;
  subgraphDeployment_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphDeployment_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphDeployment_contains?: InputMaybe<Scalars['String']>;
  subgraphDeployment_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_contains?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_starts_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_ends_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_?: InputMaybe<SubgraphDeployment_filter>;
  requestCID?: InputMaybe<Scalars['String']>;
  requestCID_not?: InputMaybe<Scalars['String']>;
  requestCID_gt?: InputMaybe<Scalars['String']>;
  requestCID_lt?: InputMaybe<Scalars['String']>;
  requestCID_gte?: InputMaybe<Scalars['String']>;
  requestCID_lte?: InputMaybe<Scalars['String']>;
  requestCID_in?: InputMaybe<Array<Scalars['String']>>;
  requestCID_not_in?: InputMaybe<Array<Scalars['String']>>;
  requestCID_contains?: InputMaybe<Scalars['String']>;
  requestCID_contains_nocase?: InputMaybe<Scalars['String']>;
  requestCID_not_contains?: InputMaybe<Scalars['String']>;
  requestCID_not_contains_nocase?: InputMaybe<Scalars['String']>;
  requestCID_starts_with?: InputMaybe<Scalars['String']>;
  requestCID_starts_with_nocase?: InputMaybe<Scalars['String']>;
  requestCID_not_starts_with?: InputMaybe<Scalars['String']>;
  requestCID_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  requestCID_ends_with?: InputMaybe<Scalars['String']>;
  requestCID_ends_with_nocase?: InputMaybe<Scalars['String']>;
  requestCID_not_ends_with?: InputMaybe<Scalars['String']>;
  requestCID_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  responseCID?: InputMaybe<Scalars['String']>;
  responseCID_not?: InputMaybe<Scalars['String']>;
  responseCID_gt?: InputMaybe<Scalars['String']>;
  responseCID_lt?: InputMaybe<Scalars['String']>;
  responseCID_gte?: InputMaybe<Scalars['String']>;
  responseCID_lte?: InputMaybe<Scalars['String']>;
  responseCID_in?: InputMaybe<Array<Scalars['String']>>;
  responseCID_not_in?: InputMaybe<Array<Scalars['String']>>;
  responseCID_contains?: InputMaybe<Scalars['String']>;
  responseCID_contains_nocase?: InputMaybe<Scalars['String']>;
  responseCID_not_contains?: InputMaybe<Scalars['String']>;
  responseCID_not_contains_nocase?: InputMaybe<Scalars['String']>;
  responseCID_starts_with?: InputMaybe<Scalars['String']>;
  responseCID_starts_with_nocase?: InputMaybe<Scalars['String']>;
  responseCID_not_starts_with?: InputMaybe<Scalars['String']>;
  responseCID_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  responseCID_ends_with?: InputMaybe<Scalars['String']>;
  responseCID_ends_with_nocase?: InputMaybe<Scalars['String']>;
  responseCID_not_ends_with?: InputMaybe<Scalars['String']>;
  responseCID_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  responseNumBytes?: InputMaybe<Scalars['BigInt']>;
  responseNumBytes_not?: InputMaybe<Scalars['BigInt']>;
  responseNumBytes_gt?: InputMaybe<Scalars['BigInt']>;
  responseNumBytes_lt?: InputMaybe<Scalars['BigInt']>;
  responseNumBytes_gte?: InputMaybe<Scalars['BigInt']>;
  responseNumBytes_lte?: InputMaybe<Scalars['BigInt']>;
  responseNumBytes_in?: InputMaybe<Array<Scalars['BigInt']>>;
  responseNumBytes_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  v?: InputMaybe<Scalars['Int']>;
  v_not?: InputMaybe<Scalars['Int']>;
  v_gt?: InputMaybe<Scalars['Int']>;
  v_lt?: InputMaybe<Scalars['Int']>;
  v_gte?: InputMaybe<Scalars['Int']>;
  v_lte?: InputMaybe<Scalars['Int']>;
  v_in?: InputMaybe<Array<Scalars['Int']>>;
  v_not_in?: InputMaybe<Array<Scalars['Int']>>;
  r?: InputMaybe<Scalars['String']>;
  r_not?: InputMaybe<Scalars['String']>;
  r_gt?: InputMaybe<Scalars['String']>;
  r_lt?: InputMaybe<Scalars['String']>;
  r_gte?: InputMaybe<Scalars['String']>;
  r_lte?: InputMaybe<Scalars['String']>;
  r_in?: InputMaybe<Array<Scalars['String']>>;
  r_not_in?: InputMaybe<Array<Scalars['String']>>;
  r_contains?: InputMaybe<Scalars['String']>;
  r_contains_nocase?: InputMaybe<Scalars['String']>;
  r_not_contains?: InputMaybe<Scalars['String']>;
  r_not_contains_nocase?: InputMaybe<Scalars['String']>;
  r_starts_with?: InputMaybe<Scalars['String']>;
  r_starts_with_nocase?: InputMaybe<Scalars['String']>;
  r_not_starts_with?: InputMaybe<Scalars['String']>;
  r_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  r_ends_with?: InputMaybe<Scalars['String']>;
  r_ends_with_nocase?: InputMaybe<Scalars['String']>;
  r_not_ends_with?: InputMaybe<Scalars['String']>;
  r_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  s?: InputMaybe<Scalars['String']>;
  s_not?: InputMaybe<Scalars['String']>;
  s_gt?: InputMaybe<Scalars['String']>;
  s_lt?: InputMaybe<Scalars['String']>;
  s_gte?: InputMaybe<Scalars['String']>;
  s_lte?: InputMaybe<Scalars['String']>;
  s_in?: InputMaybe<Array<Scalars['String']>>;
  s_not_in?: InputMaybe<Array<Scalars['String']>>;
  s_contains?: InputMaybe<Scalars['String']>;
  s_contains_nocase?: InputMaybe<Scalars['String']>;
  s_not_contains?: InputMaybe<Scalars['String']>;
  s_not_contains_nocase?: InputMaybe<Scalars['String']>;
  s_starts_with?: InputMaybe<Scalars['String']>;
  s_starts_with_nocase?: InputMaybe<Scalars['String']>;
  s_not_starts_with?: InputMaybe<Scalars['String']>;
  s_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  s_ends_with?: InputMaybe<Scalars['String']>;
  s_ends_with_nocase?: InputMaybe<Scalars['String']>;
  s_not_ends_with?: InputMaybe<Scalars['String']>;
  s_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Attestation_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Attestation_filter>>>;
};

export type Attestation_orderBy =
  | 'id'
  | 'subgraphDeployment'
  | 'subgraphDeployment__id'
  | 'subgraphDeployment__ipfsHash'
  | 'subgraphDeployment__createdAt'
  | 'subgraphDeployment__deniedAt'
  | 'subgraphDeployment__originalName'
  | 'subgraphDeployment__stakedTokens'
  | 'subgraphDeployment__indexingRewardAmount'
  | 'subgraphDeployment__indexingIndexerRewardAmount'
  | 'subgraphDeployment__indexingDelegatorRewardAmount'
  | 'subgraphDeployment__queryFeesAmount'
  | 'subgraphDeployment__queryFeeRebates'
  | 'subgraphDeployment__curatorFeeRewards'
  | 'subgraphDeployment__signalledTokens'
  | 'subgraphDeployment__unsignalledTokens'
  | 'subgraphDeployment__signalAmount'
  | 'subgraphDeployment__pricePerShare'
  | 'subgraphDeployment__reserveRatio'
  | 'subgraphDeployment__subgraphCount'
  | 'subgraphDeployment__activeSubgraphCount'
  | 'subgraphDeployment__deprecatedSubgraphCount'
  | 'subgraphDeployment__transferredToL2'
  | 'subgraphDeployment__transferredToL2At'
  | 'subgraphDeployment__transferredToL2AtBlockNumber'
  | 'subgraphDeployment__transferredToL2AtTx'
  | 'subgraphDeployment__signalledTokensSentToL2'
  | 'subgraphDeployment__signalledTokensReceivedOnL2'
  | 'subgraphDeployment__currentSignalCount'
  | 'subgraphDeployment__indexersCount'
  | 'subgraphDeployment__allocationsCount'
  | 'subgraphDeployment__rewardsProportion'
  | 'requestCID'
  | 'responseCID'
  | 'gasUsed'
  | 'responseNumBytes'
  | 'v'
  | 'r'
  | 's';

/**
 * Authorized functions for the Manager
 *
 */
export type AuthorizedFunction = {
  /** Function signature (string) */
  id: Scalars['ID'];
  /** The contract address that is authorized to have this function called on itself */
  target: Scalars['Bytes'];
  /** Hash of the function signature */
  sigHash: Scalars['Bytes'];
  /** Token lock Manager */
  manager: TokenManager;
};

export type AuthorizedFunction_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  target?: InputMaybe<Scalars['Bytes']>;
  target_not?: InputMaybe<Scalars['Bytes']>;
  target_gt?: InputMaybe<Scalars['Bytes']>;
  target_lt?: InputMaybe<Scalars['Bytes']>;
  target_gte?: InputMaybe<Scalars['Bytes']>;
  target_lte?: InputMaybe<Scalars['Bytes']>;
  target_in?: InputMaybe<Array<Scalars['Bytes']>>;
  target_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  target_contains?: InputMaybe<Scalars['Bytes']>;
  target_not_contains?: InputMaybe<Scalars['Bytes']>;
  sigHash?: InputMaybe<Scalars['Bytes']>;
  sigHash_not?: InputMaybe<Scalars['Bytes']>;
  sigHash_gt?: InputMaybe<Scalars['Bytes']>;
  sigHash_lt?: InputMaybe<Scalars['Bytes']>;
  sigHash_gte?: InputMaybe<Scalars['Bytes']>;
  sigHash_lte?: InputMaybe<Scalars['Bytes']>;
  sigHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sigHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sigHash_contains?: InputMaybe<Scalars['Bytes']>;
  sigHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  manager?: InputMaybe<Scalars['String']>;
  manager_not?: InputMaybe<Scalars['String']>;
  manager_gt?: InputMaybe<Scalars['String']>;
  manager_lt?: InputMaybe<Scalars['String']>;
  manager_gte?: InputMaybe<Scalars['String']>;
  manager_lte?: InputMaybe<Scalars['String']>;
  manager_in?: InputMaybe<Array<Scalars['String']>>;
  manager_not_in?: InputMaybe<Array<Scalars['String']>>;
  manager_contains?: InputMaybe<Scalars['String']>;
  manager_contains_nocase?: InputMaybe<Scalars['String']>;
  manager_not_contains?: InputMaybe<Scalars['String']>;
  manager_not_contains_nocase?: InputMaybe<Scalars['String']>;
  manager_starts_with?: InputMaybe<Scalars['String']>;
  manager_starts_with_nocase?: InputMaybe<Scalars['String']>;
  manager_not_starts_with?: InputMaybe<Scalars['String']>;
  manager_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  manager_ends_with?: InputMaybe<Scalars['String']>;
  manager_ends_with_nocase?: InputMaybe<Scalars['String']>;
  manager_not_ends_with?: InputMaybe<Scalars['String']>;
  manager_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  manager_?: InputMaybe<TokenManager_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AuthorizedFunction_filter>>>;
  or?: InputMaybe<Array<InputMaybe<AuthorizedFunction_filter>>>;
};

export type AuthorizedFunction_orderBy =
  | 'id'
  | 'target'
  | 'sigHash'
  | 'manager'
  | 'manager__id'
  | 'manager__masterCopy'
  | 'manager__tokens'
  | 'manager__tokenLockCount';

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

/**
 * All relevant data for a bridge deposit Transaction in The Graph Network
 *
 */
export type BridgeDepositTransaction = Transaction & {
  id: Scalars['ID'];
  blockNumber: Scalars['Int'];
  timestamp: Scalars['Int'];
  signer: GraphAccount;
  type: TransactionType;
  /** txHash refers to the tx on the chain corresponding to this subgraph deployment */
  txHash: Scalars['Bytes'];
  from?: Maybe<Scalars['Bytes']>;
  to?: Maybe<Scalars['Bytes']>;
  amount?: Maybe<Scalars['BigInt']>;
  l1Token?: Maybe<Scalars['Bytes']>;
  /** retryableTicketId is the unique value that allows matching an L2 transaction with its L1 counterpart */
  retryableTicketId?: Maybe<Scalars['String']>;
  /** Whether the deposit was initiated through Arbitrum's gateway router (Only available on L1 networks) */
  routed?: Maybe<Scalars['Boolean']>;
};

export type BridgeDepositTransaction_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  signer?: InputMaybe<Scalars['String']>;
  signer_not?: InputMaybe<Scalars['String']>;
  signer_gt?: InputMaybe<Scalars['String']>;
  signer_lt?: InputMaybe<Scalars['String']>;
  signer_gte?: InputMaybe<Scalars['String']>;
  signer_lte?: InputMaybe<Scalars['String']>;
  signer_in?: InputMaybe<Array<Scalars['String']>>;
  signer_not_in?: InputMaybe<Array<Scalars['String']>>;
  signer_contains?: InputMaybe<Scalars['String']>;
  signer_contains_nocase?: InputMaybe<Scalars['String']>;
  signer_not_contains?: InputMaybe<Scalars['String']>;
  signer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  signer_starts_with?: InputMaybe<Scalars['String']>;
  signer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  signer_not_starts_with?: InputMaybe<Scalars['String']>;
  signer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  signer_ends_with?: InputMaybe<Scalars['String']>;
  signer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  signer_not_ends_with?: InputMaybe<Scalars['String']>;
  signer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  signer_?: InputMaybe<GraphAccount_filter>;
  type?: InputMaybe<TransactionType>;
  type_not?: InputMaybe<TransactionType>;
  type_in?: InputMaybe<Array<TransactionType>>;
  type_not_in?: InputMaybe<Array<TransactionType>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_gt?: InputMaybe<Scalars['Bytes']>;
  txHash_lt?: InputMaybe<Scalars['Bytes']>;
  txHash_gte?: InputMaybe<Scalars['Bytes']>;
  txHash_lte?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  from?: InputMaybe<Scalars['Bytes']>;
  from_not?: InputMaybe<Scalars['Bytes']>;
  from_gt?: InputMaybe<Scalars['Bytes']>;
  from_lt?: InputMaybe<Scalars['Bytes']>;
  from_gte?: InputMaybe<Scalars['Bytes']>;
  from_lte?: InputMaybe<Scalars['Bytes']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_contains?: InputMaybe<Scalars['Bytes']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']>;
  to?: InputMaybe<Scalars['Bytes']>;
  to_not?: InputMaybe<Scalars['Bytes']>;
  to_gt?: InputMaybe<Scalars['Bytes']>;
  to_lt?: InputMaybe<Scalars['Bytes']>;
  to_gte?: InputMaybe<Scalars['Bytes']>;
  to_lte?: InputMaybe<Scalars['Bytes']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_contains?: InputMaybe<Scalars['Bytes']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  l1Token?: InputMaybe<Scalars['Bytes']>;
  l1Token_not?: InputMaybe<Scalars['Bytes']>;
  l1Token_gt?: InputMaybe<Scalars['Bytes']>;
  l1Token_lt?: InputMaybe<Scalars['Bytes']>;
  l1Token_gte?: InputMaybe<Scalars['Bytes']>;
  l1Token_lte?: InputMaybe<Scalars['Bytes']>;
  l1Token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  l1Token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  l1Token_contains?: InputMaybe<Scalars['Bytes']>;
  l1Token_not_contains?: InputMaybe<Scalars['Bytes']>;
  retryableTicketId?: InputMaybe<Scalars['String']>;
  retryableTicketId_not?: InputMaybe<Scalars['String']>;
  retryableTicketId_gt?: InputMaybe<Scalars['String']>;
  retryableTicketId_lt?: InputMaybe<Scalars['String']>;
  retryableTicketId_gte?: InputMaybe<Scalars['String']>;
  retryableTicketId_lte?: InputMaybe<Scalars['String']>;
  retryableTicketId_in?: InputMaybe<Array<Scalars['String']>>;
  retryableTicketId_not_in?: InputMaybe<Array<Scalars['String']>>;
  retryableTicketId_contains?: InputMaybe<Scalars['String']>;
  retryableTicketId_contains_nocase?: InputMaybe<Scalars['String']>;
  retryableTicketId_not_contains?: InputMaybe<Scalars['String']>;
  retryableTicketId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  retryableTicketId_starts_with?: InputMaybe<Scalars['String']>;
  retryableTicketId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  retryableTicketId_not_starts_with?: InputMaybe<Scalars['String']>;
  retryableTicketId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  retryableTicketId_ends_with?: InputMaybe<Scalars['String']>;
  retryableTicketId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  retryableTicketId_not_ends_with?: InputMaybe<Scalars['String']>;
  retryableTicketId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  routed?: InputMaybe<Scalars['Boolean']>;
  routed_not?: InputMaybe<Scalars['Boolean']>;
  routed_in?: InputMaybe<Array<Scalars['Boolean']>>;
  routed_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BridgeDepositTransaction_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BridgeDepositTransaction_filter>>>;
};

export type BridgeDepositTransaction_orderBy =
  | 'id'
  | 'blockNumber'
  | 'timestamp'
  | 'signer'
  | 'signer__id'
  | 'signer__createdAt'
  | 'signer__defaultDisplayName'
  | 'signer__metadataHash'
  | 'signer__balance'
  | 'signer__balanceReceivedFromL1Signalling'
  | 'signer__balanceReceivedFromL1Delegation'
  | 'signer__curationApproval'
  | 'signer__stakingApproval'
  | 'signer__gnsApproval'
  | 'signer__developerCreatedAt'
  | 'signer__subgraphQueryFees'
  | 'type'
  | 'txHash'
  | 'from'
  | 'to'
  | 'amount'
  | 'l1Token'
  | 'retryableTicketId'
  | 'routed';

/**
 * All relevant data for a bridge withdrawal Transaction in The Graph Network
 *
 */
export type BridgeWithdrawalTransaction = Transaction & {
  id: Scalars['ID'];
  blockNumber: Scalars['Int'];
  timestamp: Scalars['Int'];
  signer: GraphAccount;
  type: TransactionType;
  /** txHash refers to the tx on the chain corresponding to this subgraph deployment */
  txHash?: Maybe<Scalars['Bytes']>;
  from?: Maybe<Scalars['Bytes']>;
  to?: Maybe<Scalars['Bytes']>;
  amount?: Maybe<Scalars['BigInt']>;
  l1Token?: Maybe<Scalars['Bytes']>;
  /** transactionIndex is the unique value that allows matching an L2 transaction with its L1 counterpart */
  transactionIndex?: Maybe<Scalars['BigInt']>;
};

export type BridgeWithdrawalTransaction_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  signer?: InputMaybe<Scalars['String']>;
  signer_not?: InputMaybe<Scalars['String']>;
  signer_gt?: InputMaybe<Scalars['String']>;
  signer_lt?: InputMaybe<Scalars['String']>;
  signer_gte?: InputMaybe<Scalars['String']>;
  signer_lte?: InputMaybe<Scalars['String']>;
  signer_in?: InputMaybe<Array<Scalars['String']>>;
  signer_not_in?: InputMaybe<Array<Scalars['String']>>;
  signer_contains?: InputMaybe<Scalars['String']>;
  signer_contains_nocase?: InputMaybe<Scalars['String']>;
  signer_not_contains?: InputMaybe<Scalars['String']>;
  signer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  signer_starts_with?: InputMaybe<Scalars['String']>;
  signer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  signer_not_starts_with?: InputMaybe<Scalars['String']>;
  signer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  signer_ends_with?: InputMaybe<Scalars['String']>;
  signer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  signer_not_ends_with?: InputMaybe<Scalars['String']>;
  signer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  signer_?: InputMaybe<GraphAccount_filter>;
  type?: InputMaybe<TransactionType>;
  type_not?: InputMaybe<TransactionType>;
  type_in?: InputMaybe<Array<TransactionType>>;
  type_not_in?: InputMaybe<Array<TransactionType>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_gt?: InputMaybe<Scalars['Bytes']>;
  txHash_lt?: InputMaybe<Scalars['Bytes']>;
  txHash_gte?: InputMaybe<Scalars['Bytes']>;
  txHash_lte?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  from?: InputMaybe<Scalars['Bytes']>;
  from_not?: InputMaybe<Scalars['Bytes']>;
  from_gt?: InputMaybe<Scalars['Bytes']>;
  from_lt?: InputMaybe<Scalars['Bytes']>;
  from_gte?: InputMaybe<Scalars['Bytes']>;
  from_lte?: InputMaybe<Scalars['Bytes']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_contains?: InputMaybe<Scalars['Bytes']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']>;
  to?: InputMaybe<Scalars['Bytes']>;
  to_not?: InputMaybe<Scalars['Bytes']>;
  to_gt?: InputMaybe<Scalars['Bytes']>;
  to_lt?: InputMaybe<Scalars['Bytes']>;
  to_gte?: InputMaybe<Scalars['Bytes']>;
  to_lte?: InputMaybe<Scalars['Bytes']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_contains?: InputMaybe<Scalars['Bytes']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  l1Token?: InputMaybe<Scalars['Bytes']>;
  l1Token_not?: InputMaybe<Scalars['Bytes']>;
  l1Token_gt?: InputMaybe<Scalars['Bytes']>;
  l1Token_lt?: InputMaybe<Scalars['Bytes']>;
  l1Token_gte?: InputMaybe<Scalars['Bytes']>;
  l1Token_lte?: InputMaybe<Scalars['Bytes']>;
  l1Token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  l1Token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  l1Token_contains?: InputMaybe<Scalars['Bytes']>;
  l1Token_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionIndex?: InputMaybe<Scalars['BigInt']>;
  transactionIndex_not?: InputMaybe<Scalars['BigInt']>;
  transactionIndex_gt?: InputMaybe<Scalars['BigInt']>;
  transactionIndex_lt?: InputMaybe<Scalars['BigInt']>;
  transactionIndex_gte?: InputMaybe<Scalars['BigInt']>;
  transactionIndex_lte?: InputMaybe<Scalars['BigInt']>;
  transactionIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BridgeWithdrawalTransaction_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BridgeWithdrawalTransaction_filter>>>;
};

export type BridgeWithdrawalTransaction_orderBy =
  | 'id'
  | 'blockNumber'
  | 'timestamp'
  | 'signer'
  | 'signer__id'
  | 'signer__createdAt'
  | 'signer__defaultDisplayName'
  | 'signer__metadataHash'
  | 'signer__balance'
  | 'signer__balanceReceivedFromL1Signalling'
  | 'signer__balanceReceivedFromL1Delegation'
  | 'signer__curationApproval'
  | 'signer__stakingApproval'
  | 'signer__gnsApproval'
  | 'signer__developerCreatedAt'
  | 'signer__subgraphQueryFees'
  | 'type'
  | 'txHash'
  | 'from'
  | 'to'
  | 'amount'
  | 'l1Token'
  | 'transactionIndex';

/**
 * Curator with all Signals and metrics
 *
 */
export type Curator = {
  /** Eth address of the Curator */
  id: Scalars['ID'];
  /** Time this curator was created */
  createdAt: Scalars['Int'];
  /** Graph account of this curator */
  account: GraphAccount;
  /** CUMULATIVE tokens signalled on all the subgraphs */
  totalSignalledTokens: Scalars['BigInt'];
  /** CUMULATIVE tokens unsignalled on all the subgraphs */
  totalUnsignalledTokens: Scalars['BigInt'];
  /** Subgraphs the curator is curating */
  signals: Array<Signal>;
  /** Default display name is the current default name. Used for filtered queries */
  defaultDisplayName?: Maybe<Scalars['String']>;
  /** CUMULATIVE tokens signalled on all names */
  totalNameSignalledTokens: Scalars['BigInt'];
  /** CUMULATIVE tokens unsignalled on all names */
  totalNameUnsignalledTokens: Scalars['BigInt'];
  /** CUMULATIVE withdrawn tokens from deprecated subgraphs */
  totalWithdrawnTokens: Scalars['BigInt'];
  /** Subgraphs the curator is curating */
  nameSignals: Array<NameSignal>;
  /** NOT IMPLEMENTED - Summation of realized rewards from all Signals */
  realizedRewards: Scalars['BigInt'];
  /** NOT IMPLEMENTED - Annualized rate of return on curator signal */
  annualizedReturn: Scalars['BigDecimal'];
  /** NOT IMPLEMENTED - Total return of the curator */
  totalReturn: Scalars['BigDecimal'];
  /** NOT IMPLEMENTED - Signaling efficiency of the curator */
  signalingEfficiency: Scalars['BigDecimal'];
  /** CURRENT summed name signal for all bonding curves */
  totalNameSignal: Scalars['BigDecimal'];
  /** Total curator cost basis of all shares of name pools purchased on all bonding curves */
  totalNameSignalAverageCostBasis: Scalars['BigDecimal'];
  /** totalNameSignalAverageCostBasis / totalNameSignal */
  totalAverageCostBasisPerNameSignal: Scalars['BigDecimal'];
  /** CURRENT summed signal for all bonding curves */
  totalSignal: Scalars['BigDecimal'];
  /** Total curator cost basis of all version signal shares purchased on all bonding curves. Includes those purchased through GNS name pools */
  totalSignalAverageCostBasis: Scalars['BigDecimal'];
  /** totalSignalAverageCostBasis / totalSignal */
  totalAverageCostBasisPerSignal: Scalars['BigDecimal'];
  /** Total amount of signals created by this user */
  signalCount: Scalars['Int'];
  /** Amount of signal entities created by this user with signals > 0 */
  currentSignalCount: Scalars['Int'];
  /** Amount of active signals for this user */
  activeSignalCount: Scalars['Int'];
  /** Total amount of name signals created by this user */
  nameSignalCount: Scalars['Int'];
  /** Amount of NameSignal entities created by this user with signals > 0 */
  currentNameSignalCount: Scalars['Int'];
  /** Amount of active name signals for this user */
  activeNameSignalCount: Scalars['Int'];
  /** Total amount of name signals and signals created by this user. signalCount + nameSignalCount */
  combinedSignalCount: Scalars['Int'];
  /** Amount of active name signals and signals for this user. signalCount + nameSignalCount */
  activeCombinedSignalCount: Scalars['Int'];
  allCurrentGRTValue: Scalars['BigInt'];
  PLGrt: Scalars['BigDecimal'];
  unrealizedPLGrt: Scalars['BigDecimal'];
  realizedPLGrt: Scalars['BigDecimal'];
  lastSignaledAt: Scalars['Int'];
  lastUnsignaledAt: Scalars['Int'];
};


/**
 * Curator with all Signals and metrics
 *
 */
export type CuratorsignalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Signal_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Signal_filter>;
};


/**
 * Curator with all Signals and metrics
 *
 */
export type CuratornameSignalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NameSignal_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NameSignal_filter>;
};

export type Curator_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  account?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_?: InputMaybe<GraphAccount_filter>;
  totalSignalledTokens?: InputMaybe<Scalars['BigInt']>;
  totalSignalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  totalSignalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  totalSignalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  totalSignalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  totalSignalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  totalSignalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSignalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnsignalledTokens?: InputMaybe<Scalars['BigInt']>;
  totalUnsignalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  totalUnsignalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  totalUnsignalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  totalUnsignalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  totalUnsignalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  totalUnsignalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnsignalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signals_?: InputMaybe<Signal_filter>;
  defaultDisplayName?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not?: InputMaybe<Scalars['String']>;
  defaultDisplayName_gt?: InputMaybe<Scalars['String']>;
  defaultDisplayName_lt?: InputMaybe<Scalars['String']>;
  defaultDisplayName_gte?: InputMaybe<Scalars['String']>;
  defaultDisplayName_lte?: InputMaybe<Scalars['String']>;
  defaultDisplayName_in?: InputMaybe<Array<Scalars['String']>>;
  defaultDisplayName_not_in?: InputMaybe<Array<Scalars['String']>>;
  defaultDisplayName_contains?: InputMaybe<Scalars['String']>;
  defaultDisplayName_contains_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_contains?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_starts_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_starts_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_ends_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_ends_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  totalNameSignalledTokens?: InputMaybe<Scalars['BigInt']>;
  totalNameSignalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  totalNameSignalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  totalNameSignalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  totalNameSignalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  totalNameSignalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  totalNameSignalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalNameSignalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalNameUnsignalledTokens?: InputMaybe<Scalars['BigInt']>;
  totalNameUnsignalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  totalNameUnsignalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  totalNameUnsignalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  totalNameUnsignalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  totalNameUnsignalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  totalNameUnsignalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalNameUnsignalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalWithdrawnTokens?: InputMaybe<Scalars['BigInt']>;
  totalWithdrawnTokens_not?: InputMaybe<Scalars['BigInt']>;
  totalWithdrawnTokens_gt?: InputMaybe<Scalars['BigInt']>;
  totalWithdrawnTokens_lt?: InputMaybe<Scalars['BigInt']>;
  totalWithdrawnTokens_gte?: InputMaybe<Scalars['BigInt']>;
  totalWithdrawnTokens_lte?: InputMaybe<Scalars['BigInt']>;
  totalWithdrawnTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalWithdrawnTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nameSignals_?: InputMaybe<NameSignal_filter>;
  realizedRewards?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_not?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_gt?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_lt?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_gte?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_lte?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  realizedRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  annualizedReturn?: InputMaybe<Scalars['BigDecimal']>;
  annualizedReturn_not?: InputMaybe<Scalars['BigDecimal']>;
  annualizedReturn_gt?: InputMaybe<Scalars['BigDecimal']>;
  annualizedReturn_lt?: InputMaybe<Scalars['BigDecimal']>;
  annualizedReturn_gte?: InputMaybe<Scalars['BigDecimal']>;
  annualizedReturn_lte?: InputMaybe<Scalars['BigDecimal']>;
  annualizedReturn_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  annualizedReturn_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalReturn?: InputMaybe<Scalars['BigDecimal']>;
  totalReturn_not?: InputMaybe<Scalars['BigDecimal']>;
  totalReturn_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalReturn_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalReturn_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalReturn_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalReturn_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalReturn_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  signalingEfficiency?: InputMaybe<Scalars['BigDecimal']>;
  signalingEfficiency_not?: InputMaybe<Scalars['BigDecimal']>;
  signalingEfficiency_gt?: InputMaybe<Scalars['BigDecimal']>;
  signalingEfficiency_lt?: InputMaybe<Scalars['BigDecimal']>;
  signalingEfficiency_gte?: InputMaybe<Scalars['BigDecimal']>;
  signalingEfficiency_lte?: InputMaybe<Scalars['BigDecimal']>;
  signalingEfficiency_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  signalingEfficiency_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalNameSignal?: InputMaybe<Scalars['BigDecimal']>;
  totalNameSignal_not?: InputMaybe<Scalars['BigDecimal']>;
  totalNameSignal_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalNameSignal_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalNameSignal_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalNameSignal_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalNameSignal_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalNameSignal_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalNameSignalAverageCostBasis?: InputMaybe<Scalars['BigDecimal']>;
  totalNameSignalAverageCostBasis_not?: InputMaybe<Scalars['BigDecimal']>;
  totalNameSignalAverageCostBasis_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalNameSignalAverageCostBasis_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalNameSignalAverageCostBasis_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalNameSignalAverageCostBasis_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalNameSignalAverageCostBasis_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalNameSignalAverageCostBasis_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalAverageCostBasisPerNameSignal?: InputMaybe<Scalars['BigDecimal']>;
  totalAverageCostBasisPerNameSignal_not?: InputMaybe<Scalars['BigDecimal']>;
  totalAverageCostBasisPerNameSignal_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalAverageCostBasisPerNameSignal_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalAverageCostBasisPerNameSignal_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalAverageCostBasisPerNameSignal_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalAverageCostBasisPerNameSignal_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalAverageCostBasisPerNameSignal_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalSignal?: InputMaybe<Scalars['BigDecimal']>;
  totalSignal_not?: InputMaybe<Scalars['BigDecimal']>;
  totalSignal_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalSignal_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalSignal_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalSignal_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalSignal_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalSignal_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalSignalAverageCostBasis?: InputMaybe<Scalars['BigDecimal']>;
  totalSignalAverageCostBasis_not?: InputMaybe<Scalars['BigDecimal']>;
  totalSignalAverageCostBasis_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalSignalAverageCostBasis_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalSignalAverageCostBasis_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalSignalAverageCostBasis_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalSignalAverageCostBasis_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalSignalAverageCostBasis_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalAverageCostBasisPerSignal?: InputMaybe<Scalars['BigDecimal']>;
  totalAverageCostBasisPerSignal_not?: InputMaybe<Scalars['BigDecimal']>;
  totalAverageCostBasisPerSignal_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalAverageCostBasisPerSignal_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalAverageCostBasisPerSignal_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalAverageCostBasisPerSignal_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalAverageCostBasisPerSignal_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalAverageCostBasisPerSignal_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  signalCount?: InputMaybe<Scalars['Int']>;
  signalCount_not?: InputMaybe<Scalars['Int']>;
  signalCount_gt?: InputMaybe<Scalars['Int']>;
  signalCount_lt?: InputMaybe<Scalars['Int']>;
  signalCount_gte?: InputMaybe<Scalars['Int']>;
  signalCount_lte?: InputMaybe<Scalars['Int']>;
  signalCount_in?: InputMaybe<Array<Scalars['Int']>>;
  signalCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  currentSignalCount?: InputMaybe<Scalars['Int']>;
  currentSignalCount_not?: InputMaybe<Scalars['Int']>;
  currentSignalCount_gt?: InputMaybe<Scalars['Int']>;
  currentSignalCount_lt?: InputMaybe<Scalars['Int']>;
  currentSignalCount_gte?: InputMaybe<Scalars['Int']>;
  currentSignalCount_lte?: InputMaybe<Scalars['Int']>;
  currentSignalCount_in?: InputMaybe<Array<Scalars['Int']>>;
  currentSignalCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  activeSignalCount?: InputMaybe<Scalars['Int']>;
  activeSignalCount_not?: InputMaybe<Scalars['Int']>;
  activeSignalCount_gt?: InputMaybe<Scalars['Int']>;
  activeSignalCount_lt?: InputMaybe<Scalars['Int']>;
  activeSignalCount_gte?: InputMaybe<Scalars['Int']>;
  activeSignalCount_lte?: InputMaybe<Scalars['Int']>;
  activeSignalCount_in?: InputMaybe<Array<Scalars['Int']>>;
  activeSignalCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  nameSignalCount?: InputMaybe<Scalars['Int']>;
  nameSignalCount_not?: InputMaybe<Scalars['Int']>;
  nameSignalCount_gt?: InputMaybe<Scalars['Int']>;
  nameSignalCount_lt?: InputMaybe<Scalars['Int']>;
  nameSignalCount_gte?: InputMaybe<Scalars['Int']>;
  nameSignalCount_lte?: InputMaybe<Scalars['Int']>;
  nameSignalCount_in?: InputMaybe<Array<Scalars['Int']>>;
  nameSignalCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  currentNameSignalCount?: InputMaybe<Scalars['Int']>;
  currentNameSignalCount_not?: InputMaybe<Scalars['Int']>;
  currentNameSignalCount_gt?: InputMaybe<Scalars['Int']>;
  currentNameSignalCount_lt?: InputMaybe<Scalars['Int']>;
  currentNameSignalCount_gte?: InputMaybe<Scalars['Int']>;
  currentNameSignalCount_lte?: InputMaybe<Scalars['Int']>;
  currentNameSignalCount_in?: InputMaybe<Array<Scalars['Int']>>;
  currentNameSignalCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  activeNameSignalCount?: InputMaybe<Scalars['Int']>;
  activeNameSignalCount_not?: InputMaybe<Scalars['Int']>;
  activeNameSignalCount_gt?: InputMaybe<Scalars['Int']>;
  activeNameSignalCount_lt?: InputMaybe<Scalars['Int']>;
  activeNameSignalCount_gte?: InputMaybe<Scalars['Int']>;
  activeNameSignalCount_lte?: InputMaybe<Scalars['Int']>;
  activeNameSignalCount_in?: InputMaybe<Array<Scalars['Int']>>;
  activeNameSignalCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  combinedSignalCount?: InputMaybe<Scalars['Int']>;
  combinedSignalCount_not?: InputMaybe<Scalars['Int']>;
  combinedSignalCount_gt?: InputMaybe<Scalars['Int']>;
  combinedSignalCount_lt?: InputMaybe<Scalars['Int']>;
  combinedSignalCount_gte?: InputMaybe<Scalars['Int']>;
  combinedSignalCount_lte?: InputMaybe<Scalars['Int']>;
  combinedSignalCount_in?: InputMaybe<Array<Scalars['Int']>>;
  combinedSignalCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  activeCombinedSignalCount?: InputMaybe<Scalars['Int']>;
  activeCombinedSignalCount_not?: InputMaybe<Scalars['Int']>;
  activeCombinedSignalCount_gt?: InputMaybe<Scalars['Int']>;
  activeCombinedSignalCount_lt?: InputMaybe<Scalars['Int']>;
  activeCombinedSignalCount_gte?: InputMaybe<Scalars['Int']>;
  activeCombinedSignalCount_lte?: InputMaybe<Scalars['Int']>;
  activeCombinedSignalCount_in?: InputMaybe<Array<Scalars['Int']>>;
  activeCombinedSignalCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  allCurrentGRTValue?: InputMaybe<Scalars['BigInt']>;
  allCurrentGRTValue_not?: InputMaybe<Scalars['BigInt']>;
  allCurrentGRTValue_gt?: InputMaybe<Scalars['BigInt']>;
  allCurrentGRTValue_lt?: InputMaybe<Scalars['BigInt']>;
  allCurrentGRTValue_gte?: InputMaybe<Scalars['BigInt']>;
  allCurrentGRTValue_lte?: InputMaybe<Scalars['BigInt']>;
  allCurrentGRTValue_in?: InputMaybe<Array<Scalars['BigInt']>>;
  allCurrentGRTValue_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  PLGrt?: InputMaybe<Scalars['BigDecimal']>;
  PLGrt_not?: InputMaybe<Scalars['BigDecimal']>;
  PLGrt_gt?: InputMaybe<Scalars['BigDecimal']>;
  PLGrt_lt?: InputMaybe<Scalars['BigDecimal']>;
  PLGrt_gte?: InputMaybe<Scalars['BigDecimal']>;
  PLGrt_lte?: InputMaybe<Scalars['BigDecimal']>;
  PLGrt_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  PLGrt_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  unrealizedPLGrt?: InputMaybe<Scalars['BigDecimal']>;
  unrealizedPLGrt_not?: InputMaybe<Scalars['BigDecimal']>;
  unrealizedPLGrt_gt?: InputMaybe<Scalars['BigDecimal']>;
  unrealizedPLGrt_lt?: InputMaybe<Scalars['BigDecimal']>;
  unrealizedPLGrt_gte?: InputMaybe<Scalars['BigDecimal']>;
  unrealizedPLGrt_lte?: InputMaybe<Scalars['BigDecimal']>;
  unrealizedPLGrt_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  unrealizedPLGrt_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  realizedPLGrt?: InputMaybe<Scalars['BigDecimal']>;
  realizedPLGrt_not?: InputMaybe<Scalars['BigDecimal']>;
  realizedPLGrt_gt?: InputMaybe<Scalars['BigDecimal']>;
  realizedPLGrt_lt?: InputMaybe<Scalars['BigDecimal']>;
  realizedPLGrt_gte?: InputMaybe<Scalars['BigDecimal']>;
  realizedPLGrt_lte?: InputMaybe<Scalars['BigDecimal']>;
  realizedPLGrt_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  realizedPLGrt_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  lastSignaledAt?: InputMaybe<Scalars['Int']>;
  lastSignaledAt_not?: InputMaybe<Scalars['Int']>;
  lastSignaledAt_gt?: InputMaybe<Scalars['Int']>;
  lastSignaledAt_lt?: InputMaybe<Scalars['Int']>;
  lastSignaledAt_gte?: InputMaybe<Scalars['Int']>;
  lastSignaledAt_lte?: InputMaybe<Scalars['Int']>;
  lastSignaledAt_in?: InputMaybe<Array<Scalars['Int']>>;
  lastSignaledAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  lastUnsignaledAt?: InputMaybe<Scalars['Int']>;
  lastUnsignaledAt_not?: InputMaybe<Scalars['Int']>;
  lastUnsignaledAt_gt?: InputMaybe<Scalars['Int']>;
  lastUnsignaledAt_lt?: InputMaybe<Scalars['Int']>;
  lastUnsignaledAt_gte?: InputMaybe<Scalars['Int']>;
  lastUnsignaledAt_lte?: InputMaybe<Scalars['Int']>;
  lastUnsignaledAt_in?: InputMaybe<Array<Scalars['Int']>>;
  lastUnsignaledAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Curator_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Curator_filter>>>;
};

export type Curator_orderBy =
  | 'id'
  | 'createdAt'
  | 'account'
  | 'account__id'
  | 'account__createdAt'
  | 'account__defaultDisplayName'
  | 'account__metadataHash'
  | 'account__balance'
  | 'account__balanceReceivedFromL1Signalling'
  | 'account__balanceReceivedFromL1Delegation'
  | 'account__curationApproval'
  | 'account__stakingApproval'
  | 'account__gnsApproval'
  | 'account__developerCreatedAt'
  | 'account__subgraphQueryFees'
  | 'totalSignalledTokens'
  | 'totalUnsignalledTokens'
  | 'signals'
  | 'defaultDisplayName'
  | 'totalNameSignalledTokens'
  | 'totalNameUnsignalledTokens'
  | 'totalWithdrawnTokens'
  | 'nameSignals'
  | 'realizedRewards'
  | 'annualizedReturn'
  | 'totalReturn'
  | 'signalingEfficiency'
  | 'totalNameSignal'
  | 'totalNameSignalAverageCostBasis'
  | 'totalAverageCostBasisPerNameSignal'
  | 'totalSignal'
  | 'totalSignalAverageCostBasis'
  | 'totalAverageCostBasisPerSignal'
  | 'signalCount'
  | 'currentSignalCount'
  | 'activeSignalCount'
  | 'nameSignalCount'
  | 'currentNameSignalCount'
  | 'activeNameSignalCount'
  | 'combinedSignalCount'
  | 'activeCombinedSignalCount'
  | 'allCurrentGRTValue'
  | 'PLGrt'
  | 'unrealizedPLGrt'
  | 'realizedPLGrt'
  | 'lastSignaledAt'
  | 'lastUnsignaledAt';

export type CurrentSubgraphDeploymentRelation = {
  /** Auxiliary entity used to batch update Subgraph entities when signalling on the deployment changes. ID replicates the deployment ID and adds a counter, to make it easy to reproduce. */
  id: Scalars['ID'];
  subgraph: Subgraph;
  deployment: SubgraphDeployment;
  /** Indicates whether this relation is active. This means that the deployment is still the current deployment for the named Subgraph */
  active: Scalars['Boolean'];
};

export type CurrentSubgraphDeploymentRelation_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  subgraph?: InputMaybe<Scalars['String']>;
  subgraph_not?: InputMaybe<Scalars['String']>;
  subgraph_gt?: InputMaybe<Scalars['String']>;
  subgraph_lt?: InputMaybe<Scalars['String']>;
  subgraph_gte?: InputMaybe<Scalars['String']>;
  subgraph_lte?: InputMaybe<Scalars['String']>;
  subgraph_in?: InputMaybe<Array<Scalars['String']>>;
  subgraph_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraph_contains?: InputMaybe<Scalars['String']>;
  subgraph_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraph_not_contains?: InputMaybe<Scalars['String']>;
  subgraph_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraph_starts_with?: InputMaybe<Scalars['String']>;
  subgraph_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraph_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_ends_with?: InputMaybe<Scalars['String']>;
  subgraph_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraph_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_?: InputMaybe<Subgraph_filter>;
  deployment?: InputMaybe<Scalars['String']>;
  deployment_not?: InputMaybe<Scalars['String']>;
  deployment_gt?: InputMaybe<Scalars['String']>;
  deployment_lt?: InputMaybe<Scalars['String']>;
  deployment_gte?: InputMaybe<Scalars['String']>;
  deployment_lte?: InputMaybe<Scalars['String']>;
  deployment_in?: InputMaybe<Array<Scalars['String']>>;
  deployment_not_in?: InputMaybe<Array<Scalars['String']>>;
  deployment_contains?: InputMaybe<Scalars['String']>;
  deployment_contains_nocase?: InputMaybe<Scalars['String']>;
  deployment_not_contains?: InputMaybe<Scalars['String']>;
  deployment_not_contains_nocase?: InputMaybe<Scalars['String']>;
  deployment_starts_with?: InputMaybe<Scalars['String']>;
  deployment_starts_with_nocase?: InputMaybe<Scalars['String']>;
  deployment_not_starts_with?: InputMaybe<Scalars['String']>;
  deployment_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  deployment_ends_with?: InputMaybe<Scalars['String']>;
  deployment_ends_with_nocase?: InputMaybe<Scalars['String']>;
  deployment_not_ends_with?: InputMaybe<Scalars['String']>;
  deployment_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  deployment_?: InputMaybe<SubgraphDeployment_filter>;
  active?: InputMaybe<Scalars['Boolean']>;
  active_not?: InputMaybe<Scalars['Boolean']>;
  active_in?: InputMaybe<Array<Scalars['Boolean']>>;
  active_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CurrentSubgraphDeploymentRelation_filter>>>;
  or?: InputMaybe<Array<InputMaybe<CurrentSubgraphDeploymentRelation_filter>>>;
};

export type CurrentSubgraphDeploymentRelation_orderBy =
  | 'id'
  | 'subgraph'
  | 'subgraph__id'
  | 'subgraph__versionCount'
  | 'subgraph__createdAt'
  | 'subgraph__updatedAt'
  | 'subgraph__active'
  | 'subgraph__migrated'
  | 'subgraph__startedTransferToL2'
  | 'subgraph__startedTransferToL2At'
  | 'subgraph__startedTransferToL2AtBlockNumber'
  | 'subgraph__startedTransferToL2AtTx'
  | 'subgraph__transferredToL2'
  | 'subgraph__transferredToL2At'
  | 'subgraph__transferredToL2AtBlockNumber'
  | 'subgraph__transferredToL2AtTx'
  | 'subgraph__signalledTokensSentToL2'
  | 'subgraph__signalledTokensReceivedOnL2'
  | 'subgraph__idOnL2'
  | 'subgraph__idOnL1'
  | 'subgraph__nftID'
  | 'subgraph__oldID'
  | 'subgraph__creatorAddress'
  | 'subgraph__subgraphNumber'
  | 'subgraph__initializing'
  | 'subgraph__entityVersion'
  | 'subgraph__signalledTokens'
  | 'subgraph__unsignalledTokens'
  | 'subgraph__currentSignalledTokens'
  | 'subgraph__nameSignalAmount'
  | 'subgraph__signalAmount'
  | 'subgraph__reserveRatio'
  | 'subgraph__withdrawableTokens'
  | 'subgraph__withdrawnTokens'
  | 'subgraph__nameSignalCount'
  | 'subgraph__currentNameSignalCount'
  | 'subgraph__metadataHash'
  | 'subgraph__ipfsMetadataHash'
  | 'deployment'
  | 'deployment__id'
  | 'deployment__ipfsHash'
  | 'deployment__createdAt'
  | 'deployment__deniedAt'
  | 'deployment__originalName'
  | 'deployment__stakedTokens'
  | 'deployment__indexingRewardAmount'
  | 'deployment__indexingIndexerRewardAmount'
  | 'deployment__indexingDelegatorRewardAmount'
  | 'deployment__queryFeesAmount'
  | 'deployment__queryFeeRebates'
  | 'deployment__curatorFeeRewards'
  | 'deployment__signalledTokens'
  | 'deployment__unsignalledTokens'
  | 'deployment__signalAmount'
  | 'deployment__pricePerShare'
  | 'deployment__reserveRatio'
  | 'deployment__subgraphCount'
  | 'deployment__activeSubgraphCount'
  | 'deployment__deprecatedSubgraphCount'
  | 'deployment__transferredToL2'
  | 'deployment__transferredToL2At'
  | 'deployment__transferredToL2AtBlockNumber'
  | 'deployment__transferredToL2AtTx'
  | 'deployment__signalledTokensSentToL2'
  | 'deployment__signalledTokensReceivedOnL2'
  | 'deployment__currentSignalCount'
  | 'deployment__indexersCount'
  | 'deployment__allocationsCount'
  | 'deployment__rewardsProportion'
  | 'active';

/**
 * Delegator stake for a single Indexer
 *
 */
export type DelegatedStake = {
  /** Concatenation of Delegator address and Indexer address */
  id: Scalars['ID'];
  /** Index the stake is delegated to */
  indexer: Indexer;
  /** Delegator */
  delegator: Delegator;
  /** CUMULATIVE tokens delegated */
  stakedTokens: Scalars['BigInt'];
  /** CUMULATIVE tokens undelegated */
  unstakedTokens: Scalars['BigInt'];
  /** CURRENT tokens locked */
  lockedTokens: Scalars['BigInt'];
  /** Epoch the locked tokens get unlocked */
  lockedUntil: Scalars['Int'];
  /** Shares owned in the delegator pool. Used to calculate total amount delegated */
  shareAmount: Scalars['BigInt'];
  /** The rate this delegator paid for their shares (calculated using average cost basis). Used for rewards calculations */
  personalExchangeRate: Scalars['BigDecimal'];
  /** Realized rewards from undelegating and realizing a reward */
  realizedRewards: Scalars['BigDecimal'];
  /** Time this delegator first delegated to an indexer */
  createdAt: Scalars['Int'];
  /** Last time this delegator delegated towards this indexer */
  lastDelegatedAt?: Maybe<Scalars['Int']>;
  /** Last time this delegator undelegated from this indexer */
  lastUndelegatedAt?: Maybe<Scalars['Int']>;
  /** Whether the delegation has been transferred from L1 to L2 */
  transferredToL2: Scalars['Boolean'];
  /** Timestamp for the L1 -> L2 Transfer */
  transferredToL2At?: Maybe<Scalars['BigInt']>;
  /** Block number for the L1 -> L2 Transfer */
  transferredToL2AtBlockNumber?: Maybe<Scalars['BigInt']>;
  /** Transaction hash for the L1 -> L2 Transfer */
  transferredToL2AtTx?: Maybe<Scalars['String']>;
  /** Amount of GRT transferred to L2. Only visible from L1, as there's no events for it on L2 */
  stakedTokensTransferredToL2: Scalars['BigInt'];
  /** ID of the delegation on L2. Null if it's not transferred */
  idOnL2?: Maybe<Scalars['String']>;
  /** ID of the delegation on L1. Null if it's not transferred */
  idOnL1?: Maybe<Scalars['String']>;
  delegatorId: Scalars['ID'];
  unreleasedRewardsPercent: Scalars['BigDecimal'];
  unreleasedReward: Scalars['BigDecimal'];
  totalRewards: Scalars['BigDecimal'];
  currentDelegationAmount: Scalars['BigDecimal'];
};

export type DelegatedStake_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  indexer?: InputMaybe<Scalars['String']>;
  indexer_not?: InputMaybe<Scalars['String']>;
  indexer_gt?: InputMaybe<Scalars['String']>;
  indexer_lt?: InputMaybe<Scalars['String']>;
  indexer_gte?: InputMaybe<Scalars['String']>;
  indexer_lte?: InputMaybe<Scalars['String']>;
  indexer_in?: InputMaybe<Array<Scalars['String']>>;
  indexer_not_in?: InputMaybe<Array<Scalars['String']>>;
  indexer_contains?: InputMaybe<Scalars['String']>;
  indexer_contains_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_contains?: InputMaybe<Scalars['String']>;
  indexer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  indexer_starts_with?: InputMaybe<Scalars['String']>;
  indexer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_starts_with?: InputMaybe<Scalars['String']>;
  indexer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_ends_with?: InputMaybe<Scalars['String']>;
  indexer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_ends_with?: InputMaybe<Scalars['String']>;
  indexer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_?: InputMaybe<Indexer_filter>;
  delegator?: InputMaybe<Scalars['String']>;
  delegator_not?: InputMaybe<Scalars['String']>;
  delegator_gt?: InputMaybe<Scalars['String']>;
  delegator_lt?: InputMaybe<Scalars['String']>;
  delegator_gte?: InputMaybe<Scalars['String']>;
  delegator_lte?: InputMaybe<Scalars['String']>;
  delegator_in?: InputMaybe<Array<Scalars['String']>>;
  delegator_not_in?: InputMaybe<Array<Scalars['String']>>;
  delegator_contains?: InputMaybe<Scalars['String']>;
  delegator_contains_nocase?: InputMaybe<Scalars['String']>;
  delegator_not_contains?: InputMaybe<Scalars['String']>;
  delegator_not_contains_nocase?: InputMaybe<Scalars['String']>;
  delegator_starts_with?: InputMaybe<Scalars['String']>;
  delegator_starts_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_not_starts_with?: InputMaybe<Scalars['String']>;
  delegator_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_ends_with?: InputMaybe<Scalars['String']>;
  delegator_ends_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_not_ends_with?: InputMaybe<Scalars['String']>;
  delegator_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_?: InputMaybe<Delegator_filter>;
  stakedTokens?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_not?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unstakedTokens?: InputMaybe<Scalars['BigInt']>;
  unstakedTokens_not?: InputMaybe<Scalars['BigInt']>;
  unstakedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  unstakedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  unstakedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  unstakedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  unstakedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unstakedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lockedTokens?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_not?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lockedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lockedUntil?: InputMaybe<Scalars['Int']>;
  lockedUntil_not?: InputMaybe<Scalars['Int']>;
  lockedUntil_gt?: InputMaybe<Scalars['Int']>;
  lockedUntil_lt?: InputMaybe<Scalars['Int']>;
  lockedUntil_gte?: InputMaybe<Scalars['Int']>;
  lockedUntil_lte?: InputMaybe<Scalars['Int']>;
  lockedUntil_in?: InputMaybe<Array<Scalars['Int']>>;
  lockedUntil_not_in?: InputMaybe<Array<Scalars['Int']>>;
  shareAmount?: InputMaybe<Scalars['BigInt']>;
  shareAmount_not?: InputMaybe<Scalars['BigInt']>;
  shareAmount_gt?: InputMaybe<Scalars['BigInt']>;
  shareAmount_lt?: InputMaybe<Scalars['BigInt']>;
  shareAmount_gte?: InputMaybe<Scalars['BigInt']>;
  shareAmount_lte?: InputMaybe<Scalars['BigInt']>;
  shareAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  shareAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  personalExchangeRate?: InputMaybe<Scalars['BigDecimal']>;
  personalExchangeRate_not?: InputMaybe<Scalars['BigDecimal']>;
  personalExchangeRate_gt?: InputMaybe<Scalars['BigDecimal']>;
  personalExchangeRate_lt?: InputMaybe<Scalars['BigDecimal']>;
  personalExchangeRate_gte?: InputMaybe<Scalars['BigDecimal']>;
  personalExchangeRate_lte?: InputMaybe<Scalars['BigDecimal']>;
  personalExchangeRate_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  personalExchangeRate_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  realizedRewards?: InputMaybe<Scalars['BigDecimal']>;
  realizedRewards_not?: InputMaybe<Scalars['BigDecimal']>;
  realizedRewards_gt?: InputMaybe<Scalars['BigDecimal']>;
  realizedRewards_lt?: InputMaybe<Scalars['BigDecimal']>;
  realizedRewards_gte?: InputMaybe<Scalars['BigDecimal']>;
  realizedRewards_lte?: InputMaybe<Scalars['BigDecimal']>;
  realizedRewards_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  realizedRewards_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  lastDelegatedAt?: InputMaybe<Scalars['Int']>;
  lastDelegatedAt_not?: InputMaybe<Scalars['Int']>;
  lastDelegatedAt_gt?: InputMaybe<Scalars['Int']>;
  lastDelegatedAt_lt?: InputMaybe<Scalars['Int']>;
  lastDelegatedAt_gte?: InputMaybe<Scalars['Int']>;
  lastDelegatedAt_lte?: InputMaybe<Scalars['Int']>;
  lastDelegatedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  lastDelegatedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  lastUndelegatedAt?: InputMaybe<Scalars['Int']>;
  lastUndelegatedAt_not?: InputMaybe<Scalars['Int']>;
  lastUndelegatedAt_gt?: InputMaybe<Scalars['Int']>;
  lastUndelegatedAt_lt?: InputMaybe<Scalars['Int']>;
  lastUndelegatedAt_gte?: InputMaybe<Scalars['Int']>;
  lastUndelegatedAt_lte?: InputMaybe<Scalars['Int']>;
  lastUndelegatedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  lastUndelegatedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transferredToL2?: InputMaybe<Scalars['Boolean']>;
  transferredToL2_not?: InputMaybe<Scalars['Boolean']>;
  transferredToL2_in?: InputMaybe<Array<Scalars['Boolean']>>;
  transferredToL2_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  transferredToL2At?: InputMaybe<Scalars['BigInt']>;
  transferredToL2At_not?: InputMaybe<Scalars['BigInt']>;
  transferredToL2At_gt?: InputMaybe<Scalars['BigInt']>;
  transferredToL2At_lt?: InputMaybe<Scalars['BigInt']>;
  transferredToL2At_gte?: InputMaybe<Scalars['BigInt']>;
  transferredToL2At_lte?: InputMaybe<Scalars['BigInt']>;
  transferredToL2At_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transferredToL2At_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transferredToL2AtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  transferredToL2AtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  transferredToL2AtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  transferredToL2AtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  transferredToL2AtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  transferredToL2AtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  transferredToL2AtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transferredToL2AtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transferredToL2AtTx?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_not?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_gt?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_lt?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_gte?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_lte?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_in?: InputMaybe<Array<Scalars['String']>>;
  transferredToL2AtTx_not_in?: InputMaybe<Array<Scalars['String']>>;
  transferredToL2AtTx_contains?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_contains_nocase?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_not_contains?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_starts_with?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_not_starts_with?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_ends_with?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_not_ends_with?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stakedTokensTransferredToL2?: InputMaybe<Scalars['BigInt']>;
  stakedTokensTransferredToL2_not?: InputMaybe<Scalars['BigInt']>;
  stakedTokensTransferredToL2_gt?: InputMaybe<Scalars['BigInt']>;
  stakedTokensTransferredToL2_lt?: InputMaybe<Scalars['BigInt']>;
  stakedTokensTransferredToL2_gte?: InputMaybe<Scalars['BigInt']>;
  stakedTokensTransferredToL2_lte?: InputMaybe<Scalars['BigInt']>;
  stakedTokensTransferredToL2_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakedTokensTransferredToL2_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  idOnL2?: InputMaybe<Scalars['String']>;
  idOnL2_not?: InputMaybe<Scalars['String']>;
  idOnL2_gt?: InputMaybe<Scalars['String']>;
  idOnL2_lt?: InputMaybe<Scalars['String']>;
  idOnL2_gte?: InputMaybe<Scalars['String']>;
  idOnL2_lte?: InputMaybe<Scalars['String']>;
  idOnL2_in?: InputMaybe<Array<Scalars['String']>>;
  idOnL2_not_in?: InputMaybe<Array<Scalars['String']>>;
  idOnL2_contains?: InputMaybe<Scalars['String']>;
  idOnL2_contains_nocase?: InputMaybe<Scalars['String']>;
  idOnL2_not_contains?: InputMaybe<Scalars['String']>;
  idOnL2_not_contains_nocase?: InputMaybe<Scalars['String']>;
  idOnL2_starts_with?: InputMaybe<Scalars['String']>;
  idOnL2_starts_with_nocase?: InputMaybe<Scalars['String']>;
  idOnL2_not_starts_with?: InputMaybe<Scalars['String']>;
  idOnL2_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  idOnL2_ends_with?: InputMaybe<Scalars['String']>;
  idOnL2_ends_with_nocase?: InputMaybe<Scalars['String']>;
  idOnL2_not_ends_with?: InputMaybe<Scalars['String']>;
  idOnL2_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  idOnL1?: InputMaybe<Scalars['String']>;
  idOnL1_not?: InputMaybe<Scalars['String']>;
  idOnL1_gt?: InputMaybe<Scalars['String']>;
  idOnL1_lt?: InputMaybe<Scalars['String']>;
  idOnL1_gte?: InputMaybe<Scalars['String']>;
  idOnL1_lte?: InputMaybe<Scalars['String']>;
  idOnL1_in?: InputMaybe<Array<Scalars['String']>>;
  idOnL1_not_in?: InputMaybe<Array<Scalars['String']>>;
  idOnL1_contains?: InputMaybe<Scalars['String']>;
  idOnL1_contains_nocase?: InputMaybe<Scalars['String']>;
  idOnL1_not_contains?: InputMaybe<Scalars['String']>;
  idOnL1_not_contains_nocase?: InputMaybe<Scalars['String']>;
  idOnL1_starts_with?: InputMaybe<Scalars['String']>;
  idOnL1_starts_with_nocase?: InputMaybe<Scalars['String']>;
  idOnL1_not_starts_with?: InputMaybe<Scalars['String']>;
  idOnL1_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  idOnL1_ends_with?: InputMaybe<Scalars['String']>;
  idOnL1_ends_with_nocase?: InputMaybe<Scalars['String']>;
  idOnL1_not_ends_with?: InputMaybe<Scalars['String']>;
  idOnL1_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  delegatorId?: InputMaybe<Scalars['ID']>;
  delegatorId_not?: InputMaybe<Scalars['ID']>;
  delegatorId_gt?: InputMaybe<Scalars['ID']>;
  delegatorId_lt?: InputMaybe<Scalars['ID']>;
  delegatorId_gte?: InputMaybe<Scalars['ID']>;
  delegatorId_lte?: InputMaybe<Scalars['ID']>;
  delegatorId_in?: InputMaybe<Array<Scalars['ID']>>;
  delegatorId_not_in?: InputMaybe<Array<Scalars['ID']>>;
  unreleasedRewardsPercent?: InputMaybe<Scalars['BigDecimal']>;
  unreleasedRewardsPercent_not?: InputMaybe<Scalars['BigDecimal']>;
  unreleasedRewardsPercent_gt?: InputMaybe<Scalars['BigDecimal']>;
  unreleasedRewardsPercent_lt?: InputMaybe<Scalars['BigDecimal']>;
  unreleasedRewardsPercent_gte?: InputMaybe<Scalars['BigDecimal']>;
  unreleasedRewardsPercent_lte?: InputMaybe<Scalars['BigDecimal']>;
  unreleasedRewardsPercent_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  unreleasedRewardsPercent_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  unreleasedReward?: InputMaybe<Scalars['BigDecimal']>;
  unreleasedReward_not?: InputMaybe<Scalars['BigDecimal']>;
  unreleasedReward_gt?: InputMaybe<Scalars['BigDecimal']>;
  unreleasedReward_lt?: InputMaybe<Scalars['BigDecimal']>;
  unreleasedReward_gte?: InputMaybe<Scalars['BigDecimal']>;
  unreleasedReward_lte?: InputMaybe<Scalars['BigDecimal']>;
  unreleasedReward_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  unreleasedReward_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalRewards?: InputMaybe<Scalars['BigDecimal']>;
  totalRewards_not?: InputMaybe<Scalars['BigDecimal']>;
  totalRewards_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalRewards_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalRewards_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalRewards_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalRewards_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalRewards_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  currentDelegationAmount?: InputMaybe<Scalars['BigDecimal']>;
  currentDelegationAmount_not?: InputMaybe<Scalars['BigDecimal']>;
  currentDelegationAmount_gt?: InputMaybe<Scalars['BigDecimal']>;
  currentDelegationAmount_lt?: InputMaybe<Scalars['BigDecimal']>;
  currentDelegationAmount_gte?: InputMaybe<Scalars['BigDecimal']>;
  currentDelegationAmount_lte?: InputMaybe<Scalars['BigDecimal']>;
  currentDelegationAmount_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  currentDelegationAmount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DelegatedStake_filter>>>;
  or?: InputMaybe<Array<InputMaybe<DelegatedStake_filter>>>;
};

export type DelegatedStake_orderBy =
  | 'id'
  | 'indexer'
  | 'indexer__id'
  | 'indexer__createdAt'
  | 'indexer__url'
  | 'indexer__geoHash'
  | 'indexer__defaultDisplayName'
  | 'indexer__stakedTokens'
  | 'indexer__allocatedTokens'
  | 'indexer__unstakedTokens'
  | 'indexer__lockedTokens'
  | 'indexer__tokensLockedUntil'
  | 'indexer__allocationCount'
  | 'indexer__totalAllocationCount'
  | 'indexer__queryFeesCollected'
  | 'indexer__queryFeeRebates'
  | 'indexer__rewardsEarned'
  | 'indexer__indexerIndexingRewards'
  | 'indexer__delegatorIndexingRewards'
  | 'indexer__indexerRewardsOwnGenerationRatio'
  | 'indexer__transferredToL2'
  | 'indexer__firstTransferredToL2At'
  | 'indexer__firstTransferredToL2AtBlockNumber'
  | 'indexer__firstTransferredToL2AtTx'
  | 'indexer__lastTransferredToL2At'
  | 'indexer__lastTransferredToL2AtBlockNumber'
  | 'indexer__lastTransferredToL2AtTx'
  | 'indexer__stakedTokensTransferredToL2'
  | 'indexer__idOnL2'
  | 'indexer__idOnL1'
  | 'indexer__delegatedCapacity'
  | 'indexer__tokenCapacity'
  | 'indexer__availableStake'
  | 'indexer__delegatedTokens'
  | 'indexer__ownStakeRatio'
  | 'indexer__delegatedStakeRatio'
  | 'indexer__delegatorShares'
  | 'indexer__delegationExchangeRate'
  | 'indexer__indexingRewardCut'
  | 'indexer__indexingRewardEffectiveCut'
  | 'indexer__overDelegationDilution'
  | 'indexer__delegatorQueryFees'
  | 'indexer__queryFeeCut'
  | 'indexer__queryFeeEffectiveCut'
  | 'indexer__delegatorParameterCooldown'
  | 'indexer__lastDelegationParameterUpdate'
  | 'indexer__forcedClosures'
  | 'indexer__totalReturn'
  | 'indexer__annualizedReturn'
  | 'indexer__stakingEfficiency'
  | 'indexer__notAllocatedTokens'
  | 'indexer__delegationRemaining'
  | 'indexer__indexerQueryFees'
  | 'indexer__delegatorsCount'
  | 'delegator'
  | 'delegator__id'
  | 'delegator__totalStakedTokens'
  | 'delegator__totalUnstakedTokens'
  | 'delegator__createdAt'
  | 'delegator__totalRealizedRewards'
  | 'delegator__stakesCount'
  | 'delegator__activeStakesCount'
  | 'delegator__defaultDisplayName'
  | 'delegator__unreleasedReward'
  | 'delegator__unreleasedPercent'
  | 'delegator__currentStaked'
  | 'delegator__totalRewards'
  | 'delegator__lastDelegatedAt'
  | 'delegator__lastUndelegatedAt'
  | 'stakedTokens'
  | 'unstakedTokens'
  | 'lockedTokens'
  | 'lockedUntil'
  | 'shareAmount'
  | 'personalExchangeRate'
  | 'realizedRewards'
  | 'createdAt'
  | 'lastDelegatedAt'
  | 'lastUndelegatedAt'
  | 'transferredToL2'
  | 'transferredToL2At'
  | 'transferredToL2AtBlockNumber'
  | 'transferredToL2AtTx'
  | 'stakedTokensTransferredToL2'
  | 'idOnL2'
  | 'idOnL1'
  | 'delegatorId'
  | 'unreleasedRewardsPercent'
  | 'unreleasedReward'
  | 'totalRewards'
  | 'currentDelegationAmount';

export type DelegationPoolHistoryEntity = {
  /** Concatenation of indexer address and blocknumber and maybe something more */
  id: Scalars['ID'];
  indexer: GraphAccount;
  stakedTokens: Scalars['BigInt'];
  delegatedTokens: Scalars['BigInt'];
  blockNumber: Scalars['Int'];
  timestamp: Scalars['Int'];
  epoch: Scalars['Int'];
};

export type DelegationPoolHistoryEntity_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  indexer?: InputMaybe<Scalars['String']>;
  indexer_not?: InputMaybe<Scalars['String']>;
  indexer_gt?: InputMaybe<Scalars['String']>;
  indexer_lt?: InputMaybe<Scalars['String']>;
  indexer_gte?: InputMaybe<Scalars['String']>;
  indexer_lte?: InputMaybe<Scalars['String']>;
  indexer_in?: InputMaybe<Array<Scalars['String']>>;
  indexer_not_in?: InputMaybe<Array<Scalars['String']>>;
  indexer_contains?: InputMaybe<Scalars['String']>;
  indexer_contains_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_contains?: InputMaybe<Scalars['String']>;
  indexer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  indexer_starts_with?: InputMaybe<Scalars['String']>;
  indexer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_starts_with?: InputMaybe<Scalars['String']>;
  indexer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_ends_with?: InputMaybe<Scalars['String']>;
  indexer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_ends_with?: InputMaybe<Scalars['String']>;
  indexer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_?: InputMaybe<GraphAccount_filter>;
  stakedTokens?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_not?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatedTokens?: InputMaybe<Scalars['BigInt']>;
  delegatedTokens_not?: InputMaybe<Scalars['BigInt']>;
  delegatedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  delegatedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  delegatedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  delegatedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  delegatedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  epoch?: InputMaybe<Scalars['Int']>;
  epoch_not?: InputMaybe<Scalars['Int']>;
  epoch_gt?: InputMaybe<Scalars['Int']>;
  epoch_lt?: InputMaybe<Scalars['Int']>;
  epoch_gte?: InputMaybe<Scalars['Int']>;
  epoch_lte?: InputMaybe<Scalars['Int']>;
  epoch_in?: InputMaybe<Array<Scalars['Int']>>;
  epoch_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DelegationPoolHistoryEntity_filter>>>;
  or?: InputMaybe<Array<InputMaybe<DelegationPoolHistoryEntity_filter>>>;
};

export type DelegationPoolHistoryEntity_orderBy =
  | 'id'
  | 'indexer'
  | 'indexer__id'
  | 'indexer__createdAt'
  | 'indexer__defaultDisplayName'
  | 'indexer__metadataHash'
  | 'indexer__balance'
  | 'indexer__balanceReceivedFromL1Signalling'
  | 'indexer__balanceReceivedFromL1Delegation'
  | 'indexer__curationApproval'
  | 'indexer__stakingApproval'
  | 'indexer__gnsApproval'
  | 'indexer__developerCreatedAt'
  | 'indexer__subgraphQueryFees'
  | 'stakedTokens'
  | 'delegatedTokens'
  | 'blockNumber'
  | 'timestamp'
  | 'epoch';

/**
 * Delegator with all their delegated stakes towards Indexers
 *
 */
export type Delegator = {
  /** Delegator address */
  id: Scalars['ID'];
  /** Graph account of the delegator */
  account: GraphAccount;
  /** Stakes of this delegator */
  stakes: Array<DelegatedStake>;
  /** CUMULATIVE staked tokens in DelegatorStakes of this Delegator */
  totalStakedTokens: Scalars['BigInt'];
  /** CUMULATIVE unstaked tokens in DelegatorStakes of this Delegator */
  totalUnstakedTokens: Scalars['BigInt'];
  /** Time created at */
  createdAt: Scalars['Int'];
  /** Total realized rewards on all delegated stakes. Realized rewards are added when undelegating and realizing a profit */
  totalRealizedRewards: Scalars['BigDecimal'];
  /** Total DelegatedStake entity count (Active and inactive) */
  stakesCount: Scalars['Int'];
  /** Active DelegatedStake entity count. Active means it still has GRT delegated */
  activeStakesCount: Scalars['Int'];
  /** Default display name is the current default name. Used for filtered queries */
  defaultDisplayName?: Maybe<Scalars['String']>;
  unreleasedReward: Scalars['BigDecimal'];
  unreleasedPercent: Scalars['BigDecimal'];
  currentStaked: Scalars['BigDecimal'];
  totalRewards: Scalars['BigDecimal'];
  /** Last time this delegator delegated */
  lastDelegatedAt?: Maybe<Scalars['Int']>;
  /** Last time this delegator undelegated */
  lastUndelegatedAt?: Maybe<Scalars['Int']>;
};


/**
 * Delegator with all their delegated stakes towards Indexers
 *
 */
export type DelegatorstakesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DelegatedStake_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DelegatedStake_filter>;
};

export type Delegator_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  account?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_?: InputMaybe<GraphAccount_filter>;
  stakes_?: InputMaybe<DelegatedStake_filter>;
  totalStakedTokens?: InputMaybe<Scalars['BigInt']>;
  totalStakedTokens_not?: InputMaybe<Scalars['BigInt']>;
  totalStakedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  totalStakedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  totalStakedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  totalStakedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  totalStakedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalStakedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnstakedTokens?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokens_not?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnstakedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalRealizedRewards?: InputMaybe<Scalars['BigDecimal']>;
  totalRealizedRewards_not?: InputMaybe<Scalars['BigDecimal']>;
  totalRealizedRewards_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalRealizedRewards_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalRealizedRewards_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalRealizedRewards_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalRealizedRewards_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalRealizedRewards_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  stakesCount?: InputMaybe<Scalars['Int']>;
  stakesCount_not?: InputMaybe<Scalars['Int']>;
  stakesCount_gt?: InputMaybe<Scalars['Int']>;
  stakesCount_lt?: InputMaybe<Scalars['Int']>;
  stakesCount_gte?: InputMaybe<Scalars['Int']>;
  stakesCount_lte?: InputMaybe<Scalars['Int']>;
  stakesCount_in?: InputMaybe<Array<Scalars['Int']>>;
  stakesCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  activeStakesCount?: InputMaybe<Scalars['Int']>;
  activeStakesCount_not?: InputMaybe<Scalars['Int']>;
  activeStakesCount_gt?: InputMaybe<Scalars['Int']>;
  activeStakesCount_lt?: InputMaybe<Scalars['Int']>;
  activeStakesCount_gte?: InputMaybe<Scalars['Int']>;
  activeStakesCount_lte?: InputMaybe<Scalars['Int']>;
  activeStakesCount_in?: InputMaybe<Array<Scalars['Int']>>;
  activeStakesCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  defaultDisplayName?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not?: InputMaybe<Scalars['String']>;
  defaultDisplayName_gt?: InputMaybe<Scalars['String']>;
  defaultDisplayName_lt?: InputMaybe<Scalars['String']>;
  defaultDisplayName_gte?: InputMaybe<Scalars['String']>;
  defaultDisplayName_lte?: InputMaybe<Scalars['String']>;
  defaultDisplayName_in?: InputMaybe<Array<Scalars['String']>>;
  defaultDisplayName_not_in?: InputMaybe<Array<Scalars['String']>>;
  defaultDisplayName_contains?: InputMaybe<Scalars['String']>;
  defaultDisplayName_contains_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_contains?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_starts_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_starts_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_ends_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_ends_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  unreleasedReward?: InputMaybe<Scalars['BigDecimal']>;
  unreleasedReward_not?: InputMaybe<Scalars['BigDecimal']>;
  unreleasedReward_gt?: InputMaybe<Scalars['BigDecimal']>;
  unreleasedReward_lt?: InputMaybe<Scalars['BigDecimal']>;
  unreleasedReward_gte?: InputMaybe<Scalars['BigDecimal']>;
  unreleasedReward_lte?: InputMaybe<Scalars['BigDecimal']>;
  unreleasedReward_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  unreleasedReward_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  unreleasedPercent?: InputMaybe<Scalars['BigDecimal']>;
  unreleasedPercent_not?: InputMaybe<Scalars['BigDecimal']>;
  unreleasedPercent_gt?: InputMaybe<Scalars['BigDecimal']>;
  unreleasedPercent_lt?: InputMaybe<Scalars['BigDecimal']>;
  unreleasedPercent_gte?: InputMaybe<Scalars['BigDecimal']>;
  unreleasedPercent_lte?: InputMaybe<Scalars['BigDecimal']>;
  unreleasedPercent_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  unreleasedPercent_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  currentStaked?: InputMaybe<Scalars['BigDecimal']>;
  currentStaked_not?: InputMaybe<Scalars['BigDecimal']>;
  currentStaked_gt?: InputMaybe<Scalars['BigDecimal']>;
  currentStaked_lt?: InputMaybe<Scalars['BigDecimal']>;
  currentStaked_gte?: InputMaybe<Scalars['BigDecimal']>;
  currentStaked_lte?: InputMaybe<Scalars['BigDecimal']>;
  currentStaked_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  currentStaked_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalRewards?: InputMaybe<Scalars['BigDecimal']>;
  totalRewards_not?: InputMaybe<Scalars['BigDecimal']>;
  totalRewards_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalRewards_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalRewards_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalRewards_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalRewards_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalRewards_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  lastDelegatedAt?: InputMaybe<Scalars['Int']>;
  lastDelegatedAt_not?: InputMaybe<Scalars['Int']>;
  lastDelegatedAt_gt?: InputMaybe<Scalars['Int']>;
  lastDelegatedAt_lt?: InputMaybe<Scalars['Int']>;
  lastDelegatedAt_gte?: InputMaybe<Scalars['Int']>;
  lastDelegatedAt_lte?: InputMaybe<Scalars['Int']>;
  lastDelegatedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  lastDelegatedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  lastUndelegatedAt?: InputMaybe<Scalars['Int']>;
  lastUndelegatedAt_not?: InputMaybe<Scalars['Int']>;
  lastUndelegatedAt_gt?: InputMaybe<Scalars['Int']>;
  lastUndelegatedAt_lt?: InputMaybe<Scalars['Int']>;
  lastUndelegatedAt_gte?: InputMaybe<Scalars['Int']>;
  lastUndelegatedAt_lte?: InputMaybe<Scalars['Int']>;
  lastUndelegatedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  lastUndelegatedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Delegator_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Delegator_filter>>>;
};

export type Delegator_orderBy =
  | 'id'
  | 'account'
  | 'account__id'
  | 'account__createdAt'
  | 'account__defaultDisplayName'
  | 'account__metadataHash'
  | 'account__balance'
  | 'account__balanceReceivedFromL1Signalling'
  | 'account__balanceReceivedFromL1Delegation'
  | 'account__curationApproval'
  | 'account__stakingApproval'
  | 'account__gnsApproval'
  | 'account__developerCreatedAt'
  | 'account__subgraphQueryFees'
  | 'stakes'
  | 'totalStakedTokens'
  | 'totalUnstakedTokens'
  | 'createdAt'
  | 'totalRealizedRewards'
  | 'stakesCount'
  | 'activeStakesCount'
  | 'defaultDisplayName'
  | 'unreleasedReward'
  | 'unreleasedPercent'
  | 'currentStaked'
  | 'totalRewards'
  | 'lastDelegatedAt'
  | 'lastUndelegatedAt';

/**
 * Dispute of a query. Includes single query, conflicting attestation, and indexing disputes
 *
 */
export type Dispute = {
  /** Dispute ID */
  id: Scalars['ID'];
  /** Subgraph deployment being disputed */
  subgraphDeployment: SubgraphDeployment;
  /** Fisherman address */
  fisherman: GraphAccount;
  /** Fisherman deposit */
  deposit: Scalars['BigInt'];
  /** Time dispute was created */
  createdAt: Scalars['Int'];
  /** Time dispute was closed at */
  closedAt: Scalars['Int'];
  /** Status of the dispute. Accepted means the Indexer was slashed */
  status: DisputeStatus;
  /** Total amount of tokens slashed on the dispute */
  tokensSlashed: Scalars['BigDecimal'];
  /** Amount of the slashed tokens that was burned */
  tokensBurned: Scalars['BigDecimal'];
  /** Amount of the slashed tokens that was payed as reward to the fisherman */
  tokensRewarded: Scalars['BigInt'];
  /** Type of dispute */
  type: DisputeType;
  /** Indexer disputed */
  indexer: GraphAccount;
  /** Attestation. Only for single query and conflicting attestations */
  attestation?: Maybe<Attestation>;
  /** Linked dispute of other Indexer. Only for conflicting attestation */
  linkedDispute?: Maybe<Dispute>;
  /** Allocation ID. Only for Indexing Disputes */
  allocation?: Maybe<Allocation>;
};

export type DisputeStatus =
  | 'Undecided'
  | 'Accepted'
  | 'Rejected'
  | 'Draw';

export type DisputeType =
  | 'SingleQuery'
  | 'Conflicting'
  | 'Indexing';

export type Dispute_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  subgraphDeployment?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not?: InputMaybe<Scalars['String']>;
  subgraphDeployment_gt?: InputMaybe<Scalars['String']>;
  subgraphDeployment_lt?: InputMaybe<Scalars['String']>;
  subgraphDeployment_gte?: InputMaybe<Scalars['String']>;
  subgraphDeployment_lte?: InputMaybe<Scalars['String']>;
  subgraphDeployment_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphDeployment_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphDeployment_contains?: InputMaybe<Scalars['String']>;
  subgraphDeployment_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_contains?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_starts_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_ends_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_?: InputMaybe<SubgraphDeployment_filter>;
  fisherman?: InputMaybe<Scalars['String']>;
  fisherman_not?: InputMaybe<Scalars['String']>;
  fisherman_gt?: InputMaybe<Scalars['String']>;
  fisherman_lt?: InputMaybe<Scalars['String']>;
  fisherman_gte?: InputMaybe<Scalars['String']>;
  fisherman_lte?: InputMaybe<Scalars['String']>;
  fisherman_in?: InputMaybe<Array<Scalars['String']>>;
  fisherman_not_in?: InputMaybe<Array<Scalars['String']>>;
  fisherman_contains?: InputMaybe<Scalars['String']>;
  fisherman_contains_nocase?: InputMaybe<Scalars['String']>;
  fisherman_not_contains?: InputMaybe<Scalars['String']>;
  fisherman_not_contains_nocase?: InputMaybe<Scalars['String']>;
  fisherman_starts_with?: InputMaybe<Scalars['String']>;
  fisherman_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fisherman_not_starts_with?: InputMaybe<Scalars['String']>;
  fisherman_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fisherman_ends_with?: InputMaybe<Scalars['String']>;
  fisherman_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fisherman_not_ends_with?: InputMaybe<Scalars['String']>;
  fisherman_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fisherman_?: InputMaybe<GraphAccount_filter>;
  deposit?: InputMaybe<Scalars['BigInt']>;
  deposit_not?: InputMaybe<Scalars['BigInt']>;
  deposit_gt?: InputMaybe<Scalars['BigInt']>;
  deposit_lt?: InputMaybe<Scalars['BigInt']>;
  deposit_gte?: InputMaybe<Scalars['BigInt']>;
  deposit_lte?: InputMaybe<Scalars['BigInt']>;
  deposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  closedAt?: InputMaybe<Scalars['Int']>;
  closedAt_not?: InputMaybe<Scalars['Int']>;
  closedAt_gt?: InputMaybe<Scalars['Int']>;
  closedAt_lt?: InputMaybe<Scalars['Int']>;
  closedAt_gte?: InputMaybe<Scalars['Int']>;
  closedAt_lte?: InputMaybe<Scalars['Int']>;
  closedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  closedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  status?: InputMaybe<DisputeStatus>;
  status_not?: InputMaybe<DisputeStatus>;
  status_in?: InputMaybe<Array<DisputeStatus>>;
  status_not_in?: InputMaybe<Array<DisputeStatus>>;
  tokensSlashed?: InputMaybe<Scalars['BigDecimal']>;
  tokensSlashed_not?: InputMaybe<Scalars['BigDecimal']>;
  tokensSlashed_gt?: InputMaybe<Scalars['BigDecimal']>;
  tokensSlashed_lt?: InputMaybe<Scalars['BigDecimal']>;
  tokensSlashed_gte?: InputMaybe<Scalars['BigDecimal']>;
  tokensSlashed_lte?: InputMaybe<Scalars['BigDecimal']>;
  tokensSlashed_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tokensSlashed_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tokensBurned?: InputMaybe<Scalars['BigDecimal']>;
  tokensBurned_not?: InputMaybe<Scalars['BigDecimal']>;
  tokensBurned_gt?: InputMaybe<Scalars['BigDecimal']>;
  tokensBurned_lt?: InputMaybe<Scalars['BigDecimal']>;
  tokensBurned_gte?: InputMaybe<Scalars['BigDecimal']>;
  tokensBurned_lte?: InputMaybe<Scalars['BigDecimal']>;
  tokensBurned_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tokensBurned_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tokensRewarded?: InputMaybe<Scalars['BigInt']>;
  tokensRewarded_not?: InputMaybe<Scalars['BigInt']>;
  tokensRewarded_gt?: InputMaybe<Scalars['BigInt']>;
  tokensRewarded_lt?: InputMaybe<Scalars['BigInt']>;
  tokensRewarded_gte?: InputMaybe<Scalars['BigInt']>;
  tokensRewarded_lte?: InputMaybe<Scalars['BigInt']>;
  tokensRewarded_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokensRewarded_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  type?: InputMaybe<DisputeType>;
  type_not?: InputMaybe<DisputeType>;
  type_in?: InputMaybe<Array<DisputeType>>;
  type_not_in?: InputMaybe<Array<DisputeType>>;
  indexer?: InputMaybe<Scalars['String']>;
  indexer_not?: InputMaybe<Scalars['String']>;
  indexer_gt?: InputMaybe<Scalars['String']>;
  indexer_lt?: InputMaybe<Scalars['String']>;
  indexer_gte?: InputMaybe<Scalars['String']>;
  indexer_lte?: InputMaybe<Scalars['String']>;
  indexer_in?: InputMaybe<Array<Scalars['String']>>;
  indexer_not_in?: InputMaybe<Array<Scalars['String']>>;
  indexer_contains?: InputMaybe<Scalars['String']>;
  indexer_contains_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_contains?: InputMaybe<Scalars['String']>;
  indexer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  indexer_starts_with?: InputMaybe<Scalars['String']>;
  indexer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_starts_with?: InputMaybe<Scalars['String']>;
  indexer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_ends_with?: InputMaybe<Scalars['String']>;
  indexer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_ends_with?: InputMaybe<Scalars['String']>;
  indexer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_?: InputMaybe<GraphAccount_filter>;
  attestation?: InputMaybe<Scalars['String']>;
  attestation_not?: InputMaybe<Scalars['String']>;
  attestation_gt?: InputMaybe<Scalars['String']>;
  attestation_lt?: InputMaybe<Scalars['String']>;
  attestation_gte?: InputMaybe<Scalars['String']>;
  attestation_lte?: InputMaybe<Scalars['String']>;
  attestation_in?: InputMaybe<Array<Scalars['String']>>;
  attestation_not_in?: InputMaybe<Array<Scalars['String']>>;
  attestation_contains?: InputMaybe<Scalars['String']>;
  attestation_contains_nocase?: InputMaybe<Scalars['String']>;
  attestation_not_contains?: InputMaybe<Scalars['String']>;
  attestation_not_contains_nocase?: InputMaybe<Scalars['String']>;
  attestation_starts_with?: InputMaybe<Scalars['String']>;
  attestation_starts_with_nocase?: InputMaybe<Scalars['String']>;
  attestation_not_starts_with?: InputMaybe<Scalars['String']>;
  attestation_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  attestation_ends_with?: InputMaybe<Scalars['String']>;
  attestation_ends_with_nocase?: InputMaybe<Scalars['String']>;
  attestation_not_ends_with?: InputMaybe<Scalars['String']>;
  attestation_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  attestation_?: InputMaybe<Attestation_filter>;
  linkedDispute?: InputMaybe<Scalars['String']>;
  linkedDispute_not?: InputMaybe<Scalars['String']>;
  linkedDispute_gt?: InputMaybe<Scalars['String']>;
  linkedDispute_lt?: InputMaybe<Scalars['String']>;
  linkedDispute_gte?: InputMaybe<Scalars['String']>;
  linkedDispute_lte?: InputMaybe<Scalars['String']>;
  linkedDispute_in?: InputMaybe<Array<Scalars['String']>>;
  linkedDispute_not_in?: InputMaybe<Array<Scalars['String']>>;
  linkedDispute_contains?: InputMaybe<Scalars['String']>;
  linkedDispute_contains_nocase?: InputMaybe<Scalars['String']>;
  linkedDispute_not_contains?: InputMaybe<Scalars['String']>;
  linkedDispute_not_contains_nocase?: InputMaybe<Scalars['String']>;
  linkedDispute_starts_with?: InputMaybe<Scalars['String']>;
  linkedDispute_starts_with_nocase?: InputMaybe<Scalars['String']>;
  linkedDispute_not_starts_with?: InputMaybe<Scalars['String']>;
  linkedDispute_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  linkedDispute_ends_with?: InputMaybe<Scalars['String']>;
  linkedDispute_ends_with_nocase?: InputMaybe<Scalars['String']>;
  linkedDispute_not_ends_with?: InputMaybe<Scalars['String']>;
  linkedDispute_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  linkedDispute_?: InputMaybe<Dispute_filter>;
  allocation?: InputMaybe<Scalars['String']>;
  allocation_not?: InputMaybe<Scalars['String']>;
  allocation_gt?: InputMaybe<Scalars['String']>;
  allocation_lt?: InputMaybe<Scalars['String']>;
  allocation_gte?: InputMaybe<Scalars['String']>;
  allocation_lte?: InputMaybe<Scalars['String']>;
  allocation_in?: InputMaybe<Array<Scalars['String']>>;
  allocation_not_in?: InputMaybe<Array<Scalars['String']>>;
  allocation_contains?: InputMaybe<Scalars['String']>;
  allocation_contains_nocase?: InputMaybe<Scalars['String']>;
  allocation_not_contains?: InputMaybe<Scalars['String']>;
  allocation_not_contains_nocase?: InputMaybe<Scalars['String']>;
  allocation_starts_with?: InputMaybe<Scalars['String']>;
  allocation_starts_with_nocase?: InputMaybe<Scalars['String']>;
  allocation_not_starts_with?: InputMaybe<Scalars['String']>;
  allocation_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  allocation_ends_with?: InputMaybe<Scalars['String']>;
  allocation_ends_with_nocase?: InputMaybe<Scalars['String']>;
  allocation_not_ends_with?: InputMaybe<Scalars['String']>;
  allocation_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  allocation_?: InputMaybe<Allocation_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Dispute_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Dispute_filter>>>;
};

export type Dispute_orderBy =
  | 'id'
  | 'subgraphDeployment'
  | 'subgraphDeployment__id'
  | 'subgraphDeployment__ipfsHash'
  | 'subgraphDeployment__createdAt'
  | 'subgraphDeployment__deniedAt'
  | 'subgraphDeployment__originalName'
  | 'subgraphDeployment__stakedTokens'
  | 'subgraphDeployment__indexingRewardAmount'
  | 'subgraphDeployment__indexingIndexerRewardAmount'
  | 'subgraphDeployment__indexingDelegatorRewardAmount'
  | 'subgraphDeployment__queryFeesAmount'
  | 'subgraphDeployment__queryFeeRebates'
  | 'subgraphDeployment__curatorFeeRewards'
  | 'subgraphDeployment__signalledTokens'
  | 'subgraphDeployment__unsignalledTokens'
  | 'subgraphDeployment__signalAmount'
  | 'subgraphDeployment__pricePerShare'
  | 'subgraphDeployment__reserveRatio'
  | 'subgraphDeployment__subgraphCount'
  | 'subgraphDeployment__activeSubgraphCount'
  | 'subgraphDeployment__deprecatedSubgraphCount'
  | 'subgraphDeployment__transferredToL2'
  | 'subgraphDeployment__transferredToL2At'
  | 'subgraphDeployment__transferredToL2AtBlockNumber'
  | 'subgraphDeployment__transferredToL2AtTx'
  | 'subgraphDeployment__signalledTokensSentToL2'
  | 'subgraphDeployment__signalledTokensReceivedOnL2'
  | 'subgraphDeployment__currentSignalCount'
  | 'subgraphDeployment__indexersCount'
  | 'subgraphDeployment__allocationsCount'
  | 'subgraphDeployment__rewardsProportion'
  | 'fisherman'
  | 'fisherman__id'
  | 'fisherman__createdAt'
  | 'fisherman__defaultDisplayName'
  | 'fisherman__metadataHash'
  | 'fisherman__balance'
  | 'fisherman__balanceReceivedFromL1Signalling'
  | 'fisherman__balanceReceivedFromL1Delegation'
  | 'fisherman__curationApproval'
  | 'fisherman__stakingApproval'
  | 'fisherman__gnsApproval'
  | 'fisherman__developerCreatedAt'
  | 'fisherman__subgraphQueryFees'
  | 'deposit'
  | 'createdAt'
  | 'closedAt'
  | 'status'
  | 'tokensSlashed'
  | 'tokensBurned'
  | 'tokensRewarded'
  | 'type'
  | 'indexer'
  | 'indexer__id'
  | 'indexer__createdAt'
  | 'indexer__defaultDisplayName'
  | 'indexer__metadataHash'
  | 'indexer__balance'
  | 'indexer__balanceReceivedFromL1Signalling'
  | 'indexer__balanceReceivedFromL1Delegation'
  | 'indexer__curationApproval'
  | 'indexer__stakingApproval'
  | 'indexer__gnsApproval'
  | 'indexer__developerCreatedAt'
  | 'indexer__subgraphQueryFees'
  | 'attestation'
  | 'attestation__id'
  | 'attestation__requestCID'
  | 'attestation__responseCID'
  | 'attestation__gasUsed'
  | 'attestation__responseNumBytes'
  | 'attestation__v'
  | 'attestation__r'
  | 'attestation__s'
  | 'linkedDispute'
  | 'linkedDispute__id'
  | 'linkedDispute__deposit'
  | 'linkedDispute__createdAt'
  | 'linkedDispute__closedAt'
  | 'linkedDispute__status'
  | 'linkedDispute__tokensSlashed'
  | 'linkedDispute__tokensBurned'
  | 'linkedDispute__tokensRewarded'
  | 'linkedDispute__type'
  | 'allocation'
  | 'allocation__id'
  | 'allocation__creator'
  | 'allocation__allocatedTokens'
  | 'allocation__effectiveAllocation'
  | 'allocation__createdAtEpoch'
  | 'allocation__createdAtBlockHash'
  | 'allocation__createdAtBlockNumber'
  | 'allocation__closedAtEpoch'
  | 'allocation__closedAtBlockHash'
  | 'allocation__closedAtBlockNumber'
  | 'allocation__queryFeesCollected'
  | 'allocation__queryFeeRebates'
  | 'allocation__distributedRebates'
  | 'allocation__curatorRewards'
  | 'allocation__indexingRewards'
  | 'allocation__indexingIndexerRewards'
  | 'allocation__indexingDelegatorRewards'
  | 'allocation__delegationFees'
  | 'allocation__status'
  | 'allocation__createdAt'
  | 'allocation__closedAt'
  | 'allocation__poi'
  | 'allocation__indexingRewardCutAtStart'
  | 'allocation__indexingRewardEffectiveCutAtStart'
  | 'allocation__queryFeeCutAtStart'
  | 'allocation__queryFeeEffectiveCutAtStart'
  | 'allocation__indexingRewardCutAtClose'
  | 'allocation__indexingRewardEffectiveCutAtClose'
  | 'allocation__queryFeeCutAtClose'
  | 'allocation__queryFeeEffectiveCutAtClose'
  | 'allocation__totalReturn'
  | 'allocation__annualizedReturn'
  | 'allocation__statusInt'
  | 'allocation__totalDelegatedTokensAtClose';

/**
 * Epoch aggregate data for network statistics on signaling, rewards, and query fees
 *
 */
export type Epoch = {
  /** Epoch number */
  id: Scalars['ID'];
  /** Start block of the epoch */
  startBlock: Scalars['Int'];
  /** End block of the epoch */
  endBlock: Scalars['Int'];
  /** Signaled tokens during this epoch */
  signalledTokens: Scalars['BigInt'];
  /** Stake deposited during this epoch */
  stakeDeposited: Scalars['BigInt'];
  /** Total amount of query fees generated during this epoch (Includes everything) */
  totalQueryFees: Scalars['BigInt'];
  /** Amount of query fees generated that were burnt by the 1% protocol tax during this epoch */
  taxedQueryFees: Scalars['BigInt'];
  /** Amount of query fees generated for indexers during this epoch */
  queryFeesCollected: Scalars['BigInt'];
  /** Amount of query fees generated that are going to curators during this epoch */
  curatorQueryFees: Scalars['BigInt'];
  /** Rebate amount claimed from the protocol through rebates mechanism during this epoch */
  queryFeeRebates: Scalars['BigInt'];
  /** Total indexing rewards earned in this epoch. Includes both delegator and indexer rewards */
  totalRewards: Scalars['BigInt'];
  /** Total indexing rewards earned in this epoch by indexers */
  totalIndexerRewards: Scalars['BigInt'];
  /** Total indexing rewards earned in this epoch by delegators */
  totalDelegatorRewards: Scalars['BigInt'];
};

export type Epoch_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  startBlock?: InputMaybe<Scalars['Int']>;
  startBlock_not?: InputMaybe<Scalars['Int']>;
  startBlock_gt?: InputMaybe<Scalars['Int']>;
  startBlock_lt?: InputMaybe<Scalars['Int']>;
  startBlock_gte?: InputMaybe<Scalars['Int']>;
  startBlock_lte?: InputMaybe<Scalars['Int']>;
  startBlock_in?: InputMaybe<Array<Scalars['Int']>>;
  startBlock_not_in?: InputMaybe<Array<Scalars['Int']>>;
  endBlock?: InputMaybe<Scalars['Int']>;
  endBlock_not?: InputMaybe<Scalars['Int']>;
  endBlock_gt?: InputMaybe<Scalars['Int']>;
  endBlock_lt?: InputMaybe<Scalars['Int']>;
  endBlock_gte?: InputMaybe<Scalars['Int']>;
  endBlock_lte?: InputMaybe<Scalars['Int']>;
  endBlock_in?: InputMaybe<Array<Scalars['Int']>>;
  endBlock_not_in?: InputMaybe<Array<Scalars['Int']>>;
  signalledTokens?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakeDeposited?: InputMaybe<Scalars['BigInt']>;
  stakeDeposited_not?: InputMaybe<Scalars['BigInt']>;
  stakeDeposited_gt?: InputMaybe<Scalars['BigInt']>;
  stakeDeposited_lt?: InputMaybe<Scalars['BigInt']>;
  stakeDeposited_gte?: InputMaybe<Scalars['BigInt']>;
  stakeDeposited_lte?: InputMaybe<Scalars['BigInt']>;
  stakeDeposited_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakeDeposited_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalQueryFees?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_not?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_gt?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_lt?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_gte?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_lte?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  taxedQueryFees?: InputMaybe<Scalars['BigInt']>;
  taxedQueryFees_not?: InputMaybe<Scalars['BigInt']>;
  taxedQueryFees_gt?: InputMaybe<Scalars['BigInt']>;
  taxedQueryFees_lt?: InputMaybe<Scalars['BigInt']>;
  taxedQueryFees_gte?: InputMaybe<Scalars['BigInt']>;
  taxedQueryFees_lte?: InputMaybe<Scalars['BigInt']>;
  taxedQueryFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  taxedQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeesCollected?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_not?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_gt?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_lt?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_gte?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_lte?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeesCollected_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  curatorQueryFees?: InputMaybe<Scalars['BigInt']>;
  curatorQueryFees_not?: InputMaybe<Scalars['BigInt']>;
  curatorQueryFees_gt?: InputMaybe<Scalars['BigInt']>;
  curatorQueryFees_lt?: InputMaybe<Scalars['BigInt']>;
  curatorQueryFees_gte?: InputMaybe<Scalars['BigInt']>;
  curatorQueryFees_lte?: InputMaybe<Scalars['BigInt']>;
  curatorQueryFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  curatorQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeeRebates?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_not?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_gt?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_lt?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_gte?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_lte?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeeRebates_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalRewards?: InputMaybe<Scalars['BigInt']>;
  totalRewards_not?: InputMaybe<Scalars['BigInt']>;
  totalRewards_gt?: InputMaybe<Scalars['BigInt']>;
  totalRewards_lt?: InputMaybe<Scalars['BigInt']>;
  totalRewards_gte?: InputMaybe<Scalars['BigInt']>;
  totalRewards_lte?: InputMaybe<Scalars['BigInt']>;
  totalRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexerRewards?: InputMaybe<Scalars['BigInt']>;
  totalIndexerRewards_not?: InputMaybe<Scalars['BigInt']>;
  totalIndexerRewards_gt?: InputMaybe<Scalars['BigInt']>;
  totalIndexerRewards_lt?: InputMaybe<Scalars['BigInt']>;
  totalIndexerRewards_gte?: InputMaybe<Scalars['BigInt']>;
  totalIndexerRewards_lte?: InputMaybe<Scalars['BigInt']>;
  totalIndexerRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexerRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDelegatorRewards?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorRewards_not?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorRewards_gt?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorRewards_lt?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorRewards_gte?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorRewards_lte?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDelegatorRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Epoch_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Epoch_filter>>>;
};

export type Epoch_orderBy =
  | 'id'
  | 'startBlock'
  | 'endBlock'
  | 'signalledTokens'
  | 'stakeDeposited'
  | 'totalQueryFees'
  | 'taxedQueryFees'
  | 'queryFeesCollected'
  | 'curatorQueryFees'
  | 'queryFeeRebates'
  | 'totalRewards'
  | 'totalIndexerRewards'
  | 'totalDelegatorRewards';

/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 *
 */
export type GraphAccount = {
  /** Graph account ID */
  id: Scalars['ID'];
  /** All names this graph account has claimed from all name systems */
  names: Array<GraphAccountName>;
  /** Default name the graph account has chosen */
  defaultName?: Maybe<GraphAccountName>;
  /** Time the account was created */
  createdAt: Scalars['Int'];
  /** Default display name is the current default name. Used for filtered queries in the explorer */
  defaultDisplayName?: Maybe<Scalars['String']>;
  /** IPFS hash with account metadata details */
  metadataHash?: Maybe<Scalars['Bytes']>;
  metadata?: Maybe<AccountMetadata>;
  /** Operator of other Graph Accounts */
  operatorOf: Array<GraphAccount>;
  /** Operators of this Graph Accounts */
  operators: Array<GraphAccount>;
  /** Graph token balance */
  balance: Scalars['BigInt'];
  /** Balance received due to failed signal transfer from L1 */
  balanceReceivedFromL1Signalling: Scalars['BigInt'];
  /** Balance received due to failed delegation transfer from L1 */
  balanceReceivedFromL1Delegation: Scalars['BigInt'];
  /** Amount this account has approved staking to transfer their GRT */
  curationApproval: Scalars['BigInt'];
  /** Amount this account has approved curation to transfer their GRT */
  stakingApproval: Scalars['BigInt'];
  /** Amount this account has approved the GNS to transfer their GRT */
  gnsApproval: Scalars['BigInt'];
  /** Subgraphs the graph account owns */
  subgraphs: Array<Subgraph>;
  /** Time that this graph account became a developer */
  developerCreatedAt?: Maybe<Scalars['Int']>;
  /** NOT IMPLEMENTED - Total query fees the subgraphs created by this account have accumulated in GRT */
  subgraphQueryFees: Scalars['BigInt'];
  /** Disputes this graph account has created */
  createdDisputes: Array<Dispute>;
  /** Disputes against this graph account */
  disputesAgainst: Array<Dispute>;
  /** Curator fields for this GraphAccount. Null if never curated */
  curator?: Maybe<Curator>;
  /** Indexer fields for this GraphAccount. Null if never indexed */
  indexer?: Maybe<Indexer>;
  /** Delegator fields for this GraphAccount. Null if never delegated */
  delegator?: Maybe<Delegator>;
  /** Name signal transactions created by this GraphAccount */
  nameSignalTransactions: Array<NameSignalTransaction>;
  bridgeWithdrawalTransactions: Array<BridgeWithdrawalTransaction>;
  bridgeDepositTransactions: Array<BridgeDepositTransaction>;
  tokenLockWallets: Array<TokenLockWallet>;
};


/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 *
 */
export type GraphAccountnamesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GraphAccountName_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GraphAccountName_filter>;
};


/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 *
 */
export type GraphAccountoperatorOfArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GraphAccount_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GraphAccount_filter>;
};


/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 *
 */
export type GraphAccountoperatorsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GraphAccount_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GraphAccount_filter>;
};


/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 *
 */
export type GraphAccountsubgraphsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Subgraph_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Subgraph_filter>;
};


/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 *
 */
export type GraphAccountcreatedDisputesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Dispute_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Dispute_filter>;
};


/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 *
 */
export type GraphAccountdisputesAgainstArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Dispute_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Dispute_filter>;
};


/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 *
 */
export type GraphAccountnameSignalTransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NameSignalTransaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NameSignalTransaction_filter>;
};


/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 *
 */
export type GraphAccountbridgeWithdrawalTransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BridgeWithdrawalTransaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BridgeWithdrawalTransaction_filter>;
};


/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 *
 */
export type GraphAccountbridgeDepositTransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BridgeDepositTransaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BridgeDepositTransaction_filter>;
};


/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 *
 */
export type GraphAccounttokenLockWalletsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenLockWallet_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenLockWallet_filter>;
};

/**
 * A name chosen by a Graph Account from a Name System such as ENS. This allows Graph Accounts to be
 * recognized by name, rather than just an Ethereum address
 *
 */
export type GraphAccountName = {
  /** Name system concatenated with the unique ID of the name system */
  id: Scalars['ID'];
  /** Name system for this name */
  nameSystem: NameSystem;
  /** Name from the system */
  name: Scalars['String'];
  /** The graph account that owned the name when it was linked in the graph network */
  graphAccount?: Maybe<GraphAccount>;
};

export type GraphAccountName_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  nameSystem?: InputMaybe<NameSystem>;
  nameSystem_not?: InputMaybe<NameSystem>;
  nameSystem_in?: InputMaybe<Array<NameSystem>>;
  nameSystem_not_in?: InputMaybe<Array<NameSystem>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  graphAccount?: InputMaybe<Scalars['String']>;
  graphAccount_not?: InputMaybe<Scalars['String']>;
  graphAccount_gt?: InputMaybe<Scalars['String']>;
  graphAccount_lt?: InputMaybe<Scalars['String']>;
  graphAccount_gte?: InputMaybe<Scalars['String']>;
  graphAccount_lte?: InputMaybe<Scalars['String']>;
  graphAccount_in?: InputMaybe<Array<Scalars['String']>>;
  graphAccount_not_in?: InputMaybe<Array<Scalars['String']>>;
  graphAccount_contains?: InputMaybe<Scalars['String']>;
  graphAccount_contains_nocase?: InputMaybe<Scalars['String']>;
  graphAccount_not_contains?: InputMaybe<Scalars['String']>;
  graphAccount_not_contains_nocase?: InputMaybe<Scalars['String']>;
  graphAccount_starts_with?: InputMaybe<Scalars['String']>;
  graphAccount_starts_with_nocase?: InputMaybe<Scalars['String']>;
  graphAccount_not_starts_with?: InputMaybe<Scalars['String']>;
  graphAccount_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  graphAccount_ends_with?: InputMaybe<Scalars['String']>;
  graphAccount_ends_with_nocase?: InputMaybe<Scalars['String']>;
  graphAccount_not_ends_with?: InputMaybe<Scalars['String']>;
  graphAccount_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  graphAccount_?: InputMaybe<GraphAccount_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<GraphAccountName_filter>>>;
  or?: InputMaybe<Array<InputMaybe<GraphAccountName_filter>>>;
};

export type GraphAccountName_orderBy =
  | 'id'
  | 'nameSystem'
  | 'name'
  | 'graphAccount'
  | 'graphAccount__id'
  | 'graphAccount__createdAt'
  | 'graphAccount__defaultDisplayName'
  | 'graphAccount__metadataHash'
  | 'graphAccount__balance'
  | 'graphAccount__balanceReceivedFromL1Signalling'
  | 'graphAccount__balanceReceivedFromL1Delegation'
  | 'graphAccount__curationApproval'
  | 'graphAccount__stakingApproval'
  | 'graphAccount__gnsApproval'
  | 'graphAccount__developerCreatedAt'
  | 'graphAccount__subgraphQueryFees';

export type GraphAccount_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  names_?: InputMaybe<GraphAccountName_filter>;
  defaultName?: InputMaybe<Scalars['String']>;
  defaultName_not?: InputMaybe<Scalars['String']>;
  defaultName_gt?: InputMaybe<Scalars['String']>;
  defaultName_lt?: InputMaybe<Scalars['String']>;
  defaultName_gte?: InputMaybe<Scalars['String']>;
  defaultName_lte?: InputMaybe<Scalars['String']>;
  defaultName_in?: InputMaybe<Array<Scalars['String']>>;
  defaultName_not_in?: InputMaybe<Array<Scalars['String']>>;
  defaultName_contains?: InputMaybe<Scalars['String']>;
  defaultName_contains_nocase?: InputMaybe<Scalars['String']>;
  defaultName_not_contains?: InputMaybe<Scalars['String']>;
  defaultName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  defaultName_starts_with?: InputMaybe<Scalars['String']>;
  defaultName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  defaultName_not_starts_with?: InputMaybe<Scalars['String']>;
  defaultName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  defaultName_ends_with?: InputMaybe<Scalars['String']>;
  defaultName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  defaultName_not_ends_with?: InputMaybe<Scalars['String']>;
  defaultName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  defaultName_?: InputMaybe<GraphAccountName_filter>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  defaultDisplayName?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not?: InputMaybe<Scalars['String']>;
  defaultDisplayName_gt?: InputMaybe<Scalars['String']>;
  defaultDisplayName_lt?: InputMaybe<Scalars['String']>;
  defaultDisplayName_gte?: InputMaybe<Scalars['String']>;
  defaultDisplayName_lte?: InputMaybe<Scalars['String']>;
  defaultDisplayName_in?: InputMaybe<Array<Scalars['String']>>;
  defaultDisplayName_not_in?: InputMaybe<Array<Scalars['String']>>;
  defaultDisplayName_contains?: InputMaybe<Scalars['String']>;
  defaultDisplayName_contains_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_contains?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_starts_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_starts_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_ends_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_ends_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metadataHash?: InputMaybe<Scalars['Bytes']>;
  metadataHash_not?: InputMaybe<Scalars['Bytes']>;
  metadataHash_gt?: InputMaybe<Scalars['Bytes']>;
  metadataHash_lt?: InputMaybe<Scalars['Bytes']>;
  metadataHash_gte?: InputMaybe<Scalars['Bytes']>;
  metadataHash_lte?: InputMaybe<Scalars['Bytes']>;
  metadataHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  metadataHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  metadataHash_contains?: InputMaybe<Scalars['Bytes']>;
  metadataHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  metadata?: InputMaybe<Scalars['String']>;
  metadata_not?: InputMaybe<Scalars['String']>;
  metadata_gt?: InputMaybe<Scalars['String']>;
  metadata_lt?: InputMaybe<Scalars['String']>;
  metadata_gte?: InputMaybe<Scalars['String']>;
  metadata_lte?: InputMaybe<Scalars['String']>;
  metadata_in?: InputMaybe<Array<Scalars['String']>>;
  metadata_not_in?: InputMaybe<Array<Scalars['String']>>;
  metadata_contains?: InputMaybe<Scalars['String']>;
  metadata_contains_nocase?: InputMaybe<Scalars['String']>;
  metadata_not_contains?: InputMaybe<Scalars['String']>;
  metadata_not_contains_nocase?: InputMaybe<Scalars['String']>;
  metadata_starts_with?: InputMaybe<Scalars['String']>;
  metadata_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metadata_not_starts_with?: InputMaybe<Scalars['String']>;
  metadata_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metadata_ends_with?: InputMaybe<Scalars['String']>;
  metadata_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metadata_not_ends_with?: InputMaybe<Scalars['String']>;
  metadata_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metadata_?: InputMaybe<AccountMetadata_filter>;
  operatorOf_?: InputMaybe<GraphAccount_filter>;
  operators?: InputMaybe<Array<Scalars['String']>>;
  operators_not?: InputMaybe<Array<Scalars['String']>>;
  operators_contains?: InputMaybe<Array<Scalars['String']>>;
  operators_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  operators_not_contains?: InputMaybe<Array<Scalars['String']>>;
  operators_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  operators_?: InputMaybe<GraphAccount_filter>;
  balance?: InputMaybe<Scalars['BigInt']>;
  balance_not?: InputMaybe<Scalars['BigInt']>;
  balance_gt?: InputMaybe<Scalars['BigInt']>;
  balance_lt?: InputMaybe<Scalars['BigInt']>;
  balance_gte?: InputMaybe<Scalars['BigInt']>;
  balance_lte?: InputMaybe<Scalars['BigInt']>;
  balance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balanceReceivedFromL1Signalling?: InputMaybe<Scalars['BigInt']>;
  balanceReceivedFromL1Signalling_not?: InputMaybe<Scalars['BigInt']>;
  balanceReceivedFromL1Signalling_gt?: InputMaybe<Scalars['BigInt']>;
  balanceReceivedFromL1Signalling_lt?: InputMaybe<Scalars['BigInt']>;
  balanceReceivedFromL1Signalling_gte?: InputMaybe<Scalars['BigInt']>;
  balanceReceivedFromL1Signalling_lte?: InputMaybe<Scalars['BigInt']>;
  balanceReceivedFromL1Signalling_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balanceReceivedFromL1Signalling_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balanceReceivedFromL1Delegation?: InputMaybe<Scalars['BigInt']>;
  balanceReceivedFromL1Delegation_not?: InputMaybe<Scalars['BigInt']>;
  balanceReceivedFromL1Delegation_gt?: InputMaybe<Scalars['BigInt']>;
  balanceReceivedFromL1Delegation_lt?: InputMaybe<Scalars['BigInt']>;
  balanceReceivedFromL1Delegation_gte?: InputMaybe<Scalars['BigInt']>;
  balanceReceivedFromL1Delegation_lte?: InputMaybe<Scalars['BigInt']>;
  balanceReceivedFromL1Delegation_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balanceReceivedFromL1Delegation_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  curationApproval?: InputMaybe<Scalars['BigInt']>;
  curationApproval_not?: InputMaybe<Scalars['BigInt']>;
  curationApproval_gt?: InputMaybe<Scalars['BigInt']>;
  curationApproval_lt?: InputMaybe<Scalars['BigInt']>;
  curationApproval_gte?: InputMaybe<Scalars['BigInt']>;
  curationApproval_lte?: InputMaybe<Scalars['BigInt']>;
  curationApproval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  curationApproval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakingApproval?: InputMaybe<Scalars['BigInt']>;
  stakingApproval_not?: InputMaybe<Scalars['BigInt']>;
  stakingApproval_gt?: InputMaybe<Scalars['BigInt']>;
  stakingApproval_lt?: InputMaybe<Scalars['BigInt']>;
  stakingApproval_gte?: InputMaybe<Scalars['BigInt']>;
  stakingApproval_lte?: InputMaybe<Scalars['BigInt']>;
  stakingApproval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakingApproval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gnsApproval?: InputMaybe<Scalars['BigInt']>;
  gnsApproval_not?: InputMaybe<Scalars['BigInt']>;
  gnsApproval_gt?: InputMaybe<Scalars['BigInt']>;
  gnsApproval_lt?: InputMaybe<Scalars['BigInt']>;
  gnsApproval_gte?: InputMaybe<Scalars['BigInt']>;
  gnsApproval_lte?: InputMaybe<Scalars['BigInt']>;
  gnsApproval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gnsApproval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  subgraphs_?: InputMaybe<Subgraph_filter>;
  developerCreatedAt?: InputMaybe<Scalars['Int']>;
  developerCreatedAt_not?: InputMaybe<Scalars['Int']>;
  developerCreatedAt_gt?: InputMaybe<Scalars['Int']>;
  developerCreatedAt_lt?: InputMaybe<Scalars['Int']>;
  developerCreatedAt_gte?: InputMaybe<Scalars['Int']>;
  developerCreatedAt_lte?: InputMaybe<Scalars['Int']>;
  developerCreatedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  developerCreatedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  subgraphQueryFees?: InputMaybe<Scalars['BigInt']>;
  subgraphQueryFees_not?: InputMaybe<Scalars['BigInt']>;
  subgraphQueryFees_gt?: InputMaybe<Scalars['BigInt']>;
  subgraphQueryFees_lt?: InputMaybe<Scalars['BigInt']>;
  subgraphQueryFees_gte?: InputMaybe<Scalars['BigInt']>;
  subgraphQueryFees_lte?: InputMaybe<Scalars['BigInt']>;
  subgraphQueryFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  subgraphQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdDisputes_?: InputMaybe<Dispute_filter>;
  disputesAgainst_?: InputMaybe<Dispute_filter>;
  curator?: InputMaybe<Scalars['String']>;
  curator_not?: InputMaybe<Scalars['String']>;
  curator_gt?: InputMaybe<Scalars['String']>;
  curator_lt?: InputMaybe<Scalars['String']>;
  curator_gte?: InputMaybe<Scalars['String']>;
  curator_lte?: InputMaybe<Scalars['String']>;
  curator_in?: InputMaybe<Array<Scalars['String']>>;
  curator_not_in?: InputMaybe<Array<Scalars['String']>>;
  curator_contains?: InputMaybe<Scalars['String']>;
  curator_contains_nocase?: InputMaybe<Scalars['String']>;
  curator_not_contains?: InputMaybe<Scalars['String']>;
  curator_not_contains_nocase?: InputMaybe<Scalars['String']>;
  curator_starts_with?: InputMaybe<Scalars['String']>;
  curator_starts_with_nocase?: InputMaybe<Scalars['String']>;
  curator_not_starts_with?: InputMaybe<Scalars['String']>;
  curator_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  curator_ends_with?: InputMaybe<Scalars['String']>;
  curator_ends_with_nocase?: InputMaybe<Scalars['String']>;
  curator_not_ends_with?: InputMaybe<Scalars['String']>;
  curator_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  curator_?: InputMaybe<Curator_filter>;
  indexer?: InputMaybe<Scalars['String']>;
  indexer_not?: InputMaybe<Scalars['String']>;
  indexer_gt?: InputMaybe<Scalars['String']>;
  indexer_lt?: InputMaybe<Scalars['String']>;
  indexer_gte?: InputMaybe<Scalars['String']>;
  indexer_lte?: InputMaybe<Scalars['String']>;
  indexer_in?: InputMaybe<Array<Scalars['String']>>;
  indexer_not_in?: InputMaybe<Array<Scalars['String']>>;
  indexer_contains?: InputMaybe<Scalars['String']>;
  indexer_contains_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_contains?: InputMaybe<Scalars['String']>;
  indexer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  indexer_starts_with?: InputMaybe<Scalars['String']>;
  indexer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_starts_with?: InputMaybe<Scalars['String']>;
  indexer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_ends_with?: InputMaybe<Scalars['String']>;
  indexer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_ends_with?: InputMaybe<Scalars['String']>;
  indexer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_?: InputMaybe<Indexer_filter>;
  delegator?: InputMaybe<Scalars['String']>;
  delegator_not?: InputMaybe<Scalars['String']>;
  delegator_gt?: InputMaybe<Scalars['String']>;
  delegator_lt?: InputMaybe<Scalars['String']>;
  delegator_gte?: InputMaybe<Scalars['String']>;
  delegator_lte?: InputMaybe<Scalars['String']>;
  delegator_in?: InputMaybe<Array<Scalars['String']>>;
  delegator_not_in?: InputMaybe<Array<Scalars['String']>>;
  delegator_contains?: InputMaybe<Scalars['String']>;
  delegator_contains_nocase?: InputMaybe<Scalars['String']>;
  delegator_not_contains?: InputMaybe<Scalars['String']>;
  delegator_not_contains_nocase?: InputMaybe<Scalars['String']>;
  delegator_starts_with?: InputMaybe<Scalars['String']>;
  delegator_starts_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_not_starts_with?: InputMaybe<Scalars['String']>;
  delegator_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_ends_with?: InputMaybe<Scalars['String']>;
  delegator_ends_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_not_ends_with?: InputMaybe<Scalars['String']>;
  delegator_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_?: InputMaybe<Delegator_filter>;
  nameSignalTransactions_?: InputMaybe<NameSignalTransaction_filter>;
  bridgeWithdrawalTransactions_?: InputMaybe<BridgeWithdrawalTransaction_filter>;
  bridgeDepositTransactions_?: InputMaybe<BridgeDepositTransaction_filter>;
  tokenLockWallets?: InputMaybe<Array<Scalars['String']>>;
  tokenLockWallets_not?: InputMaybe<Array<Scalars['String']>>;
  tokenLockWallets_contains?: InputMaybe<Array<Scalars['String']>>;
  tokenLockWallets_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  tokenLockWallets_not_contains?: InputMaybe<Array<Scalars['String']>>;
  tokenLockWallets_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  tokenLockWallets_?: InputMaybe<TokenLockWallet_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<GraphAccount_filter>>>;
  or?: InputMaybe<Array<InputMaybe<GraphAccount_filter>>>;
};

export type GraphAccount_orderBy =
  | 'id'
  | 'names'
  | 'defaultName'
  | 'defaultName__id'
  | 'defaultName__nameSystem'
  | 'defaultName__name'
  | 'createdAt'
  | 'defaultDisplayName'
  | 'metadataHash'
  | 'metadata'
  | 'metadata__id'
  | 'metadata__isOrganization'
  | 'metadata__codeRepository'
  | 'metadata__description'
  | 'metadata__image'
  | 'metadata__website'
  | 'metadata__displayName'
  | 'operatorOf'
  | 'operators'
  | 'balance'
  | 'balanceReceivedFromL1Signalling'
  | 'balanceReceivedFromL1Delegation'
  | 'curationApproval'
  | 'stakingApproval'
  | 'gnsApproval'
  | 'subgraphs'
  | 'developerCreatedAt'
  | 'subgraphQueryFees'
  | 'createdDisputes'
  | 'disputesAgainst'
  | 'curator'
  | 'curator__id'
  | 'curator__createdAt'
  | 'curator__totalSignalledTokens'
  | 'curator__totalUnsignalledTokens'
  | 'curator__defaultDisplayName'
  | 'curator__totalNameSignalledTokens'
  | 'curator__totalNameUnsignalledTokens'
  | 'curator__totalWithdrawnTokens'
  | 'curator__realizedRewards'
  | 'curator__annualizedReturn'
  | 'curator__totalReturn'
  | 'curator__signalingEfficiency'
  | 'curator__totalNameSignal'
  | 'curator__totalNameSignalAverageCostBasis'
  | 'curator__totalAverageCostBasisPerNameSignal'
  | 'curator__totalSignal'
  | 'curator__totalSignalAverageCostBasis'
  | 'curator__totalAverageCostBasisPerSignal'
  | 'curator__signalCount'
  | 'curator__currentSignalCount'
  | 'curator__activeSignalCount'
  | 'curator__nameSignalCount'
  | 'curator__currentNameSignalCount'
  | 'curator__activeNameSignalCount'
  | 'curator__combinedSignalCount'
  | 'curator__activeCombinedSignalCount'
  | 'curator__allCurrentGRTValue'
  | 'curator__PLGrt'
  | 'curator__unrealizedPLGrt'
  | 'curator__realizedPLGrt'
  | 'curator__lastSignaledAt'
  | 'curator__lastUnsignaledAt'
  | 'indexer'
  | 'indexer__id'
  | 'indexer__createdAt'
  | 'indexer__url'
  | 'indexer__geoHash'
  | 'indexer__defaultDisplayName'
  | 'indexer__stakedTokens'
  | 'indexer__allocatedTokens'
  | 'indexer__unstakedTokens'
  | 'indexer__lockedTokens'
  | 'indexer__tokensLockedUntil'
  | 'indexer__allocationCount'
  | 'indexer__totalAllocationCount'
  | 'indexer__queryFeesCollected'
  | 'indexer__queryFeeRebates'
  | 'indexer__rewardsEarned'
  | 'indexer__indexerIndexingRewards'
  | 'indexer__delegatorIndexingRewards'
  | 'indexer__indexerRewardsOwnGenerationRatio'
  | 'indexer__transferredToL2'
  | 'indexer__firstTransferredToL2At'
  | 'indexer__firstTransferredToL2AtBlockNumber'
  | 'indexer__firstTransferredToL2AtTx'
  | 'indexer__lastTransferredToL2At'
  | 'indexer__lastTransferredToL2AtBlockNumber'
  | 'indexer__lastTransferredToL2AtTx'
  | 'indexer__stakedTokensTransferredToL2'
  | 'indexer__idOnL2'
  | 'indexer__idOnL1'
  | 'indexer__delegatedCapacity'
  | 'indexer__tokenCapacity'
  | 'indexer__availableStake'
  | 'indexer__delegatedTokens'
  | 'indexer__ownStakeRatio'
  | 'indexer__delegatedStakeRatio'
  | 'indexer__delegatorShares'
  | 'indexer__delegationExchangeRate'
  | 'indexer__indexingRewardCut'
  | 'indexer__indexingRewardEffectiveCut'
  | 'indexer__overDelegationDilution'
  | 'indexer__delegatorQueryFees'
  | 'indexer__queryFeeCut'
  | 'indexer__queryFeeEffectiveCut'
  | 'indexer__delegatorParameterCooldown'
  | 'indexer__lastDelegationParameterUpdate'
  | 'indexer__forcedClosures'
  | 'indexer__totalReturn'
  | 'indexer__annualizedReturn'
  | 'indexer__stakingEfficiency'
  | 'indexer__notAllocatedTokens'
  | 'indexer__delegationRemaining'
  | 'indexer__indexerQueryFees'
  | 'indexer__delegatorsCount'
  | 'delegator'
  | 'delegator__id'
  | 'delegator__totalStakedTokens'
  | 'delegator__totalUnstakedTokens'
  | 'delegator__createdAt'
  | 'delegator__totalRealizedRewards'
  | 'delegator__stakesCount'
  | 'delegator__activeStakesCount'
  | 'delegator__defaultDisplayName'
  | 'delegator__unreleasedReward'
  | 'delegator__unreleasedPercent'
  | 'delegator__currentStaked'
  | 'delegator__totalRewards'
  | 'delegator__lastDelegatedAt'
  | 'delegator__lastUndelegatedAt'
  | 'nameSignalTransactions'
  | 'bridgeWithdrawalTransactions'
  | 'bridgeDepositTransactions'
  | 'tokenLockWallets';

/**
 * Graph Network global parameters and contract addresses
 *
 */
export type GraphNetwork = {
  /** ID is set to 1 */
  id: Scalars['ID'];
  /** Controller address */
  controller: Scalars['Bytes'];
  /** Graph token address */
  graphToken: Scalars['Bytes'];
  /** Epoch manager address */
  epochManager: Scalars['Bytes'];
  /** Epoch Manager implementations. Last in the array is current */
  epochManagerImplementations: Array<Scalars['Bytes']>;
  /** Curation address */
  curation: Scalars['Bytes'];
  /** Curation implementations. Last in the array is current */
  curationImplementations: Array<Scalars['Bytes']>;
  /** Staking address */
  staking: Scalars['Bytes'];
  /** Graph token implementations. Last in the array is current */
  stakingImplementations: Array<Scalars['Bytes']>;
  /** Dispute manager address */
  disputeManager: Scalars['Bytes'];
  /** GNS address */
  gns: Scalars['Bytes'];
  /** Service registry address */
  serviceRegistry: Scalars['Bytes'];
  /** Rewards manager address */
  rewardsManager: Scalars['Bytes'];
  /** Rewards Manager implementations. Last in the array is current */
  rewardsManagerImplementations: Array<Scalars['Bytes']>;
  /** True if the protocol is paused */
  isPaused: Scalars['Boolean'];
  /** True if the protocol is partially paused */
  isPartialPaused: Scalars['Boolean'];
  /** Governor of the controller (i.e. the whole protocol) */
  governor: Scalars['Bytes'];
  /** Pause guardian address */
  pauseGuardian: Scalars['Bytes'];
  /** Percentage of fees going to curators. In parts per million */
  curationPercentage: Scalars['Int'];
  /** Percentage of fees burn as protocol fee. In parts per million */
  protocolFeePercentage: Scalars['Int'];
  /** Ratio of max staked delegation tokens to indexers stake that earns rewards */
  delegationRatio: Scalars['Int'];
  /** [DEPRECATED] Epochs to wait before fees can be claimed in rebate pool */
  channelDisputeEpochs: Scalars['Int'];
  /** Epochs to wait before delegators can settle */
  maxAllocationEpochs: Scalars['Int'];
  /** Time in blocks needed to wait to unstake */
  thawingPeriod: Scalars['Int'];
  /** Minimum time an Indexer must use for resetting their Delegation parameters */
  delegationParametersCooldown: Scalars['Int'];
  /** Minimum GRT an indexer must stake */
  minimumIndexerStake: Scalars['BigInt'];
  /** Contracts that have been approved to be a slasher */
  slashers?: Maybe<Array<Scalars['Bytes']>>;
  /** Time in epochs a delegator needs to wait to withdraw delegated stake */
  delegationUnbondingPeriod: Scalars['Int'];
  /** [DEPRECATED] Alpha in the cobbs douglas formula */
  rebateRatio: Scalars['BigDecimal'];
  /** Alpha in the exponential formula */
  rebateAlpha: Scalars['BigDecimal'];
  /** Lambda in the exponential formula */
  rebateLambda: Scalars['BigDecimal'];
  /** Tax that delegators pay to deposit. In Parts per million */
  delegationTaxPercentage: Scalars['Int'];
  /** Asset holder for the protocol */
  assetHolders?: Maybe<Array<Scalars['Bytes']>>;
  /** Total amount of indexer stake transferred to L2 */
  totalTokensStakedTransferredToL2: Scalars['BigInt'];
  /** Total amount of delegated tokens transferred to L2 */
  totalDelegatedTokensTransferredToL2: Scalars['BigInt'];
  /** Total amount of delegated tokens transferred to L2 */
  totalSignalledTokensTransferredToL2: Scalars['BigInt'];
  /** The total amount of GRT staked in the staking contract */
  totalTokensStaked: Scalars['BigInt'];
  /** NOT IMPLEMENTED - Total tokens that are settled and waiting to be claimed */
  totalTokensClaimable: Scalars['BigInt'];
  /** Total tokens that are currently locked or withdrawable in the network from unstaking */
  totalUnstakedTokensLocked: Scalars['BigInt'];
  /** Total GRT currently in allocation */
  totalTokensAllocated: Scalars['BigInt'];
  /** Total delegated tokens in the protocol */
  totalDelegatedTokens: Scalars['BigInt'];
  /** The total amount of GRT signalled in the Curation contract */
  totalTokensSignalled: Scalars['BigInt'];
  /** Total GRT currently curating via the Auto-Migrate function */
  totalTokensSignalledAutoMigrate: Scalars['BigDecimal'];
  /** Total GRT currently curating to a specific version */
  totalTokensSignalledDirectly: Scalars['BigDecimal'];
  /** Total query fees generated in the network */
  totalQueryFees: Scalars['BigInt'];
  /** Total query fees collected by indexers */
  totalIndexerQueryFeesCollected: Scalars['BigInt'];
  /** Total query fees rebates claimed by indexers */
  totalIndexerQueryFeeRebates: Scalars['BigInt'];
  /** Total query fees rebates claimed by delegators */
  totalDelegatorQueryFeeRebates: Scalars['BigInt'];
  /** Total query fees payed to curators */
  totalCuratorQueryFees: Scalars['BigInt'];
  /** Total protocol taxes applied to the query fees */
  totalTaxedQueryFees: Scalars['BigInt'];
  /** Total unclaimed rebates. Includes unclaimed rebates, and rebates lost in rebates mechanism  */
  totalUnclaimedQueryFeeRebates: Scalars['BigInt'];
  /** Total indexing rewards minted */
  totalIndexingRewards: Scalars['BigInt'];
  /** Total indexing rewards minted to Delegators */
  totalIndexingDelegatorRewards: Scalars['BigInt'];
  /** Total indexing rewards minted to Indexers */
  totalIndexingIndexerRewards: Scalars['BigInt'];
  /** (Deprecated) The issuance rate of GRT per block before GIP-0037. To get annual rate do (networkGRTIssuance * 10^-18)^(blocksPerYear) */
  networkGRTIssuance: Scalars['BigInt'];
  /** The issuance rate of GRT per block after GIP-0037. To get annual rate do (networkGRTIssuancePerBlock * blocksPerYear) */
  networkGRTIssuancePerBlock: Scalars['BigInt'];
  /** Address of the availability oracle */
  subgraphAvailabilityOracle: Scalars['Bytes'];
  /** Default reserve ratio for all subgraphs. In parts per million */
  defaultReserveRatio: Scalars['Int'];
  /** Minimum amount of tokens needed to start curating */
  minimumCurationDeposit: Scalars['BigInt'];
  /** The fee charged when a curator withdraws signal. In parts per million */
  curationTaxPercentage: Scalars['Int'];
  /** Percentage of the GNS migration tax payed by the subgraph owner */
  ownerTaxPercentage: Scalars['Int'];
  /** Graph Token supply */
  totalSupply: Scalars['BigInt'];
  /** NOT IMPLEMENTED - Price of one GRT in USD */
  GRTinUSD: Scalars['BigDecimal'];
  /** NOT IMPLEMENTED - Price of one GRT in ETH */
  GRTinETH?: Maybe<Scalars['BigDecimal']>;
  /** Total amount of GRT minted */
  totalGRTMinted: Scalars['BigInt'];
  /** Total amount of GRT burned */
  totalGRTBurned: Scalars['BigInt'];
  /** Epoch Length in blocks */
  epochLength: Scalars['Int'];
  /** Epoch that was last run */
  lastRunEpoch: Scalars['Int'];
  /** Epoch when epoch length was last updated */
  lastLengthUpdateEpoch: Scalars['Int'];
  /** Block when epoch length was last updated */
  lastLengthUpdateBlock: Scalars['Int'];
  /** Current epoch the protocol is in */
  currentEpoch: Scalars['Int'];
  /** Total indexers */
  indexerCount: Scalars['Int'];
  /** Number of indexers that currently have some stake in the protocol */
  stakedIndexersCount: Scalars['Int'];
  /** Total amount of delegators historically */
  delegatorCount: Scalars['Int'];
  /** Total active delegators. Those that still have at least one active delegation. */
  activeDelegatorCount: Scalars['Int'];
  /** Total amount of delegations historically */
  delegationCount: Scalars['Int'];
  /** Total active delegations. Those delegations that still have GRT staked towards an indexer */
  activeDelegationCount: Scalars['Int'];
  /** Total amount of curators historically */
  curatorCount: Scalars['Int'];
  /** Total amount of curators historically */
  activeCuratorCount: Scalars['Int'];
  /** Total amount of Subgraph entities */
  subgraphCount: Scalars['Int'];
  /** Amount of active Subgraph entities */
  activeSubgraphCount: Scalars['Int'];
  /** Total amount of SubgraphDeployment entities */
  subgraphDeploymentCount: Scalars['Int'];
  /** Total epochs */
  epochCount: Scalars['Int'];
  /** Dispute arbitrator */
  arbitrator: Scalars['Bytes'];
  /** Penalty to Indexer on successful disputes for query disputes. In parts per million */
  querySlashingPercentage: Scalars['Int'];
  /** Penalty to Indexer on successful disputes for indexing disputes. In parts per million */
  indexingSlashingPercentage: Scalars['Int'];
  /** [DEPRECATED] Penalty to Indexer on successful disputes for indexing disputes. In parts per million */
  slashingPercentage: Scalars['Int'];
  /** Minimum deposit to create a dispute */
  minimumDisputeDeposit: Scalars['BigInt'];
  /** Reward to Fisherman on successful disputes. In parts per million */
  fishermanRewardPercentage: Scalars['Int'];
  /** Total amount of GRT deposited to the L1 gateway. Note that the actual amount claimed in L2 might be lower due to tickets not redeemed. */
  totalGRTDeposited: Scalars['BigInt'];
  /** Total amount of GRT withdrawn from the L2 gateway and claimed in L1. */
  totalGRTWithdrawnConfirmed: Scalars['BigInt'];
  /** Total amount of GRT minted by L1 bridge */
  totalGRTMintedFromL2: Scalars['BigInt'];
  /** Total amount of GRT deposited to the L1 gateway and redeemed in L2. */
  totalGRTDepositedConfirmed: Scalars['BigInt'];
  /** Total amount of GRT withdrawn from the L2 gateway. Note that the actual amount claimed in L1 might be lower due to outbound transactions not finalized. */
  totalGRTWithdrawn: Scalars['BigInt'];
  /** Block number for L1. Only implemented for L2 deployments to properly reflect the L1 block used for timings */
  currentL1BlockNumber?: Maybe<Scalars['BigInt']>;
};

export type GraphNetwork_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  controller?: InputMaybe<Scalars['Bytes']>;
  controller_not?: InputMaybe<Scalars['Bytes']>;
  controller_gt?: InputMaybe<Scalars['Bytes']>;
  controller_lt?: InputMaybe<Scalars['Bytes']>;
  controller_gte?: InputMaybe<Scalars['Bytes']>;
  controller_lte?: InputMaybe<Scalars['Bytes']>;
  controller_in?: InputMaybe<Array<Scalars['Bytes']>>;
  controller_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  controller_contains?: InputMaybe<Scalars['Bytes']>;
  controller_not_contains?: InputMaybe<Scalars['Bytes']>;
  graphToken?: InputMaybe<Scalars['Bytes']>;
  graphToken_not?: InputMaybe<Scalars['Bytes']>;
  graphToken_gt?: InputMaybe<Scalars['Bytes']>;
  graphToken_lt?: InputMaybe<Scalars['Bytes']>;
  graphToken_gte?: InputMaybe<Scalars['Bytes']>;
  graphToken_lte?: InputMaybe<Scalars['Bytes']>;
  graphToken_in?: InputMaybe<Array<Scalars['Bytes']>>;
  graphToken_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  graphToken_contains?: InputMaybe<Scalars['Bytes']>;
  graphToken_not_contains?: InputMaybe<Scalars['Bytes']>;
  epochManager?: InputMaybe<Scalars['Bytes']>;
  epochManager_not?: InputMaybe<Scalars['Bytes']>;
  epochManager_gt?: InputMaybe<Scalars['Bytes']>;
  epochManager_lt?: InputMaybe<Scalars['Bytes']>;
  epochManager_gte?: InputMaybe<Scalars['Bytes']>;
  epochManager_lte?: InputMaybe<Scalars['Bytes']>;
  epochManager_in?: InputMaybe<Array<Scalars['Bytes']>>;
  epochManager_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  epochManager_contains?: InputMaybe<Scalars['Bytes']>;
  epochManager_not_contains?: InputMaybe<Scalars['Bytes']>;
  epochManagerImplementations?: InputMaybe<Array<Scalars['Bytes']>>;
  epochManagerImplementations_not?: InputMaybe<Array<Scalars['Bytes']>>;
  epochManagerImplementations_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  epochManagerImplementations_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  epochManagerImplementations_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  epochManagerImplementations_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  curation?: InputMaybe<Scalars['Bytes']>;
  curation_not?: InputMaybe<Scalars['Bytes']>;
  curation_gt?: InputMaybe<Scalars['Bytes']>;
  curation_lt?: InputMaybe<Scalars['Bytes']>;
  curation_gte?: InputMaybe<Scalars['Bytes']>;
  curation_lte?: InputMaybe<Scalars['Bytes']>;
  curation_in?: InputMaybe<Array<Scalars['Bytes']>>;
  curation_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  curation_contains?: InputMaybe<Scalars['Bytes']>;
  curation_not_contains?: InputMaybe<Scalars['Bytes']>;
  curationImplementations?: InputMaybe<Array<Scalars['Bytes']>>;
  curationImplementations_not?: InputMaybe<Array<Scalars['Bytes']>>;
  curationImplementations_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  curationImplementations_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  curationImplementations_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  curationImplementations_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  staking?: InputMaybe<Scalars['Bytes']>;
  staking_not?: InputMaybe<Scalars['Bytes']>;
  staking_gt?: InputMaybe<Scalars['Bytes']>;
  staking_lt?: InputMaybe<Scalars['Bytes']>;
  staking_gte?: InputMaybe<Scalars['Bytes']>;
  staking_lte?: InputMaybe<Scalars['Bytes']>;
  staking_in?: InputMaybe<Array<Scalars['Bytes']>>;
  staking_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  staking_contains?: InputMaybe<Scalars['Bytes']>;
  staking_not_contains?: InputMaybe<Scalars['Bytes']>;
  stakingImplementations?: InputMaybe<Array<Scalars['Bytes']>>;
  stakingImplementations_not?: InputMaybe<Array<Scalars['Bytes']>>;
  stakingImplementations_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  stakingImplementations_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  stakingImplementations_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  stakingImplementations_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  disputeManager?: InputMaybe<Scalars['Bytes']>;
  disputeManager_not?: InputMaybe<Scalars['Bytes']>;
  disputeManager_gt?: InputMaybe<Scalars['Bytes']>;
  disputeManager_lt?: InputMaybe<Scalars['Bytes']>;
  disputeManager_gte?: InputMaybe<Scalars['Bytes']>;
  disputeManager_lte?: InputMaybe<Scalars['Bytes']>;
  disputeManager_in?: InputMaybe<Array<Scalars['Bytes']>>;
  disputeManager_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  disputeManager_contains?: InputMaybe<Scalars['Bytes']>;
  disputeManager_not_contains?: InputMaybe<Scalars['Bytes']>;
  gns?: InputMaybe<Scalars['Bytes']>;
  gns_not?: InputMaybe<Scalars['Bytes']>;
  gns_gt?: InputMaybe<Scalars['Bytes']>;
  gns_lt?: InputMaybe<Scalars['Bytes']>;
  gns_gte?: InputMaybe<Scalars['Bytes']>;
  gns_lte?: InputMaybe<Scalars['Bytes']>;
  gns_in?: InputMaybe<Array<Scalars['Bytes']>>;
  gns_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  gns_contains?: InputMaybe<Scalars['Bytes']>;
  gns_not_contains?: InputMaybe<Scalars['Bytes']>;
  serviceRegistry?: InputMaybe<Scalars['Bytes']>;
  serviceRegistry_not?: InputMaybe<Scalars['Bytes']>;
  serviceRegistry_gt?: InputMaybe<Scalars['Bytes']>;
  serviceRegistry_lt?: InputMaybe<Scalars['Bytes']>;
  serviceRegistry_gte?: InputMaybe<Scalars['Bytes']>;
  serviceRegistry_lte?: InputMaybe<Scalars['Bytes']>;
  serviceRegistry_in?: InputMaybe<Array<Scalars['Bytes']>>;
  serviceRegistry_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  serviceRegistry_contains?: InputMaybe<Scalars['Bytes']>;
  serviceRegistry_not_contains?: InputMaybe<Scalars['Bytes']>;
  rewardsManager?: InputMaybe<Scalars['Bytes']>;
  rewardsManager_not?: InputMaybe<Scalars['Bytes']>;
  rewardsManager_gt?: InputMaybe<Scalars['Bytes']>;
  rewardsManager_lt?: InputMaybe<Scalars['Bytes']>;
  rewardsManager_gte?: InputMaybe<Scalars['Bytes']>;
  rewardsManager_lte?: InputMaybe<Scalars['Bytes']>;
  rewardsManager_in?: InputMaybe<Array<Scalars['Bytes']>>;
  rewardsManager_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  rewardsManager_contains?: InputMaybe<Scalars['Bytes']>;
  rewardsManager_not_contains?: InputMaybe<Scalars['Bytes']>;
  rewardsManagerImplementations?: InputMaybe<Array<Scalars['Bytes']>>;
  rewardsManagerImplementations_not?: InputMaybe<Array<Scalars['Bytes']>>;
  rewardsManagerImplementations_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  rewardsManagerImplementations_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  rewardsManagerImplementations_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  rewardsManagerImplementations_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  isPaused?: InputMaybe<Scalars['Boolean']>;
  isPaused_not?: InputMaybe<Scalars['Boolean']>;
  isPaused_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isPaused_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isPartialPaused?: InputMaybe<Scalars['Boolean']>;
  isPartialPaused_not?: InputMaybe<Scalars['Boolean']>;
  isPartialPaused_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isPartialPaused_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  governor?: InputMaybe<Scalars['Bytes']>;
  governor_not?: InputMaybe<Scalars['Bytes']>;
  governor_gt?: InputMaybe<Scalars['Bytes']>;
  governor_lt?: InputMaybe<Scalars['Bytes']>;
  governor_gte?: InputMaybe<Scalars['Bytes']>;
  governor_lte?: InputMaybe<Scalars['Bytes']>;
  governor_in?: InputMaybe<Array<Scalars['Bytes']>>;
  governor_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  governor_contains?: InputMaybe<Scalars['Bytes']>;
  governor_not_contains?: InputMaybe<Scalars['Bytes']>;
  pauseGuardian?: InputMaybe<Scalars['Bytes']>;
  pauseGuardian_not?: InputMaybe<Scalars['Bytes']>;
  pauseGuardian_gt?: InputMaybe<Scalars['Bytes']>;
  pauseGuardian_lt?: InputMaybe<Scalars['Bytes']>;
  pauseGuardian_gte?: InputMaybe<Scalars['Bytes']>;
  pauseGuardian_lte?: InputMaybe<Scalars['Bytes']>;
  pauseGuardian_in?: InputMaybe<Array<Scalars['Bytes']>>;
  pauseGuardian_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  pauseGuardian_contains?: InputMaybe<Scalars['Bytes']>;
  pauseGuardian_not_contains?: InputMaybe<Scalars['Bytes']>;
  curationPercentage?: InputMaybe<Scalars['Int']>;
  curationPercentage_not?: InputMaybe<Scalars['Int']>;
  curationPercentage_gt?: InputMaybe<Scalars['Int']>;
  curationPercentage_lt?: InputMaybe<Scalars['Int']>;
  curationPercentage_gte?: InputMaybe<Scalars['Int']>;
  curationPercentage_lte?: InputMaybe<Scalars['Int']>;
  curationPercentage_in?: InputMaybe<Array<Scalars['Int']>>;
  curationPercentage_not_in?: InputMaybe<Array<Scalars['Int']>>;
  protocolFeePercentage?: InputMaybe<Scalars['Int']>;
  protocolFeePercentage_not?: InputMaybe<Scalars['Int']>;
  protocolFeePercentage_gt?: InputMaybe<Scalars['Int']>;
  protocolFeePercentage_lt?: InputMaybe<Scalars['Int']>;
  protocolFeePercentage_gte?: InputMaybe<Scalars['Int']>;
  protocolFeePercentage_lte?: InputMaybe<Scalars['Int']>;
  protocolFeePercentage_in?: InputMaybe<Array<Scalars['Int']>>;
  protocolFeePercentage_not_in?: InputMaybe<Array<Scalars['Int']>>;
  delegationRatio?: InputMaybe<Scalars['Int']>;
  delegationRatio_not?: InputMaybe<Scalars['Int']>;
  delegationRatio_gt?: InputMaybe<Scalars['Int']>;
  delegationRatio_lt?: InputMaybe<Scalars['Int']>;
  delegationRatio_gte?: InputMaybe<Scalars['Int']>;
  delegationRatio_lte?: InputMaybe<Scalars['Int']>;
  delegationRatio_in?: InputMaybe<Array<Scalars['Int']>>;
  delegationRatio_not_in?: InputMaybe<Array<Scalars['Int']>>;
  channelDisputeEpochs?: InputMaybe<Scalars['Int']>;
  channelDisputeEpochs_not?: InputMaybe<Scalars['Int']>;
  channelDisputeEpochs_gt?: InputMaybe<Scalars['Int']>;
  channelDisputeEpochs_lt?: InputMaybe<Scalars['Int']>;
  channelDisputeEpochs_gte?: InputMaybe<Scalars['Int']>;
  channelDisputeEpochs_lte?: InputMaybe<Scalars['Int']>;
  channelDisputeEpochs_in?: InputMaybe<Array<Scalars['Int']>>;
  channelDisputeEpochs_not_in?: InputMaybe<Array<Scalars['Int']>>;
  maxAllocationEpochs?: InputMaybe<Scalars['Int']>;
  maxAllocationEpochs_not?: InputMaybe<Scalars['Int']>;
  maxAllocationEpochs_gt?: InputMaybe<Scalars['Int']>;
  maxAllocationEpochs_lt?: InputMaybe<Scalars['Int']>;
  maxAllocationEpochs_gte?: InputMaybe<Scalars['Int']>;
  maxAllocationEpochs_lte?: InputMaybe<Scalars['Int']>;
  maxAllocationEpochs_in?: InputMaybe<Array<Scalars['Int']>>;
  maxAllocationEpochs_not_in?: InputMaybe<Array<Scalars['Int']>>;
  thawingPeriod?: InputMaybe<Scalars['Int']>;
  thawingPeriod_not?: InputMaybe<Scalars['Int']>;
  thawingPeriod_gt?: InputMaybe<Scalars['Int']>;
  thawingPeriod_lt?: InputMaybe<Scalars['Int']>;
  thawingPeriod_gte?: InputMaybe<Scalars['Int']>;
  thawingPeriod_lte?: InputMaybe<Scalars['Int']>;
  thawingPeriod_in?: InputMaybe<Array<Scalars['Int']>>;
  thawingPeriod_not_in?: InputMaybe<Array<Scalars['Int']>>;
  delegationParametersCooldown?: InputMaybe<Scalars['Int']>;
  delegationParametersCooldown_not?: InputMaybe<Scalars['Int']>;
  delegationParametersCooldown_gt?: InputMaybe<Scalars['Int']>;
  delegationParametersCooldown_lt?: InputMaybe<Scalars['Int']>;
  delegationParametersCooldown_gte?: InputMaybe<Scalars['Int']>;
  delegationParametersCooldown_lte?: InputMaybe<Scalars['Int']>;
  delegationParametersCooldown_in?: InputMaybe<Array<Scalars['Int']>>;
  delegationParametersCooldown_not_in?: InputMaybe<Array<Scalars['Int']>>;
  minimumIndexerStake?: InputMaybe<Scalars['BigInt']>;
  minimumIndexerStake_not?: InputMaybe<Scalars['BigInt']>;
  minimumIndexerStake_gt?: InputMaybe<Scalars['BigInt']>;
  minimumIndexerStake_lt?: InputMaybe<Scalars['BigInt']>;
  minimumIndexerStake_gte?: InputMaybe<Scalars['BigInt']>;
  minimumIndexerStake_lte?: InputMaybe<Scalars['BigInt']>;
  minimumIndexerStake_in?: InputMaybe<Array<Scalars['BigInt']>>;
  minimumIndexerStake_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slashers?: InputMaybe<Array<Scalars['Bytes']>>;
  slashers_not?: InputMaybe<Array<Scalars['Bytes']>>;
  slashers_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  slashers_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  slashers_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  slashers_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  delegationUnbondingPeriod?: InputMaybe<Scalars['Int']>;
  delegationUnbondingPeriod_not?: InputMaybe<Scalars['Int']>;
  delegationUnbondingPeriod_gt?: InputMaybe<Scalars['Int']>;
  delegationUnbondingPeriod_lt?: InputMaybe<Scalars['Int']>;
  delegationUnbondingPeriod_gte?: InputMaybe<Scalars['Int']>;
  delegationUnbondingPeriod_lte?: InputMaybe<Scalars['Int']>;
  delegationUnbondingPeriod_in?: InputMaybe<Array<Scalars['Int']>>;
  delegationUnbondingPeriod_not_in?: InputMaybe<Array<Scalars['Int']>>;
  rebateRatio?: InputMaybe<Scalars['BigDecimal']>;
  rebateRatio_not?: InputMaybe<Scalars['BigDecimal']>;
  rebateRatio_gt?: InputMaybe<Scalars['BigDecimal']>;
  rebateRatio_lt?: InputMaybe<Scalars['BigDecimal']>;
  rebateRatio_gte?: InputMaybe<Scalars['BigDecimal']>;
  rebateRatio_lte?: InputMaybe<Scalars['BigDecimal']>;
  rebateRatio_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rebateRatio_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rebateAlpha?: InputMaybe<Scalars['BigDecimal']>;
  rebateAlpha_not?: InputMaybe<Scalars['BigDecimal']>;
  rebateAlpha_gt?: InputMaybe<Scalars['BigDecimal']>;
  rebateAlpha_lt?: InputMaybe<Scalars['BigDecimal']>;
  rebateAlpha_gte?: InputMaybe<Scalars['BigDecimal']>;
  rebateAlpha_lte?: InputMaybe<Scalars['BigDecimal']>;
  rebateAlpha_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rebateAlpha_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rebateLambda?: InputMaybe<Scalars['BigDecimal']>;
  rebateLambda_not?: InputMaybe<Scalars['BigDecimal']>;
  rebateLambda_gt?: InputMaybe<Scalars['BigDecimal']>;
  rebateLambda_lt?: InputMaybe<Scalars['BigDecimal']>;
  rebateLambda_gte?: InputMaybe<Scalars['BigDecimal']>;
  rebateLambda_lte?: InputMaybe<Scalars['BigDecimal']>;
  rebateLambda_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rebateLambda_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  delegationTaxPercentage?: InputMaybe<Scalars['Int']>;
  delegationTaxPercentage_not?: InputMaybe<Scalars['Int']>;
  delegationTaxPercentage_gt?: InputMaybe<Scalars['Int']>;
  delegationTaxPercentage_lt?: InputMaybe<Scalars['Int']>;
  delegationTaxPercentage_gte?: InputMaybe<Scalars['Int']>;
  delegationTaxPercentage_lte?: InputMaybe<Scalars['Int']>;
  delegationTaxPercentage_in?: InputMaybe<Array<Scalars['Int']>>;
  delegationTaxPercentage_not_in?: InputMaybe<Array<Scalars['Int']>>;
  assetHolders?: InputMaybe<Array<Scalars['Bytes']>>;
  assetHolders_not?: InputMaybe<Array<Scalars['Bytes']>>;
  assetHolders_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  assetHolders_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  assetHolders_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  assetHolders_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  totalTokensStakedTransferredToL2?: InputMaybe<Scalars['BigInt']>;
  totalTokensStakedTransferredToL2_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensStakedTransferredToL2_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensStakedTransferredToL2_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensStakedTransferredToL2_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensStakedTransferredToL2_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensStakedTransferredToL2_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensStakedTransferredToL2_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDelegatedTokensTransferredToL2?: InputMaybe<Scalars['BigInt']>;
  totalDelegatedTokensTransferredToL2_not?: InputMaybe<Scalars['BigInt']>;
  totalDelegatedTokensTransferredToL2_gt?: InputMaybe<Scalars['BigInt']>;
  totalDelegatedTokensTransferredToL2_lt?: InputMaybe<Scalars['BigInt']>;
  totalDelegatedTokensTransferredToL2_gte?: InputMaybe<Scalars['BigInt']>;
  totalDelegatedTokensTransferredToL2_lte?: InputMaybe<Scalars['BigInt']>;
  totalDelegatedTokensTransferredToL2_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDelegatedTokensTransferredToL2_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSignalledTokensTransferredToL2?: InputMaybe<Scalars['BigInt']>;
  totalSignalledTokensTransferredToL2_not?: InputMaybe<Scalars['BigInt']>;
  totalSignalledTokensTransferredToL2_gt?: InputMaybe<Scalars['BigInt']>;
  totalSignalledTokensTransferredToL2_lt?: InputMaybe<Scalars['BigInt']>;
  totalSignalledTokensTransferredToL2_gte?: InputMaybe<Scalars['BigInt']>;
  totalSignalledTokensTransferredToL2_lte?: InputMaybe<Scalars['BigInt']>;
  totalSignalledTokensTransferredToL2_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSignalledTokensTransferredToL2_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensStaked?: InputMaybe<Scalars['BigInt']>;
  totalTokensStaked_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensStaked_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensStaked_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensStaked_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensStaked_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensStaked_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensStaked_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensClaimable?: InputMaybe<Scalars['BigInt']>;
  totalTokensClaimable_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensClaimable_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensClaimable_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensClaimable_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensClaimable_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensClaimable_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensClaimable_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnstakedTokensLocked?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokensLocked_not?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokensLocked_gt?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokensLocked_lt?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokensLocked_gte?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokensLocked_lte?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokensLocked_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnstakedTokensLocked_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensAllocated?: InputMaybe<Scalars['BigInt']>;
  totalTokensAllocated_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensAllocated_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensAllocated_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensAllocated_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensAllocated_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensAllocated_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensAllocated_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDelegatedTokens?: InputMaybe<Scalars['BigInt']>;
  totalDelegatedTokens_not?: InputMaybe<Scalars['BigInt']>;
  totalDelegatedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  totalDelegatedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  totalDelegatedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  totalDelegatedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  totalDelegatedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDelegatedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensSignalled?: InputMaybe<Scalars['BigInt']>;
  totalTokensSignalled_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensSignalled_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensSignalled_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensSignalled_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensSignalled_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensSignalled_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensSignalled_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensSignalledAutoMigrate?: InputMaybe<Scalars['BigDecimal']>;
  totalTokensSignalledAutoMigrate_not?: InputMaybe<Scalars['BigDecimal']>;
  totalTokensSignalledAutoMigrate_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalTokensSignalledAutoMigrate_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalTokensSignalledAutoMigrate_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalTokensSignalledAutoMigrate_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalTokensSignalledAutoMigrate_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalTokensSignalledAutoMigrate_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalTokensSignalledDirectly?: InputMaybe<Scalars['BigDecimal']>;
  totalTokensSignalledDirectly_not?: InputMaybe<Scalars['BigDecimal']>;
  totalTokensSignalledDirectly_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalTokensSignalledDirectly_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalTokensSignalledDirectly_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalTokensSignalledDirectly_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalTokensSignalledDirectly_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalTokensSignalledDirectly_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalQueryFees?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_not?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_gt?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_lt?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_gte?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_lte?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexerQueryFeesCollected?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeesCollected_not?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeesCollected_gt?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeesCollected_lt?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeesCollected_gte?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeesCollected_lte?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeesCollected_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexerQueryFeesCollected_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexerQueryFeeRebates?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeeRebates_not?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeeRebates_gt?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeeRebates_lt?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeeRebates_gte?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeeRebates_lte?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeeRebates_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexerQueryFeeRebates_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDelegatorQueryFeeRebates?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorQueryFeeRebates_not?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorQueryFeeRebates_gt?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorQueryFeeRebates_lt?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorQueryFeeRebates_gte?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorQueryFeeRebates_lte?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorQueryFeeRebates_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDelegatorQueryFeeRebates_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCuratorQueryFees?: InputMaybe<Scalars['BigInt']>;
  totalCuratorQueryFees_not?: InputMaybe<Scalars['BigInt']>;
  totalCuratorQueryFees_gt?: InputMaybe<Scalars['BigInt']>;
  totalCuratorQueryFees_lt?: InputMaybe<Scalars['BigInt']>;
  totalCuratorQueryFees_gte?: InputMaybe<Scalars['BigInt']>;
  totalCuratorQueryFees_lte?: InputMaybe<Scalars['BigInt']>;
  totalCuratorQueryFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCuratorQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTaxedQueryFees?: InputMaybe<Scalars['BigInt']>;
  totalTaxedQueryFees_not?: InputMaybe<Scalars['BigInt']>;
  totalTaxedQueryFees_gt?: InputMaybe<Scalars['BigInt']>;
  totalTaxedQueryFees_lt?: InputMaybe<Scalars['BigInt']>;
  totalTaxedQueryFees_gte?: InputMaybe<Scalars['BigInt']>;
  totalTaxedQueryFees_lte?: InputMaybe<Scalars['BigInt']>;
  totalTaxedQueryFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTaxedQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnclaimedQueryFeeRebates?: InputMaybe<Scalars['BigInt']>;
  totalUnclaimedQueryFeeRebates_not?: InputMaybe<Scalars['BigInt']>;
  totalUnclaimedQueryFeeRebates_gt?: InputMaybe<Scalars['BigInt']>;
  totalUnclaimedQueryFeeRebates_lt?: InputMaybe<Scalars['BigInt']>;
  totalUnclaimedQueryFeeRebates_gte?: InputMaybe<Scalars['BigInt']>;
  totalUnclaimedQueryFeeRebates_lte?: InputMaybe<Scalars['BigInt']>;
  totalUnclaimedQueryFeeRebates_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnclaimedQueryFeeRebates_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexingRewards?: InputMaybe<Scalars['BigInt']>;
  totalIndexingRewards_not?: InputMaybe<Scalars['BigInt']>;
  totalIndexingRewards_gt?: InputMaybe<Scalars['BigInt']>;
  totalIndexingRewards_lt?: InputMaybe<Scalars['BigInt']>;
  totalIndexingRewards_gte?: InputMaybe<Scalars['BigInt']>;
  totalIndexingRewards_lte?: InputMaybe<Scalars['BigInt']>;
  totalIndexingRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexingRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexingDelegatorRewards?: InputMaybe<Scalars['BigInt']>;
  totalIndexingDelegatorRewards_not?: InputMaybe<Scalars['BigInt']>;
  totalIndexingDelegatorRewards_gt?: InputMaybe<Scalars['BigInt']>;
  totalIndexingDelegatorRewards_lt?: InputMaybe<Scalars['BigInt']>;
  totalIndexingDelegatorRewards_gte?: InputMaybe<Scalars['BigInt']>;
  totalIndexingDelegatorRewards_lte?: InputMaybe<Scalars['BigInt']>;
  totalIndexingDelegatorRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexingDelegatorRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexingIndexerRewards?: InputMaybe<Scalars['BigInt']>;
  totalIndexingIndexerRewards_not?: InputMaybe<Scalars['BigInt']>;
  totalIndexingIndexerRewards_gt?: InputMaybe<Scalars['BigInt']>;
  totalIndexingIndexerRewards_lt?: InputMaybe<Scalars['BigInt']>;
  totalIndexingIndexerRewards_gte?: InputMaybe<Scalars['BigInt']>;
  totalIndexingIndexerRewards_lte?: InputMaybe<Scalars['BigInt']>;
  totalIndexingIndexerRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexingIndexerRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  networkGRTIssuance?: InputMaybe<Scalars['BigInt']>;
  networkGRTIssuance_not?: InputMaybe<Scalars['BigInt']>;
  networkGRTIssuance_gt?: InputMaybe<Scalars['BigInt']>;
  networkGRTIssuance_lt?: InputMaybe<Scalars['BigInt']>;
  networkGRTIssuance_gte?: InputMaybe<Scalars['BigInt']>;
  networkGRTIssuance_lte?: InputMaybe<Scalars['BigInt']>;
  networkGRTIssuance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  networkGRTIssuance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  networkGRTIssuancePerBlock?: InputMaybe<Scalars['BigInt']>;
  networkGRTIssuancePerBlock_not?: InputMaybe<Scalars['BigInt']>;
  networkGRTIssuancePerBlock_gt?: InputMaybe<Scalars['BigInt']>;
  networkGRTIssuancePerBlock_lt?: InputMaybe<Scalars['BigInt']>;
  networkGRTIssuancePerBlock_gte?: InputMaybe<Scalars['BigInt']>;
  networkGRTIssuancePerBlock_lte?: InputMaybe<Scalars['BigInt']>;
  networkGRTIssuancePerBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  networkGRTIssuancePerBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  subgraphAvailabilityOracle?: InputMaybe<Scalars['Bytes']>;
  subgraphAvailabilityOracle_not?: InputMaybe<Scalars['Bytes']>;
  subgraphAvailabilityOracle_gt?: InputMaybe<Scalars['Bytes']>;
  subgraphAvailabilityOracle_lt?: InputMaybe<Scalars['Bytes']>;
  subgraphAvailabilityOracle_gte?: InputMaybe<Scalars['Bytes']>;
  subgraphAvailabilityOracle_lte?: InputMaybe<Scalars['Bytes']>;
  subgraphAvailabilityOracle_in?: InputMaybe<Array<Scalars['Bytes']>>;
  subgraphAvailabilityOracle_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  subgraphAvailabilityOracle_contains?: InputMaybe<Scalars['Bytes']>;
  subgraphAvailabilityOracle_not_contains?: InputMaybe<Scalars['Bytes']>;
  defaultReserveRatio?: InputMaybe<Scalars['Int']>;
  defaultReserveRatio_not?: InputMaybe<Scalars['Int']>;
  defaultReserveRatio_gt?: InputMaybe<Scalars['Int']>;
  defaultReserveRatio_lt?: InputMaybe<Scalars['Int']>;
  defaultReserveRatio_gte?: InputMaybe<Scalars['Int']>;
  defaultReserveRatio_lte?: InputMaybe<Scalars['Int']>;
  defaultReserveRatio_in?: InputMaybe<Array<Scalars['Int']>>;
  defaultReserveRatio_not_in?: InputMaybe<Array<Scalars['Int']>>;
  minimumCurationDeposit?: InputMaybe<Scalars['BigInt']>;
  minimumCurationDeposit_not?: InputMaybe<Scalars['BigInt']>;
  minimumCurationDeposit_gt?: InputMaybe<Scalars['BigInt']>;
  minimumCurationDeposit_lt?: InputMaybe<Scalars['BigInt']>;
  minimumCurationDeposit_gte?: InputMaybe<Scalars['BigInt']>;
  minimumCurationDeposit_lte?: InputMaybe<Scalars['BigInt']>;
  minimumCurationDeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  minimumCurationDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  curationTaxPercentage?: InputMaybe<Scalars['Int']>;
  curationTaxPercentage_not?: InputMaybe<Scalars['Int']>;
  curationTaxPercentage_gt?: InputMaybe<Scalars['Int']>;
  curationTaxPercentage_lt?: InputMaybe<Scalars['Int']>;
  curationTaxPercentage_gte?: InputMaybe<Scalars['Int']>;
  curationTaxPercentage_lte?: InputMaybe<Scalars['Int']>;
  curationTaxPercentage_in?: InputMaybe<Array<Scalars['Int']>>;
  curationTaxPercentage_not_in?: InputMaybe<Array<Scalars['Int']>>;
  ownerTaxPercentage?: InputMaybe<Scalars['Int']>;
  ownerTaxPercentage_not?: InputMaybe<Scalars['Int']>;
  ownerTaxPercentage_gt?: InputMaybe<Scalars['Int']>;
  ownerTaxPercentage_lt?: InputMaybe<Scalars['Int']>;
  ownerTaxPercentage_gte?: InputMaybe<Scalars['Int']>;
  ownerTaxPercentage_lte?: InputMaybe<Scalars['Int']>;
  ownerTaxPercentage_in?: InputMaybe<Array<Scalars['Int']>>;
  ownerTaxPercentage_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalSupply?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  GRTinUSD?: InputMaybe<Scalars['BigDecimal']>;
  GRTinUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  GRTinUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  GRTinUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  GRTinUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  GRTinUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  GRTinUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  GRTinUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  GRTinETH?: InputMaybe<Scalars['BigDecimal']>;
  GRTinETH_not?: InputMaybe<Scalars['BigDecimal']>;
  GRTinETH_gt?: InputMaybe<Scalars['BigDecimal']>;
  GRTinETH_lt?: InputMaybe<Scalars['BigDecimal']>;
  GRTinETH_gte?: InputMaybe<Scalars['BigDecimal']>;
  GRTinETH_lte?: InputMaybe<Scalars['BigDecimal']>;
  GRTinETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  GRTinETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalGRTMinted?: InputMaybe<Scalars['BigInt']>;
  totalGRTMinted_not?: InputMaybe<Scalars['BigInt']>;
  totalGRTMinted_gt?: InputMaybe<Scalars['BigInt']>;
  totalGRTMinted_lt?: InputMaybe<Scalars['BigInt']>;
  totalGRTMinted_gte?: InputMaybe<Scalars['BigInt']>;
  totalGRTMinted_lte?: InputMaybe<Scalars['BigInt']>;
  totalGRTMinted_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGRTMinted_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGRTBurned?: InputMaybe<Scalars['BigInt']>;
  totalGRTBurned_not?: InputMaybe<Scalars['BigInt']>;
  totalGRTBurned_gt?: InputMaybe<Scalars['BigInt']>;
  totalGRTBurned_lt?: InputMaybe<Scalars['BigInt']>;
  totalGRTBurned_gte?: InputMaybe<Scalars['BigInt']>;
  totalGRTBurned_lte?: InputMaybe<Scalars['BigInt']>;
  totalGRTBurned_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGRTBurned_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  epochLength?: InputMaybe<Scalars['Int']>;
  epochLength_not?: InputMaybe<Scalars['Int']>;
  epochLength_gt?: InputMaybe<Scalars['Int']>;
  epochLength_lt?: InputMaybe<Scalars['Int']>;
  epochLength_gte?: InputMaybe<Scalars['Int']>;
  epochLength_lte?: InputMaybe<Scalars['Int']>;
  epochLength_in?: InputMaybe<Array<Scalars['Int']>>;
  epochLength_not_in?: InputMaybe<Array<Scalars['Int']>>;
  lastRunEpoch?: InputMaybe<Scalars['Int']>;
  lastRunEpoch_not?: InputMaybe<Scalars['Int']>;
  lastRunEpoch_gt?: InputMaybe<Scalars['Int']>;
  lastRunEpoch_lt?: InputMaybe<Scalars['Int']>;
  lastRunEpoch_gte?: InputMaybe<Scalars['Int']>;
  lastRunEpoch_lte?: InputMaybe<Scalars['Int']>;
  lastRunEpoch_in?: InputMaybe<Array<Scalars['Int']>>;
  lastRunEpoch_not_in?: InputMaybe<Array<Scalars['Int']>>;
  lastLengthUpdateEpoch?: InputMaybe<Scalars['Int']>;
  lastLengthUpdateEpoch_not?: InputMaybe<Scalars['Int']>;
  lastLengthUpdateEpoch_gt?: InputMaybe<Scalars['Int']>;
  lastLengthUpdateEpoch_lt?: InputMaybe<Scalars['Int']>;
  lastLengthUpdateEpoch_gte?: InputMaybe<Scalars['Int']>;
  lastLengthUpdateEpoch_lte?: InputMaybe<Scalars['Int']>;
  lastLengthUpdateEpoch_in?: InputMaybe<Array<Scalars['Int']>>;
  lastLengthUpdateEpoch_not_in?: InputMaybe<Array<Scalars['Int']>>;
  lastLengthUpdateBlock?: InputMaybe<Scalars['Int']>;
  lastLengthUpdateBlock_not?: InputMaybe<Scalars['Int']>;
  lastLengthUpdateBlock_gt?: InputMaybe<Scalars['Int']>;
  lastLengthUpdateBlock_lt?: InputMaybe<Scalars['Int']>;
  lastLengthUpdateBlock_gte?: InputMaybe<Scalars['Int']>;
  lastLengthUpdateBlock_lte?: InputMaybe<Scalars['Int']>;
  lastLengthUpdateBlock_in?: InputMaybe<Array<Scalars['Int']>>;
  lastLengthUpdateBlock_not_in?: InputMaybe<Array<Scalars['Int']>>;
  currentEpoch?: InputMaybe<Scalars['Int']>;
  currentEpoch_not?: InputMaybe<Scalars['Int']>;
  currentEpoch_gt?: InputMaybe<Scalars['Int']>;
  currentEpoch_lt?: InputMaybe<Scalars['Int']>;
  currentEpoch_gte?: InputMaybe<Scalars['Int']>;
  currentEpoch_lte?: InputMaybe<Scalars['Int']>;
  currentEpoch_in?: InputMaybe<Array<Scalars['Int']>>;
  currentEpoch_not_in?: InputMaybe<Array<Scalars['Int']>>;
  indexerCount?: InputMaybe<Scalars['Int']>;
  indexerCount_not?: InputMaybe<Scalars['Int']>;
  indexerCount_gt?: InputMaybe<Scalars['Int']>;
  indexerCount_lt?: InputMaybe<Scalars['Int']>;
  indexerCount_gte?: InputMaybe<Scalars['Int']>;
  indexerCount_lte?: InputMaybe<Scalars['Int']>;
  indexerCount_in?: InputMaybe<Array<Scalars['Int']>>;
  indexerCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  stakedIndexersCount?: InputMaybe<Scalars['Int']>;
  stakedIndexersCount_not?: InputMaybe<Scalars['Int']>;
  stakedIndexersCount_gt?: InputMaybe<Scalars['Int']>;
  stakedIndexersCount_lt?: InputMaybe<Scalars['Int']>;
  stakedIndexersCount_gte?: InputMaybe<Scalars['Int']>;
  stakedIndexersCount_lte?: InputMaybe<Scalars['Int']>;
  stakedIndexersCount_in?: InputMaybe<Array<Scalars['Int']>>;
  stakedIndexersCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  delegatorCount?: InputMaybe<Scalars['Int']>;
  delegatorCount_not?: InputMaybe<Scalars['Int']>;
  delegatorCount_gt?: InputMaybe<Scalars['Int']>;
  delegatorCount_lt?: InputMaybe<Scalars['Int']>;
  delegatorCount_gte?: InputMaybe<Scalars['Int']>;
  delegatorCount_lte?: InputMaybe<Scalars['Int']>;
  delegatorCount_in?: InputMaybe<Array<Scalars['Int']>>;
  delegatorCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  activeDelegatorCount?: InputMaybe<Scalars['Int']>;
  activeDelegatorCount_not?: InputMaybe<Scalars['Int']>;
  activeDelegatorCount_gt?: InputMaybe<Scalars['Int']>;
  activeDelegatorCount_lt?: InputMaybe<Scalars['Int']>;
  activeDelegatorCount_gte?: InputMaybe<Scalars['Int']>;
  activeDelegatorCount_lte?: InputMaybe<Scalars['Int']>;
  activeDelegatorCount_in?: InputMaybe<Array<Scalars['Int']>>;
  activeDelegatorCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  delegationCount?: InputMaybe<Scalars['Int']>;
  delegationCount_not?: InputMaybe<Scalars['Int']>;
  delegationCount_gt?: InputMaybe<Scalars['Int']>;
  delegationCount_lt?: InputMaybe<Scalars['Int']>;
  delegationCount_gte?: InputMaybe<Scalars['Int']>;
  delegationCount_lte?: InputMaybe<Scalars['Int']>;
  delegationCount_in?: InputMaybe<Array<Scalars['Int']>>;
  delegationCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  activeDelegationCount?: InputMaybe<Scalars['Int']>;
  activeDelegationCount_not?: InputMaybe<Scalars['Int']>;
  activeDelegationCount_gt?: InputMaybe<Scalars['Int']>;
  activeDelegationCount_lt?: InputMaybe<Scalars['Int']>;
  activeDelegationCount_gte?: InputMaybe<Scalars['Int']>;
  activeDelegationCount_lte?: InputMaybe<Scalars['Int']>;
  activeDelegationCount_in?: InputMaybe<Array<Scalars['Int']>>;
  activeDelegationCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  curatorCount?: InputMaybe<Scalars['Int']>;
  curatorCount_not?: InputMaybe<Scalars['Int']>;
  curatorCount_gt?: InputMaybe<Scalars['Int']>;
  curatorCount_lt?: InputMaybe<Scalars['Int']>;
  curatorCount_gte?: InputMaybe<Scalars['Int']>;
  curatorCount_lte?: InputMaybe<Scalars['Int']>;
  curatorCount_in?: InputMaybe<Array<Scalars['Int']>>;
  curatorCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  activeCuratorCount?: InputMaybe<Scalars['Int']>;
  activeCuratorCount_not?: InputMaybe<Scalars['Int']>;
  activeCuratorCount_gt?: InputMaybe<Scalars['Int']>;
  activeCuratorCount_lt?: InputMaybe<Scalars['Int']>;
  activeCuratorCount_gte?: InputMaybe<Scalars['Int']>;
  activeCuratorCount_lte?: InputMaybe<Scalars['Int']>;
  activeCuratorCount_in?: InputMaybe<Array<Scalars['Int']>>;
  activeCuratorCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  subgraphCount?: InputMaybe<Scalars['Int']>;
  subgraphCount_not?: InputMaybe<Scalars['Int']>;
  subgraphCount_gt?: InputMaybe<Scalars['Int']>;
  subgraphCount_lt?: InputMaybe<Scalars['Int']>;
  subgraphCount_gte?: InputMaybe<Scalars['Int']>;
  subgraphCount_lte?: InputMaybe<Scalars['Int']>;
  subgraphCount_in?: InputMaybe<Array<Scalars['Int']>>;
  subgraphCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  activeSubgraphCount?: InputMaybe<Scalars['Int']>;
  activeSubgraphCount_not?: InputMaybe<Scalars['Int']>;
  activeSubgraphCount_gt?: InputMaybe<Scalars['Int']>;
  activeSubgraphCount_lt?: InputMaybe<Scalars['Int']>;
  activeSubgraphCount_gte?: InputMaybe<Scalars['Int']>;
  activeSubgraphCount_lte?: InputMaybe<Scalars['Int']>;
  activeSubgraphCount_in?: InputMaybe<Array<Scalars['Int']>>;
  activeSubgraphCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  subgraphDeploymentCount?: InputMaybe<Scalars['Int']>;
  subgraphDeploymentCount_not?: InputMaybe<Scalars['Int']>;
  subgraphDeploymentCount_gt?: InputMaybe<Scalars['Int']>;
  subgraphDeploymentCount_lt?: InputMaybe<Scalars['Int']>;
  subgraphDeploymentCount_gte?: InputMaybe<Scalars['Int']>;
  subgraphDeploymentCount_lte?: InputMaybe<Scalars['Int']>;
  subgraphDeploymentCount_in?: InputMaybe<Array<Scalars['Int']>>;
  subgraphDeploymentCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  epochCount?: InputMaybe<Scalars['Int']>;
  epochCount_not?: InputMaybe<Scalars['Int']>;
  epochCount_gt?: InputMaybe<Scalars['Int']>;
  epochCount_lt?: InputMaybe<Scalars['Int']>;
  epochCount_gte?: InputMaybe<Scalars['Int']>;
  epochCount_lte?: InputMaybe<Scalars['Int']>;
  epochCount_in?: InputMaybe<Array<Scalars['Int']>>;
  epochCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  arbitrator?: InputMaybe<Scalars['Bytes']>;
  arbitrator_not?: InputMaybe<Scalars['Bytes']>;
  arbitrator_gt?: InputMaybe<Scalars['Bytes']>;
  arbitrator_lt?: InputMaybe<Scalars['Bytes']>;
  arbitrator_gte?: InputMaybe<Scalars['Bytes']>;
  arbitrator_lte?: InputMaybe<Scalars['Bytes']>;
  arbitrator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  arbitrator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  arbitrator_contains?: InputMaybe<Scalars['Bytes']>;
  arbitrator_not_contains?: InputMaybe<Scalars['Bytes']>;
  querySlashingPercentage?: InputMaybe<Scalars['Int']>;
  querySlashingPercentage_not?: InputMaybe<Scalars['Int']>;
  querySlashingPercentage_gt?: InputMaybe<Scalars['Int']>;
  querySlashingPercentage_lt?: InputMaybe<Scalars['Int']>;
  querySlashingPercentage_gte?: InputMaybe<Scalars['Int']>;
  querySlashingPercentage_lte?: InputMaybe<Scalars['Int']>;
  querySlashingPercentage_in?: InputMaybe<Array<Scalars['Int']>>;
  querySlashingPercentage_not_in?: InputMaybe<Array<Scalars['Int']>>;
  indexingSlashingPercentage?: InputMaybe<Scalars['Int']>;
  indexingSlashingPercentage_not?: InputMaybe<Scalars['Int']>;
  indexingSlashingPercentage_gt?: InputMaybe<Scalars['Int']>;
  indexingSlashingPercentage_lt?: InputMaybe<Scalars['Int']>;
  indexingSlashingPercentage_gte?: InputMaybe<Scalars['Int']>;
  indexingSlashingPercentage_lte?: InputMaybe<Scalars['Int']>;
  indexingSlashingPercentage_in?: InputMaybe<Array<Scalars['Int']>>;
  indexingSlashingPercentage_not_in?: InputMaybe<Array<Scalars['Int']>>;
  slashingPercentage?: InputMaybe<Scalars['Int']>;
  slashingPercentage_not?: InputMaybe<Scalars['Int']>;
  slashingPercentage_gt?: InputMaybe<Scalars['Int']>;
  slashingPercentage_lt?: InputMaybe<Scalars['Int']>;
  slashingPercentage_gte?: InputMaybe<Scalars['Int']>;
  slashingPercentage_lte?: InputMaybe<Scalars['Int']>;
  slashingPercentage_in?: InputMaybe<Array<Scalars['Int']>>;
  slashingPercentage_not_in?: InputMaybe<Array<Scalars['Int']>>;
  minimumDisputeDeposit?: InputMaybe<Scalars['BigInt']>;
  minimumDisputeDeposit_not?: InputMaybe<Scalars['BigInt']>;
  minimumDisputeDeposit_gt?: InputMaybe<Scalars['BigInt']>;
  minimumDisputeDeposit_lt?: InputMaybe<Scalars['BigInt']>;
  minimumDisputeDeposit_gte?: InputMaybe<Scalars['BigInt']>;
  minimumDisputeDeposit_lte?: InputMaybe<Scalars['BigInt']>;
  minimumDisputeDeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  minimumDisputeDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fishermanRewardPercentage?: InputMaybe<Scalars['Int']>;
  fishermanRewardPercentage_not?: InputMaybe<Scalars['Int']>;
  fishermanRewardPercentage_gt?: InputMaybe<Scalars['Int']>;
  fishermanRewardPercentage_lt?: InputMaybe<Scalars['Int']>;
  fishermanRewardPercentage_gte?: InputMaybe<Scalars['Int']>;
  fishermanRewardPercentage_lte?: InputMaybe<Scalars['Int']>;
  fishermanRewardPercentage_in?: InputMaybe<Array<Scalars['Int']>>;
  fishermanRewardPercentage_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalGRTDeposited?: InputMaybe<Scalars['BigInt']>;
  totalGRTDeposited_not?: InputMaybe<Scalars['BigInt']>;
  totalGRTDeposited_gt?: InputMaybe<Scalars['BigInt']>;
  totalGRTDeposited_lt?: InputMaybe<Scalars['BigInt']>;
  totalGRTDeposited_gte?: InputMaybe<Scalars['BigInt']>;
  totalGRTDeposited_lte?: InputMaybe<Scalars['BigInt']>;
  totalGRTDeposited_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGRTDeposited_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGRTWithdrawnConfirmed?: InputMaybe<Scalars['BigInt']>;
  totalGRTWithdrawnConfirmed_not?: InputMaybe<Scalars['BigInt']>;
  totalGRTWithdrawnConfirmed_gt?: InputMaybe<Scalars['BigInt']>;
  totalGRTWithdrawnConfirmed_lt?: InputMaybe<Scalars['BigInt']>;
  totalGRTWithdrawnConfirmed_gte?: InputMaybe<Scalars['BigInt']>;
  totalGRTWithdrawnConfirmed_lte?: InputMaybe<Scalars['BigInt']>;
  totalGRTWithdrawnConfirmed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGRTWithdrawnConfirmed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGRTMintedFromL2?: InputMaybe<Scalars['BigInt']>;
  totalGRTMintedFromL2_not?: InputMaybe<Scalars['BigInt']>;
  totalGRTMintedFromL2_gt?: InputMaybe<Scalars['BigInt']>;
  totalGRTMintedFromL2_lt?: InputMaybe<Scalars['BigInt']>;
  totalGRTMintedFromL2_gte?: InputMaybe<Scalars['BigInt']>;
  totalGRTMintedFromL2_lte?: InputMaybe<Scalars['BigInt']>;
  totalGRTMintedFromL2_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGRTMintedFromL2_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGRTDepositedConfirmed?: InputMaybe<Scalars['BigInt']>;
  totalGRTDepositedConfirmed_not?: InputMaybe<Scalars['BigInt']>;
  totalGRTDepositedConfirmed_gt?: InputMaybe<Scalars['BigInt']>;
  totalGRTDepositedConfirmed_lt?: InputMaybe<Scalars['BigInt']>;
  totalGRTDepositedConfirmed_gte?: InputMaybe<Scalars['BigInt']>;
  totalGRTDepositedConfirmed_lte?: InputMaybe<Scalars['BigInt']>;
  totalGRTDepositedConfirmed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGRTDepositedConfirmed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGRTWithdrawn?: InputMaybe<Scalars['BigInt']>;
  totalGRTWithdrawn_not?: InputMaybe<Scalars['BigInt']>;
  totalGRTWithdrawn_gt?: InputMaybe<Scalars['BigInt']>;
  totalGRTWithdrawn_lt?: InputMaybe<Scalars['BigInt']>;
  totalGRTWithdrawn_gte?: InputMaybe<Scalars['BigInt']>;
  totalGRTWithdrawn_lte?: InputMaybe<Scalars['BigInt']>;
  totalGRTWithdrawn_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGRTWithdrawn_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentL1BlockNumber?: InputMaybe<Scalars['BigInt']>;
  currentL1BlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  currentL1BlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  currentL1BlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  currentL1BlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  currentL1BlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  currentL1BlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentL1BlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<GraphNetwork_filter>>>;
  or?: InputMaybe<Array<InputMaybe<GraphNetwork_filter>>>;
};

export type GraphNetwork_orderBy =
  | 'id'
  | 'controller'
  | 'graphToken'
  | 'epochManager'
  | 'epochManagerImplementations'
  | 'curation'
  | 'curationImplementations'
  | 'staking'
  | 'stakingImplementations'
  | 'disputeManager'
  | 'gns'
  | 'serviceRegistry'
  | 'rewardsManager'
  | 'rewardsManagerImplementations'
  | 'isPaused'
  | 'isPartialPaused'
  | 'governor'
  | 'pauseGuardian'
  | 'curationPercentage'
  | 'protocolFeePercentage'
  | 'delegationRatio'
  | 'channelDisputeEpochs'
  | 'maxAllocationEpochs'
  | 'thawingPeriod'
  | 'delegationParametersCooldown'
  | 'minimumIndexerStake'
  | 'slashers'
  | 'delegationUnbondingPeriod'
  | 'rebateRatio'
  | 'rebateAlpha'
  | 'rebateLambda'
  | 'delegationTaxPercentage'
  | 'assetHolders'
  | 'totalTokensStakedTransferredToL2'
  | 'totalDelegatedTokensTransferredToL2'
  | 'totalSignalledTokensTransferredToL2'
  | 'totalTokensStaked'
  | 'totalTokensClaimable'
  | 'totalUnstakedTokensLocked'
  | 'totalTokensAllocated'
  | 'totalDelegatedTokens'
  | 'totalTokensSignalled'
  | 'totalTokensSignalledAutoMigrate'
  | 'totalTokensSignalledDirectly'
  | 'totalQueryFees'
  | 'totalIndexerQueryFeesCollected'
  | 'totalIndexerQueryFeeRebates'
  | 'totalDelegatorQueryFeeRebates'
  | 'totalCuratorQueryFees'
  | 'totalTaxedQueryFees'
  | 'totalUnclaimedQueryFeeRebates'
  | 'totalIndexingRewards'
  | 'totalIndexingDelegatorRewards'
  | 'totalIndexingIndexerRewards'
  | 'networkGRTIssuance'
  | 'networkGRTIssuancePerBlock'
  | 'subgraphAvailabilityOracle'
  | 'defaultReserveRatio'
  | 'minimumCurationDeposit'
  | 'curationTaxPercentage'
  | 'ownerTaxPercentage'
  | 'totalSupply'
  | 'GRTinUSD'
  | 'GRTinETH'
  | 'totalGRTMinted'
  | 'totalGRTBurned'
  | 'epochLength'
  | 'lastRunEpoch'
  | 'lastLengthUpdateEpoch'
  | 'lastLengthUpdateBlock'
  | 'currentEpoch'
  | 'indexerCount'
  | 'stakedIndexersCount'
  | 'delegatorCount'
  | 'activeDelegatorCount'
  | 'delegationCount'
  | 'activeDelegationCount'
  | 'curatorCount'
  | 'activeCuratorCount'
  | 'subgraphCount'
  | 'activeSubgraphCount'
  | 'subgraphDeploymentCount'
  | 'epochCount'
  | 'arbitrator'
  | 'querySlashingPercentage'
  | 'indexingSlashingPercentage'
  | 'slashingPercentage'
  | 'minimumDisputeDeposit'
  | 'fishermanRewardPercentage'
  | 'totalGRTDeposited'
  | 'totalGRTWithdrawnConfirmed'
  | 'totalGRTMintedFromL2'
  | 'totalGRTDepositedConfirmed'
  | 'totalGRTWithdrawn'
  | 'currentL1BlockNumber';

/**
 * Metadata for the Indexer along with parameters and staking data
 *
 */
export type Indexer = {
  /** Eth address of Indexer */
  id: Scalars['ID'];
  /** Time this indexer was created */
  createdAt: Scalars['Int'];
  /** Graph account of this indexer */
  account: GraphAccount;
  /** Service registry URL for the indexer */
  url?: Maybe<Scalars['String']>;
  /** Geohash of the indexer. Shows where their indexer is located in the world */
  geoHash?: Maybe<Scalars['String']>;
  /** Default display name is the current default name. Used for filtered queries */
  defaultDisplayName?: Maybe<Scalars['String']>;
  /** CURRENT tokens staked in the protocol. Decreases on withdraw, not on lock */
  stakedTokens: Scalars['BigInt'];
  /** CURRENT  tokens allocated on all subgraphs */
  allocatedTokens: Scalars['BigInt'];
  /** NOT IMPLEMENTED - Tokens that have been unstaked and withdrawn */
  unstakedTokens: Scalars['BigInt'];
  /** CURRENT tokens locked */
  lockedTokens: Scalars['BigInt'];
  /** The block when the Indexers tokens unlock */
  tokensLockedUntil: Scalars['Int'];
  /** Active allocations of stake for this Indexer */
  allocations: Array<Allocation>;
  /** All allocations of stake for this Indexer (i.e. closed and active) */
  totalAllocations: Array<Allocation>;
  /** Number of active allocations of stake for this Indexer */
  allocationCount: Scalars['Int'];
  /** All allocations for this Indexer (i.e. closed and active) */
  totalAllocationCount: Scalars['BigInt'];
  /** Total query fees collected. Includes the portion given to delegators */
  queryFeesCollected: Scalars['BigInt'];
  /** Query fee rebate amount claimed from the protocol through rebates mechanism. Does not include portion given to delegators */
  queryFeeRebates: Scalars['BigInt'];
  /** Total indexing rewards earned by this indexer from inflation. Including delegation rewards */
  rewardsEarned: Scalars['BigInt'];
  /** The total amount of indexing rewards the indexer kept */
  indexerIndexingRewards: Scalars['BigInt'];
  /** The total amount of indexing rewards given to delegators */
  delegatorIndexingRewards: Scalars['BigInt'];
  /** Percentage of indexers' own rewards received in relation to its own stake. 1 (100%) means that the indexer is receiving the exact amount that is generated by his own stake */
  indexerRewardsOwnGenerationRatio: Scalars['BigDecimal'];
  /** Whether the indexer has been transferred from L1 to L2 partially or fully */
  transferredToL2: Scalars['Boolean'];
  /** Timestamp for the FIRST L1 -> L2 Transfer */
  firstTransferredToL2At?: Maybe<Scalars['BigInt']>;
  /** Block number for the FIRST L1 -> L2 Transfer */
  firstTransferredToL2AtBlockNumber?: Maybe<Scalars['BigInt']>;
  /** Transaction hash for the FIRST L1 -> L2 Transfer */
  firstTransferredToL2AtTx?: Maybe<Scalars['String']>;
  /** Timestamp for the latest L1 -> L2 Transfer */
  lastTransferredToL2At?: Maybe<Scalars['BigInt']>;
  /** Block number for the latest L1 -> L2 Transfer */
  lastTransferredToL2AtBlockNumber?: Maybe<Scalars['BigInt']>;
  /** Transaction hash for the latest L1 -> L2 Transfer */
  lastTransferredToL2AtTx?: Maybe<Scalars['String']>;
  /** Amount of GRT transferred to L2. Only visible from L1, as there's no events for it on L2 */
  stakedTokensTransferredToL2: Scalars['BigInt'];
  /** ID of the indexer on L2. Null if it's not transferred */
  idOnL2?: Maybe<Scalars['String']>;
  /** ID of the indexer on L1. Null if it's not transferred */
  idOnL1?: Maybe<Scalars['String']>;
  /** Amount of delegated tokens that can be eligible for rewards */
  delegatedCapacity: Scalars['BigInt'];
  /** Total token capacity = delegatedCapacity + stakedTokens */
  tokenCapacity: Scalars['BigInt'];
  /** Stake available to earn rewards. tokenCapacity - allocationTokens - lockedTokens */
  availableStake: Scalars['BigInt'];
  /** Delegators to this Indexer */
  delegators: Array<DelegatedStake>;
  /** CURRENT tokens delegated to the indexer */
  delegatedTokens: Scalars['BigInt'];
  /** Ratio between the amount of the indexers own stake over the total usable stake. */
  ownStakeRatio: Scalars['BigDecimal'];
  /** Ratio between the amount of delegated stake over the total usable stake. */
  delegatedStakeRatio: Scalars['BigDecimal'];
  /** Total shares of the delegator pool */
  delegatorShares: Scalars['BigInt'];
  /** Exchange rate of of tokens received for each share */
  delegationExchangeRate: Scalars['BigDecimal'];
  /** The percent of indexing rewards generated by the total stake that the Indexer keeps for itself. In parts per million */
  indexingRewardCut: Scalars['Int'];
  /** The percent of indexing rewards generated by the delegated stake that the Indexer keeps for itself */
  indexingRewardEffectiveCut: Scalars['BigDecimal'];
  /** The percent of reward dilution delegators experience because of overdelegation. Overdelegated stake can't be used to generate rewards but still gets accounted while distributing the generated rewards. This causes dilution of the rewards for the rest of the pool. */
  overDelegationDilution: Scalars['BigDecimal'];
  /** The total amount of query fees given to delegators */
  delegatorQueryFees: Scalars['BigInt'];
  /** The percent of query rebate rewards the Indexer keeps for itself. In parts per million */
  queryFeeCut: Scalars['Int'];
  /** The percent of query rebate rewards generated by the delegated stake that the Indexer keeps for itself */
  queryFeeEffectiveCut: Scalars['BigDecimal'];
  /** Amount of blocks a delegator chooses for the waiting period for changing their params */
  delegatorParameterCooldown: Scalars['Int'];
  /** Block number for the last time the delegator updated their parameters */
  lastDelegationParameterUpdate: Scalars['Int'];
  /** Count of how many times this indexer has been forced to close an allocation */
  forcedClosures: Scalars['Int'];
  /** NOT IMPLEMENTED - Total return this indexer has earned */
  totalReturn: Scalars['BigDecimal'];
  /** NOT IMPLEMENTED - Annualized rate of return for the indexer */
  annualizedReturn: Scalars['BigDecimal'];
  /** NOT IMPLEMENTED - Staking efficiency of the indexer */
  stakingEfficiency: Scalars['BigDecimal'];
  /** CURRENT  tokens NOT allocated on all subgraphs */
  notAllocatedTokens: Scalars['BigInt'];
  delegationRemaining: Scalars['BigInt'];
  /** The total amount of query fees given to indexer */
  indexerQueryFees: Scalars['BigInt'];
  delegatorsCount: Scalars['Int'];
};


/**
 * Metadata for the Indexer along with parameters and staking data
 *
 */
export type IndexerallocationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Allocation_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Allocation_filter>;
};


/**
 * Metadata for the Indexer along with parameters and staking data
 *
 */
export type IndexertotalAllocationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Allocation_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Allocation_filter>;
};


/**
 * Metadata for the Indexer along with parameters and staking data
 *
 */
export type IndexerdelegatorsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DelegatedStake_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DelegatedStake_filter>;
};

/**
 * For Counting Indexers count of deployment
 *
 */
export type IndexerDeployment = {
  /** Indexer-Deployment */
  id: Scalars['ID'];
  allocations: Scalars['Int'];
};

export type IndexerDeployment_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  allocations?: InputMaybe<Scalars['Int']>;
  allocations_not?: InputMaybe<Scalars['Int']>;
  allocations_gt?: InputMaybe<Scalars['Int']>;
  allocations_lt?: InputMaybe<Scalars['Int']>;
  allocations_gte?: InputMaybe<Scalars['Int']>;
  allocations_lte?: InputMaybe<Scalars['Int']>;
  allocations_in?: InputMaybe<Array<Scalars['Int']>>;
  allocations_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<IndexerDeployment_filter>>>;
  or?: InputMaybe<Array<InputMaybe<IndexerDeployment_filter>>>;
};

export type IndexerDeployment_orderBy =
  | 'id'
  | 'allocations';

export type Indexer_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  account?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_?: InputMaybe<GraphAccount_filter>;
  url?: InputMaybe<Scalars['String']>;
  url_not?: InputMaybe<Scalars['String']>;
  url_gt?: InputMaybe<Scalars['String']>;
  url_lt?: InputMaybe<Scalars['String']>;
  url_gte?: InputMaybe<Scalars['String']>;
  url_lte?: InputMaybe<Scalars['String']>;
  url_in?: InputMaybe<Array<Scalars['String']>>;
  url_not_in?: InputMaybe<Array<Scalars['String']>>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_contains_nocase?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_contains_nocase?: InputMaybe<Scalars['String']>;
  url_starts_with?: InputMaybe<Scalars['String']>;
  url_starts_with_nocase?: InputMaybe<Scalars['String']>;
  url_not_starts_with?: InputMaybe<Scalars['String']>;
  url_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  url_ends_with?: InputMaybe<Scalars['String']>;
  url_ends_with_nocase?: InputMaybe<Scalars['String']>;
  url_not_ends_with?: InputMaybe<Scalars['String']>;
  url_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  geoHash?: InputMaybe<Scalars['String']>;
  geoHash_not?: InputMaybe<Scalars['String']>;
  geoHash_gt?: InputMaybe<Scalars['String']>;
  geoHash_lt?: InputMaybe<Scalars['String']>;
  geoHash_gte?: InputMaybe<Scalars['String']>;
  geoHash_lte?: InputMaybe<Scalars['String']>;
  geoHash_in?: InputMaybe<Array<Scalars['String']>>;
  geoHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  geoHash_contains?: InputMaybe<Scalars['String']>;
  geoHash_contains_nocase?: InputMaybe<Scalars['String']>;
  geoHash_not_contains?: InputMaybe<Scalars['String']>;
  geoHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  geoHash_starts_with?: InputMaybe<Scalars['String']>;
  geoHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  geoHash_not_starts_with?: InputMaybe<Scalars['String']>;
  geoHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  geoHash_ends_with?: InputMaybe<Scalars['String']>;
  geoHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  geoHash_not_ends_with?: InputMaybe<Scalars['String']>;
  geoHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not?: InputMaybe<Scalars['String']>;
  defaultDisplayName_gt?: InputMaybe<Scalars['String']>;
  defaultDisplayName_lt?: InputMaybe<Scalars['String']>;
  defaultDisplayName_gte?: InputMaybe<Scalars['String']>;
  defaultDisplayName_lte?: InputMaybe<Scalars['String']>;
  defaultDisplayName_in?: InputMaybe<Array<Scalars['String']>>;
  defaultDisplayName_not_in?: InputMaybe<Array<Scalars['String']>>;
  defaultDisplayName_contains?: InputMaybe<Scalars['String']>;
  defaultDisplayName_contains_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_contains?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_starts_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_starts_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_ends_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_ends_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stakedTokens?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_not?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  allocatedTokens?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_not?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  allocatedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unstakedTokens?: InputMaybe<Scalars['BigInt']>;
  unstakedTokens_not?: InputMaybe<Scalars['BigInt']>;
  unstakedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  unstakedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  unstakedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  unstakedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  unstakedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unstakedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lockedTokens?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_not?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lockedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokensLockedUntil?: InputMaybe<Scalars['Int']>;
  tokensLockedUntil_not?: InputMaybe<Scalars['Int']>;
  tokensLockedUntil_gt?: InputMaybe<Scalars['Int']>;
  tokensLockedUntil_lt?: InputMaybe<Scalars['Int']>;
  tokensLockedUntil_gte?: InputMaybe<Scalars['Int']>;
  tokensLockedUntil_lte?: InputMaybe<Scalars['Int']>;
  tokensLockedUntil_in?: InputMaybe<Array<Scalars['Int']>>;
  tokensLockedUntil_not_in?: InputMaybe<Array<Scalars['Int']>>;
  allocations_?: InputMaybe<Allocation_filter>;
  totalAllocations_?: InputMaybe<Allocation_filter>;
  allocationCount?: InputMaybe<Scalars['Int']>;
  allocationCount_not?: InputMaybe<Scalars['Int']>;
  allocationCount_gt?: InputMaybe<Scalars['Int']>;
  allocationCount_lt?: InputMaybe<Scalars['Int']>;
  allocationCount_gte?: InputMaybe<Scalars['Int']>;
  allocationCount_lte?: InputMaybe<Scalars['Int']>;
  allocationCount_in?: InputMaybe<Array<Scalars['Int']>>;
  allocationCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalAllocationCount?: InputMaybe<Scalars['BigInt']>;
  totalAllocationCount_not?: InputMaybe<Scalars['BigInt']>;
  totalAllocationCount_gt?: InputMaybe<Scalars['BigInt']>;
  totalAllocationCount_lt?: InputMaybe<Scalars['BigInt']>;
  totalAllocationCount_gte?: InputMaybe<Scalars['BigInt']>;
  totalAllocationCount_lte?: InputMaybe<Scalars['BigInt']>;
  totalAllocationCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAllocationCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeesCollected?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_not?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_gt?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_lt?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_gte?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_lte?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeesCollected_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeeRebates?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_not?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_gt?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_lt?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_gte?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_lte?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeeRebates_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardsEarned?: InputMaybe<Scalars['BigInt']>;
  rewardsEarned_not?: InputMaybe<Scalars['BigInt']>;
  rewardsEarned_gt?: InputMaybe<Scalars['BigInt']>;
  rewardsEarned_lt?: InputMaybe<Scalars['BigInt']>;
  rewardsEarned_gte?: InputMaybe<Scalars['BigInt']>;
  rewardsEarned_lte?: InputMaybe<Scalars['BigInt']>;
  rewardsEarned_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardsEarned_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexerIndexingRewards?: InputMaybe<Scalars['BigInt']>;
  indexerIndexingRewards_not?: InputMaybe<Scalars['BigInt']>;
  indexerIndexingRewards_gt?: InputMaybe<Scalars['BigInt']>;
  indexerIndexingRewards_lt?: InputMaybe<Scalars['BigInt']>;
  indexerIndexingRewards_gte?: InputMaybe<Scalars['BigInt']>;
  indexerIndexingRewards_lte?: InputMaybe<Scalars['BigInt']>;
  indexerIndexingRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexerIndexingRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatorIndexingRewards?: InputMaybe<Scalars['BigInt']>;
  delegatorIndexingRewards_not?: InputMaybe<Scalars['BigInt']>;
  delegatorIndexingRewards_gt?: InputMaybe<Scalars['BigInt']>;
  delegatorIndexingRewards_lt?: InputMaybe<Scalars['BigInt']>;
  delegatorIndexingRewards_gte?: InputMaybe<Scalars['BigInt']>;
  delegatorIndexingRewards_lte?: InputMaybe<Scalars['BigInt']>;
  delegatorIndexingRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatorIndexingRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexerRewardsOwnGenerationRatio?: InputMaybe<Scalars['BigDecimal']>;
  indexerRewardsOwnGenerationRatio_not?: InputMaybe<Scalars['BigDecimal']>;
  indexerRewardsOwnGenerationRatio_gt?: InputMaybe<Scalars['BigDecimal']>;
  indexerRewardsOwnGenerationRatio_lt?: InputMaybe<Scalars['BigDecimal']>;
  indexerRewardsOwnGenerationRatio_gte?: InputMaybe<Scalars['BigDecimal']>;
  indexerRewardsOwnGenerationRatio_lte?: InputMaybe<Scalars['BigDecimal']>;
  indexerRewardsOwnGenerationRatio_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  indexerRewardsOwnGenerationRatio_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  transferredToL2?: InputMaybe<Scalars['Boolean']>;
  transferredToL2_not?: InputMaybe<Scalars['Boolean']>;
  transferredToL2_in?: InputMaybe<Array<Scalars['Boolean']>>;
  transferredToL2_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  firstTransferredToL2At?: InputMaybe<Scalars['BigInt']>;
  firstTransferredToL2At_not?: InputMaybe<Scalars['BigInt']>;
  firstTransferredToL2At_gt?: InputMaybe<Scalars['BigInt']>;
  firstTransferredToL2At_lt?: InputMaybe<Scalars['BigInt']>;
  firstTransferredToL2At_gte?: InputMaybe<Scalars['BigInt']>;
  firstTransferredToL2At_lte?: InputMaybe<Scalars['BigInt']>;
  firstTransferredToL2At_in?: InputMaybe<Array<Scalars['BigInt']>>;
  firstTransferredToL2At_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  firstTransferredToL2AtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  firstTransferredToL2AtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  firstTransferredToL2AtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  firstTransferredToL2AtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  firstTransferredToL2AtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  firstTransferredToL2AtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  firstTransferredToL2AtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  firstTransferredToL2AtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  firstTransferredToL2AtTx?: InputMaybe<Scalars['String']>;
  firstTransferredToL2AtTx_not?: InputMaybe<Scalars['String']>;
  firstTransferredToL2AtTx_gt?: InputMaybe<Scalars['String']>;
  firstTransferredToL2AtTx_lt?: InputMaybe<Scalars['String']>;
  firstTransferredToL2AtTx_gte?: InputMaybe<Scalars['String']>;
  firstTransferredToL2AtTx_lte?: InputMaybe<Scalars['String']>;
  firstTransferredToL2AtTx_in?: InputMaybe<Array<Scalars['String']>>;
  firstTransferredToL2AtTx_not_in?: InputMaybe<Array<Scalars['String']>>;
  firstTransferredToL2AtTx_contains?: InputMaybe<Scalars['String']>;
  firstTransferredToL2AtTx_contains_nocase?: InputMaybe<Scalars['String']>;
  firstTransferredToL2AtTx_not_contains?: InputMaybe<Scalars['String']>;
  firstTransferredToL2AtTx_not_contains_nocase?: InputMaybe<Scalars['String']>;
  firstTransferredToL2AtTx_starts_with?: InputMaybe<Scalars['String']>;
  firstTransferredToL2AtTx_starts_with_nocase?: InputMaybe<Scalars['String']>;
  firstTransferredToL2AtTx_not_starts_with?: InputMaybe<Scalars['String']>;
  firstTransferredToL2AtTx_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  firstTransferredToL2AtTx_ends_with?: InputMaybe<Scalars['String']>;
  firstTransferredToL2AtTx_ends_with_nocase?: InputMaybe<Scalars['String']>;
  firstTransferredToL2AtTx_not_ends_with?: InputMaybe<Scalars['String']>;
  firstTransferredToL2AtTx_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  lastTransferredToL2At?: InputMaybe<Scalars['BigInt']>;
  lastTransferredToL2At_not?: InputMaybe<Scalars['BigInt']>;
  lastTransferredToL2At_gt?: InputMaybe<Scalars['BigInt']>;
  lastTransferredToL2At_lt?: InputMaybe<Scalars['BigInt']>;
  lastTransferredToL2At_gte?: InputMaybe<Scalars['BigInt']>;
  lastTransferredToL2At_lte?: InputMaybe<Scalars['BigInt']>;
  lastTransferredToL2At_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastTransferredToL2At_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastTransferredToL2AtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  lastTransferredToL2AtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  lastTransferredToL2AtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  lastTransferredToL2AtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  lastTransferredToL2AtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  lastTransferredToL2AtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  lastTransferredToL2AtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastTransferredToL2AtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastTransferredToL2AtTx?: InputMaybe<Scalars['String']>;
  lastTransferredToL2AtTx_not?: InputMaybe<Scalars['String']>;
  lastTransferredToL2AtTx_gt?: InputMaybe<Scalars['String']>;
  lastTransferredToL2AtTx_lt?: InputMaybe<Scalars['String']>;
  lastTransferredToL2AtTx_gte?: InputMaybe<Scalars['String']>;
  lastTransferredToL2AtTx_lte?: InputMaybe<Scalars['String']>;
  lastTransferredToL2AtTx_in?: InputMaybe<Array<Scalars['String']>>;
  lastTransferredToL2AtTx_not_in?: InputMaybe<Array<Scalars['String']>>;
  lastTransferredToL2AtTx_contains?: InputMaybe<Scalars['String']>;
  lastTransferredToL2AtTx_contains_nocase?: InputMaybe<Scalars['String']>;
  lastTransferredToL2AtTx_not_contains?: InputMaybe<Scalars['String']>;
  lastTransferredToL2AtTx_not_contains_nocase?: InputMaybe<Scalars['String']>;
  lastTransferredToL2AtTx_starts_with?: InputMaybe<Scalars['String']>;
  lastTransferredToL2AtTx_starts_with_nocase?: InputMaybe<Scalars['String']>;
  lastTransferredToL2AtTx_not_starts_with?: InputMaybe<Scalars['String']>;
  lastTransferredToL2AtTx_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  lastTransferredToL2AtTx_ends_with?: InputMaybe<Scalars['String']>;
  lastTransferredToL2AtTx_ends_with_nocase?: InputMaybe<Scalars['String']>;
  lastTransferredToL2AtTx_not_ends_with?: InputMaybe<Scalars['String']>;
  lastTransferredToL2AtTx_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stakedTokensTransferredToL2?: InputMaybe<Scalars['BigInt']>;
  stakedTokensTransferredToL2_not?: InputMaybe<Scalars['BigInt']>;
  stakedTokensTransferredToL2_gt?: InputMaybe<Scalars['BigInt']>;
  stakedTokensTransferredToL2_lt?: InputMaybe<Scalars['BigInt']>;
  stakedTokensTransferredToL2_gte?: InputMaybe<Scalars['BigInt']>;
  stakedTokensTransferredToL2_lte?: InputMaybe<Scalars['BigInt']>;
  stakedTokensTransferredToL2_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakedTokensTransferredToL2_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  idOnL2?: InputMaybe<Scalars['String']>;
  idOnL2_not?: InputMaybe<Scalars['String']>;
  idOnL2_gt?: InputMaybe<Scalars['String']>;
  idOnL2_lt?: InputMaybe<Scalars['String']>;
  idOnL2_gte?: InputMaybe<Scalars['String']>;
  idOnL2_lte?: InputMaybe<Scalars['String']>;
  idOnL2_in?: InputMaybe<Array<Scalars['String']>>;
  idOnL2_not_in?: InputMaybe<Array<Scalars['String']>>;
  idOnL2_contains?: InputMaybe<Scalars['String']>;
  idOnL2_contains_nocase?: InputMaybe<Scalars['String']>;
  idOnL2_not_contains?: InputMaybe<Scalars['String']>;
  idOnL2_not_contains_nocase?: InputMaybe<Scalars['String']>;
  idOnL2_starts_with?: InputMaybe<Scalars['String']>;
  idOnL2_starts_with_nocase?: InputMaybe<Scalars['String']>;
  idOnL2_not_starts_with?: InputMaybe<Scalars['String']>;
  idOnL2_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  idOnL2_ends_with?: InputMaybe<Scalars['String']>;
  idOnL2_ends_with_nocase?: InputMaybe<Scalars['String']>;
  idOnL2_not_ends_with?: InputMaybe<Scalars['String']>;
  idOnL2_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  idOnL1?: InputMaybe<Scalars['String']>;
  idOnL1_not?: InputMaybe<Scalars['String']>;
  idOnL1_gt?: InputMaybe<Scalars['String']>;
  idOnL1_lt?: InputMaybe<Scalars['String']>;
  idOnL1_gte?: InputMaybe<Scalars['String']>;
  idOnL1_lte?: InputMaybe<Scalars['String']>;
  idOnL1_in?: InputMaybe<Array<Scalars['String']>>;
  idOnL1_not_in?: InputMaybe<Array<Scalars['String']>>;
  idOnL1_contains?: InputMaybe<Scalars['String']>;
  idOnL1_contains_nocase?: InputMaybe<Scalars['String']>;
  idOnL1_not_contains?: InputMaybe<Scalars['String']>;
  idOnL1_not_contains_nocase?: InputMaybe<Scalars['String']>;
  idOnL1_starts_with?: InputMaybe<Scalars['String']>;
  idOnL1_starts_with_nocase?: InputMaybe<Scalars['String']>;
  idOnL1_not_starts_with?: InputMaybe<Scalars['String']>;
  idOnL1_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  idOnL1_ends_with?: InputMaybe<Scalars['String']>;
  idOnL1_ends_with_nocase?: InputMaybe<Scalars['String']>;
  idOnL1_not_ends_with?: InputMaybe<Scalars['String']>;
  idOnL1_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  delegatedCapacity?: InputMaybe<Scalars['BigInt']>;
  delegatedCapacity_not?: InputMaybe<Scalars['BigInt']>;
  delegatedCapacity_gt?: InputMaybe<Scalars['BigInt']>;
  delegatedCapacity_lt?: InputMaybe<Scalars['BigInt']>;
  delegatedCapacity_gte?: InputMaybe<Scalars['BigInt']>;
  delegatedCapacity_lte?: InputMaybe<Scalars['BigInt']>;
  delegatedCapacity_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatedCapacity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenCapacity?: InputMaybe<Scalars['BigInt']>;
  tokenCapacity_not?: InputMaybe<Scalars['BigInt']>;
  tokenCapacity_gt?: InputMaybe<Scalars['BigInt']>;
  tokenCapacity_lt?: InputMaybe<Scalars['BigInt']>;
  tokenCapacity_gte?: InputMaybe<Scalars['BigInt']>;
  tokenCapacity_lte?: InputMaybe<Scalars['BigInt']>;
  tokenCapacity_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenCapacity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  availableStake?: InputMaybe<Scalars['BigInt']>;
  availableStake_not?: InputMaybe<Scalars['BigInt']>;
  availableStake_gt?: InputMaybe<Scalars['BigInt']>;
  availableStake_lt?: InputMaybe<Scalars['BigInt']>;
  availableStake_gte?: InputMaybe<Scalars['BigInt']>;
  availableStake_lte?: InputMaybe<Scalars['BigInt']>;
  availableStake_in?: InputMaybe<Array<Scalars['BigInt']>>;
  availableStake_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegators_?: InputMaybe<DelegatedStake_filter>;
  delegatedTokens?: InputMaybe<Scalars['BigInt']>;
  delegatedTokens_not?: InputMaybe<Scalars['BigInt']>;
  delegatedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  delegatedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  delegatedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  delegatedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  delegatedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  ownStakeRatio?: InputMaybe<Scalars['BigDecimal']>;
  ownStakeRatio_not?: InputMaybe<Scalars['BigDecimal']>;
  ownStakeRatio_gt?: InputMaybe<Scalars['BigDecimal']>;
  ownStakeRatio_lt?: InputMaybe<Scalars['BigDecimal']>;
  ownStakeRatio_gte?: InputMaybe<Scalars['BigDecimal']>;
  ownStakeRatio_lte?: InputMaybe<Scalars['BigDecimal']>;
  ownStakeRatio_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  ownStakeRatio_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  delegatedStakeRatio?: InputMaybe<Scalars['BigDecimal']>;
  delegatedStakeRatio_not?: InputMaybe<Scalars['BigDecimal']>;
  delegatedStakeRatio_gt?: InputMaybe<Scalars['BigDecimal']>;
  delegatedStakeRatio_lt?: InputMaybe<Scalars['BigDecimal']>;
  delegatedStakeRatio_gte?: InputMaybe<Scalars['BigDecimal']>;
  delegatedStakeRatio_lte?: InputMaybe<Scalars['BigDecimal']>;
  delegatedStakeRatio_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  delegatedStakeRatio_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  delegatorShares?: InputMaybe<Scalars['BigInt']>;
  delegatorShares_not?: InputMaybe<Scalars['BigInt']>;
  delegatorShares_gt?: InputMaybe<Scalars['BigInt']>;
  delegatorShares_lt?: InputMaybe<Scalars['BigInt']>;
  delegatorShares_gte?: InputMaybe<Scalars['BigInt']>;
  delegatorShares_lte?: InputMaybe<Scalars['BigInt']>;
  delegatorShares_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatorShares_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegationExchangeRate?: InputMaybe<Scalars['BigDecimal']>;
  delegationExchangeRate_not?: InputMaybe<Scalars['BigDecimal']>;
  delegationExchangeRate_gt?: InputMaybe<Scalars['BigDecimal']>;
  delegationExchangeRate_lt?: InputMaybe<Scalars['BigDecimal']>;
  delegationExchangeRate_gte?: InputMaybe<Scalars['BigDecimal']>;
  delegationExchangeRate_lte?: InputMaybe<Scalars['BigDecimal']>;
  delegationExchangeRate_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  delegationExchangeRate_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  indexingRewardCut?: InputMaybe<Scalars['Int']>;
  indexingRewardCut_not?: InputMaybe<Scalars['Int']>;
  indexingRewardCut_gt?: InputMaybe<Scalars['Int']>;
  indexingRewardCut_lt?: InputMaybe<Scalars['Int']>;
  indexingRewardCut_gte?: InputMaybe<Scalars['Int']>;
  indexingRewardCut_lte?: InputMaybe<Scalars['Int']>;
  indexingRewardCut_in?: InputMaybe<Array<Scalars['Int']>>;
  indexingRewardCut_not_in?: InputMaybe<Array<Scalars['Int']>>;
  indexingRewardEffectiveCut?: InputMaybe<Scalars['BigDecimal']>;
  indexingRewardEffectiveCut_not?: InputMaybe<Scalars['BigDecimal']>;
  indexingRewardEffectiveCut_gt?: InputMaybe<Scalars['BigDecimal']>;
  indexingRewardEffectiveCut_lt?: InputMaybe<Scalars['BigDecimal']>;
  indexingRewardEffectiveCut_gte?: InputMaybe<Scalars['BigDecimal']>;
  indexingRewardEffectiveCut_lte?: InputMaybe<Scalars['BigDecimal']>;
  indexingRewardEffectiveCut_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  indexingRewardEffectiveCut_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  overDelegationDilution?: InputMaybe<Scalars['BigDecimal']>;
  overDelegationDilution_not?: InputMaybe<Scalars['BigDecimal']>;
  overDelegationDilution_gt?: InputMaybe<Scalars['BigDecimal']>;
  overDelegationDilution_lt?: InputMaybe<Scalars['BigDecimal']>;
  overDelegationDilution_gte?: InputMaybe<Scalars['BigDecimal']>;
  overDelegationDilution_lte?: InputMaybe<Scalars['BigDecimal']>;
  overDelegationDilution_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  overDelegationDilution_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  delegatorQueryFees?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_not?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_gt?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_lt?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_gte?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_lte?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatorQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeeCut?: InputMaybe<Scalars['Int']>;
  queryFeeCut_not?: InputMaybe<Scalars['Int']>;
  queryFeeCut_gt?: InputMaybe<Scalars['Int']>;
  queryFeeCut_lt?: InputMaybe<Scalars['Int']>;
  queryFeeCut_gte?: InputMaybe<Scalars['Int']>;
  queryFeeCut_lte?: InputMaybe<Scalars['Int']>;
  queryFeeCut_in?: InputMaybe<Array<Scalars['Int']>>;
  queryFeeCut_not_in?: InputMaybe<Array<Scalars['Int']>>;
  queryFeeEffectiveCut?: InputMaybe<Scalars['BigDecimal']>;
  queryFeeEffectiveCut_not?: InputMaybe<Scalars['BigDecimal']>;
  queryFeeEffectiveCut_gt?: InputMaybe<Scalars['BigDecimal']>;
  queryFeeEffectiveCut_lt?: InputMaybe<Scalars['BigDecimal']>;
  queryFeeEffectiveCut_gte?: InputMaybe<Scalars['BigDecimal']>;
  queryFeeEffectiveCut_lte?: InputMaybe<Scalars['BigDecimal']>;
  queryFeeEffectiveCut_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  queryFeeEffectiveCut_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  delegatorParameterCooldown?: InputMaybe<Scalars['Int']>;
  delegatorParameterCooldown_not?: InputMaybe<Scalars['Int']>;
  delegatorParameterCooldown_gt?: InputMaybe<Scalars['Int']>;
  delegatorParameterCooldown_lt?: InputMaybe<Scalars['Int']>;
  delegatorParameterCooldown_gte?: InputMaybe<Scalars['Int']>;
  delegatorParameterCooldown_lte?: InputMaybe<Scalars['Int']>;
  delegatorParameterCooldown_in?: InputMaybe<Array<Scalars['Int']>>;
  delegatorParameterCooldown_not_in?: InputMaybe<Array<Scalars['Int']>>;
  lastDelegationParameterUpdate?: InputMaybe<Scalars['Int']>;
  lastDelegationParameterUpdate_not?: InputMaybe<Scalars['Int']>;
  lastDelegationParameterUpdate_gt?: InputMaybe<Scalars['Int']>;
  lastDelegationParameterUpdate_lt?: InputMaybe<Scalars['Int']>;
  lastDelegationParameterUpdate_gte?: InputMaybe<Scalars['Int']>;
  lastDelegationParameterUpdate_lte?: InputMaybe<Scalars['Int']>;
  lastDelegationParameterUpdate_in?: InputMaybe<Array<Scalars['Int']>>;
  lastDelegationParameterUpdate_not_in?: InputMaybe<Array<Scalars['Int']>>;
  forcedClosures?: InputMaybe<Scalars['Int']>;
  forcedClosures_not?: InputMaybe<Scalars['Int']>;
  forcedClosures_gt?: InputMaybe<Scalars['Int']>;
  forcedClosures_lt?: InputMaybe<Scalars['Int']>;
  forcedClosures_gte?: InputMaybe<Scalars['Int']>;
  forcedClosures_lte?: InputMaybe<Scalars['Int']>;
  forcedClosures_in?: InputMaybe<Array<Scalars['Int']>>;
  forcedClosures_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalReturn?: InputMaybe<Scalars['BigDecimal']>;
  totalReturn_not?: InputMaybe<Scalars['BigDecimal']>;
  totalReturn_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalReturn_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalReturn_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalReturn_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalReturn_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalReturn_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  annualizedReturn?: InputMaybe<Scalars['BigDecimal']>;
  annualizedReturn_not?: InputMaybe<Scalars['BigDecimal']>;
  annualizedReturn_gt?: InputMaybe<Scalars['BigDecimal']>;
  annualizedReturn_lt?: InputMaybe<Scalars['BigDecimal']>;
  annualizedReturn_gte?: InputMaybe<Scalars['BigDecimal']>;
  annualizedReturn_lte?: InputMaybe<Scalars['BigDecimal']>;
  annualizedReturn_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  annualizedReturn_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  stakingEfficiency?: InputMaybe<Scalars['BigDecimal']>;
  stakingEfficiency_not?: InputMaybe<Scalars['BigDecimal']>;
  stakingEfficiency_gt?: InputMaybe<Scalars['BigDecimal']>;
  stakingEfficiency_lt?: InputMaybe<Scalars['BigDecimal']>;
  stakingEfficiency_gte?: InputMaybe<Scalars['BigDecimal']>;
  stakingEfficiency_lte?: InputMaybe<Scalars['BigDecimal']>;
  stakingEfficiency_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  stakingEfficiency_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  notAllocatedTokens?: InputMaybe<Scalars['BigInt']>;
  notAllocatedTokens_not?: InputMaybe<Scalars['BigInt']>;
  notAllocatedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  notAllocatedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  notAllocatedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  notAllocatedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  notAllocatedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  notAllocatedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegationRemaining?: InputMaybe<Scalars['BigInt']>;
  delegationRemaining_not?: InputMaybe<Scalars['BigInt']>;
  delegationRemaining_gt?: InputMaybe<Scalars['BigInt']>;
  delegationRemaining_lt?: InputMaybe<Scalars['BigInt']>;
  delegationRemaining_gte?: InputMaybe<Scalars['BigInt']>;
  delegationRemaining_lte?: InputMaybe<Scalars['BigInt']>;
  delegationRemaining_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegationRemaining_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexerQueryFees?: InputMaybe<Scalars['BigInt']>;
  indexerQueryFees_not?: InputMaybe<Scalars['BigInt']>;
  indexerQueryFees_gt?: InputMaybe<Scalars['BigInt']>;
  indexerQueryFees_lt?: InputMaybe<Scalars['BigInt']>;
  indexerQueryFees_gte?: InputMaybe<Scalars['BigInt']>;
  indexerQueryFees_lte?: InputMaybe<Scalars['BigInt']>;
  indexerQueryFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexerQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatorsCount?: InputMaybe<Scalars['Int']>;
  delegatorsCount_not?: InputMaybe<Scalars['Int']>;
  delegatorsCount_gt?: InputMaybe<Scalars['Int']>;
  delegatorsCount_lt?: InputMaybe<Scalars['Int']>;
  delegatorsCount_gte?: InputMaybe<Scalars['Int']>;
  delegatorsCount_lte?: InputMaybe<Scalars['Int']>;
  delegatorsCount_in?: InputMaybe<Array<Scalars['Int']>>;
  delegatorsCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Indexer_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Indexer_filter>>>;
};

export type Indexer_orderBy =
  | 'id'
  | 'createdAt'
  | 'account'
  | 'account__id'
  | 'account__createdAt'
  | 'account__defaultDisplayName'
  | 'account__metadataHash'
  | 'account__balance'
  | 'account__balanceReceivedFromL1Signalling'
  | 'account__balanceReceivedFromL1Delegation'
  | 'account__curationApproval'
  | 'account__stakingApproval'
  | 'account__gnsApproval'
  | 'account__developerCreatedAt'
  | 'account__subgraphQueryFees'
  | 'url'
  | 'geoHash'
  | 'defaultDisplayName'
  | 'stakedTokens'
  | 'allocatedTokens'
  | 'unstakedTokens'
  | 'lockedTokens'
  | 'tokensLockedUntil'
  | 'allocations'
  | 'totalAllocations'
  | 'allocationCount'
  | 'totalAllocationCount'
  | 'queryFeesCollected'
  | 'queryFeeRebates'
  | 'rewardsEarned'
  | 'indexerIndexingRewards'
  | 'delegatorIndexingRewards'
  | 'indexerRewardsOwnGenerationRatio'
  | 'transferredToL2'
  | 'firstTransferredToL2At'
  | 'firstTransferredToL2AtBlockNumber'
  | 'firstTransferredToL2AtTx'
  | 'lastTransferredToL2At'
  | 'lastTransferredToL2AtBlockNumber'
  | 'lastTransferredToL2AtTx'
  | 'stakedTokensTransferredToL2'
  | 'idOnL2'
  | 'idOnL1'
  | 'delegatedCapacity'
  | 'tokenCapacity'
  | 'availableStake'
  | 'delegators'
  | 'delegatedTokens'
  | 'ownStakeRatio'
  | 'delegatedStakeRatio'
  | 'delegatorShares'
  | 'delegationExchangeRate'
  | 'indexingRewardCut'
  | 'indexingRewardEffectiveCut'
  | 'overDelegationDilution'
  | 'delegatorQueryFees'
  | 'queryFeeCut'
  | 'queryFeeEffectiveCut'
  | 'delegatorParameterCooldown'
  | 'lastDelegationParameterUpdate'
  | 'forcedClosures'
  | 'totalReturn'
  | 'annualizedReturn'
  | 'stakingEfficiency'
  | 'notAllocatedTokens'
  | 'delegationRemaining'
  | 'indexerQueryFees'
  | 'delegatorsCount';

/**
 * ZONE OF DARK MAGIC DONT USE IT OR U DIE
 *
 */
export type IndexersRecalculateQueue = {
  /** ID is 0 - infinity */
  id: Scalars['ID'];
  indexer: Scalars['ID'];
};

export type IndexersRecalculateQueue_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  indexer?: InputMaybe<Scalars['ID']>;
  indexer_not?: InputMaybe<Scalars['ID']>;
  indexer_gt?: InputMaybe<Scalars['ID']>;
  indexer_lt?: InputMaybe<Scalars['ID']>;
  indexer_gte?: InputMaybe<Scalars['ID']>;
  indexer_lte?: InputMaybe<Scalars['ID']>;
  indexer_in?: InputMaybe<Array<Scalars['ID']>>;
  indexer_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<IndexersRecalculateQueue_filter>>>;
  or?: InputMaybe<Array<InputMaybe<IndexersRecalculateQueue_filter>>>;
};

export type IndexersRecalculateQueue_orderBy =
  | 'id'
  | 'indexer';

/**
 * Curator Name Signal for a single Subgraph
 *
 */
export type NameSignal = {
  /** Eth address + subgraph ID */
  id: Scalars['ID'];
  /** Eth address of the curator */
  curator: Curator;
  /** Subgraph being signalled */
  subgraph: Subgraph;
  /** CUMULATIVE number of tokens the curator has signalled */
  signalledTokens: Scalars['BigInt'];
  /** CUMULATIVE number of tokens the curator has unsignalled */
  unsignalledTokens: Scalars['BigInt'];
  /** Tokens the curator has withdrawn from a deprecated name curve */
  withdrawnTokens: Scalars['BigInt'];
  /** Shares of the name pool (GNS) that the curator has from signaling their GRT */
  nameSignal: Scalars['BigInt'];
  /** Actual signal shares that the name pool minted with the GRT provided by the curator */
  signal: Scalars['BigDecimal'];
  /** Amount of GRT transferred to L2 */
  signalledTokensSentToL2: Scalars['BigInt'];
  /** Amount of GRT received on L2 */
  signalledTokensReceivedOnL2: Scalars['BigInt'];
  /** Whether the name signal has been transferred from L1 to L2. Only applies to NameSignals that have been transferred, native L2 NameSignal entities will return false */
  transferredToL2: Scalars['Boolean'];
  /** Timestamp for the L1 -> L2 Transfer. */
  transferredToL2At?: Maybe<Scalars['BigInt']>;
  /** Block number for the L1 -> L2 Transfer. */
  transferredToL2AtBlockNumber?: Maybe<Scalars['BigInt']>;
  /** Transaction hash for the L1 -> L2 Transfer. */
  transferredToL2AtTx?: Maybe<Scalars['String']>;
  /** ID of the NameSignal entity on L2. Null if it's not transferred */
  idOnL2?: Maybe<Scalars['String']>;
  /** ID of the NameSignal entity on L1. Null if it's not transferred */
  idOnL1?: Maybe<Scalars['String']>;
  /** Block for which the curator last entered or exited the curve */
  lastNameSignalChange: Scalars['Int'];
  /** Summation of realized rewards from before the last time the curator entered the curation curve */
  realizedRewards: Scalars['BigInt'];
  /** [DEPRECATED] Curator average cost basis for this name signal on this subgraph. New field for further versions will be nameSignalAverageCostBasis */
  averageCostBasis: Scalars['BigDecimal'];
  /** [DEPRECATED] nameSignalAverageCostBasis / nameSignal. New field for further versions will be nameSignalAverageCostBasisPerSignal */
  averageCostBasisPerSignal: Scalars['BigDecimal'];
  /** Curator average cost basis for this name signal on this subgraph */
  nameSignalAverageCostBasis: Scalars['BigDecimal'];
  /** nameSignalAverageCostBasis / nameSignal */
  nameSignalAverageCostBasisPerSignal: Scalars['BigDecimal'];
  /** Curator average cost basis for the version signal on this subgraph name pool */
  signalAverageCostBasis: Scalars['BigDecimal'];
  /** signalAverageCostBasis / signal */
  signalAverageCostBasisPerSignal: Scalars['BigDecimal'];
  entityVersion: Scalars['Int'];
  linkedEntity?: Maybe<NameSignal>;
  currentGRTValue: Scalars['BigInt'];
  PLGrt: Scalars['BigDecimal'];
  unrealizedPLGrt: Scalars['BigDecimal'];
  realizedPLGrt: Scalars['BigDecimal'];
  lastBuyInPrice: Scalars['BigDecimal'];
};

/**
 * Auxiliary entity to be able to batch update NameSignal entities
 *
 */
export type NameSignalSubgraphRelation = {
  /** Subgraph ID + index */
  id: Scalars['ID'];
  nameSignal: NameSignal;
  subgraph: Subgraph;
};

export type NameSignalSubgraphRelation_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  nameSignal?: InputMaybe<Scalars['String']>;
  nameSignal_not?: InputMaybe<Scalars['String']>;
  nameSignal_gt?: InputMaybe<Scalars['String']>;
  nameSignal_lt?: InputMaybe<Scalars['String']>;
  nameSignal_gte?: InputMaybe<Scalars['String']>;
  nameSignal_lte?: InputMaybe<Scalars['String']>;
  nameSignal_in?: InputMaybe<Array<Scalars['String']>>;
  nameSignal_not_in?: InputMaybe<Array<Scalars['String']>>;
  nameSignal_contains?: InputMaybe<Scalars['String']>;
  nameSignal_contains_nocase?: InputMaybe<Scalars['String']>;
  nameSignal_not_contains?: InputMaybe<Scalars['String']>;
  nameSignal_not_contains_nocase?: InputMaybe<Scalars['String']>;
  nameSignal_starts_with?: InputMaybe<Scalars['String']>;
  nameSignal_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nameSignal_not_starts_with?: InputMaybe<Scalars['String']>;
  nameSignal_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nameSignal_ends_with?: InputMaybe<Scalars['String']>;
  nameSignal_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nameSignal_not_ends_with?: InputMaybe<Scalars['String']>;
  nameSignal_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nameSignal_?: InputMaybe<NameSignal_filter>;
  subgraph?: InputMaybe<Scalars['String']>;
  subgraph_not?: InputMaybe<Scalars['String']>;
  subgraph_gt?: InputMaybe<Scalars['String']>;
  subgraph_lt?: InputMaybe<Scalars['String']>;
  subgraph_gte?: InputMaybe<Scalars['String']>;
  subgraph_lte?: InputMaybe<Scalars['String']>;
  subgraph_in?: InputMaybe<Array<Scalars['String']>>;
  subgraph_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraph_contains?: InputMaybe<Scalars['String']>;
  subgraph_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraph_not_contains?: InputMaybe<Scalars['String']>;
  subgraph_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraph_starts_with?: InputMaybe<Scalars['String']>;
  subgraph_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraph_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_ends_with?: InputMaybe<Scalars['String']>;
  subgraph_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraph_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_?: InputMaybe<Subgraph_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<NameSignalSubgraphRelation_filter>>>;
  or?: InputMaybe<Array<InputMaybe<NameSignalSubgraphRelation_filter>>>;
};

export type NameSignalSubgraphRelation_orderBy =
  | 'id'
  | 'nameSignal'
  | 'nameSignal__id'
  | 'nameSignal__signalledTokens'
  | 'nameSignal__unsignalledTokens'
  | 'nameSignal__withdrawnTokens'
  | 'nameSignal__nameSignal'
  | 'nameSignal__signal'
  | 'nameSignal__signalledTokensSentToL2'
  | 'nameSignal__signalledTokensReceivedOnL2'
  | 'nameSignal__transferredToL2'
  | 'nameSignal__transferredToL2At'
  | 'nameSignal__transferredToL2AtBlockNumber'
  | 'nameSignal__transferredToL2AtTx'
  | 'nameSignal__idOnL2'
  | 'nameSignal__idOnL1'
  | 'nameSignal__lastNameSignalChange'
  | 'nameSignal__realizedRewards'
  | 'nameSignal__averageCostBasis'
  | 'nameSignal__averageCostBasisPerSignal'
  | 'nameSignal__nameSignalAverageCostBasis'
  | 'nameSignal__nameSignalAverageCostBasisPerSignal'
  | 'nameSignal__signalAverageCostBasis'
  | 'nameSignal__signalAverageCostBasisPerSignal'
  | 'nameSignal__entityVersion'
  | 'nameSignal__currentGRTValue'
  | 'nameSignal__PLGrt'
  | 'nameSignal__unrealizedPLGrt'
  | 'nameSignal__realizedPLGrt'
  | 'nameSignal__lastBuyInPrice'
  | 'subgraph'
  | 'subgraph__id'
  | 'subgraph__versionCount'
  | 'subgraph__createdAt'
  | 'subgraph__updatedAt'
  | 'subgraph__active'
  | 'subgraph__migrated'
  | 'subgraph__startedTransferToL2'
  | 'subgraph__startedTransferToL2At'
  | 'subgraph__startedTransferToL2AtBlockNumber'
  | 'subgraph__startedTransferToL2AtTx'
  | 'subgraph__transferredToL2'
  | 'subgraph__transferredToL2At'
  | 'subgraph__transferredToL2AtBlockNumber'
  | 'subgraph__transferredToL2AtTx'
  | 'subgraph__signalledTokensSentToL2'
  | 'subgraph__signalledTokensReceivedOnL2'
  | 'subgraph__idOnL2'
  | 'subgraph__idOnL1'
  | 'subgraph__nftID'
  | 'subgraph__oldID'
  | 'subgraph__creatorAddress'
  | 'subgraph__subgraphNumber'
  | 'subgraph__initializing'
  | 'subgraph__entityVersion'
  | 'subgraph__signalledTokens'
  | 'subgraph__unsignalledTokens'
  | 'subgraph__currentSignalledTokens'
  | 'subgraph__nameSignalAmount'
  | 'subgraph__signalAmount'
  | 'subgraph__reserveRatio'
  | 'subgraph__withdrawableTokens'
  | 'subgraph__withdrawnTokens'
  | 'subgraph__nameSignalCount'
  | 'subgraph__currentNameSignalCount'
  | 'subgraph__metadataHash'
  | 'subgraph__ipfsMetadataHash';

/**
 * All relevant data for a Name Signal Transaction in The Graph Network
 *
 */
export type NameSignalTransaction = Transaction & {
  id: Scalars['ID'];
  blockNumber: Scalars['Int'];
  timestamp: Scalars['Int'];
  signer: GraphAccount;
  type: TransactionType;
  /** Amount of name signal updated */
  nameSignal: Scalars['BigInt'];
  /** Amount of version signal updated */
  versionSignal: Scalars['BigInt'];
  /** Tokens used */
  tokens: Scalars['BigInt'];
  /** Subgraph where name signal was updated */
  subgraph: Subgraph;
};

export type NameSignalTransaction_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  signer?: InputMaybe<Scalars['String']>;
  signer_not?: InputMaybe<Scalars['String']>;
  signer_gt?: InputMaybe<Scalars['String']>;
  signer_lt?: InputMaybe<Scalars['String']>;
  signer_gte?: InputMaybe<Scalars['String']>;
  signer_lte?: InputMaybe<Scalars['String']>;
  signer_in?: InputMaybe<Array<Scalars['String']>>;
  signer_not_in?: InputMaybe<Array<Scalars['String']>>;
  signer_contains?: InputMaybe<Scalars['String']>;
  signer_contains_nocase?: InputMaybe<Scalars['String']>;
  signer_not_contains?: InputMaybe<Scalars['String']>;
  signer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  signer_starts_with?: InputMaybe<Scalars['String']>;
  signer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  signer_not_starts_with?: InputMaybe<Scalars['String']>;
  signer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  signer_ends_with?: InputMaybe<Scalars['String']>;
  signer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  signer_not_ends_with?: InputMaybe<Scalars['String']>;
  signer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  signer_?: InputMaybe<GraphAccount_filter>;
  type?: InputMaybe<TransactionType>;
  type_not?: InputMaybe<TransactionType>;
  type_in?: InputMaybe<Array<TransactionType>>;
  type_not_in?: InputMaybe<Array<TransactionType>>;
  nameSignal?: InputMaybe<Scalars['BigInt']>;
  nameSignal_not?: InputMaybe<Scalars['BigInt']>;
  nameSignal_gt?: InputMaybe<Scalars['BigInt']>;
  nameSignal_lt?: InputMaybe<Scalars['BigInt']>;
  nameSignal_gte?: InputMaybe<Scalars['BigInt']>;
  nameSignal_lte?: InputMaybe<Scalars['BigInt']>;
  nameSignal_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nameSignal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  versionSignal?: InputMaybe<Scalars['BigInt']>;
  versionSignal_not?: InputMaybe<Scalars['BigInt']>;
  versionSignal_gt?: InputMaybe<Scalars['BigInt']>;
  versionSignal_lt?: InputMaybe<Scalars['BigInt']>;
  versionSignal_gte?: InputMaybe<Scalars['BigInt']>;
  versionSignal_lte?: InputMaybe<Scalars['BigInt']>;
  versionSignal_in?: InputMaybe<Array<Scalars['BigInt']>>;
  versionSignal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokens?: InputMaybe<Scalars['BigInt']>;
  tokens_not?: InputMaybe<Scalars['BigInt']>;
  tokens_gt?: InputMaybe<Scalars['BigInt']>;
  tokens_lt?: InputMaybe<Scalars['BigInt']>;
  tokens_gte?: InputMaybe<Scalars['BigInt']>;
  tokens_lte?: InputMaybe<Scalars['BigInt']>;
  tokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  subgraph?: InputMaybe<Scalars['String']>;
  subgraph_not?: InputMaybe<Scalars['String']>;
  subgraph_gt?: InputMaybe<Scalars['String']>;
  subgraph_lt?: InputMaybe<Scalars['String']>;
  subgraph_gte?: InputMaybe<Scalars['String']>;
  subgraph_lte?: InputMaybe<Scalars['String']>;
  subgraph_in?: InputMaybe<Array<Scalars['String']>>;
  subgraph_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraph_contains?: InputMaybe<Scalars['String']>;
  subgraph_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraph_not_contains?: InputMaybe<Scalars['String']>;
  subgraph_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraph_starts_with?: InputMaybe<Scalars['String']>;
  subgraph_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraph_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_ends_with?: InputMaybe<Scalars['String']>;
  subgraph_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraph_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_?: InputMaybe<Subgraph_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<NameSignalTransaction_filter>>>;
  or?: InputMaybe<Array<InputMaybe<NameSignalTransaction_filter>>>;
};

export type NameSignalTransaction_orderBy =
  | 'id'
  | 'blockNumber'
  | 'timestamp'
  | 'signer'
  | 'signer__id'
  | 'signer__createdAt'
  | 'signer__defaultDisplayName'
  | 'signer__metadataHash'
  | 'signer__balance'
  | 'signer__balanceReceivedFromL1Signalling'
  | 'signer__balanceReceivedFromL1Delegation'
  | 'signer__curationApproval'
  | 'signer__stakingApproval'
  | 'signer__gnsApproval'
  | 'signer__developerCreatedAt'
  | 'signer__subgraphQueryFees'
  | 'type'
  | 'nameSignal'
  | 'versionSignal'
  | 'tokens'
  | 'subgraph'
  | 'subgraph__id'
  | 'subgraph__versionCount'
  | 'subgraph__createdAt'
  | 'subgraph__updatedAt'
  | 'subgraph__active'
  | 'subgraph__migrated'
  | 'subgraph__startedTransferToL2'
  | 'subgraph__startedTransferToL2At'
  | 'subgraph__startedTransferToL2AtBlockNumber'
  | 'subgraph__startedTransferToL2AtTx'
  | 'subgraph__transferredToL2'
  | 'subgraph__transferredToL2At'
  | 'subgraph__transferredToL2AtBlockNumber'
  | 'subgraph__transferredToL2AtTx'
  | 'subgraph__signalledTokensSentToL2'
  | 'subgraph__signalledTokensReceivedOnL2'
  | 'subgraph__idOnL2'
  | 'subgraph__idOnL1'
  | 'subgraph__nftID'
  | 'subgraph__oldID'
  | 'subgraph__creatorAddress'
  | 'subgraph__subgraphNumber'
  | 'subgraph__initializing'
  | 'subgraph__entityVersion'
  | 'subgraph__signalledTokens'
  | 'subgraph__unsignalledTokens'
  | 'subgraph__currentSignalledTokens'
  | 'subgraph__nameSignalAmount'
  | 'subgraph__signalAmount'
  | 'subgraph__reserveRatio'
  | 'subgraph__withdrawableTokens'
  | 'subgraph__withdrawnTokens'
  | 'subgraph__nameSignalCount'
  | 'subgraph__currentNameSignalCount'
  | 'subgraph__metadataHash'
  | 'subgraph__ipfsMetadataHash';

export type NameSignal_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  curator?: InputMaybe<Scalars['String']>;
  curator_not?: InputMaybe<Scalars['String']>;
  curator_gt?: InputMaybe<Scalars['String']>;
  curator_lt?: InputMaybe<Scalars['String']>;
  curator_gte?: InputMaybe<Scalars['String']>;
  curator_lte?: InputMaybe<Scalars['String']>;
  curator_in?: InputMaybe<Array<Scalars['String']>>;
  curator_not_in?: InputMaybe<Array<Scalars['String']>>;
  curator_contains?: InputMaybe<Scalars['String']>;
  curator_contains_nocase?: InputMaybe<Scalars['String']>;
  curator_not_contains?: InputMaybe<Scalars['String']>;
  curator_not_contains_nocase?: InputMaybe<Scalars['String']>;
  curator_starts_with?: InputMaybe<Scalars['String']>;
  curator_starts_with_nocase?: InputMaybe<Scalars['String']>;
  curator_not_starts_with?: InputMaybe<Scalars['String']>;
  curator_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  curator_ends_with?: InputMaybe<Scalars['String']>;
  curator_ends_with_nocase?: InputMaybe<Scalars['String']>;
  curator_not_ends_with?: InputMaybe<Scalars['String']>;
  curator_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  curator_?: InputMaybe<Curator_filter>;
  subgraph?: InputMaybe<Scalars['String']>;
  subgraph_not?: InputMaybe<Scalars['String']>;
  subgraph_gt?: InputMaybe<Scalars['String']>;
  subgraph_lt?: InputMaybe<Scalars['String']>;
  subgraph_gte?: InputMaybe<Scalars['String']>;
  subgraph_lte?: InputMaybe<Scalars['String']>;
  subgraph_in?: InputMaybe<Array<Scalars['String']>>;
  subgraph_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraph_contains?: InputMaybe<Scalars['String']>;
  subgraph_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraph_not_contains?: InputMaybe<Scalars['String']>;
  subgraph_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraph_starts_with?: InputMaybe<Scalars['String']>;
  subgraph_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraph_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_ends_with?: InputMaybe<Scalars['String']>;
  subgraph_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraph_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_?: InputMaybe<Subgraph_filter>;
  signalledTokens?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unsignalledTokens?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unsignalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawnTokens?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_not?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_gt?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_lt?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_gte?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_lte?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawnTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nameSignal?: InputMaybe<Scalars['BigInt']>;
  nameSignal_not?: InputMaybe<Scalars['BigInt']>;
  nameSignal_gt?: InputMaybe<Scalars['BigInt']>;
  nameSignal_lt?: InputMaybe<Scalars['BigInt']>;
  nameSignal_gte?: InputMaybe<Scalars['BigInt']>;
  nameSignal_lte?: InputMaybe<Scalars['BigInt']>;
  nameSignal_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nameSignal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signal?: InputMaybe<Scalars['BigDecimal']>;
  signal_not?: InputMaybe<Scalars['BigDecimal']>;
  signal_gt?: InputMaybe<Scalars['BigDecimal']>;
  signal_lt?: InputMaybe<Scalars['BigDecimal']>;
  signal_gte?: InputMaybe<Scalars['BigDecimal']>;
  signal_lte?: InputMaybe<Scalars['BigDecimal']>;
  signal_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  signal_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  signalledTokensSentToL2?: InputMaybe<Scalars['BigInt']>;
  signalledTokensSentToL2_not?: InputMaybe<Scalars['BigInt']>;
  signalledTokensSentToL2_gt?: InputMaybe<Scalars['BigInt']>;
  signalledTokensSentToL2_lt?: InputMaybe<Scalars['BigInt']>;
  signalledTokensSentToL2_gte?: InputMaybe<Scalars['BigInt']>;
  signalledTokensSentToL2_lte?: InputMaybe<Scalars['BigInt']>;
  signalledTokensSentToL2_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalledTokensSentToL2_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalledTokensReceivedOnL2?: InputMaybe<Scalars['BigInt']>;
  signalledTokensReceivedOnL2_not?: InputMaybe<Scalars['BigInt']>;
  signalledTokensReceivedOnL2_gt?: InputMaybe<Scalars['BigInt']>;
  signalledTokensReceivedOnL2_lt?: InputMaybe<Scalars['BigInt']>;
  signalledTokensReceivedOnL2_gte?: InputMaybe<Scalars['BigInt']>;
  signalledTokensReceivedOnL2_lte?: InputMaybe<Scalars['BigInt']>;
  signalledTokensReceivedOnL2_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalledTokensReceivedOnL2_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transferredToL2?: InputMaybe<Scalars['Boolean']>;
  transferredToL2_not?: InputMaybe<Scalars['Boolean']>;
  transferredToL2_in?: InputMaybe<Array<Scalars['Boolean']>>;
  transferredToL2_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  transferredToL2At?: InputMaybe<Scalars['BigInt']>;
  transferredToL2At_not?: InputMaybe<Scalars['BigInt']>;
  transferredToL2At_gt?: InputMaybe<Scalars['BigInt']>;
  transferredToL2At_lt?: InputMaybe<Scalars['BigInt']>;
  transferredToL2At_gte?: InputMaybe<Scalars['BigInt']>;
  transferredToL2At_lte?: InputMaybe<Scalars['BigInt']>;
  transferredToL2At_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transferredToL2At_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transferredToL2AtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  transferredToL2AtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  transferredToL2AtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  transferredToL2AtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  transferredToL2AtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  transferredToL2AtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  transferredToL2AtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transferredToL2AtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transferredToL2AtTx?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_not?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_gt?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_lt?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_gte?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_lte?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_in?: InputMaybe<Array<Scalars['String']>>;
  transferredToL2AtTx_not_in?: InputMaybe<Array<Scalars['String']>>;
  transferredToL2AtTx_contains?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_contains_nocase?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_not_contains?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_starts_with?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_not_starts_with?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_ends_with?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_not_ends_with?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  idOnL2?: InputMaybe<Scalars['String']>;
  idOnL2_not?: InputMaybe<Scalars['String']>;
  idOnL2_gt?: InputMaybe<Scalars['String']>;
  idOnL2_lt?: InputMaybe<Scalars['String']>;
  idOnL2_gte?: InputMaybe<Scalars['String']>;
  idOnL2_lte?: InputMaybe<Scalars['String']>;
  idOnL2_in?: InputMaybe<Array<Scalars['String']>>;
  idOnL2_not_in?: InputMaybe<Array<Scalars['String']>>;
  idOnL2_contains?: InputMaybe<Scalars['String']>;
  idOnL2_contains_nocase?: InputMaybe<Scalars['String']>;
  idOnL2_not_contains?: InputMaybe<Scalars['String']>;
  idOnL2_not_contains_nocase?: InputMaybe<Scalars['String']>;
  idOnL2_starts_with?: InputMaybe<Scalars['String']>;
  idOnL2_starts_with_nocase?: InputMaybe<Scalars['String']>;
  idOnL2_not_starts_with?: InputMaybe<Scalars['String']>;
  idOnL2_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  idOnL2_ends_with?: InputMaybe<Scalars['String']>;
  idOnL2_ends_with_nocase?: InputMaybe<Scalars['String']>;
  idOnL2_not_ends_with?: InputMaybe<Scalars['String']>;
  idOnL2_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  idOnL1?: InputMaybe<Scalars['String']>;
  idOnL1_not?: InputMaybe<Scalars['String']>;
  idOnL1_gt?: InputMaybe<Scalars['String']>;
  idOnL1_lt?: InputMaybe<Scalars['String']>;
  idOnL1_gte?: InputMaybe<Scalars['String']>;
  idOnL1_lte?: InputMaybe<Scalars['String']>;
  idOnL1_in?: InputMaybe<Array<Scalars['String']>>;
  idOnL1_not_in?: InputMaybe<Array<Scalars['String']>>;
  idOnL1_contains?: InputMaybe<Scalars['String']>;
  idOnL1_contains_nocase?: InputMaybe<Scalars['String']>;
  idOnL1_not_contains?: InputMaybe<Scalars['String']>;
  idOnL1_not_contains_nocase?: InputMaybe<Scalars['String']>;
  idOnL1_starts_with?: InputMaybe<Scalars['String']>;
  idOnL1_starts_with_nocase?: InputMaybe<Scalars['String']>;
  idOnL1_not_starts_with?: InputMaybe<Scalars['String']>;
  idOnL1_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  idOnL1_ends_with?: InputMaybe<Scalars['String']>;
  idOnL1_ends_with_nocase?: InputMaybe<Scalars['String']>;
  idOnL1_not_ends_with?: InputMaybe<Scalars['String']>;
  idOnL1_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  lastNameSignalChange?: InputMaybe<Scalars['Int']>;
  lastNameSignalChange_not?: InputMaybe<Scalars['Int']>;
  lastNameSignalChange_gt?: InputMaybe<Scalars['Int']>;
  lastNameSignalChange_lt?: InputMaybe<Scalars['Int']>;
  lastNameSignalChange_gte?: InputMaybe<Scalars['Int']>;
  lastNameSignalChange_lte?: InputMaybe<Scalars['Int']>;
  lastNameSignalChange_in?: InputMaybe<Array<Scalars['Int']>>;
  lastNameSignalChange_not_in?: InputMaybe<Array<Scalars['Int']>>;
  realizedRewards?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_not?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_gt?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_lt?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_gte?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_lte?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  realizedRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  averageCostBasis?: InputMaybe<Scalars['BigDecimal']>;
  averageCostBasis_not?: InputMaybe<Scalars['BigDecimal']>;
  averageCostBasis_gt?: InputMaybe<Scalars['BigDecimal']>;
  averageCostBasis_lt?: InputMaybe<Scalars['BigDecimal']>;
  averageCostBasis_gte?: InputMaybe<Scalars['BigDecimal']>;
  averageCostBasis_lte?: InputMaybe<Scalars['BigDecimal']>;
  averageCostBasis_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  averageCostBasis_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  averageCostBasisPerSignal?: InputMaybe<Scalars['BigDecimal']>;
  averageCostBasisPerSignal_not?: InputMaybe<Scalars['BigDecimal']>;
  averageCostBasisPerSignal_gt?: InputMaybe<Scalars['BigDecimal']>;
  averageCostBasisPerSignal_lt?: InputMaybe<Scalars['BigDecimal']>;
  averageCostBasisPerSignal_gte?: InputMaybe<Scalars['BigDecimal']>;
  averageCostBasisPerSignal_lte?: InputMaybe<Scalars['BigDecimal']>;
  averageCostBasisPerSignal_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  averageCostBasisPerSignal_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  nameSignalAverageCostBasis?: InputMaybe<Scalars['BigDecimal']>;
  nameSignalAverageCostBasis_not?: InputMaybe<Scalars['BigDecimal']>;
  nameSignalAverageCostBasis_gt?: InputMaybe<Scalars['BigDecimal']>;
  nameSignalAverageCostBasis_lt?: InputMaybe<Scalars['BigDecimal']>;
  nameSignalAverageCostBasis_gte?: InputMaybe<Scalars['BigDecimal']>;
  nameSignalAverageCostBasis_lte?: InputMaybe<Scalars['BigDecimal']>;
  nameSignalAverageCostBasis_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  nameSignalAverageCostBasis_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  nameSignalAverageCostBasisPerSignal?: InputMaybe<Scalars['BigDecimal']>;
  nameSignalAverageCostBasisPerSignal_not?: InputMaybe<Scalars['BigDecimal']>;
  nameSignalAverageCostBasisPerSignal_gt?: InputMaybe<Scalars['BigDecimal']>;
  nameSignalAverageCostBasisPerSignal_lt?: InputMaybe<Scalars['BigDecimal']>;
  nameSignalAverageCostBasisPerSignal_gte?: InputMaybe<Scalars['BigDecimal']>;
  nameSignalAverageCostBasisPerSignal_lte?: InputMaybe<Scalars['BigDecimal']>;
  nameSignalAverageCostBasisPerSignal_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  nameSignalAverageCostBasisPerSignal_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  signalAverageCostBasis?: InputMaybe<Scalars['BigDecimal']>;
  signalAverageCostBasis_not?: InputMaybe<Scalars['BigDecimal']>;
  signalAverageCostBasis_gt?: InputMaybe<Scalars['BigDecimal']>;
  signalAverageCostBasis_lt?: InputMaybe<Scalars['BigDecimal']>;
  signalAverageCostBasis_gte?: InputMaybe<Scalars['BigDecimal']>;
  signalAverageCostBasis_lte?: InputMaybe<Scalars['BigDecimal']>;
  signalAverageCostBasis_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  signalAverageCostBasis_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  signalAverageCostBasisPerSignal?: InputMaybe<Scalars['BigDecimal']>;
  signalAverageCostBasisPerSignal_not?: InputMaybe<Scalars['BigDecimal']>;
  signalAverageCostBasisPerSignal_gt?: InputMaybe<Scalars['BigDecimal']>;
  signalAverageCostBasisPerSignal_lt?: InputMaybe<Scalars['BigDecimal']>;
  signalAverageCostBasisPerSignal_gte?: InputMaybe<Scalars['BigDecimal']>;
  signalAverageCostBasisPerSignal_lte?: InputMaybe<Scalars['BigDecimal']>;
  signalAverageCostBasisPerSignal_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  signalAverageCostBasisPerSignal_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  entityVersion?: InputMaybe<Scalars['Int']>;
  entityVersion_not?: InputMaybe<Scalars['Int']>;
  entityVersion_gt?: InputMaybe<Scalars['Int']>;
  entityVersion_lt?: InputMaybe<Scalars['Int']>;
  entityVersion_gte?: InputMaybe<Scalars['Int']>;
  entityVersion_lte?: InputMaybe<Scalars['Int']>;
  entityVersion_in?: InputMaybe<Array<Scalars['Int']>>;
  entityVersion_not_in?: InputMaybe<Array<Scalars['Int']>>;
  linkedEntity?: InputMaybe<Scalars['String']>;
  linkedEntity_not?: InputMaybe<Scalars['String']>;
  linkedEntity_gt?: InputMaybe<Scalars['String']>;
  linkedEntity_lt?: InputMaybe<Scalars['String']>;
  linkedEntity_gte?: InputMaybe<Scalars['String']>;
  linkedEntity_lte?: InputMaybe<Scalars['String']>;
  linkedEntity_in?: InputMaybe<Array<Scalars['String']>>;
  linkedEntity_not_in?: InputMaybe<Array<Scalars['String']>>;
  linkedEntity_contains?: InputMaybe<Scalars['String']>;
  linkedEntity_contains_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_not_contains?: InputMaybe<Scalars['String']>;
  linkedEntity_not_contains_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_starts_with?: InputMaybe<Scalars['String']>;
  linkedEntity_starts_with_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_not_starts_with?: InputMaybe<Scalars['String']>;
  linkedEntity_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_ends_with?: InputMaybe<Scalars['String']>;
  linkedEntity_ends_with_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_not_ends_with?: InputMaybe<Scalars['String']>;
  linkedEntity_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_?: InputMaybe<NameSignal_filter>;
  currentGRTValue?: InputMaybe<Scalars['BigInt']>;
  currentGRTValue_not?: InputMaybe<Scalars['BigInt']>;
  currentGRTValue_gt?: InputMaybe<Scalars['BigInt']>;
  currentGRTValue_lt?: InputMaybe<Scalars['BigInt']>;
  currentGRTValue_gte?: InputMaybe<Scalars['BigInt']>;
  currentGRTValue_lte?: InputMaybe<Scalars['BigInt']>;
  currentGRTValue_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentGRTValue_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  PLGrt?: InputMaybe<Scalars['BigDecimal']>;
  PLGrt_not?: InputMaybe<Scalars['BigDecimal']>;
  PLGrt_gt?: InputMaybe<Scalars['BigDecimal']>;
  PLGrt_lt?: InputMaybe<Scalars['BigDecimal']>;
  PLGrt_gte?: InputMaybe<Scalars['BigDecimal']>;
  PLGrt_lte?: InputMaybe<Scalars['BigDecimal']>;
  PLGrt_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  PLGrt_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  unrealizedPLGrt?: InputMaybe<Scalars['BigDecimal']>;
  unrealizedPLGrt_not?: InputMaybe<Scalars['BigDecimal']>;
  unrealizedPLGrt_gt?: InputMaybe<Scalars['BigDecimal']>;
  unrealizedPLGrt_lt?: InputMaybe<Scalars['BigDecimal']>;
  unrealizedPLGrt_gte?: InputMaybe<Scalars['BigDecimal']>;
  unrealizedPLGrt_lte?: InputMaybe<Scalars['BigDecimal']>;
  unrealizedPLGrt_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  unrealizedPLGrt_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  realizedPLGrt?: InputMaybe<Scalars['BigDecimal']>;
  realizedPLGrt_not?: InputMaybe<Scalars['BigDecimal']>;
  realizedPLGrt_gt?: InputMaybe<Scalars['BigDecimal']>;
  realizedPLGrt_lt?: InputMaybe<Scalars['BigDecimal']>;
  realizedPLGrt_gte?: InputMaybe<Scalars['BigDecimal']>;
  realizedPLGrt_lte?: InputMaybe<Scalars['BigDecimal']>;
  realizedPLGrt_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  realizedPLGrt_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  lastBuyInPrice?: InputMaybe<Scalars['BigDecimal']>;
  lastBuyInPrice_not?: InputMaybe<Scalars['BigDecimal']>;
  lastBuyInPrice_gt?: InputMaybe<Scalars['BigDecimal']>;
  lastBuyInPrice_lt?: InputMaybe<Scalars['BigDecimal']>;
  lastBuyInPrice_gte?: InputMaybe<Scalars['BigDecimal']>;
  lastBuyInPrice_lte?: InputMaybe<Scalars['BigDecimal']>;
  lastBuyInPrice_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  lastBuyInPrice_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<NameSignal_filter>>>;
  or?: InputMaybe<Array<InputMaybe<NameSignal_filter>>>;
};

export type NameSignal_orderBy =
  | 'id'
  | 'curator'
  | 'curator__id'
  | 'curator__createdAt'
  | 'curator__totalSignalledTokens'
  | 'curator__totalUnsignalledTokens'
  | 'curator__defaultDisplayName'
  | 'curator__totalNameSignalledTokens'
  | 'curator__totalNameUnsignalledTokens'
  | 'curator__totalWithdrawnTokens'
  | 'curator__realizedRewards'
  | 'curator__annualizedReturn'
  | 'curator__totalReturn'
  | 'curator__signalingEfficiency'
  | 'curator__totalNameSignal'
  | 'curator__totalNameSignalAverageCostBasis'
  | 'curator__totalAverageCostBasisPerNameSignal'
  | 'curator__totalSignal'
  | 'curator__totalSignalAverageCostBasis'
  | 'curator__totalAverageCostBasisPerSignal'
  | 'curator__signalCount'
  | 'curator__currentSignalCount'
  | 'curator__activeSignalCount'
  | 'curator__nameSignalCount'
  | 'curator__currentNameSignalCount'
  | 'curator__activeNameSignalCount'
  | 'curator__combinedSignalCount'
  | 'curator__activeCombinedSignalCount'
  | 'curator__allCurrentGRTValue'
  | 'curator__PLGrt'
  | 'curator__unrealizedPLGrt'
  | 'curator__realizedPLGrt'
  | 'curator__lastSignaledAt'
  | 'curator__lastUnsignaledAt'
  | 'subgraph'
  | 'subgraph__id'
  | 'subgraph__versionCount'
  | 'subgraph__createdAt'
  | 'subgraph__updatedAt'
  | 'subgraph__active'
  | 'subgraph__migrated'
  | 'subgraph__startedTransferToL2'
  | 'subgraph__startedTransferToL2At'
  | 'subgraph__startedTransferToL2AtBlockNumber'
  | 'subgraph__startedTransferToL2AtTx'
  | 'subgraph__transferredToL2'
  | 'subgraph__transferredToL2At'
  | 'subgraph__transferredToL2AtBlockNumber'
  | 'subgraph__transferredToL2AtTx'
  | 'subgraph__signalledTokensSentToL2'
  | 'subgraph__signalledTokensReceivedOnL2'
  | 'subgraph__idOnL2'
  | 'subgraph__idOnL1'
  | 'subgraph__nftID'
  | 'subgraph__oldID'
  | 'subgraph__creatorAddress'
  | 'subgraph__subgraphNumber'
  | 'subgraph__initializing'
  | 'subgraph__entityVersion'
  | 'subgraph__signalledTokens'
  | 'subgraph__unsignalledTokens'
  | 'subgraph__currentSignalledTokens'
  | 'subgraph__nameSignalAmount'
  | 'subgraph__signalAmount'
  | 'subgraph__reserveRatio'
  | 'subgraph__withdrawableTokens'
  | 'subgraph__withdrawnTokens'
  | 'subgraph__nameSignalCount'
  | 'subgraph__currentNameSignalCount'
  | 'subgraph__metadataHash'
  | 'subgraph__ipfsMetadataHash'
  | 'signalledTokens'
  | 'unsignalledTokens'
  | 'withdrawnTokens'
  | 'nameSignal'
  | 'signal'
  | 'signalledTokensSentToL2'
  | 'signalledTokensReceivedOnL2'
  | 'transferredToL2'
  | 'transferredToL2At'
  | 'transferredToL2AtBlockNumber'
  | 'transferredToL2AtTx'
  | 'idOnL2'
  | 'idOnL1'
  | 'lastNameSignalChange'
  | 'realizedRewards'
  | 'averageCostBasis'
  | 'averageCostBasisPerSignal'
  | 'nameSignalAverageCostBasis'
  | 'nameSignalAverageCostBasisPerSignal'
  | 'signalAverageCostBasis'
  | 'signalAverageCostBasisPerSignal'
  | 'entityVersion'
  | 'linkedEntity'
  | 'linkedEntity__id'
  | 'linkedEntity__signalledTokens'
  | 'linkedEntity__unsignalledTokens'
  | 'linkedEntity__withdrawnTokens'
  | 'linkedEntity__nameSignal'
  | 'linkedEntity__signal'
  | 'linkedEntity__signalledTokensSentToL2'
  | 'linkedEntity__signalledTokensReceivedOnL2'
  | 'linkedEntity__transferredToL2'
  | 'linkedEntity__transferredToL2At'
  | 'linkedEntity__transferredToL2AtBlockNumber'
  | 'linkedEntity__transferredToL2AtTx'
  | 'linkedEntity__idOnL2'
  | 'linkedEntity__idOnL1'
  | 'linkedEntity__lastNameSignalChange'
  | 'linkedEntity__realizedRewards'
  | 'linkedEntity__averageCostBasis'
  | 'linkedEntity__averageCostBasisPerSignal'
  | 'linkedEntity__nameSignalAverageCostBasis'
  | 'linkedEntity__nameSignalAverageCostBasisPerSignal'
  | 'linkedEntity__signalAverageCostBasis'
  | 'linkedEntity__signalAverageCostBasisPerSignal'
  | 'linkedEntity__entityVersion'
  | 'linkedEntity__currentGRTValue'
  | 'linkedEntity__PLGrt'
  | 'linkedEntity__unrealizedPLGrt'
  | 'linkedEntity__realizedPLGrt'
  | 'linkedEntity__lastBuyInPrice'
  | 'currentGRTValue'
  | 'PLGrt'
  | 'unrealizedPLGrt'
  | 'realizedPLGrt'
  | 'lastBuyInPrice';

export type NameSystem =
  | 'ENS';

export type Network = {
  id: Scalars['ID'];
};

export type Network_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Network_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Network_filter>>>;
};

export type Network_orderBy =
  | 'id';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

/**
 * [DEPRECATED] Global pool of query fees for closed state channels. Each Epoch has a single pool,
 * hence why they share the same IDs.
 *
 */
export type Pool = {
  /** Epoch number of the pool */
  id: Scalars['ID'];
  /** Total effective allocation tokens from all allocations closed in this epoch */
  allocation: Scalars['BigInt'];
  /** Total query fees collected in this epoch */
  totalQueryFees: Scalars['BigInt'];
  /** Total query fees claimed in this epoch. Can be smaller than totalFees because of rebates function  */
  claimedFees: Scalars['BigInt'];
  /** Total rewards from query fees deposited to all curator bonding curves during the epoch */
  curatorRewards: Scalars['BigInt'];
  /** Allocations that were closed during this epoch */
  closedAllocations: Array<Allocation>;
};


/**
 * [DEPRECATED] Global pool of query fees for closed state channels. Each Epoch has a single pool,
 * hence why they share the same IDs.
 *
 */
export type PoolclosedAllocationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Allocation_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Allocation_filter>;
};

export type Pool_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  allocation?: InputMaybe<Scalars['BigInt']>;
  allocation_not?: InputMaybe<Scalars['BigInt']>;
  allocation_gt?: InputMaybe<Scalars['BigInt']>;
  allocation_lt?: InputMaybe<Scalars['BigInt']>;
  allocation_gte?: InputMaybe<Scalars['BigInt']>;
  allocation_lte?: InputMaybe<Scalars['BigInt']>;
  allocation_in?: InputMaybe<Array<Scalars['BigInt']>>;
  allocation_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalQueryFees?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_not?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_gt?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_lt?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_gte?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_lte?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  claimedFees?: InputMaybe<Scalars['BigInt']>;
  claimedFees_not?: InputMaybe<Scalars['BigInt']>;
  claimedFees_gt?: InputMaybe<Scalars['BigInt']>;
  claimedFees_lt?: InputMaybe<Scalars['BigInt']>;
  claimedFees_gte?: InputMaybe<Scalars['BigInt']>;
  claimedFees_lte?: InputMaybe<Scalars['BigInt']>;
  claimedFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  claimedFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  curatorRewards?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_not?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_gt?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_lt?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_gte?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_lte?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  curatorRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  closedAllocations_?: InputMaybe<Allocation_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Pool_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Pool_filter>>>;
};

export type Pool_orderBy =
  | 'id'
  | 'allocation'
  | 'totalQueryFees'
  | 'claimedFees'
  | 'curatorRewards'
  | 'closedAllocations';

export type Query = {
  arbitrum_graphNetwork?: Maybe<GraphNetwork>;
  arbitrum_graphNetworks: Array<GraphNetwork>;
  arbitrum_graphAccount?: Maybe<GraphAccount>;
  arbitrum_graphAccounts: Array<GraphAccount>;
  arbitrum_accountMetadata: Array<AccountMetadata>;
  arbitrum_graphAccountName?: Maybe<GraphAccountName>;
  arbitrum_graphAccountNames: Array<GraphAccountName>;
  arbitrum_subgraph?: Maybe<Subgraph>;
  arbitrum_subgraphs: Array<Subgraph>;
  arbitrum_subgraphMetadata: Array<SubgraphMetadata>;
  arbitrum_currentSubgraphDeploymentRelation?: Maybe<CurrentSubgraphDeploymentRelation>;
  arbitrum_currentSubgraphDeploymentRelations: Array<CurrentSubgraphDeploymentRelation>;
  arbitrum_network?: Maybe<Network>;
  arbitrum_networks: Array<Network>;
  arbitrum_subgraphVersion?: Maybe<SubgraphVersion>;
  arbitrum_subgraphVersions: Array<SubgraphVersion>;
  arbitrum_subgraphVersionMetadata: Array<SubgraphVersionMetadata>;
  arbitrum_subgraphDeployment?: Maybe<SubgraphDeployment>;
  arbitrum_subgraphDeployments: Array<SubgraphDeployment>;
  arbitrum_subgraphDeploymentMetadata: Array<SubgraphDeploymentMetadata>;
  arbitrum_indexer?: Maybe<Indexer>;
  arbitrum_indexers: Array<Indexer>;
  arbitrum_allocation?: Maybe<Allocation>;
  arbitrum_allocations: Array<Allocation>;
  arbitrum_pool?: Maybe<Pool>;
  arbitrum_pools: Array<Pool>;
  arbitrum_delegator?: Maybe<Delegator>;
  arbitrum_delegators: Array<Delegator>;
  arbitrum_delegatedStake?: Maybe<DelegatedStake>;
  arbitrum_delegatedStakes: Array<DelegatedStake>;
  arbitrum_curator?: Maybe<Curator>;
  arbitrum_curators: Array<Curator>;
  arbitrum_signal?: Maybe<Signal>;
  arbitrum_signals: Array<Signal>;
  arbitrum_nameSignal?: Maybe<NameSignal>;
  arbitrum_nameSignals: Array<NameSignal>;
  arbitrum_nameSignalSubgraphRelation?: Maybe<NameSignalSubgraphRelation>;
  arbitrum_nameSignalSubgraphRelations: Array<NameSignalSubgraphRelation>;
  arbitrum_signalSubgraphDeploymentRelation?: Maybe<SignalSubgraphDeploymentRelation>;
  arbitrum_signalSubgraphDeploymentRelations: Array<SignalSubgraphDeploymentRelation>;
  arbitrum_dispute?: Maybe<Dispute>;
  arbitrum_disputes: Array<Dispute>;
  arbitrum_attestation?: Maybe<Attestation>;
  arbitrum_attestations: Array<Attestation>;
  arbitrum_epoch?: Maybe<Epoch>;
  arbitrum_epoches: Array<Epoch>;
  arbitrum_nameSignalTransaction?: Maybe<NameSignalTransaction>;
  arbitrum_nameSignalTransactions: Array<NameSignalTransaction>;
  arbitrum_signalTransaction?: Maybe<SignalTransaction>;
  arbitrum_signalTransactions: Array<SignalTransaction>;
  arbitrum_bridgeWithdrawalTransaction?: Maybe<BridgeWithdrawalTransaction>;
  arbitrum_bridgeWithdrawalTransactions: Array<BridgeWithdrawalTransaction>;
  arbitrum_bridgeDepositTransaction?: Maybe<BridgeDepositTransaction>;
  arbitrum_bridgeDepositTransactions: Array<BridgeDepositTransaction>;
  arbitrum_retryableTicket?: Maybe<RetryableTicket>;
  arbitrum_retryableTickets: Array<RetryableTicket>;
  arbitrum_retryableTicketRedeemAttempt?: Maybe<RetryableTicketRedeemAttempt>;
  arbitrum_retryableTicketRedeemAttempts: Array<RetryableTicketRedeemAttempt>;
  arbitrum_tokenManager?: Maybe<TokenManager>;
  arbitrum_tokenManagers: Array<TokenManager>;
  arbitrum_authorizedFunction?: Maybe<AuthorizedFunction>;
  arbitrum_authorizedFunctions: Array<AuthorizedFunction>;
  arbitrum_tokenLockWallet?: Maybe<TokenLockWallet>;
  arbitrum_tokenLockWallets: Array<TokenLockWallet>;
  arbitrum_indexerDeployment?: Maybe<IndexerDeployment>;
  arbitrum_indexerDeployments: Array<IndexerDeployment>;
  arbitrum_rewardCutHistoryEntity?: Maybe<RewardCutHistoryEntity>;
  arbitrum_rewardCutHistoryEntities: Array<RewardCutHistoryEntity>;
  arbitrum_delegationPoolHistoryEntity?: Maybe<DelegationPoolHistoryEntity>;
  arbitrum_delegationPoolHistoryEntities: Array<DelegationPoolHistoryEntity>;
  arbitrum_indexersRecalculateQueue?: Maybe<IndexersRecalculateQueue>;
  arbitrum_indexersRecalculateQueues: Array<IndexersRecalculateQueue>;
  arbitrum_transaction?: Maybe<Transaction>;
  arbitrum_transactions: Array<Transaction>;
  arbitrum_curatorSearch: Array<Curator>;
  arbitrum_delegatorSearch: Array<Delegator>;
  arbitrum_indexerSearch: Array<Indexer>;
  arbitrum_accountSearch: Array<GraphAccount>;
  /** Access to subgraph metadata */
  arbitrum__meta?: Maybe<_Meta_>;
};


export type Queryarbitrum_graphNetworkArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_graphNetworksArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GraphNetwork_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GraphNetwork_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_graphAccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_graphAccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GraphAccount_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GraphAccount_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_accountMetadataArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AccountMetadata_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AccountMetadata_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_graphAccountNameArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_graphAccountNamesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GraphAccountName_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GraphAccountName_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_subgraphArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_subgraphsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Subgraph_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Subgraph_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_subgraphMetadataArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubgraphMetadata_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SubgraphMetadata_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_currentSubgraphDeploymentRelationArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_currentSubgraphDeploymentRelationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CurrentSubgraphDeploymentRelation_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CurrentSubgraphDeploymentRelation_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_networkArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_networksArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Network_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_subgraphVersionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_subgraphVersionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubgraphVersion_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SubgraphVersion_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_subgraphVersionMetadataArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubgraphVersionMetadata_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SubgraphVersionMetadata_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_subgraphDeploymentArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_subgraphDeploymentsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubgraphDeployment_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SubgraphDeployment_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_subgraphDeploymentMetadataArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubgraphDeploymentMetadata_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SubgraphDeploymentMetadata_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_indexerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_indexersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Indexer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Indexer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_allocationArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_allocationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Allocation_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Allocation_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_poolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_poolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Pool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pool_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_delegatorArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_delegatorsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Delegator_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Delegator_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_delegatedStakeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_delegatedStakesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DelegatedStake_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DelegatedStake_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_curatorArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_curatorsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Curator_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Curator_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_signalArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_signalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Signal_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Signal_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_nameSignalArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_nameSignalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NameSignal_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NameSignal_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_nameSignalSubgraphRelationArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_nameSignalSubgraphRelationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NameSignalSubgraphRelation_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NameSignalSubgraphRelation_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_signalSubgraphDeploymentRelationArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_signalSubgraphDeploymentRelationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SignalSubgraphDeploymentRelation_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SignalSubgraphDeploymentRelation_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_disputeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_disputesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Dispute_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Dispute_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_attestationArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_attestationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Attestation_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Attestation_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_epochArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_epochesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Epoch_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Epoch_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_nameSignalTransactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_nameSignalTransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NameSignalTransaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NameSignalTransaction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_signalTransactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_signalTransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SignalTransaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SignalTransaction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_bridgeWithdrawalTransactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_bridgeWithdrawalTransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BridgeWithdrawalTransaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BridgeWithdrawalTransaction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_bridgeDepositTransactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_bridgeDepositTransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BridgeDepositTransaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BridgeDepositTransaction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_retryableTicketArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_retryableTicketsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RetryableTicket_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RetryableTicket_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_retryableTicketRedeemAttemptArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_retryableTicketRedeemAttemptsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RetryableTicketRedeemAttempt_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RetryableTicketRedeemAttempt_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_tokenManagerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_tokenManagersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenManager_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenManager_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_authorizedFunctionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_authorizedFunctionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AuthorizedFunction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AuthorizedFunction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_tokenLockWalletArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_tokenLockWalletsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenLockWallet_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenLockWallet_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_indexerDeploymentArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_indexerDeploymentsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexerDeployment_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexerDeployment_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_rewardCutHistoryEntityArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_rewardCutHistoryEntitiesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RewardCutHistoryEntity_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RewardCutHistoryEntity_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_delegationPoolHistoryEntityArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_delegationPoolHistoryEntitiesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DelegationPoolHistoryEntity_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DelegationPoolHistoryEntity_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_indexersRecalculateQueueArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_indexersRecalculateQueuesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexersRecalculateQueue_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexersRecalculateQueue_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_transactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_transactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transaction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_curatorSearchArgs = {
  text: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  block?: InputMaybe<Block_height>;
  where?: InputMaybe<Curator_filter>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_delegatorSearchArgs = {
  text: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  block?: InputMaybe<Block_height>;
  where?: InputMaybe<Delegator_filter>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_indexerSearchArgs = {
  text: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  block?: InputMaybe<Block_height>;
  where?: InputMaybe<Indexer_filter>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum_accountSearchArgs = {
  text: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  block?: InputMaybe<Block_height>;
  where?: InputMaybe<GraphAccount_filter>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryarbitrum__metaArgs = {
  block?: InputMaybe<Block_height>;
};

/**
 * All relevant data for arbitrum retryable tickets
 *
 */
export type RetryableTicket = {
  id: Scalars['ID'];
  /** hash of the retryable ticket creation transaction */
  txHash?: Maybe<Scalars['Bytes']>;
  redeemAttempts: Array<RetryableTicketRedeemAttempt>;
  /** The amount of times the ticket has been scheduled for redeeming */
  redeemCount?: Maybe<Scalars['Int']>;
};


/**
 * All relevant data for arbitrum retryable tickets
 *
 */
export type RetryableTicketredeemAttemptsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RetryableTicketRedeemAttempt_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RetryableTicketRedeemAttempt_filter>;
};

export type RetryableTicketRedeemAttempt = {
  id: Scalars['ID'];
  ticketId: RetryableTicket;
  txHash?: Maybe<Scalars['Bytes']>;
  sequenceNumber?: Maybe<Scalars['Int']>;
};

export type RetryableTicketRedeemAttempt_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  ticketId?: InputMaybe<Scalars['String']>;
  ticketId_not?: InputMaybe<Scalars['String']>;
  ticketId_gt?: InputMaybe<Scalars['String']>;
  ticketId_lt?: InputMaybe<Scalars['String']>;
  ticketId_gte?: InputMaybe<Scalars['String']>;
  ticketId_lte?: InputMaybe<Scalars['String']>;
  ticketId_in?: InputMaybe<Array<Scalars['String']>>;
  ticketId_not_in?: InputMaybe<Array<Scalars['String']>>;
  ticketId_contains?: InputMaybe<Scalars['String']>;
  ticketId_contains_nocase?: InputMaybe<Scalars['String']>;
  ticketId_not_contains?: InputMaybe<Scalars['String']>;
  ticketId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  ticketId_starts_with?: InputMaybe<Scalars['String']>;
  ticketId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ticketId_not_starts_with?: InputMaybe<Scalars['String']>;
  ticketId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ticketId_ends_with?: InputMaybe<Scalars['String']>;
  ticketId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ticketId_not_ends_with?: InputMaybe<Scalars['String']>;
  ticketId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ticketId_?: InputMaybe<RetryableTicket_filter>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_gt?: InputMaybe<Scalars['Bytes']>;
  txHash_lt?: InputMaybe<Scalars['Bytes']>;
  txHash_gte?: InputMaybe<Scalars['Bytes']>;
  txHash_lte?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  sequenceNumber?: InputMaybe<Scalars['Int']>;
  sequenceNumber_not?: InputMaybe<Scalars['Int']>;
  sequenceNumber_gt?: InputMaybe<Scalars['Int']>;
  sequenceNumber_lt?: InputMaybe<Scalars['Int']>;
  sequenceNumber_gte?: InputMaybe<Scalars['Int']>;
  sequenceNumber_lte?: InputMaybe<Scalars['Int']>;
  sequenceNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  sequenceNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RetryableTicketRedeemAttempt_filter>>>;
  or?: InputMaybe<Array<InputMaybe<RetryableTicketRedeemAttempt_filter>>>;
};

export type RetryableTicketRedeemAttempt_orderBy =
  | 'id'
  | 'ticketId'
  | 'ticketId__id'
  | 'ticketId__txHash'
  | 'ticketId__redeemCount'
  | 'txHash'
  | 'sequenceNumber';

export type RetryableTicket_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_gt?: InputMaybe<Scalars['Bytes']>;
  txHash_lt?: InputMaybe<Scalars['Bytes']>;
  txHash_gte?: InputMaybe<Scalars['Bytes']>;
  txHash_lte?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  redeemAttempts_?: InputMaybe<RetryableTicketRedeemAttempt_filter>;
  redeemCount?: InputMaybe<Scalars['Int']>;
  redeemCount_not?: InputMaybe<Scalars['Int']>;
  redeemCount_gt?: InputMaybe<Scalars['Int']>;
  redeemCount_lt?: InputMaybe<Scalars['Int']>;
  redeemCount_gte?: InputMaybe<Scalars['Int']>;
  redeemCount_lte?: InputMaybe<Scalars['Int']>;
  redeemCount_in?: InputMaybe<Array<Scalars['Int']>>;
  redeemCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RetryableTicket_filter>>>;
  or?: InputMaybe<Array<InputMaybe<RetryableTicket_filter>>>;
};

export type RetryableTicket_orderBy =
  | 'id'
  | 'txHash'
  | 'redeemAttempts'
  | 'redeemCount';

/**
 * TokenLockWallet Revocability Enum
 *
 */
export type Revocability =
  | 'NotSet'
  | 'Enabled'
  | 'Disabled';

/**
 * Reward cut history entity
 *
 */
export type RewardCutHistoryEntity = {
  /** Concatenation of indexer address and blocknumber. State on end of block if multiple times changed */
  id: Scalars['ID'];
  indexer: GraphAccount;
  /** The percent of indexing rewards generated by the total stake that the Indexer keeps for itself. In parts per million */
  indexingRewardCut: Scalars['Int'];
  /** In parts per million */
  indexingRewardEffectiveCut: Scalars['BigDecimal'];
  /** The percent of query rebate rewards the Indexer keeps for itself. In parts per million */
  queryFeeCut: Scalars['Int'];
  /** In parts per million */
  queryFeeEffectiveCut: Scalars['BigDecimal'];
  blockNumber: Scalars['Int'];
  timestamp: Scalars['Int'];
  epoch: Scalars['Int'];
};

export type RewardCutHistoryEntity_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  indexer?: InputMaybe<Scalars['String']>;
  indexer_not?: InputMaybe<Scalars['String']>;
  indexer_gt?: InputMaybe<Scalars['String']>;
  indexer_lt?: InputMaybe<Scalars['String']>;
  indexer_gte?: InputMaybe<Scalars['String']>;
  indexer_lte?: InputMaybe<Scalars['String']>;
  indexer_in?: InputMaybe<Array<Scalars['String']>>;
  indexer_not_in?: InputMaybe<Array<Scalars['String']>>;
  indexer_contains?: InputMaybe<Scalars['String']>;
  indexer_contains_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_contains?: InputMaybe<Scalars['String']>;
  indexer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  indexer_starts_with?: InputMaybe<Scalars['String']>;
  indexer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_starts_with?: InputMaybe<Scalars['String']>;
  indexer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_ends_with?: InputMaybe<Scalars['String']>;
  indexer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_ends_with?: InputMaybe<Scalars['String']>;
  indexer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_?: InputMaybe<GraphAccount_filter>;
  indexingRewardCut?: InputMaybe<Scalars['Int']>;
  indexingRewardCut_not?: InputMaybe<Scalars['Int']>;
  indexingRewardCut_gt?: InputMaybe<Scalars['Int']>;
  indexingRewardCut_lt?: InputMaybe<Scalars['Int']>;
  indexingRewardCut_gte?: InputMaybe<Scalars['Int']>;
  indexingRewardCut_lte?: InputMaybe<Scalars['Int']>;
  indexingRewardCut_in?: InputMaybe<Array<Scalars['Int']>>;
  indexingRewardCut_not_in?: InputMaybe<Array<Scalars['Int']>>;
  indexingRewardEffectiveCut?: InputMaybe<Scalars['BigDecimal']>;
  indexingRewardEffectiveCut_not?: InputMaybe<Scalars['BigDecimal']>;
  indexingRewardEffectiveCut_gt?: InputMaybe<Scalars['BigDecimal']>;
  indexingRewardEffectiveCut_lt?: InputMaybe<Scalars['BigDecimal']>;
  indexingRewardEffectiveCut_gte?: InputMaybe<Scalars['BigDecimal']>;
  indexingRewardEffectiveCut_lte?: InputMaybe<Scalars['BigDecimal']>;
  indexingRewardEffectiveCut_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  indexingRewardEffectiveCut_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  queryFeeCut?: InputMaybe<Scalars['Int']>;
  queryFeeCut_not?: InputMaybe<Scalars['Int']>;
  queryFeeCut_gt?: InputMaybe<Scalars['Int']>;
  queryFeeCut_lt?: InputMaybe<Scalars['Int']>;
  queryFeeCut_gte?: InputMaybe<Scalars['Int']>;
  queryFeeCut_lte?: InputMaybe<Scalars['Int']>;
  queryFeeCut_in?: InputMaybe<Array<Scalars['Int']>>;
  queryFeeCut_not_in?: InputMaybe<Array<Scalars['Int']>>;
  queryFeeEffectiveCut?: InputMaybe<Scalars['BigDecimal']>;
  queryFeeEffectiveCut_not?: InputMaybe<Scalars['BigDecimal']>;
  queryFeeEffectiveCut_gt?: InputMaybe<Scalars['BigDecimal']>;
  queryFeeEffectiveCut_lt?: InputMaybe<Scalars['BigDecimal']>;
  queryFeeEffectiveCut_gte?: InputMaybe<Scalars['BigDecimal']>;
  queryFeeEffectiveCut_lte?: InputMaybe<Scalars['BigDecimal']>;
  queryFeeEffectiveCut_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  queryFeeEffectiveCut_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  epoch?: InputMaybe<Scalars['Int']>;
  epoch_not?: InputMaybe<Scalars['Int']>;
  epoch_gt?: InputMaybe<Scalars['Int']>;
  epoch_lt?: InputMaybe<Scalars['Int']>;
  epoch_gte?: InputMaybe<Scalars['Int']>;
  epoch_lte?: InputMaybe<Scalars['Int']>;
  epoch_in?: InputMaybe<Array<Scalars['Int']>>;
  epoch_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RewardCutHistoryEntity_filter>>>;
  or?: InputMaybe<Array<InputMaybe<RewardCutHistoryEntity_filter>>>;
};

export type RewardCutHistoryEntity_orderBy =
  | 'id'
  | 'indexer'
  | 'indexer__id'
  | 'indexer__createdAt'
  | 'indexer__defaultDisplayName'
  | 'indexer__metadataHash'
  | 'indexer__balance'
  | 'indexer__balanceReceivedFromL1Signalling'
  | 'indexer__balanceReceivedFromL1Delegation'
  | 'indexer__curationApproval'
  | 'indexer__stakingApproval'
  | 'indexer__gnsApproval'
  | 'indexer__developerCreatedAt'
  | 'indexer__subgraphQueryFees'
  | 'indexingRewardCut'
  | 'indexingRewardEffectiveCut'
  | 'queryFeeCut'
  | 'queryFeeEffectiveCut'
  | 'blockNumber'
  | 'timestamp'
  | 'epoch';

/**
 * Curator Signal for a single SubgraphDeployment
 *
 */
export type Signal = {
  /** Eth address + subgraph deployment ID */
  id: Scalars['ID'];
  /** Eth address of the curator */
  curator: Curator;
  /** Subgraph being signalled */
  subgraphDeployment: SubgraphDeployment;
  /** CUMULATIVE number of tokens the curator has signalled */
  signalledTokens: Scalars['BigInt'];
  /** CUMULATIVE number of tokens the curator has unsignalled */
  unsignalledTokens: Scalars['BigInt'];
  /** Signal that the curator has from signaling their GRT */
  signal: Scalars['BigInt'];
  /** Curator average cost basis for this signal on this subgraph */
  averageCostBasis: Scalars['BigDecimal'];
  /** averageCostBasis / signal */
  averageCostBasisPerSignal: Scalars['BigDecimal'];
  /** Block for which the curator last entered or exited the curve */
  lastSignalChange: Scalars['Int'];
  /** Summation of realized rewards from before the last time the curator entered the curation curve */
  realizedRewards: Scalars['BigInt'];
  /** Timetamp when this entity was created */
  createdAt: Scalars['Int'];
  /** Timetamp when this entity was last updated */
  lastUpdatedAt: Scalars['Int'];
  /** Block number where this entity was created */
  createdAtBlock: Scalars['Int'];
  /** Block number where this entity was last updated */
  lastUpdatedAtBlock: Scalars['Int'];
  currentGRTValue: Scalars['BigInt'];
  PLGrt: Scalars['BigDecimal'];
  unrealizedPLGrt: Scalars['BigDecimal'];
  realizedPLGrt: Scalars['BigDecimal'];
  lastBuyInPrice: Scalars['BigDecimal'];
};

/**
 * Auxiliary entity to be able to batch update Signal entities
 *
 */
export type SignalSubgraphDeploymentRelation = {
  /** SubgraphDeployment ID + index */
  id: Scalars['ID'];
  signal: Signal;
  subgraphDeployment: SubgraphDeployment;
};

export type SignalSubgraphDeploymentRelation_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  signal?: InputMaybe<Scalars['String']>;
  signal_not?: InputMaybe<Scalars['String']>;
  signal_gt?: InputMaybe<Scalars['String']>;
  signal_lt?: InputMaybe<Scalars['String']>;
  signal_gte?: InputMaybe<Scalars['String']>;
  signal_lte?: InputMaybe<Scalars['String']>;
  signal_in?: InputMaybe<Array<Scalars['String']>>;
  signal_not_in?: InputMaybe<Array<Scalars['String']>>;
  signal_contains?: InputMaybe<Scalars['String']>;
  signal_contains_nocase?: InputMaybe<Scalars['String']>;
  signal_not_contains?: InputMaybe<Scalars['String']>;
  signal_not_contains_nocase?: InputMaybe<Scalars['String']>;
  signal_starts_with?: InputMaybe<Scalars['String']>;
  signal_starts_with_nocase?: InputMaybe<Scalars['String']>;
  signal_not_starts_with?: InputMaybe<Scalars['String']>;
  signal_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  signal_ends_with?: InputMaybe<Scalars['String']>;
  signal_ends_with_nocase?: InputMaybe<Scalars['String']>;
  signal_not_ends_with?: InputMaybe<Scalars['String']>;
  signal_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  signal_?: InputMaybe<Signal_filter>;
  subgraphDeployment?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not?: InputMaybe<Scalars['String']>;
  subgraphDeployment_gt?: InputMaybe<Scalars['String']>;
  subgraphDeployment_lt?: InputMaybe<Scalars['String']>;
  subgraphDeployment_gte?: InputMaybe<Scalars['String']>;
  subgraphDeployment_lte?: InputMaybe<Scalars['String']>;
  subgraphDeployment_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphDeployment_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphDeployment_contains?: InputMaybe<Scalars['String']>;
  subgraphDeployment_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_contains?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_starts_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_ends_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_?: InputMaybe<SubgraphDeployment_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SignalSubgraphDeploymentRelation_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SignalSubgraphDeploymentRelation_filter>>>;
};

export type SignalSubgraphDeploymentRelation_orderBy =
  | 'id'
  | 'signal'
  | 'signal__id'
  | 'signal__signalledTokens'
  | 'signal__unsignalledTokens'
  | 'signal__signal'
  | 'signal__averageCostBasis'
  | 'signal__averageCostBasisPerSignal'
  | 'signal__lastSignalChange'
  | 'signal__realizedRewards'
  | 'signal__createdAt'
  | 'signal__lastUpdatedAt'
  | 'signal__createdAtBlock'
  | 'signal__lastUpdatedAtBlock'
  | 'signal__currentGRTValue'
  | 'signal__PLGrt'
  | 'signal__unrealizedPLGrt'
  | 'signal__realizedPLGrt'
  | 'signal__lastBuyInPrice'
  | 'subgraphDeployment'
  | 'subgraphDeployment__id'
  | 'subgraphDeployment__ipfsHash'
  | 'subgraphDeployment__createdAt'
  | 'subgraphDeployment__deniedAt'
  | 'subgraphDeployment__originalName'
  | 'subgraphDeployment__stakedTokens'
  | 'subgraphDeployment__indexingRewardAmount'
  | 'subgraphDeployment__indexingIndexerRewardAmount'
  | 'subgraphDeployment__indexingDelegatorRewardAmount'
  | 'subgraphDeployment__queryFeesAmount'
  | 'subgraphDeployment__queryFeeRebates'
  | 'subgraphDeployment__curatorFeeRewards'
  | 'subgraphDeployment__signalledTokens'
  | 'subgraphDeployment__unsignalledTokens'
  | 'subgraphDeployment__signalAmount'
  | 'subgraphDeployment__pricePerShare'
  | 'subgraphDeployment__reserveRatio'
  | 'subgraphDeployment__subgraphCount'
  | 'subgraphDeployment__activeSubgraphCount'
  | 'subgraphDeployment__deprecatedSubgraphCount'
  | 'subgraphDeployment__transferredToL2'
  | 'subgraphDeployment__transferredToL2At'
  | 'subgraphDeployment__transferredToL2AtBlockNumber'
  | 'subgraphDeployment__transferredToL2AtTx'
  | 'subgraphDeployment__signalledTokensSentToL2'
  | 'subgraphDeployment__signalledTokensReceivedOnL2'
  | 'subgraphDeployment__currentSignalCount'
  | 'subgraphDeployment__indexersCount'
  | 'subgraphDeployment__allocationsCount'
  | 'subgraphDeployment__rewardsProportion';

/**
 * All relevant data for a Signal Transaction in The Graph Network
 *
 */
export type SignalTransaction = Transaction & {
  id: Scalars['ID'];
  blockNumber: Scalars['Int'];
  timestamp: Scalars['Int'];
  signer: GraphAccount;
  type: TransactionType;
  /** Amount of signal updated */
  signal: Scalars['BigInt'];
  /** Tokens used */
  tokens: Scalars['BigInt'];
  /** Subgraph where signal was updated */
  subgraphDeployment: SubgraphDeployment;
  /** Withdrawal fees. On minting only */
  withdrawalFees: Scalars['BigInt'];
};

export type SignalTransaction_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  signer?: InputMaybe<Scalars['String']>;
  signer_not?: InputMaybe<Scalars['String']>;
  signer_gt?: InputMaybe<Scalars['String']>;
  signer_lt?: InputMaybe<Scalars['String']>;
  signer_gte?: InputMaybe<Scalars['String']>;
  signer_lte?: InputMaybe<Scalars['String']>;
  signer_in?: InputMaybe<Array<Scalars['String']>>;
  signer_not_in?: InputMaybe<Array<Scalars['String']>>;
  signer_contains?: InputMaybe<Scalars['String']>;
  signer_contains_nocase?: InputMaybe<Scalars['String']>;
  signer_not_contains?: InputMaybe<Scalars['String']>;
  signer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  signer_starts_with?: InputMaybe<Scalars['String']>;
  signer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  signer_not_starts_with?: InputMaybe<Scalars['String']>;
  signer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  signer_ends_with?: InputMaybe<Scalars['String']>;
  signer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  signer_not_ends_with?: InputMaybe<Scalars['String']>;
  signer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  signer_?: InputMaybe<GraphAccount_filter>;
  type?: InputMaybe<TransactionType>;
  type_not?: InputMaybe<TransactionType>;
  type_in?: InputMaybe<Array<TransactionType>>;
  type_not_in?: InputMaybe<Array<TransactionType>>;
  signal?: InputMaybe<Scalars['BigInt']>;
  signal_not?: InputMaybe<Scalars['BigInt']>;
  signal_gt?: InputMaybe<Scalars['BigInt']>;
  signal_lt?: InputMaybe<Scalars['BigInt']>;
  signal_gte?: InputMaybe<Scalars['BigInt']>;
  signal_lte?: InputMaybe<Scalars['BigInt']>;
  signal_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokens?: InputMaybe<Scalars['BigInt']>;
  tokens_not?: InputMaybe<Scalars['BigInt']>;
  tokens_gt?: InputMaybe<Scalars['BigInt']>;
  tokens_lt?: InputMaybe<Scalars['BigInt']>;
  tokens_gte?: InputMaybe<Scalars['BigInt']>;
  tokens_lte?: InputMaybe<Scalars['BigInt']>;
  tokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  subgraphDeployment?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not?: InputMaybe<Scalars['String']>;
  subgraphDeployment_gt?: InputMaybe<Scalars['String']>;
  subgraphDeployment_lt?: InputMaybe<Scalars['String']>;
  subgraphDeployment_gte?: InputMaybe<Scalars['String']>;
  subgraphDeployment_lte?: InputMaybe<Scalars['String']>;
  subgraphDeployment_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphDeployment_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphDeployment_contains?: InputMaybe<Scalars['String']>;
  subgraphDeployment_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_contains?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_starts_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_ends_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_?: InputMaybe<SubgraphDeployment_filter>;
  withdrawalFees?: InputMaybe<Scalars['BigInt']>;
  withdrawalFees_not?: InputMaybe<Scalars['BigInt']>;
  withdrawalFees_gt?: InputMaybe<Scalars['BigInt']>;
  withdrawalFees_lt?: InputMaybe<Scalars['BigInt']>;
  withdrawalFees_gte?: InputMaybe<Scalars['BigInt']>;
  withdrawalFees_lte?: InputMaybe<Scalars['BigInt']>;
  withdrawalFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawalFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SignalTransaction_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SignalTransaction_filter>>>;
};

export type SignalTransaction_orderBy =
  | 'id'
  | 'blockNumber'
  | 'timestamp'
  | 'signer'
  | 'signer__id'
  | 'signer__createdAt'
  | 'signer__defaultDisplayName'
  | 'signer__metadataHash'
  | 'signer__balance'
  | 'signer__balanceReceivedFromL1Signalling'
  | 'signer__balanceReceivedFromL1Delegation'
  | 'signer__curationApproval'
  | 'signer__stakingApproval'
  | 'signer__gnsApproval'
  | 'signer__developerCreatedAt'
  | 'signer__subgraphQueryFees'
  | 'type'
  | 'signal'
  | 'tokens'
  | 'subgraphDeployment'
  | 'subgraphDeployment__id'
  | 'subgraphDeployment__ipfsHash'
  | 'subgraphDeployment__createdAt'
  | 'subgraphDeployment__deniedAt'
  | 'subgraphDeployment__originalName'
  | 'subgraphDeployment__stakedTokens'
  | 'subgraphDeployment__indexingRewardAmount'
  | 'subgraphDeployment__indexingIndexerRewardAmount'
  | 'subgraphDeployment__indexingDelegatorRewardAmount'
  | 'subgraphDeployment__queryFeesAmount'
  | 'subgraphDeployment__queryFeeRebates'
  | 'subgraphDeployment__curatorFeeRewards'
  | 'subgraphDeployment__signalledTokens'
  | 'subgraphDeployment__unsignalledTokens'
  | 'subgraphDeployment__signalAmount'
  | 'subgraphDeployment__pricePerShare'
  | 'subgraphDeployment__reserveRatio'
  | 'subgraphDeployment__subgraphCount'
  | 'subgraphDeployment__activeSubgraphCount'
  | 'subgraphDeployment__deprecatedSubgraphCount'
  | 'subgraphDeployment__transferredToL2'
  | 'subgraphDeployment__transferredToL2At'
  | 'subgraphDeployment__transferredToL2AtBlockNumber'
  | 'subgraphDeployment__transferredToL2AtTx'
  | 'subgraphDeployment__signalledTokensSentToL2'
  | 'subgraphDeployment__signalledTokensReceivedOnL2'
  | 'subgraphDeployment__currentSignalCount'
  | 'subgraphDeployment__indexersCount'
  | 'subgraphDeployment__allocationsCount'
  | 'subgraphDeployment__rewardsProportion'
  | 'withdrawalFees';

export type Signal_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  curator?: InputMaybe<Scalars['String']>;
  curator_not?: InputMaybe<Scalars['String']>;
  curator_gt?: InputMaybe<Scalars['String']>;
  curator_lt?: InputMaybe<Scalars['String']>;
  curator_gte?: InputMaybe<Scalars['String']>;
  curator_lte?: InputMaybe<Scalars['String']>;
  curator_in?: InputMaybe<Array<Scalars['String']>>;
  curator_not_in?: InputMaybe<Array<Scalars['String']>>;
  curator_contains?: InputMaybe<Scalars['String']>;
  curator_contains_nocase?: InputMaybe<Scalars['String']>;
  curator_not_contains?: InputMaybe<Scalars['String']>;
  curator_not_contains_nocase?: InputMaybe<Scalars['String']>;
  curator_starts_with?: InputMaybe<Scalars['String']>;
  curator_starts_with_nocase?: InputMaybe<Scalars['String']>;
  curator_not_starts_with?: InputMaybe<Scalars['String']>;
  curator_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  curator_ends_with?: InputMaybe<Scalars['String']>;
  curator_ends_with_nocase?: InputMaybe<Scalars['String']>;
  curator_not_ends_with?: InputMaybe<Scalars['String']>;
  curator_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  curator_?: InputMaybe<Curator_filter>;
  subgraphDeployment?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not?: InputMaybe<Scalars['String']>;
  subgraphDeployment_gt?: InputMaybe<Scalars['String']>;
  subgraphDeployment_lt?: InputMaybe<Scalars['String']>;
  subgraphDeployment_gte?: InputMaybe<Scalars['String']>;
  subgraphDeployment_lte?: InputMaybe<Scalars['String']>;
  subgraphDeployment_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphDeployment_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphDeployment_contains?: InputMaybe<Scalars['String']>;
  subgraphDeployment_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_contains?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_starts_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_ends_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_?: InputMaybe<SubgraphDeployment_filter>;
  signalledTokens?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unsignalledTokens?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unsignalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signal?: InputMaybe<Scalars['BigInt']>;
  signal_not?: InputMaybe<Scalars['BigInt']>;
  signal_gt?: InputMaybe<Scalars['BigInt']>;
  signal_lt?: InputMaybe<Scalars['BigInt']>;
  signal_gte?: InputMaybe<Scalars['BigInt']>;
  signal_lte?: InputMaybe<Scalars['BigInt']>;
  signal_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  averageCostBasis?: InputMaybe<Scalars['BigDecimal']>;
  averageCostBasis_not?: InputMaybe<Scalars['BigDecimal']>;
  averageCostBasis_gt?: InputMaybe<Scalars['BigDecimal']>;
  averageCostBasis_lt?: InputMaybe<Scalars['BigDecimal']>;
  averageCostBasis_gte?: InputMaybe<Scalars['BigDecimal']>;
  averageCostBasis_lte?: InputMaybe<Scalars['BigDecimal']>;
  averageCostBasis_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  averageCostBasis_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  averageCostBasisPerSignal?: InputMaybe<Scalars['BigDecimal']>;
  averageCostBasisPerSignal_not?: InputMaybe<Scalars['BigDecimal']>;
  averageCostBasisPerSignal_gt?: InputMaybe<Scalars['BigDecimal']>;
  averageCostBasisPerSignal_lt?: InputMaybe<Scalars['BigDecimal']>;
  averageCostBasisPerSignal_gte?: InputMaybe<Scalars['BigDecimal']>;
  averageCostBasisPerSignal_lte?: InputMaybe<Scalars['BigDecimal']>;
  averageCostBasisPerSignal_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  averageCostBasisPerSignal_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  lastSignalChange?: InputMaybe<Scalars['Int']>;
  lastSignalChange_not?: InputMaybe<Scalars['Int']>;
  lastSignalChange_gt?: InputMaybe<Scalars['Int']>;
  lastSignalChange_lt?: InputMaybe<Scalars['Int']>;
  lastSignalChange_gte?: InputMaybe<Scalars['Int']>;
  lastSignalChange_lte?: InputMaybe<Scalars['Int']>;
  lastSignalChange_in?: InputMaybe<Array<Scalars['Int']>>;
  lastSignalChange_not_in?: InputMaybe<Array<Scalars['Int']>>;
  realizedRewards?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_not?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_gt?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_lt?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_gte?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_lte?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  realizedRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  lastUpdatedAt?: InputMaybe<Scalars['Int']>;
  lastUpdatedAt_not?: InputMaybe<Scalars['Int']>;
  lastUpdatedAt_gt?: InputMaybe<Scalars['Int']>;
  lastUpdatedAt_lt?: InputMaybe<Scalars['Int']>;
  lastUpdatedAt_gte?: InputMaybe<Scalars['Int']>;
  lastUpdatedAt_lte?: InputMaybe<Scalars['Int']>;
  lastUpdatedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  lastUpdatedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAtBlock?: InputMaybe<Scalars['Int']>;
  createdAtBlock_not?: InputMaybe<Scalars['Int']>;
  createdAtBlock_gt?: InputMaybe<Scalars['Int']>;
  createdAtBlock_lt?: InputMaybe<Scalars['Int']>;
  createdAtBlock_gte?: InputMaybe<Scalars['Int']>;
  createdAtBlock_lte?: InputMaybe<Scalars['Int']>;
  createdAtBlock_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAtBlock_not_in?: InputMaybe<Array<Scalars['Int']>>;
  lastUpdatedAtBlock?: InputMaybe<Scalars['Int']>;
  lastUpdatedAtBlock_not?: InputMaybe<Scalars['Int']>;
  lastUpdatedAtBlock_gt?: InputMaybe<Scalars['Int']>;
  lastUpdatedAtBlock_lt?: InputMaybe<Scalars['Int']>;
  lastUpdatedAtBlock_gte?: InputMaybe<Scalars['Int']>;
  lastUpdatedAtBlock_lte?: InputMaybe<Scalars['Int']>;
  lastUpdatedAtBlock_in?: InputMaybe<Array<Scalars['Int']>>;
  lastUpdatedAtBlock_not_in?: InputMaybe<Array<Scalars['Int']>>;
  currentGRTValue?: InputMaybe<Scalars['BigInt']>;
  currentGRTValue_not?: InputMaybe<Scalars['BigInt']>;
  currentGRTValue_gt?: InputMaybe<Scalars['BigInt']>;
  currentGRTValue_lt?: InputMaybe<Scalars['BigInt']>;
  currentGRTValue_gte?: InputMaybe<Scalars['BigInt']>;
  currentGRTValue_lte?: InputMaybe<Scalars['BigInt']>;
  currentGRTValue_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentGRTValue_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  PLGrt?: InputMaybe<Scalars['BigDecimal']>;
  PLGrt_not?: InputMaybe<Scalars['BigDecimal']>;
  PLGrt_gt?: InputMaybe<Scalars['BigDecimal']>;
  PLGrt_lt?: InputMaybe<Scalars['BigDecimal']>;
  PLGrt_gte?: InputMaybe<Scalars['BigDecimal']>;
  PLGrt_lte?: InputMaybe<Scalars['BigDecimal']>;
  PLGrt_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  PLGrt_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  unrealizedPLGrt?: InputMaybe<Scalars['BigDecimal']>;
  unrealizedPLGrt_not?: InputMaybe<Scalars['BigDecimal']>;
  unrealizedPLGrt_gt?: InputMaybe<Scalars['BigDecimal']>;
  unrealizedPLGrt_lt?: InputMaybe<Scalars['BigDecimal']>;
  unrealizedPLGrt_gte?: InputMaybe<Scalars['BigDecimal']>;
  unrealizedPLGrt_lte?: InputMaybe<Scalars['BigDecimal']>;
  unrealizedPLGrt_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  unrealizedPLGrt_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  realizedPLGrt?: InputMaybe<Scalars['BigDecimal']>;
  realizedPLGrt_not?: InputMaybe<Scalars['BigDecimal']>;
  realizedPLGrt_gt?: InputMaybe<Scalars['BigDecimal']>;
  realizedPLGrt_lt?: InputMaybe<Scalars['BigDecimal']>;
  realizedPLGrt_gte?: InputMaybe<Scalars['BigDecimal']>;
  realizedPLGrt_lte?: InputMaybe<Scalars['BigDecimal']>;
  realizedPLGrt_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  realizedPLGrt_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  lastBuyInPrice?: InputMaybe<Scalars['BigDecimal']>;
  lastBuyInPrice_not?: InputMaybe<Scalars['BigDecimal']>;
  lastBuyInPrice_gt?: InputMaybe<Scalars['BigDecimal']>;
  lastBuyInPrice_lt?: InputMaybe<Scalars['BigDecimal']>;
  lastBuyInPrice_gte?: InputMaybe<Scalars['BigDecimal']>;
  lastBuyInPrice_lte?: InputMaybe<Scalars['BigDecimal']>;
  lastBuyInPrice_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  lastBuyInPrice_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Signal_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Signal_filter>>>;
};

export type Signal_orderBy =
  | 'id'
  | 'curator'
  | 'curator__id'
  | 'curator__createdAt'
  | 'curator__totalSignalledTokens'
  | 'curator__totalUnsignalledTokens'
  | 'curator__defaultDisplayName'
  | 'curator__totalNameSignalledTokens'
  | 'curator__totalNameUnsignalledTokens'
  | 'curator__totalWithdrawnTokens'
  | 'curator__realizedRewards'
  | 'curator__annualizedReturn'
  | 'curator__totalReturn'
  | 'curator__signalingEfficiency'
  | 'curator__totalNameSignal'
  | 'curator__totalNameSignalAverageCostBasis'
  | 'curator__totalAverageCostBasisPerNameSignal'
  | 'curator__totalSignal'
  | 'curator__totalSignalAverageCostBasis'
  | 'curator__totalAverageCostBasisPerSignal'
  | 'curator__signalCount'
  | 'curator__currentSignalCount'
  | 'curator__activeSignalCount'
  | 'curator__nameSignalCount'
  | 'curator__currentNameSignalCount'
  | 'curator__activeNameSignalCount'
  | 'curator__combinedSignalCount'
  | 'curator__activeCombinedSignalCount'
  | 'curator__allCurrentGRTValue'
  | 'curator__PLGrt'
  | 'curator__unrealizedPLGrt'
  | 'curator__realizedPLGrt'
  | 'curator__lastSignaledAt'
  | 'curator__lastUnsignaledAt'
  | 'subgraphDeployment'
  | 'subgraphDeployment__id'
  | 'subgraphDeployment__ipfsHash'
  | 'subgraphDeployment__createdAt'
  | 'subgraphDeployment__deniedAt'
  | 'subgraphDeployment__originalName'
  | 'subgraphDeployment__stakedTokens'
  | 'subgraphDeployment__indexingRewardAmount'
  | 'subgraphDeployment__indexingIndexerRewardAmount'
  | 'subgraphDeployment__indexingDelegatorRewardAmount'
  | 'subgraphDeployment__queryFeesAmount'
  | 'subgraphDeployment__queryFeeRebates'
  | 'subgraphDeployment__curatorFeeRewards'
  | 'subgraphDeployment__signalledTokens'
  | 'subgraphDeployment__unsignalledTokens'
  | 'subgraphDeployment__signalAmount'
  | 'subgraphDeployment__pricePerShare'
  | 'subgraphDeployment__reserveRatio'
  | 'subgraphDeployment__subgraphCount'
  | 'subgraphDeployment__activeSubgraphCount'
  | 'subgraphDeployment__deprecatedSubgraphCount'
  | 'subgraphDeployment__transferredToL2'
  | 'subgraphDeployment__transferredToL2At'
  | 'subgraphDeployment__transferredToL2AtBlockNumber'
  | 'subgraphDeployment__transferredToL2AtTx'
  | 'subgraphDeployment__signalledTokensSentToL2'
  | 'subgraphDeployment__signalledTokensReceivedOnL2'
  | 'subgraphDeployment__currentSignalCount'
  | 'subgraphDeployment__indexersCount'
  | 'subgraphDeployment__allocationsCount'
  | 'subgraphDeployment__rewardsProportion'
  | 'signalledTokens'
  | 'unsignalledTokens'
  | 'signal'
  | 'averageCostBasis'
  | 'averageCostBasisPerSignal'
  | 'lastSignalChange'
  | 'realizedRewards'
  | 'createdAt'
  | 'lastUpdatedAt'
  | 'createdAtBlock'
  | 'lastUpdatedAtBlock'
  | 'currentGRTValue'
  | 'PLGrt'
  | 'unrealizedPLGrt'
  | 'realizedPLGrt'
  | 'lastBuyInPrice';

/**
 * The Subgraph entity represents a permanent, unique endpoint. This unique endpoint can resolve to
 * many different SubgraphVersions over it's lifetime. The Subgraph can also have a name attributed
 * to it. The owner of the Subgraph can only use a name once, thus making the owner account and the
 * name chosen a unique combination. When a Curator singals on a Subgraph, they receive "Name Signal".
 * "Name Signal" resolves into the underlying "Signal" of the SubgraphDeployment. The metadata of the
 * subgraph is stored on IPFS.
 *
 */
export type Subgraph = {
  /** Subgraph ID - which is derived from the Organization/Individual graph accountID */
  id: Scalars['ID'];
  /** Graph account that owns this subgraph */
  owner: GraphAccount;
  /** Current version. Null if the subgraph is deprecated */
  currentVersion?: Maybe<SubgraphVersion>;
  /** [DEPRECATED] Past versions. Has the same data as 'versions' but keeps the old naming for backwards compatibility */
  pastVersions: Array<SubgraphVersion>;
  /** List of all the subgraph versions included the current one */
  versions: Array<SubgraphVersion>;
  /** Version counter */
  versionCount: Scalars['BigInt'];
  /** Creation timestamp */
  createdAt: Scalars['Int'];
  /** Updated timestamp */
  updatedAt: Scalars['Int'];
  /** Whether the subgraph is active or deprecated */
  active: Scalars['Boolean'];
  /** Whether the subgraph has been claimed/migrated. Can only be false for subgraphs created with V1 contracts that have not been claimed/migrated */
  migrated: Scalars['Boolean'];
  /** Whether the subgraph has been transferred from L1 to L2. Subgraphs published on L2 will have this as false unless they were published through a transfer */
  startedTransferToL2: Scalars['Boolean'];
  /** Timestamp for the L1 -> L2 Transfer. Null if the transfer hasn't started yet */
  startedTransferToL2At?: Maybe<Scalars['BigInt']>;
  /** Block number for the L1 -> L2 Transfer. Null if the transfer hasn't started yet */
  startedTransferToL2AtBlockNumber?: Maybe<Scalars['BigInt']>;
  /** Transaction hash for the L1 -> L2 Transfer. Null if the transfer hasn't started yet */
  startedTransferToL2AtTx?: Maybe<Scalars['String']>;
  /** Whether the subgraph has been fully transferred from L1 to L2. Subgraphs published on L2 will have this as false unless they were published through a transfer */
  transferredToL2: Scalars['Boolean'];
  /** Timestamp for the L1 -> L2 Transfer. Null if it's not fully transferred or if it's an L1 deployment */
  transferredToL2At?: Maybe<Scalars['BigInt']>;
  /** Block number for the L1 -> L2 Transfer. Null if it's not fully transferred or if it's an L1 deployment */
  transferredToL2AtBlockNumber?: Maybe<Scalars['BigInt']>;
  /** Transaction hash for the L1 -> L2 Transfer. Null if it's not fully transferred or if it's an L1 deployment */
  transferredToL2AtTx?: Maybe<Scalars['String']>;
  /** Amount of GRT transferred to L2 */
  signalledTokensSentToL2: Scalars['BigInt'];
  /** Amount of GRT received on L2 */
  signalledTokensReceivedOnL2: Scalars['BigInt'];
  /** ID of the subgraph on L2. Null if it's not transferred */
  idOnL2?: Maybe<Scalars['String']>;
  /** ID of the subgraph on L1. Null if it's not transferred */
  idOnL1?: Maybe<Scalars['String']>;
  /** The actual ID of the subgraph on the contracts subgraph NFT implementation. BigInt represented as a String. It's only actually valid once the subgraph is migrated (migrated == true) */
  nftID?: Maybe<Scalars['String']>;
  /** ID of the subgraph that was used on the old version of this The Graph Network Subgraph. Null for Subgraphs created with the new GNS implementation or for version 1 entities (since they use the old id) */
  oldID?: Maybe<Scalars['String']>;
  /** Address used to create the ID. Only available for Subgraphs created pre-migration */
  creatorAddress?: Maybe<Scalars['Bytes']>;
  /** Subgraph number used to create the ID. Only available for Subgraphs created pre-migration */
  subgraphNumber?: Maybe<Scalars['BigInt']>;
  /** Auxiliary field to denote whether the subgraph is handling the initialization order on V2 events. Doesn't matter for V1 events. */
  initializing: Scalars['Boolean'];
  /** Version of the entity. Subgraph entities are changing the way their ID is generated when the new GNS v2 rolls out so we need to differnetiate them */
  entityVersion: Scalars['Int'];
  /** Subgraph entities might have 'duplicate' entities so that old IDs can be persisted and still queried properly. If that happens we have to link both duplicate entities to be able to update them properly. */
  linkedEntity?: Maybe<Subgraph>;
  /** CUMULATIVE signaled tokens on this subgraph all time */
  signalledTokens: Scalars['BigInt'];
  /** CUMULATIVE unsignalled tokens on this subgraph all time */
  unsignalledTokens: Scalars['BigInt'];
  /** CURRENT amount of tokens signalled on this subgraph latest version. Mirrors the total amount signalled towards the current deployment. */
  currentSignalledTokens: Scalars['BigInt'];
  /** The CURRENT name signal amount for this subgraph */
  nameSignalAmount: Scalars['BigInt'];
  /** Current amount of version signal managed by the name pool */
  signalAmount: Scalars['BigInt'];
  /** Reserve ratio of the name curation curve. In parts per million */
  reserveRatio: Scalars['Int'];
  /** Tokens that can be withdrawn once the Subgraph is deprecated */
  withdrawableTokens: Scalars['BigInt'];
  /** Tokens the curators have withdrawn from the deprecated Subgraph */
  withdrawnTokens: Scalars['BigInt'];
  /** Curators of this subgraph deployment */
  nameSignals: Array<NameSignal>;
  /** Total amount of NameSignal entities */
  nameSignalCount: Scalars['Int'];
  /** Amount of NameSignal entities with signals > 0 */
  currentNameSignalCount: Scalars['Int'];
  /** Subgraph metadata */
  metadataHash: Scalars['Bytes'];
  /** Subgraph metadata ipfs hash */
  ipfsMetadataHash?: Maybe<Scalars['String']>;
  metadata?: Maybe<SubgraphMetadata>;
  currentVersionRelationEntity?: Maybe<CurrentSubgraphDeploymentRelation>;
};


/**
 * The Subgraph entity represents a permanent, unique endpoint. This unique endpoint can resolve to
 * many different SubgraphVersions over it's lifetime. The Subgraph can also have a name attributed
 * to it. The owner of the Subgraph can only use a name once, thus making the owner account and the
 * name chosen a unique combination. When a Curator singals on a Subgraph, they receive "Name Signal".
 * "Name Signal" resolves into the underlying "Signal" of the SubgraphDeployment. The metadata of the
 * subgraph is stored on IPFS.
 *
 */
export type SubgraphpastVersionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubgraphVersion_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SubgraphVersion_filter>;
};


/**
 * The Subgraph entity represents a permanent, unique endpoint. This unique endpoint can resolve to
 * many different SubgraphVersions over it's lifetime. The Subgraph can also have a name attributed
 * to it. The owner of the Subgraph can only use a name once, thus making the owner account and the
 * name chosen a unique combination. When a Curator singals on a Subgraph, they receive "Name Signal".
 * "Name Signal" resolves into the underlying "Signal" of the SubgraphDeployment. The metadata of the
 * subgraph is stored on IPFS.
 *
 */
export type SubgraphversionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubgraphVersion_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SubgraphVersion_filter>;
};


/**
 * The Subgraph entity represents a permanent, unique endpoint. This unique endpoint can resolve to
 * many different SubgraphVersions over it's lifetime. The Subgraph can also have a name attributed
 * to it. The owner of the Subgraph can only use a name once, thus making the owner account and the
 * name chosen a unique combination. When a Curator singals on a Subgraph, they receive "Name Signal".
 * "Name Signal" resolves into the underlying "Signal" of the SubgraphDeployment. The metadata of the
 * subgraph is stored on IPFS.
 *
 */
export type SubgraphnameSignalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NameSignal_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NameSignal_filter>;
};

/**
 * The SubgraphDeployment is represented by the immutable subgraph code that is uploaded, and posted
 * to IPFS. A SubgraphDeployment has a manifest which gives the instructions to the Graph Network on
 * what to index. The entity stores relevant data for the SubgraphDeployment on how much it is being
 * staked on and signaled on in the contracts, as well as how it is performing in query fees. It is
 * related to a SubgraphVersion.
 *
 */
export type SubgraphDeployment = {
  /** Subgraph Deployment ID. The IPFS hash with Qm removed to fit into 32 bytes */
  id: Scalars['ID'];
  /** IPFS hash of the subgraph manifest */
  ipfsHash: Scalars['String'];
  /** The versions this subgraph deployment relates to */
  versions: Array<SubgraphVersion>;
  /** Creation timestamp */
  createdAt: Scalars['Int'];
  /** The block at which this deployment was denied for rewards. Null if not denied */
  deniedAt: Scalars['Int'];
  /** [DEPRECATED] The original Subgraph that was deployed through GNS. Can be null if never created through GNS. Used for filtering in the Explorer. Always null now */
  originalName?: Maybe<Scalars['String']>;
  /** CURRENT total stake of all indexers on this Subgraph Deployment */
  stakedTokens: Scalars['BigInt'];
  /** Allocations created by indexers for this Subgraph */
  indexerAllocations: Array<Allocation>;
  /** Total rewards accrued all time by this Subgraph Deployment. Includes delegator and indexer rewards */
  indexingRewardAmount: Scalars['BigInt'];
  /** Total rewards accrued all time by indexers */
  indexingIndexerRewardAmount: Scalars['BigInt'];
  /** Total rewards accrued all time by delegators */
  indexingDelegatorRewardAmount: Scalars['BigInt'];
  /** Total query fees earned by this Subgraph Deployment, without curator query fees */
  queryFeesAmount: Scalars['BigInt'];
  /** Total query fee rebates earned from the protocol, through the rebates formula. Does not include delegation fees */
  queryFeeRebates: Scalars['BigInt'];
  /** Total curator rewards from fees */
  curatorFeeRewards: Scalars['BigInt'];
  /** CURRENT signalled tokens in the bonding curve */
  signalledTokens: Scalars['BigInt'];
  /** NOT IMPLEMENTED - CURRENT signalled tokens in the bonding curve */
  unsignalledTokens: Scalars['BigInt'];
  /** CURRENT curation signal for this subgraph deployment */
  signalAmount: Scalars['BigInt'];
  /** signalledTokens / signalAmount */
  pricePerShare: Scalars['BigDecimal'];
  /** Curators of this subgraph deployment */
  curatorSignals: Array<Signal>;
  /** Bonding curve reserve ratio. In parts per million */
  reserveRatio: Scalars['Int'];
  metadata?: Maybe<SubgraphDeploymentMetadata>;
  /** Total amount of Subgraph entities that used this deployment at some point. subgraphCount >= activeSubgraphCount + deprecatedSubgraphCount */
  subgraphCount: Scalars['Int'];
  /** Amount of active Subgraph entities that are currently using this deployment. Deprecated subgraph entities are not counted */
  activeSubgraphCount: Scalars['Int'];
  /** Amount of Subgraph entities that were currently using this deployment when they got deprecated */
  deprecatedSubgraphCount: Scalars['Int'];
  /** Whether the deployment has been transferred from L1 to L2. Subgraphs published on L2 will have this as false unless they were published through a transfer */
  transferredToL2: Scalars['Boolean'];
  /** Timestamp for the L1 -> L2 Transfer. Null if it's not fully transferred or if it's an L1 deployment */
  transferredToL2At?: Maybe<Scalars['BigInt']>;
  /** Block number for the L1 -> L2 Transfer. Null if it's not fully transferred or if it's an L1 deployment */
  transferredToL2AtBlockNumber?: Maybe<Scalars['BigInt']>;
  /** Transaction hash for the L1 -> L2 Transfer. Null if it's not fully transferred or if it's an L1 deployment */
  transferredToL2AtTx?: Maybe<Scalars['String']>;
  /** Amount of GRT transferred to L2 */
  signalledTokensSentToL2: Scalars['BigInt'];
  /** Amount of GRT received on L2 */
  signalledTokensReceivedOnL2: Scalars['BigInt'];
  /** Amount of signal entities created with signals > 0 */
  currentSignalCount: Scalars['Int'];
  /** Uniq indexers count */
  indexersCount: Scalars['Int'];
  /** Allocations to this deployments count */
  allocationsCount: Scalars['Int'];
  rewardsProportion: Scalars['BigDecimal'];
};


/**
 * The SubgraphDeployment is represented by the immutable subgraph code that is uploaded, and posted
 * to IPFS. A SubgraphDeployment has a manifest which gives the instructions to the Graph Network on
 * what to index. The entity stores relevant data for the SubgraphDeployment on how much it is being
 * staked on and signaled on in the contracts, as well as how it is performing in query fees. It is
 * related to a SubgraphVersion.
 *
 */
export type SubgraphDeploymentversionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubgraphVersion_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SubgraphVersion_filter>;
};


/**
 * The SubgraphDeployment is represented by the immutable subgraph code that is uploaded, and posted
 * to IPFS. A SubgraphDeployment has a manifest which gives the instructions to the Graph Network on
 * what to index. The entity stores relevant data for the SubgraphDeployment on how much it is being
 * staked on and signaled on in the contracts, as well as how it is performing in query fees. It is
 * related to a SubgraphVersion.
 *
 */
export type SubgraphDeploymentindexerAllocationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Allocation_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Allocation_filter>;
};


/**
 * The SubgraphDeployment is represented by the immutable subgraph code that is uploaded, and posted
 * to IPFS. A SubgraphDeployment has a manifest which gives the instructions to the Graph Network on
 * what to index. The entity stores relevant data for the SubgraphDeployment on how much it is being
 * staked on and signaled on in the contracts, as well as how it is performing in query fees. It is
 * related to a SubgraphVersion.
 *
 */
export type SubgraphDeploymentcuratorSignalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Signal_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Signal_filter>;
};

export type SubgraphDeploymentMetadata = {
  id: Scalars['ID'];
  /** Manifest file for this subgraph deployment */
  manifest?: Maybe<Scalars['String']>;
  /** Network where the contracts that the subgraph indexes are located */
  network?: Maybe<Scalars['String']>;
  /** IPFS hash of the schema file */
  schemaIpfsHash?: Maybe<Scalars['String']>;
};

export type SubgraphDeploymentMetadata_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  manifest?: InputMaybe<Scalars['String']>;
  manifest_not?: InputMaybe<Scalars['String']>;
  manifest_gt?: InputMaybe<Scalars['String']>;
  manifest_lt?: InputMaybe<Scalars['String']>;
  manifest_gte?: InputMaybe<Scalars['String']>;
  manifest_lte?: InputMaybe<Scalars['String']>;
  manifest_in?: InputMaybe<Array<Scalars['String']>>;
  manifest_not_in?: InputMaybe<Array<Scalars['String']>>;
  manifest_contains?: InputMaybe<Scalars['String']>;
  manifest_contains_nocase?: InputMaybe<Scalars['String']>;
  manifest_not_contains?: InputMaybe<Scalars['String']>;
  manifest_not_contains_nocase?: InputMaybe<Scalars['String']>;
  manifest_starts_with?: InputMaybe<Scalars['String']>;
  manifest_starts_with_nocase?: InputMaybe<Scalars['String']>;
  manifest_not_starts_with?: InputMaybe<Scalars['String']>;
  manifest_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  manifest_ends_with?: InputMaybe<Scalars['String']>;
  manifest_ends_with_nocase?: InputMaybe<Scalars['String']>;
  manifest_not_ends_with?: InputMaybe<Scalars['String']>;
  manifest_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  network?: InputMaybe<Scalars['String']>;
  network_not?: InputMaybe<Scalars['String']>;
  network_gt?: InputMaybe<Scalars['String']>;
  network_lt?: InputMaybe<Scalars['String']>;
  network_gte?: InputMaybe<Scalars['String']>;
  network_lte?: InputMaybe<Scalars['String']>;
  network_in?: InputMaybe<Array<Scalars['String']>>;
  network_not_in?: InputMaybe<Array<Scalars['String']>>;
  network_contains?: InputMaybe<Scalars['String']>;
  network_contains_nocase?: InputMaybe<Scalars['String']>;
  network_not_contains?: InputMaybe<Scalars['String']>;
  network_not_contains_nocase?: InputMaybe<Scalars['String']>;
  network_starts_with?: InputMaybe<Scalars['String']>;
  network_starts_with_nocase?: InputMaybe<Scalars['String']>;
  network_not_starts_with?: InputMaybe<Scalars['String']>;
  network_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  network_ends_with?: InputMaybe<Scalars['String']>;
  network_ends_with_nocase?: InputMaybe<Scalars['String']>;
  network_not_ends_with?: InputMaybe<Scalars['String']>;
  network_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  schemaIpfsHash?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_not?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_gt?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_lt?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_gte?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_lte?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_in?: InputMaybe<Array<Scalars['String']>>;
  schemaIpfsHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  schemaIpfsHash_contains?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_contains_nocase?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_not_contains?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_starts_with?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_not_starts_with?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_ends_with?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_not_ends_with?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SubgraphDeploymentMetadata_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SubgraphDeploymentMetadata_filter>>>;
};

export type SubgraphDeploymentMetadata_orderBy =
  | 'id'
  | 'manifest'
  | 'network'
  | 'schemaIpfsHash';

export type SubgraphDeployment_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  ipfsHash?: InputMaybe<Scalars['String']>;
  ipfsHash_not?: InputMaybe<Scalars['String']>;
  ipfsHash_gt?: InputMaybe<Scalars['String']>;
  ipfsHash_lt?: InputMaybe<Scalars['String']>;
  ipfsHash_gte?: InputMaybe<Scalars['String']>;
  ipfsHash_lte?: InputMaybe<Scalars['String']>;
  ipfsHash_in?: InputMaybe<Array<Scalars['String']>>;
  ipfsHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  ipfsHash_contains?: InputMaybe<Scalars['String']>;
  ipfsHash_contains_nocase?: InputMaybe<Scalars['String']>;
  ipfsHash_not_contains?: InputMaybe<Scalars['String']>;
  ipfsHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  ipfsHash_starts_with?: InputMaybe<Scalars['String']>;
  ipfsHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ipfsHash_not_starts_with?: InputMaybe<Scalars['String']>;
  ipfsHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ipfsHash_ends_with?: InputMaybe<Scalars['String']>;
  ipfsHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ipfsHash_not_ends_with?: InputMaybe<Scalars['String']>;
  ipfsHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  versions_?: InputMaybe<SubgraphVersion_filter>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  deniedAt?: InputMaybe<Scalars['Int']>;
  deniedAt_not?: InputMaybe<Scalars['Int']>;
  deniedAt_gt?: InputMaybe<Scalars['Int']>;
  deniedAt_lt?: InputMaybe<Scalars['Int']>;
  deniedAt_gte?: InputMaybe<Scalars['Int']>;
  deniedAt_lte?: InputMaybe<Scalars['Int']>;
  deniedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  deniedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  originalName?: InputMaybe<Scalars['String']>;
  originalName_not?: InputMaybe<Scalars['String']>;
  originalName_gt?: InputMaybe<Scalars['String']>;
  originalName_lt?: InputMaybe<Scalars['String']>;
  originalName_gte?: InputMaybe<Scalars['String']>;
  originalName_lte?: InputMaybe<Scalars['String']>;
  originalName_in?: InputMaybe<Array<Scalars['String']>>;
  originalName_not_in?: InputMaybe<Array<Scalars['String']>>;
  originalName_contains?: InputMaybe<Scalars['String']>;
  originalName_contains_nocase?: InputMaybe<Scalars['String']>;
  originalName_not_contains?: InputMaybe<Scalars['String']>;
  originalName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  originalName_starts_with?: InputMaybe<Scalars['String']>;
  originalName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  originalName_not_starts_with?: InputMaybe<Scalars['String']>;
  originalName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  originalName_ends_with?: InputMaybe<Scalars['String']>;
  originalName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  originalName_not_ends_with?: InputMaybe<Scalars['String']>;
  originalName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stakedTokens?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_not?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexerAllocations_?: InputMaybe<Allocation_filter>;
  indexingRewardAmount?: InputMaybe<Scalars['BigInt']>;
  indexingRewardAmount_not?: InputMaybe<Scalars['BigInt']>;
  indexingRewardAmount_gt?: InputMaybe<Scalars['BigInt']>;
  indexingRewardAmount_lt?: InputMaybe<Scalars['BigInt']>;
  indexingRewardAmount_gte?: InputMaybe<Scalars['BigInt']>;
  indexingRewardAmount_lte?: InputMaybe<Scalars['BigInt']>;
  indexingRewardAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingRewardAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingIndexerRewardAmount?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewardAmount_not?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewardAmount_gt?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewardAmount_lt?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewardAmount_gte?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewardAmount_lte?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewardAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingIndexerRewardAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingDelegatorRewardAmount?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewardAmount_not?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewardAmount_gt?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewardAmount_lt?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewardAmount_gte?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewardAmount_lte?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewardAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingDelegatorRewardAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeesAmount?: InputMaybe<Scalars['BigInt']>;
  queryFeesAmount_not?: InputMaybe<Scalars['BigInt']>;
  queryFeesAmount_gt?: InputMaybe<Scalars['BigInt']>;
  queryFeesAmount_lt?: InputMaybe<Scalars['BigInt']>;
  queryFeesAmount_gte?: InputMaybe<Scalars['BigInt']>;
  queryFeesAmount_lte?: InputMaybe<Scalars['BigInt']>;
  queryFeesAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeesAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeeRebates?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_not?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_gt?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_lt?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_gte?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_lte?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeeRebates_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  curatorFeeRewards?: InputMaybe<Scalars['BigInt']>;
  curatorFeeRewards_not?: InputMaybe<Scalars['BigInt']>;
  curatorFeeRewards_gt?: InputMaybe<Scalars['BigInt']>;
  curatorFeeRewards_lt?: InputMaybe<Scalars['BigInt']>;
  curatorFeeRewards_gte?: InputMaybe<Scalars['BigInt']>;
  curatorFeeRewards_lte?: InputMaybe<Scalars['BigInt']>;
  curatorFeeRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  curatorFeeRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalledTokens?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unsignalledTokens?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unsignalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalAmount?: InputMaybe<Scalars['BigInt']>;
  signalAmount_not?: InputMaybe<Scalars['BigInt']>;
  signalAmount_gt?: InputMaybe<Scalars['BigInt']>;
  signalAmount_lt?: InputMaybe<Scalars['BigInt']>;
  signalAmount_gte?: InputMaybe<Scalars['BigInt']>;
  signalAmount_lte?: InputMaybe<Scalars['BigInt']>;
  signalAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pricePerShare?: InputMaybe<Scalars['BigDecimal']>;
  pricePerShare_not?: InputMaybe<Scalars['BigDecimal']>;
  pricePerShare_gt?: InputMaybe<Scalars['BigDecimal']>;
  pricePerShare_lt?: InputMaybe<Scalars['BigDecimal']>;
  pricePerShare_gte?: InputMaybe<Scalars['BigDecimal']>;
  pricePerShare_lte?: InputMaybe<Scalars['BigDecimal']>;
  pricePerShare_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  pricePerShare_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  curatorSignals_?: InputMaybe<Signal_filter>;
  reserveRatio?: InputMaybe<Scalars['Int']>;
  reserveRatio_not?: InputMaybe<Scalars['Int']>;
  reserveRatio_gt?: InputMaybe<Scalars['Int']>;
  reserveRatio_lt?: InputMaybe<Scalars['Int']>;
  reserveRatio_gte?: InputMaybe<Scalars['Int']>;
  reserveRatio_lte?: InputMaybe<Scalars['Int']>;
  reserveRatio_in?: InputMaybe<Array<Scalars['Int']>>;
  reserveRatio_not_in?: InputMaybe<Array<Scalars['Int']>>;
  metadata?: InputMaybe<Scalars['String']>;
  metadata_not?: InputMaybe<Scalars['String']>;
  metadata_gt?: InputMaybe<Scalars['String']>;
  metadata_lt?: InputMaybe<Scalars['String']>;
  metadata_gte?: InputMaybe<Scalars['String']>;
  metadata_lte?: InputMaybe<Scalars['String']>;
  metadata_in?: InputMaybe<Array<Scalars['String']>>;
  metadata_not_in?: InputMaybe<Array<Scalars['String']>>;
  metadata_contains?: InputMaybe<Scalars['String']>;
  metadata_contains_nocase?: InputMaybe<Scalars['String']>;
  metadata_not_contains?: InputMaybe<Scalars['String']>;
  metadata_not_contains_nocase?: InputMaybe<Scalars['String']>;
  metadata_starts_with?: InputMaybe<Scalars['String']>;
  metadata_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metadata_not_starts_with?: InputMaybe<Scalars['String']>;
  metadata_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metadata_ends_with?: InputMaybe<Scalars['String']>;
  metadata_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metadata_not_ends_with?: InputMaybe<Scalars['String']>;
  metadata_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metadata_?: InputMaybe<SubgraphDeploymentMetadata_filter>;
  subgraphCount?: InputMaybe<Scalars['Int']>;
  subgraphCount_not?: InputMaybe<Scalars['Int']>;
  subgraphCount_gt?: InputMaybe<Scalars['Int']>;
  subgraphCount_lt?: InputMaybe<Scalars['Int']>;
  subgraphCount_gte?: InputMaybe<Scalars['Int']>;
  subgraphCount_lte?: InputMaybe<Scalars['Int']>;
  subgraphCount_in?: InputMaybe<Array<Scalars['Int']>>;
  subgraphCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  activeSubgraphCount?: InputMaybe<Scalars['Int']>;
  activeSubgraphCount_not?: InputMaybe<Scalars['Int']>;
  activeSubgraphCount_gt?: InputMaybe<Scalars['Int']>;
  activeSubgraphCount_lt?: InputMaybe<Scalars['Int']>;
  activeSubgraphCount_gte?: InputMaybe<Scalars['Int']>;
  activeSubgraphCount_lte?: InputMaybe<Scalars['Int']>;
  activeSubgraphCount_in?: InputMaybe<Array<Scalars['Int']>>;
  activeSubgraphCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  deprecatedSubgraphCount?: InputMaybe<Scalars['Int']>;
  deprecatedSubgraphCount_not?: InputMaybe<Scalars['Int']>;
  deprecatedSubgraphCount_gt?: InputMaybe<Scalars['Int']>;
  deprecatedSubgraphCount_lt?: InputMaybe<Scalars['Int']>;
  deprecatedSubgraphCount_gte?: InputMaybe<Scalars['Int']>;
  deprecatedSubgraphCount_lte?: InputMaybe<Scalars['Int']>;
  deprecatedSubgraphCount_in?: InputMaybe<Array<Scalars['Int']>>;
  deprecatedSubgraphCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transferredToL2?: InputMaybe<Scalars['Boolean']>;
  transferredToL2_not?: InputMaybe<Scalars['Boolean']>;
  transferredToL2_in?: InputMaybe<Array<Scalars['Boolean']>>;
  transferredToL2_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  transferredToL2At?: InputMaybe<Scalars['BigInt']>;
  transferredToL2At_not?: InputMaybe<Scalars['BigInt']>;
  transferredToL2At_gt?: InputMaybe<Scalars['BigInt']>;
  transferredToL2At_lt?: InputMaybe<Scalars['BigInt']>;
  transferredToL2At_gte?: InputMaybe<Scalars['BigInt']>;
  transferredToL2At_lte?: InputMaybe<Scalars['BigInt']>;
  transferredToL2At_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transferredToL2At_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transferredToL2AtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  transferredToL2AtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  transferredToL2AtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  transferredToL2AtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  transferredToL2AtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  transferredToL2AtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  transferredToL2AtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transferredToL2AtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transferredToL2AtTx?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_not?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_gt?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_lt?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_gte?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_lte?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_in?: InputMaybe<Array<Scalars['String']>>;
  transferredToL2AtTx_not_in?: InputMaybe<Array<Scalars['String']>>;
  transferredToL2AtTx_contains?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_contains_nocase?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_not_contains?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_starts_with?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_not_starts_with?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_ends_with?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_not_ends_with?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  signalledTokensSentToL2?: InputMaybe<Scalars['BigInt']>;
  signalledTokensSentToL2_not?: InputMaybe<Scalars['BigInt']>;
  signalledTokensSentToL2_gt?: InputMaybe<Scalars['BigInt']>;
  signalledTokensSentToL2_lt?: InputMaybe<Scalars['BigInt']>;
  signalledTokensSentToL2_gte?: InputMaybe<Scalars['BigInt']>;
  signalledTokensSentToL2_lte?: InputMaybe<Scalars['BigInt']>;
  signalledTokensSentToL2_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalledTokensSentToL2_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalledTokensReceivedOnL2?: InputMaybe<Scalars['BigInt']>;
  signalledTokensReceivedOnL2_not?: InputMaybe<Scalars['BigInt']>;
  signalledTokensReceivedOnL2_gt?: InputMaybe<Scalars['BigInt']>;
  signalledTokensReceivedOnL2_lt?: InputMaybe<Scalars['BigInt']>;
  signalledTokensReceivedOnL2_gte?: InputMaybe<Scalars['BigInt']>;
  signalledTokensReceivedOnL2_lte?: InputMaybe<Scalars['BigInt']>;
  signalledTokensReceivedOnL2_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalledTokensReceivedOnL2_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentSignalCount?: InputMaybe<Scalars['Int']>;
  currentSignalCount_not?: InputMaybe<Scalars['Int']>;
  currentSignalCount_gt?: InputMaybe<Scalars['Int']>;
  currentSignalCount_lt?: InputMaybe<Scalars['Int']>;
  currentSignalCount_gte?: InputMaybe<Scalars['Int']>;
  currentSignalCount_lte?: InputMaybe<Scalars['Int']>;
  currentSignalCount_in?: InputMaybe<Array<Scalars['Int']>>;
  currentSignalCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  indexersCount?: InputMaybe<Scalars['Int']>;
  indexersCount_not?: InputMaybe<Scalars['Int']>;
  indexersCount_gt?: InputMaybe<Scalars['Int']>;
  indexersCount_lt?: InputMaybe<Scalars['Int']>;
  indexersCount_gte?: InputMaybe<Scalars['Int']>;
  indexersCount_lte?: InputMaybe<Scalars['Int']>;
  indexersCount_in?: InputMaybe<Array<Scalars['Int']>>;
  indexersCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  allocationsCount?: InputMaybe<Scalars['Int']>;
  allocationsCount_not?: InputMaybe<Scalars['Int']>;
  allocationsCount_gt?: InputMaybe<Scalars['Int']>;
  allocationsCount_lt?: InputMaybe<Scalars['Int']>;
  allocationsCount_gte?: InputMaybe<Scalars['Int']>;
  allocationsCount_lte?: InputMaybe<Scalars['Int']>;
  allocationsCount_in?: InputMaybe<Array<Scalars['Int']>>;
  allocationsCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  rewardsProportion?: InputMaybe<Scalars['BigDecimal']>;
  rewardsProportion_not?: InputMaybe<Scalars['BigDecimal']>;
  rewardsProportion_gt?: InputMaybe<Scalars['BigDecimal']>;
  rewardsProportion_lt?: InputMaybe<Scalars['BigDecimal']>;
  rewardsProportion_gte?: InputMaybe<Scalars['BigDecimal']>;
  rewardsProportion_lte?: InputMaybe<Scalars['BigDecimal']>;
  rewardsProportion_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardsProportion_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SubgraphDeployment_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SubgraphDeployment_filter>>>;
};

export type SubgraphDeployment_orderBy =
  | 'id'
  | 'ipfsHash'
  | 'versions'
  | 'createdAt'
  | 'deniedAt'
  | 'originalName'
  | 'stakedTokens'
  | 'indexerAllocations'
  | 'indexingRewardAmount'
  | 'indexingIndexerRewardAmount'
  | 'indexingDelegatorRewardAmount'
  | 'queryFeesAmount'
  | 'queryFeeRebates'
  | 'curatorFeeRewards'
  | 'signalledTokens'
  | 'unsignalledTokens'
  | 'signalAmount'
  | 'pricePerShare'
  | 'curatorSignals'
  | 'reserveRatio'
  | 'metadata'
  | 'metadata__id'
  | 'metadata__manifest'
  | 'metadata__network'
  | 'metadata__schemaIpfsHash'
  | 'subgraphCount'
  | 'activeSubgraphCount'
  | 'deprecatedSubgraphCount'
  | 'transferredToL2'
  | 'transferredToL2At'
  | 'transferredToL2AtBlockNumber'
  | 'transferredToL2AtTx'
  | 'signalledTokensSentToL2'
  | 'signalledTokensReceivedOnL2'
  | 'currentSignalCount'
  | 'indexersCount'
  | 'allocationsCount'
  | 'rewardsProportion';

export type SubgraphMetadata = {
  id: Scalars['ID'];
  /** Short description of the subgraph */
  description?: Maybe<Scalars['String']>;
  /** Image in string format */
  image?: Maybe<Scalars['String']>;
  /** NFT Image representation */
  nftImage?: Maybe<Scalars['String']>;
  /** Location of the code for this project */
  codeRepository?: Maybe<Scalars['String']>;
  /** Projects website */
  website?: Maybe<Scalars['String']>;
  /** Display name */
  displayName?: Maybe<Scalars['String']>;
};

export type SubgraphMetadata_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  description?: InputMaybe<Scalars['String']>;
  description_not?: InputMaybe<Scalars['String']>;
  description_gt?: InputMaybe<Scalars['String']>;
  description_lt?: InputMaybe<Scalars['String']>;
  description_gte?: InputMaybe<Scalars['String']>;
  description_lte?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_contains_nocase?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  image_not?: InputMaybe<Scalars['String']>;
  image_gt?: InputMaybe<Scalars['String']>;
  image_lt?: InputMaybe<Scalars['String']>;
  image_gte?: InputMaybe<Scalars['String']>;
  image_lte?: InputMaybe<Scalars['String']>;
  image_in?: InputMaybe<Array<Scalars['String']>>;
  image_not_in?: InputMaybe<Array<Scalars['String']>>;
  image_contains?: InputMaybe<Scalars['String']>;
  image_contains_nocase?: InputMaybe<Scalars['String']>;
  image_not_contains?: InputMaybe<Scalars['String']>;
  image_not_contains_nocase?: InputMaybe<Scalars['String']>;
  image_starts_with?: InputMaybe<Scalars['String']>;
  image_starts_with_nocase?: InputMaybe<Scalars['String']>;
  image_not_starts_with?: InputMaybe<Scalars['String']>;
  image_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  image_ends_with?: InputMaybe<Scalars['String']>;
  image_ends_with_nocase?: InputMaybe<Scalars['String']>;
  image_not_ends_with?: InputMaybe<Scalars['String']>;
  image_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nftImage?: InputMaybe<Scalars['String']>;
  nftImage_not?: InputMaybe<Scalars['String']>;
  nftImage_gt?: InputMaybe<Scalars['String']>;
  nftImage_lt?: InputMaybe<Scalars['String']>;
  nftImage_gte?: InputMaybe<Scalars['String']>;
  nftImage_lte?: InputMaybe<Scalars['String']>;
  nftImage_in?: InputMaybe<Array<Scalars['String']>>;
  nftImage_not_in?: InputMaybe<Array<Scalars['String']>>;
  nftImage_contains?: InputMaybe<Scalars['String']>;
  nftImage_contains_nocase?: InputMaybe<Scalars['String']>;
  nftImage_not_contains?: InputMaybe<Scalars['String']>;
  nftImage_not_contains_nocase?: InputMaybe<Scalars['String']>;
  nftImage_starts_with?: InputMaybe<Scalars['String']>;
  nftImage_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nftImage_not_starts_with?: InputMaybe<Scalars['String']>;
  nftImage_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nftImage_ends_with?: InputMaybe<Scalars['String']>;
  nftImage_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nftImage_not_ends_with?: InputMaybe<Scalars['String']>;
  nftImage_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  codeRepository?: InputMaybe<Scalars['String']>;
  codeRepository_not?: InputMaybe<Scalars['String']>;
  codeRepository_gt?: InputMaybe<Scalars['String']>;
  codeRepository_lt?: InputMaybe<Scalars['String']>;
  codeRepository_gte?: InputMaybe<Scalars['String']>;
  codeRepository_lte?: InputMaybe<Scalars['String']>;
  codeRepository_in?: InputMaybe<Array<Scalars['String']>>;
  codeRepository_not_in?: InputMaybe<Array<Scalars['String']>>;
  codeRepository_contains?: InputMaybe<Scalars['String']>;
  codeRepository_contains_nocase?: InputMaybe<Scalars['String']>;
  codeRepository_not_contains?: InputMaybe<Scalars['String']>;
  codeRepository_not_contains_nocase?: InputMaybe<Scalars['String']>;
  codeRepository_starts_with?: InputMaybe<Scalars['String']>;
  codeRepository_starts_with_nocase?: InputMaybe<Scalars['String']>;
  codeRepository_not_starts_with?: InputMaybe<Scalars['String']>;
  codeRepository_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  codeRepository_ends_with?: InputMaybe<Scalars['String']>;
  codeRepository_ends_with_nocase?: InputMaybe<Scalars['String']>;
  codeRepository_not_ends_with?: InputMaybe<Scalars['String']>;
  codeRepository_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
  website_not?: InputMaybe<Scalars['String']>;
  website_gt?: InputMaybe<Scalars['String']>;
  website_lt?: InputMaybe<Scalars['String']>;
  website_gte?: InputMaybe<Scalars['String']>;
  website_lte?: InputMaybe<Scalars['String']>;
  website_in?: InputMaybe<Array<Scalars['String']>>;
  website_not_in?: InputMaybe<Array<Scalars['String']>>;
  website_contains?: InputMaybe<Scalars['String']>;
  website_contains_nocase?: InputMaybe<Scalars['String']>;
  website_not_contains?: InputMaybe<Scalars['String']>;
  website_not_contains_nocase?: InputMaybe<Scalars['String']>;
  website_starts_with?: InputMaybe<Scalars['String']>;
  website_starts_with_nocase?: InputMaybe<Scalars['String']>;
  website_not_starts_with?: InputMaybe<Scalars['String']>;
  website_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  website_ends_with?: InputMaybe<Scalars['String']>;
  website_ends_with_nocase?: InputMaybe<Scalars['String']>;
  website_not_ends_with?: InputMaybe<Scalars['String']>;
  website_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  displayName?: InputMaybe<Scalars['String']>;
  displayName_not?: InputMaybe<Scalars['String']>;
  displayName_gt?: InputMaybe<Scalars['String']>;
  displayName_lt?: InputMaybe<Scalars['String']>;
  displayName_gte?: InputMaybe<Scalars['String']>;
  displayName_lte?: InputMaybe<Scalars['String']>;
  displayName_in?: InputMaybe<Array<Scalars['String']>>;
  displayName_not_in?: InputMaybe<Array<Scalars['String']>>;
  displayName_contains?: InputMaybe<Scalars['String']>;
  displayName_contains_nocase?: InputMaybe<Scalars['String']>;
  displayName_not_contains?: InputMaybe<Scalars['String']>;
  displayName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  displayName_starts_with?: InputMaybe<Scalars['String']>;
  displayName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  displayName_not_starts_with?: InputMaybe<Scalars['String']>;
  displayName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  displayName_ends_with?: InputMaybe<Scalars['String']>;
  displayName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  displayName_not_ends_with?: InputMaybe<Scalars['String']>;
  displayName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SubgraphMetadata_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SubgraphMetadata_filter>>>;
};

export type SubgraphMetadata_orderBy =
  | 'id'
  | 'description'
  | 'image'
  | 'nftImage'
  | 'codeRepository'
  | 'website'
  | 'displayName';

/**
 * The SubgraphVersion entity represents a version of the Subgraph. A new SubgraphVersion is created
 * whenever there is an update to the Subgraph triggered by the owner. The new SubgraphVersion can
 * then point to a new SubgraphDeployment, thus allowing the Subgraph to resolve to a different
 * deployment, while keeping the same endpoint. The metadata and label are stored on IPFS. The label
 * is for the developer to provide a semantic version. This is different from the version, which is
 * just a counter than increases each time a new SubgraphVersion is created for a Subgraph.
 *
 */
export type SubgraphVersion = {
  /** Concatenation of subgraph, subgraph deployment, and version ID */
  id: Scalars['ID'];
  /** Subgraph of this version */
  subgraph: Subgraph;
  /** Subgraph deployment of this version */
  subgraphDeployment: SubgraphDeployment;
  /** Version number */
  version: Scalars['Int'];
  /** Creation timestamp */
  createdAt: Scalars['Int'];
  /** Subgraph version metadata content address */
  metadataHash?: Maybe<Scalars['Bytes']>;
  metadata?: Maybe<SubgraphVersionMetadata>;
  entityVersion: Scalars['Int'];
  linkedEntity?: Maybe<SubgraphVersion>;
};

export type SubgraphVersionMetadata = {
  id: Scalars['ID'];
  /** Short description of the version */
  description?: Maybe<Scalars['String']>;
  /** Semantic versioning label */
  label?: Maybe<Scalars['String']>;
};

export type SubgraphVersionMetadata_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  description?: InputMaybe<Scalars['String']>;
  description_not?: InputMaybe<Scalars['String']>;
  description_gt?: InputMaybe<Scalars['String']>;
  description_lt?: InputMaybe<Scalars['String']>;
  description_gte?: InputMaybe<Scalars['String']>;
  description_lte?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_contains_nocase?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
  label_not?: InputMaybe<Scalars['String']>;
  label_gt?: InputMaybe<Scalars['String']>;
  label_lt?: InputMaybe<Scalars['String']>;
  label_gte?: InputMaybe<Scalars['String']>;
  label_lte?: InputMaybe<Scalars['String']>;
  label_in?: InputMaybe<Array<Scalars['String']>>;
  label_not_in?: InputMaybe<Array<Scalars['String']>>;
  label_contains?: InputMaybe<Scalars['String']>;
  label_contains_nocase?: InputMaybe<Scalars['String']>;
  label_not_contains?: InputMaybe<Scalars['String']>;
  label_not_contains_nocase?: InputMaybe<Scalars['String']>;
  label_starts_with?: InputMaybe<Scalars['String']>;
  label_starts_with_nocase?: InputMaybe<Scalars['String']>;
  label_not_starts_with?: InputMaybe<Scalars['String']>;
  label_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  label_ends_with?: InputMaybe<Scalars['String']>;
  label_ends_with_nocase?: InputMaybe<Scalars['String']>;
  label_not_ends_with?: InputMaybe<Scalars['String']>;
  label_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SubgraphVersionMetadata_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SubgraphVersionMetadata_filter>>>;
};

export type SubgraphVersionMetadata_orderBy =
  | 'id'
  | 'description'
  | 'label';

export type SubgraphVersion_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  subgraph?: InputMaybe<Scalars['String']>;
  subgraph_not?: InputMaybe<Scalars['String']>;
  subgraph_gt?: InputMaybe<Scalars['String']>;
  subgraph_lt?: InputMaybe<Scalars['String']>;
  subgraph_gte?: InputMaybe<Scalars['String']>;
  subgraph_lte?: InputMaybe<Scalars['String']>;
  subgraph_in?: InputMaybe<Array<Scalars['String']>>;
  subgraph_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraph_contains?: InputMaybe<Scalars['String']>;
  subgraph_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraph_not_contains?: InputMaybe<Scalars['String']>;
  subgraph_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraph_starts_with?: InputMaybe<Scalars['String']>;
  subgraph_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraph_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_ends_with?: InputMaybe<Scalars['String']>;
  subgraph_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraph_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_?: InputMaybe<Subgraph_filter>;
  subgraphDeployment?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not?: InputMaybe<Scalars['String']>;
  subgraphDeployment_gt?: InputMaybe<Scalars['String']>;
  subgraphDeployment_lt?: InputMaybe<Scalars['String']>;
  subgraphDeployment_gte?: InputMaybe<Scalars['String']>;
  subgraphDeployment_lte?: InputMaybe<Scalars['String']>;
  subgraphDeployment_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphDeployment_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphDeployment_contains?: InputMaybe<Scalars['String']>;
  subgraphDeployment_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_contains?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_starts_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_ends_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_?: InputMaybe<SubgraphDeployment_filter>;
  version?: InputMaybe<Scalars['Int']>;
  version_not?: InputMaybe<Scalars['Int']>;
  version_gt?: InputMaybe<Scalars['Int']>;
  version_lt?: InputMaybe<Scalars['Int']>;
  version_gte?: InputMaybe<Scalars['Int']>;
  version_lte?: InputMaybe<Scalars['Int']>;
  version_in?: InputMaybe<Array<Scalars['Int']>>;
  version_not_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  metadataHash?: InputMaybe<Scalars['Bytes']>;
  metadataHash_not?: InputMaybe<Scalars['Bytes']>;
  metadataHash_gt?: InputMaybe<Scalars['Bytes']>;
  metadataHash_lt?: InputMaybe<Scalars['Bytes']>;
  metadataHash_gte?: InputMaybe<Scalars['Bytes']>;
  metadataHash_lte?: InputMaybe<Scalars['Bytes']>;
  metadataHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  metadataHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  metadataHash_contains?: InputMaybe<Scalars['Bytes']>;
  metadataHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  metadata?: InputMaybe<Scalars['String']>;
  metadata_not?: InputMaybe<Scalars['String']>;
  metadata_gt?: InputMaybe<Scalars['String']>;
  metadata_lt?: InputMaybe<Scalars['String']>;
  metadata_gte?: InputMaybe<Scalars['String']>;
  metadata_lte?: InputMaybe<Scalars['String']>;
  metadata_in?: InputMaybe<Array<Scalars['String']>>;
  metadata_not_in?: InputMaybe<Array<Scalars['String']>>;
  metadata_contains?: InputMaybe<Scalars['String']>;
  metadata_contains_nocase?: InputMaybe<Scalars['String']>;
  metadata_not_contains?: InputMaybe<Scalars['String']>;
  metadata_not_contains_nocase?: InputMaybe<Scalars['String']>;
  metadata_starts_with?: InputMaybe<Scalars['String']>;
  metadata_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metadata_not_starts_with?: InputMaybe<Scalars['String']>;
  metadata_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metadata_ends_with?: InputMaybe<Scalars['String']>;
  metadata_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metadata_not_ends_with?: InputMaybe<Scalars['String']>;
  metadata_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metadata_?: InputMaybe<SubgraphVersionMetadata_filter>;
  entityVersion?: InputMaybe<Scalars['Int']>;
  entityVersion_not?: InputMaybe<Scalars['Int']>;
  entityVersion_gt?: InputMaybe<Scalars['Int']>;
  entityVersion_lt?: InputMaybe<Scalars['Int']>;
  entityVersion_gte?: InputMaybe<Scalars['Int']>;
  entityVersion_lte?: InputMaybe<Scalars['Int']>;
  entityVersion_in?: InputMaybe<Array<Scalars['Int']>>;
  entityVersion_not_in?: InputMaybe<Array<Scalars['Int']>>;
  linkedEntity?: InputMaybe<Scalars['String']>;
  linkedEntity_not?: InputMaybe<Scalars['String']>;
  linkedEntity_gt?: InputMaybe<Scalars['String']>;
  linkedEntity_lt?: InputMaybe<Scalars['String']>;
  linkedEntity_gte?: InputMaybe<Scalars['String']>;
  linkedEntity_lte?: InputMaybe<Scalars['String']>;
  linkedEntity_in?: InputMaybe<Array<Scalars['String']>>;
  linkedEntity_not_in?: InputMaybe<Array<Scalars['String']>>;
  linkedEntity_contains?: InputMaybe<Scalars['String']>;
  linkedEntity_contains_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_not_contains?: InputMaybe<Scalars['String']>;
  linkedEntity_not_contains_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_starts_with?: InputMaybe<Scalars['String']>;
  linkedEntity_starts_with_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_not_starts_with?: InputMaybe<Scalars['String']>;
  linkedEntity_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_ends_with?: InputMaybe<Scalars['String']>;
  linkedEntity_ends_with_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_not_ends_with?: InputMaybe<Scalars['String']>;
  linkedEntity_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_?: InputMaybe<SubgraphVersion_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SubgraphVersion_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SubgraphVersion_filter>>>;
};

export type SubgraphVersion_orderBy =
  | 'id'
  | 'subgraph'
  | 'subgraph__id'
  | 'subgraph__versionCount'
  | 'subgraph__createdAt'
  | 'subgraph__updatedAt'
  | 'subgraph__active'
  | 'subgraph__migrated'
  | 'subgraph__startedTransferToL2'
  | 'subgraph__startedTransferToL2At'
  | 'subgraph__startedTransferToL2AtBlockNumber'
  | 'subgraph__startedTransferToL2AtTx'
  | 'subgraph__transferredToL2'
  | 'subgraph__transferredToL2At'
  | 'subgraph__transferredToL2AtBlockNumber'
  | 'subgraph__transferredToL2AtTx'
  | 'subgraph__signalledTokensSentToL2'
  | 'subgraph__signalledTokensReceivedOnL2'
  | 'subgraph__idOnL2'
  | 'subgraph__idOnL1'
  | 'subgraph__nftID'
  | 'subgraph__oldID'
  | 'subgraph__creatorAddress'
  | 'subgraph__subgraphNumber'
  | 'subgraph__initializing'
  | 'subgraph__entityVersion'
  | 'subgraph__signalledTokens'
  | 'subgraph__unsignalledTokens'
  | 'subgraph__currentSignalledTokens'
  | 'subgraph__nameSignalAmount'
  | 'subgraph__signalAmount'
  | 'subgraph__reserveRatio'
  | 'subgraph__withdrawableTokens'
  | 'subgraph__withdrawnTokens'
  | 'subgraph__nameSignalCount'
  | 'subgraph__currentNameSignalCount'
  | 'subgraph__metadataHash'
  | 'subgraph__ipfsMetadataHash'
  | 'subgraphDeployment'
  | 'subgraphDeployment__id'
  | 'subgraphDeployment__ipfsHash'
  | 'subgraphDeployment__createdAt'
  | 'subgraphDeployment__deniedAt'
  | 'subgraphDeployment__originalName'
  | 'subgraphDeployment__stakedTokens'
  | 'subgraphDeployment__indexingRewardAmount'
  | 'subgraphDeployment__indexingIndexerRewardAmount'
  | 'subgraphDeployment__indexingDelegatorRewardAmount'
  | 'subgraphDeployment__queryFeesAmount'
  | 'subgraphDeployment__queryFeeRebates'
  | 'subgraphDeployment__curatorFeeRewards'
  | 'subgraphDeployment__signalledTokens'
  | 'subgraphDeployment__unsignalledTokens'
  | 'subgraphDeployment__signalAmount'
  | 'subgraphDeployment__pricePerShare'
  | 'subgraphDeployment__reserveRatio'
  | 'subgraphDeployment__subgraphCount'
  | 'subgraphDeployment__activeSubgraphCount'
  | 'subgraphDeployment__deprecatedSubgraphCount'
  | 'subgraphDeployment__transferredToL2'
  | 'subgraphDeployment__transferredToL2At'
  | 'subgraphDeployment__transferredToL2AtBlockNumber'
  | 'subgraphDeployment__transferredToL2AtTx'
  | 'subgraphDeployment__signalledTokensSentToL2'
  | 'subgraphDeployment__signalledTokensReceivedOnL2'
  | 'subgraphDeployment__currentSignalCount'
  | 'subgraphDeployment__indexersCount'
  | 'subgraphDeployment__allocationsCount'
  | 'subgraphDeployment__rewardsProportion'
  | 'version'
  | 'createdAt'
  | 'metadataHash'
  | 'metadata'
  | 'metadata__id'
  | 'metadata__description'
  | 'metadata__label'
  | 'entityVersion'
  | 'linkedEntity'
  | 'linkedEntity__id'
  | 'linkedEntity__version'
  | 'linkedEntity__createdAt'
  | 'linkedEntity__metadataHash'
  | 'linkedEntity__entityVersion';

export type Subgraph_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  owner?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_?: InputMaybe<GraphAccount_filter>;
  currentVersion?: InputMaybe<Scalars['String']>;
  currentVersion_not?: InputMaybe<Scalars['String']>;
  currentVersion_gt?: InputMaybe<Scalars['String']>;
  currentVersion_lt?: InputMaybe<Scalars['String']>;
  currentVersion_gte?: InputMaybe<Scalars['String']>;
  currentVersion_lte?: InputMaybe<Scalars['String']>;
  currentVersion_in?: InputMaybe<Array<Scalars['String']>>;
  currentVersion_not_in?: InputMaybe<Array<Scalars['String']>>;
  currentVersion_contains?: InputMaybe<Scalars['String']>;
  currentVersion_contains_nocase?: InputMaybe<Scalars['String']>;
  currentVersion_not_contains?: InputMaybe<Scalars['String']>;
  currentVersion_not_contains_nocase?: InputMaybe<Scalars['String']>;
  currentVersion_starts_with?: InputMaybe<Scalars['String']>;
  currentVersion_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currentVersion_not_starts_with?: InputMaybe<Scalars['String']>;
  currentVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currentVersion_ends_with?: InputMaybe<Scalars['String']>;
  currentVersion_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currentVersion_not_ends_with?: InputMaybe<Scalars['String']>;
  currentVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currentVersion_?: InputMaybe<SubgraphVersion_filter>;
  pastVersions_?: InputMaybe<SubgraphVersion_filter>;
  versions_?: InputMaybe<SubgraphVersion_filter>;
  versionCount?: InputMaybe<Scalars['BigInt']>;
  versionCount_not?: InputMaybe<Scalars['BigInt']>;
  versionCount_gt?: InputMaybe<Scalars['BigInt']>;
  versionCount_lt?: InputMaybe<Scalars['BigInt']>;
  versionCount_gte?: InputMaybe<Scalars['BigInt']>;
  versionCount_lte?: InputMaybe<Scalars['BigInt']>;
  versionCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  versionCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  updatedAt?: InputMaybe<Scalars['Int']>;
  updatedAt_not?: InputMaybe<Scalars['Int']>;
  updatedAt_gt?: InputMaybe<Scalars['Int']>;
  updatedAt_lt?: InputMaybe<Scalars['Int']>;
  updatedAt_gte?: InputMaybe<Scalars['Int']>;
  updatedAt_lte?: InputMaybe<Scalars['Int']>;
  updatedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  active?: InputMaybe<Scalars['Boolean']>;
  active_not?: InputMaybe<Scalars['Boolean']>;
  active_in?: InputMaybe<Array<Scalars['Boolean']>>;
  active_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  migrated?: InputMaybe<Scalars['Boolean']>;
  migrated_not?: InputMaybe<Scalars['Boolean']>;
  migrated_in?: InputMaybe<Array<Scalars['Boolean']>>;
  migrated_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  startedTransferToL2?: InputMaybe<Scalars['Boolean']>;
  startedTransferToL2_not?: InputMaybe<Scalars['Boolean']>;
  startedTransferToL2_in?: InputMaybe<Array<Scalars['Boolean']>>;
  startedTransferToL2_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  startedTransferToL2At?: InputMaybe<Scalars['BigInt']>;
  startedTransferToL2At_not?: InputMaybe<Scalars['BigInt']>;
  startedTransferToL2At_gt?: InputMaybe<Scalars['BigInt']>;
  startedTransferToL2At_lt?: InputMaybe<Scalars['BigInt']>;
  startedTransferToL2At_gte?: InputMaybe<Scalars['BigInt']>;
  startedTransferToL2At_lte?: InputMaybe<Scalars['BigInt']>;
  startedTransferToL2At_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startedTransferToL2At_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startedTransferToL2AtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  startedTransferToL2AtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  startedTransferToL2AtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  startedTransferToL2AtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  startedTransferToL2AtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  startedTransferToL2AtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  startedTransferToL2AtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startedTransferToL2AtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startedTransferToL2AtTx?: InputMaybe<Scalars['String']>;
  startedTransferToL2AtTx_not?: InputMaybe<Scalars['String']>;
  startedTransferToL2AtTx_gt?: InputMaybe<Scalars['String']>;
  startedTransferToL2AtTx_lt?: InputMaybe<Scalars['String']>;
  startedTransferToL2AtTx_gte?: InputMaybe<Scalars['String']>;
  startedTransferToL2AtTx_lte?: InputMaybe<Scalars['String']>;
  startedTransferToL2AtTx_in?: InputMaybe<Array<Scalars['String']>>;
  startedTransferToL2AtTx_not_in?: InputMaybe<Array<Scalars['String']>>;
  startedTransferToL2AtTx_contains?: InputMaybe<Scalars['String']>;
  startedTransferToL2AtTx_contains_nocase?: InputMaybe<Scalars['String']>;
  startedTransferToL2AtTx_not_contains?: InputMaybe<Scalars['String']>;
  startedTransferToL2AtTx_not_contains_nocase?: InputMaybe<Scalars['String']>;
  startedTransferToL2AtTx_starts_with?: InputMaybe<Scalars['String']>;
  startedTransferToL2AtTx_starts_with_nocase?: InputMaybe<Scalars['String']>;
  startedTransferToL2AtTx_not_starts_with?: InputMaybe<Scalars['String']>;
  startedTransferToL2AtTx_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  startedTransferToL2AtTx_ends_with?: InputMaybe<Scalars['String']>;
  startedTransferToL2AtTx_ends_with_nocase?: InputMaybe<Scalars['String']>;
  startedTransferToL2AtTx_not_ends_with?: InputMaybe<Scalars['String']>;
  startedTransferToL2AtTx_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transferredToL2?: InputMaybe<Scalars['Boolean']>;
  transferredToL2_not?: InputMaybe<Scalars['Boolean']>;
  transferredToL2_in?: InputMaybe<Array<Scalars['Boolean']>>;
  transferredToL2_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  transferredToL2At?: InputMaybe<Scalars['BigInt']>;
  transferredToL2At_not?: InputMaybe<Scalars['BigInt']>;
  transferredToL2At_gt?: InputMaybe<Scalars['BigInt']>;
  transferredToL2At_lt?: InputMaybe<Scalars['BigInt']>;
  transferredToL2At_gte?: InputMaybe<Scalars['BigInt']>;
  transferredToL2At_lte?: InputMaybe<Scalars['BigInt']>;
  transferredToL2At_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transferredToL2At_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transferredToL2AtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  transferredToL2AtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  transferredToL2AtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  transferredToL2AtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  transferredToL2AtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  transferredToL2AtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  transferredToL2AtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transferredToL2AtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transferredToL2AtTx?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_not?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_gt?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_lt?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_gte?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_lte?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_in?: InputMaybe<Array<Scalars['String']>>;
  transferredToL2AtTx_not_in?: InputMaybe<Array<Scalars['String']>>;
  transferredToL2AtTx_contains?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_contains_nocase?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_not_contains?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_starts_with?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_not_starts_with?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_ends_with?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_not_ends_with?: InputMaybe<Scalars['String']>;
  transferredToL2AtTx_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  signalledTokensSentToL2?: InputMaybe<Scalars['BigInt']>;
  signalledTokensSentToL2_not?: InputMaybe<Scalars['BigInt']>;
  signalledTokensSentToL2_gt?: InputMaybe<Scalars['BigInt']>;
  signalledTokensSentToL2_lt?: InputMaybe<Scalars['BigInt']>;
  signalledTokensSentToL2_gte?: InputMaybe<Scalars['BigInt']>;
  signalledTokensSentToL2_lte?: InputMaybe<Scalars['BigInt']>;
  signalledTokensSentToL2_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalledTokensSentToL2_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalledTokensReceivedOnL2?: InputMaybe<Scalars['BigInt']>;
  signalledTokensReceivedOnL2_not?: InputMaybe<Scalars['BigInt']>;
  signalledTokensReceivedOnL2_gt?: InputMaybe<Scalars['BigInt']>;
  signalledTokensReceivedOnL2_lt?: InputMaybe<Scalars['BigInt']>;
  signalledTokensReceivedOnL2_gte?: InputMaybe<Scalars['BigInt']>;
  signalledTokensReceivedOnL2_lte?: InputMaybe<Scalars['BigInt']>;
  signalledTokensReceivedOnL2_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalledTokensReceivedOnL2_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  idOnL2?: InputMaybe<Scalars['String']>;
  idOnL2_not?: InputMaybe<Scalars['String']>;
  idOnL2_gt?: InputMaybe<Scalars['String']>;
  idOnL2_lt?: InputMaybe<Scalars['String']>;
  idOnL2_gte?: InputMaybe<Scalars['String']>;
  idOnL2_lte?: InputMaybe<Scalars['String']>;
  idOnL2_in?: InputMaybe<Array<Scalars['String']>>;
  idOnL2_not_in?: InputMaybe<Array<Scalars['String']>>;
  idOnL2_contains?: InputMaybe<Scalars['String']>;
  idOnL2_contains_nocase?: InputMaybe<Scalars['String']>;
  idOnL2_not_contains?: InputMaybe<Scalars['String']>;
  idOnL2_not_contains_nocase?: InputMaybe<Scalars['String']>;
  idOnL2_starts_with?: InputMaybe<Scalars['String']>;
  idOnL2_starts_with_nocase?: InputMaybe<Scalars['String']>;
  idOnL2_not_starts_with?: InputMaybe<Scalars['String']>;
  idOnL2_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  idOnL2_ends_with?: InputMaybe<Scalars['String']>;
  idOnL2_ends_with_nocase?: InputMaybe<Scalars['String']>;
  idOnL2_not_ends_with?: InputMaybe<Scalars['String']>;
  idOnL2_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  idOnL1?: InputMaybe<Scalars['String']>;
  idOnL1_not?: InputMaybe<Scalars['String']>;
  idOnL1_gt?: InputMaybe<Scalars['String']>;
  idOnL1_lt?: InputMaybe<Scalars['String']>;
  idOnL1_gte?: InputMaybe<Scalars['String']>;
  idOnL1_lte?: InputMaybe<Scalars['String']>;
  idOnL1_in?: InputMaybe<Array<Scalars['String']>>;
  idOnL1_not_in?: InputMaybe<Array<Scalars['String']>>;
  idOnL1_contains?: InputMaybe<Scalars['String']>;
  idOnL1_contains_nocase?: InputMaybe<Scalars['String']>;
  idOnL1_not_contains?: InputMaybe<Scalars['String']>;
  idOnL1_not_contains_nocase?: InputMaybe<Scalars['String']>;
  idOnL1_starts_with?: InputMaybe<Scalars['String']>;
  idOnL1_starts_with_nocase?: InputMaybe<Scalars['String']>;
  idOnL1_not_starts_with?: InputMaybe<Scalars['String']>;
  idOnL1_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  idOnL1_ends_with?: InputMaybe<Scalars['String']>;
  idOnL1_ends_with_nocase?: InputMaybe<Scalars['String']>;
  idOnL1_not_ends_with?: InputMaybe<Scalars['String']>;
  idOnL1_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nftID?: InputMaybe<Scalars['String']>;
  nftID_not?: InputMaybe<Scalars['String']>;
  nftID_gt?: InputMaybe<Scalars['String']>;
  nftID_lt?: InputMaybe<Scalars['String']>;
  nftID_gte?: InputMaybe<Scalars['String']>;
  nftID_lte?: InputMaybe<Scalars['String']>;
  nftID_in?: InputMaybe<Array<Scalars['String']>>;
  nftID_not_in?: InputMaybe<Array<Scalars['String']>>;
  nftID_contains?: InputMaybe<Scalars['String']>;
  nftID_contains_nocase?: InputMaybe<Scalars['String']>;
  nftID_not_contains?: InputMaybe<Scalars['String']>;
  nftID_not_contains_nocase?: InputMaybe<Scalars['String']>;
  nftID_starts_with?: InputMaybe<Scalars['String']>;
  nftID_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nftID_not_starts_with?: InputMaybe<Scalars['String']>;
  nftID_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nftID_ends_with?: InputMaybe<Scalars['String']>;
  nftID_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nftID_not_ends_with?: InputMaybe<Scalars['String']>;
  nftID_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  oldID?: InputMaybe<Scalars['String']>;
  oldID_not?: InputMaybe<Scalars['String']>;
  oldID_gt?: InputMaybe<Scalars['String']>;
  oldID_lt?: InputMaybe<Scalars['String']>;
  oldID_gte?: InputMaybe<Scalars['String']>;
  oldID_lte?: InputMaybe<Scalars['String']>;
  oldID_in?: InputMaybe<Array<Scalars['String']>>;
  oldID_not_in?: InputMaybe<Array<Scalars['String']>>;
  oldID_contains?: InputMaybe<Scalars['String']>;
  oldID_contains_nocase?: InputMaybe<Scalars['String']>;
  oldID_not_contains?: InputMaybe<Scalars['String']>;
  oldID_not_contains_nocase?: InputMaybe<Scalars['String']>;
  oldID_starts_with?: InputMaybe<Scalars['String']>;
  oldID_starts_with_nocase?: InputMaybe<Scalars['String']>;
  oldID_not_starts_with?: InputMaybe<Scalars['String']>;
  oldID_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  oldID_ends_with?: InputMaybe<Scalars['String']>;
  oldID_ends_with_nocase?: InputMaybe<Scalars['String']>;
  oldID_not_ends_with?: InputMaybe<Scalars['String']>;
  oldID_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  creatorAddress?: InputMaybe<Scalars['Bytes']>;
  creatorAddress_not?: InputMaybe<Scalars['Bytes']>;
  creatorAddress_gt?: InputMaybe<Scalars['Bytes']>;
  creatorAddress_lt?: InputMaybe<Scalars['Bytes']>;
  creatorAddress_gte?: InputMaybe<Scalars['Bytes']>;
  creatorAddress_lte?: InputMaybe<Scalars['Bytes']>;
  creatorAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  creatorAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  creatorAddress_contains?: InputMaybe<Scalars['Bytes']>;
  creatorAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  subgraphNumber?: InputMaybe<Scalars['BigInt']>;
  subgraphNumber_not?: InputMaybe<Scalars['BigInt']>;
  subgraphNumber_gt?: InputMaybe<Scalars['BigInt']>;
  subgraphNumber_lt?: InputMaybe<Scalars['BigInt']>;
  subgraphNumber_gte?: InputMaybe<Scalars['BigInt']>;
  subgraphNumber_lte?: InputMaybe<Scalars['BigInt']>;
  subgraphNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  subgraphNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  initializing?: InputMaybe<Scalars['Boolean']>;
  initializing_not?: InputMaybe<Scalars['Boolean']>;
  initializing_in?: InputMaybe<Array<Scalars['Boolean']>>;
  initializing_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  entityVersion?: InputMaybe<Scalars['Int']>;
  entityVersion_not?: InputMaybe<Scalars['Int']>;
  entityVersion_gt?: InputMaybe<Scalars['Int']>;
  entityVersion_lt?: InputMaybe<Scalars['Int']>;
  entityVersion_gte?: InputMaybe<Scalars['Int']>;
  entityVersion_lte?: InputMaybe<Scalars['Int']>;
  entityVersion_in?: InputMaybe<Array<Scalars['Int']>>;
  entityVersion_not_in?: InputMaybe<Array<Scalars['Int']>>;
  linkedEntity?: InputMaybe<Scalars['String']>;
  linkedEntity_not?: InputMaybe<Scalars['String']>;
  linkedEntity_gt?: InputMaybe<Scalars['String']>;
  linkedEntity_lt?: InputMaybe<Scalars['String']>;
  linkedEntity_gte?: InputMaybe<Scalars['String']>;
  linkedEntity_lte?: InputMaybe<Scalars['String']>;
  linkedEntity_in?: InputMaybe<Array<Scalars['String']>>;
  linkedEntity_not_in?: InputMaybe<Array<Scalars['String']>>;
  linkedEntity_contains?: InputMaybe<Scalars['String']>;
  linkedEntity_contains_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_not_contains?: InputMaybe<Scalars['String']>;
  linkedEntity_not_contains_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_starts_with?: InputMaybe<Scalars['String']>;
  linkedEntity_starts_with_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_not_starts_with?: InputMaybe<Scalars['String']>;
  linkedEntity_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_ends_with?: InputMaybe<Scalars['String']>;
  linkedEntity_ends_with_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_not_ends_with?: InputMaybe<Scalars['String']>;
  linkedEntity_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_?: InputMaybe<Subgraph_filter>;
  signalledTokens?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unsignalledTokens?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unsignalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentSignalledTokens?: InputMaybe<Scalars['BigInt']>;
  currentSignalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  currentSignalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  currentSignalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  currentSignalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  currentSignalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  currentSignalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentSignalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nameSignalAmount?: InputMaybe<Scalars['BigInt']>;
  nameSignalAmount_not?: InputMaybe<Scalars['BigInt']>;
  nameSignalAmount_gt?: InputMaybe<Scalars['BigInt']>;
  nameSignalAmount_lt?: InputMaybe<Scalars['BigInt']>;
  nameSignalAmount_gte?: InputMaybe<Scalars['BigInt']>;
  nameSignalAmount_lte?: InputMaybe<Scalars['BigInt']>;
  nameSignalAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nameSignalAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalAmount?: InputMaybe<Scalars['BigInt']>;
  signalAmount_not?: InputMaybe<Scalars['BigInt']>;
  signalAmount_gt?: InputMaybe<Scalars['BigInt']>;
  signalAmount_lt?: InputMaybe<Scalars['BigInt']>;
  signalAmount_gte?: InputMaybe<Scalars['BigInt']>;
  signalAmount_lte?: InputMaybe<Scalars['BigInt']>;
  signalAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reserveRatio?: InputMaybe<Scalars['Int']>;
  reserveRatio_not?: InputMaybe<Scalars['Int']>;
  reserveRatio_gt?: InputMaybe<Scalars['Int']>;
  reserveRatio_lt?: InputMaybe<Scalars['Int']>;
  reserveRatio_gte?: InputMaybe<Scalars['Int']>;
  reserveRatio_lte?: InputMaybe<Scalars['Int']>;
  reserveRatio_in?: InputMaybe<Array<Scalars['Int']>>;
  reserveRatio_not_in?: InputMaybe<Array<Scalars['Int']>>;
  withdrawableTokens?: InputMaybe<Scalars['BigInt']>;
  withdrawableTokens_not?: InputMaybe<Scalars['BigInt']>;
  withdrawableTokens_gt?: InputMaybe<Scalars['BigInt']>;
  withdrawableTokens_lt?: InputMaybe<Scalars['BigInt']>;
  withdrawableTokens_gte?: InputMaybe<Scalars['BigInt']>;
  withdrawableTokens_lte?: InputMaybe<Scalars['BigInt']>;
  withdrawableTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawableTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawnTokens?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_not?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_gt?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_lt?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_gte?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_lte?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawnTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nameSignals_?: InputMaybe<NameSignal_filter>;
  nameSignalCount?: InputMaybe<Scalars['Int']>;
  nameSignalCount_not?: InputMaybe<Scalars['Int']>;
  nameSignalCount_gt?: InputMaybe<Scalars['Int']>;
  nameSignalCount_lt?: InputMaybe<Scalars['Int']>;
  nameSignalCount_gte?: InputMaybe<Scalars['Int']>;
  nameSignalCount_lte?: InputMaybe<Scalars['Int']>;
  nameSignalCount_in?: InputMaybe<Array<Scalars['Int']>>;
  nameSignalCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  currentNameSignalCount?: InputMaybe<Scalars['Int']>;
  currentNameSignalCount_not?: InputMaybe<Scalars['Int']>;
  currentNameSignalCount_gt?: InputMaybe<Scalars['Int']>;
  currentNameSignalCount_lt?: InputMaybe<Scalars['Int']>;
  currentNameSignalCount_gte?: InputMaybe<Scalars['Int']>;
  currentNameSignalCount_lte?: InputMaybe<Scalars['Int']>;
  currentNameSignalCount_in?: InputMaybe<Array<Scalars['Int']>>;
  currentNameSignalCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  metadataHash?: InputMaybe<Scalars['Bytes']>;
  metadataHash_not?: InputMaybe<Scalars['Bytes']>;
  metadataHash_gt?: InputMaybe<Scalars['Bytes']>;
  metadataHash_lt?: InputMaybe<Scalars['Bytes']>;
  metadataHash_gte?: InputMaybe<Scalars['Bytes']>;
  metadataHash_lte?: InputMaybe<Scalars['Bytes']>;
  metadataHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  metadataHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  metadataHash_contains?: InputMaybe<Scalars['Bytes']>;
  metadataHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  ipfsMetadataHash?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_not?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_gt?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_lt?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_gte?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_lte?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_in?: InputMaybe<Array<Scalars['String']>>;
  ipfsMetadataHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  ipfsMetadataHash_contains?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_contains_nocase?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_not_contains?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_starts_with?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_not_starts_with?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_ends_with?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_not_ends_with?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['String']>;
  metadata_not?: InputMaybe<Scalars['String']>;
  metadata_gt?: InputMaybe<Scalars['String']>;
  metadata_lt?: InputMaybe<Scalars['String']>;
  metadata_gte?: InputMaybe<Scalars['String']>;
  metadata_lte?: InputMaybe<Scalars['String']>;
  metadata_in?: InputMaybe<Array<Scalars['String']>>;
  metadata_not_in?: InputMaybe<Array<Scalars['String']>>;
  metadata_contains?: InputMaybe<Scalars['String']>;
  metadata_contains_nocase?: InputMaybe<Scalars['String']>;
  metadata_not_contains?: InputMaybe<Scalars['String']>;
  metadata_not_contains_nocase?: InputMaybe<Scalars['String']>;
  metadata_starts_with?: InputMaybe<Scalars['String']>;
  metadata_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metadata_not_starts_with?: InputMaybe<Scalars['String']>;
  metadata_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metadata_ends_with?: InputMaybe<Scalars['String']>;
  metadata_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metadata_not_ends_with?: InputMaybe<Scalars['String']>;
  metadata_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metadata_?: InputMaybe<SubgraphMetadata_filter>;
  currentVersionRelationEntity?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_not?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_gt?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_lt?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_gte?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_lte?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_in?: InputMaybe<Array<Scalars['String']>>;
  currentVersionRelationEntity_not_in?: InputMaybe<Array<Scalars['String']>>;
  currentVersionRelationEntity_contains?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_contains_nocase?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_not_contains?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_not_contains_nocase?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_starts_with?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_not_starts_with?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_ends_with?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_not_ends_with?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_?: InputMaybe<CurrentSubgraphDeploymentRelation_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Subgraph_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Subgraph_filter>>>;
};

export type Subgraph_orderBy =
  | 'id'
  | 'owner'
  | 'owner__id'
  | 'owner__createdAt'
  | 'owner__defaultDisplayName'
  | 'owner__metadataHash'
  | 'owner__balance'
  | 'owner__balanceReceivedFromL1Signalling'
  | 'owner__balanceReceivedFromL1Delegation'
  | 'owner__curationApproval'
  | 'owner__stakingApproval'
  | 'owner__gnsApproval'
  | 'owner__developerCreatedAt'
  | 'owner__subgraphQueryFees'
  | 'currentVersion'
  | 'currentVersion__id'
  | 'currentVersion__version'
  | 'currentVersion__createdAt'
  | 'currentVersion__metadataHash'
  | 'currentVersion__entityVersion'
  | 'pastVersions'
  | 'versions'
  | 'versionCount'
  | 'createdAt'
  | 'updatedAt'
  | 'active'
  | 'migrated'
  | 'startedTransferToL2'
  | 'startedTransferToL2At'
  | 'startedTransferToL2AtBlockNumber'
  | 'startedTransferToL2AtTx'
  | 'transferredToL2'
  | 'transferredToL2At'
  | 'transferredToL2AtBlockNumber'
  | 'transferredToL2AtTx'
  | 'signalledTokensSentToL2'
  | 'signalledTokensReceivedOnL2'
  | 'idOnL2'
  | 'idOnL1'
  | 'nftID'
  | 'oldID'
  | 'creatorAddress'
  | 'subgraphNumber'
  | 'initializing'
  | 'entityVersion'
  | 'linkedEntity'
  | 'linkedEntity__id'
  | 'linkedEntity__versionCount'
  | 'linkedEntity__createdAt'
  | 'linkedEntity__updatedAt'
  | 'linkedEntity__active'
  | 'linkedEntity__migrated'
  | 'linkedEntity__startedTransferToL2'
  | 'linkedEntity__startedTransferToL2At'
  | 'linkedEntity__startedTransferToL2AtBlockNumber'
  | 'linkedEntity__startedTransferToL2AtTx'
  | 'linkedEntity__transferredToL2'
  | 'linkedEntity__transferredToL2At'
  | 'linkedEntity__transferredToL2AtBlockNumber'
  | 'linkedEntity__transferredToL2AtTx'
  | 'linkedEntity__signalledTokensSentToL2'
  | 'linkedEntity__signalledTokensReceivedOnL2'
  | 'linkedEntity__idOnL2'
  | 'linkedEntity__idOnL1'
  | 'linkedEntity__nftID'
  | 'linkedEntity__oldID'
  | 'linkedEntity__creatorAddress'
  | 'linkedEntity__subgraphNumber'
  | 'linkedEntity__initializing'
  | 'linkedEntity__entityVersion'
  | 'linkedEntity__signalledTokens'
  | 'linkedEntity__unsignalledTokens'
  | 'linkedEntity__currentSignalledTokens'
  | 'linkedEntity__nameSignalAmount'
  | 'linkedEntity__signalAmount'
  | 'linkedEntity__reserveRatio'
  | 'linkedEntity__withdrawableTokens'
  | 'linkedEntity__withdrawnTokens'
  | 'linkedEntity__nameSignalCount'
  | 'linkedEntity__currentNameSignalCount'
  | 'linkedEntity__metadataHash'
  | 'linkedEntity__ipfsMetadataHash'
  | 'signalledTokens'
  | 'unsignalledTokens'
  | 'currentSignalledTokens'
  | 'nameSignalAmount'
  | 'signalAmount'
  | 'reserveRatio'
  | 'withdrawableTokens'
  | 'withdrawnTokens'
  | 'nameSignals'
  | 'nameSignalCount'
  | 'currentNameSignalCount'
  | 'metadataHash'
  | 'ipfsMetadataHash'
  | 'metadata'
  | 'metadata__id'
  | 'metadata__description'
  | 'metadata__image'
  | 'metadata__nftImage'
  | 'metadata__codeRepository'
  | 'metadata__website'
  | 'metadata__displayName'
  | 'currentVersionRelationEntity'
  | 'currentVersionRelationEntity__id'
  | 'currentVersionRelationEntity__active';

export type Subscription = {
  arbitrum_graphNetwork?: Maybe<GraphNetwork>;
  arbitrum_graphNetworks: Array<GraphNetwork>;
  arbitrum_graphAccount?: Maybe<GraphAccount>;
  arbitrum_graphAccounts: Array<GraphAccount>;
  arbitrum_accountMetadata: Array<AccountMetadata>;
  arbitrum_graphAccountName?: Maybe<GraphAccountName>;
  arbitrum_graphAccountNames: Array<GraphAccountName>;
  arbitrum_subgraph?: Maybe<Subgraph>;
  arbitrum_subgraphs: Array<Subgraph>;
  arbitrum_subgraphMetadata: Array<SubgraphMetadata>;
  arbitrum_currentSubgraphDeploymentRelation?: Maybe<CurrentSubgraphDeploymentRelation>;
  arbitrum_currentSubgraphDeploymentRelations: Array<CurrentSubgraphDeploymentRelation>;
  arbitrum_network?: Maybe<Network>;
  arbitrum_networks: Array<Network>;
  arbitrum_subgraphVersion?: Maybe<SubgraphVersion>;
  arbitrum_subgraphVersions: Array<SubgraphVersion>;
  arbitrum_subgraphVersionMetadata: Array<SubgraphVersionMetadata>;
  arbitrum_subgraphDeployment?: Maybe<SubgraphDeployment>;
  arbitrum_subgraphDeployments: Array<SubgraphDeployment>;
  arbitrum_subgraphDeploymentMetadata: Array<SubgraphDeploymentMetadata>;
  arbitrum_indexer?: Maybe<Indexer>;
  arbitrum_indexers: Array<Indexer>;
  arbitrum_allocation?: Maybe<Allocation>;
  arbitrum_allocations: Array<Allocation>;
  arbitrum_pool?: Maybe<Pool>;
  arbitrum_pools: Array<Pool>;
  arbitrum_delegator?: Maybe<Delegator>;
  arbitrum_delegators: Array<Delegator>;
  arbitrum_delegatedStake?: Maybe<DelegatedStake>;
  arbitrum_delegatedStakes: Array<DelegatedStake>;
  arbitrum_curator?: Maybe<Curator>;
  arbitrum_curators: Array<Curator>;
  arbitrum_signal?: Maybe<Signal>;
  arbitrum_signals: Array<Signal>;
  arbitrum_nameSignal?: Maybe<NameSignal>;
  arbitrum_nameSignals: Array<NameSignal>;
  arbitrum_nameSignalSubgraphRelation?: Maybe<NameSignalSubgraphRelation>;
  arbitrum_nameSignalSubgraphRelations: Array<NameSignalSubgraphRelation>;
  arbitrum_signalSubgraphDeploymentRelation?: Maybe<SignalSubgraphDeploymentRelation>;
  arbitrum_signalSubgraphDeploymentRelations: Array<SignalSubgraphDeploymentRelation>;
  arbitrum_dispute?: Maybe<Dispute>;
  arbitrum_disputes: Array<Dispute>;
  arbitrum_attestation?: Maybe<Attestation>;
  arbitrum_attestations: Array<Attestation>;
  arbitrum_epoch?: Maybe<Epoch>;
  arbitrum_epoches: Array<Epoch>;
  arbitrum_nameSignalTransaction?: Maybe<NameSignalTransaction>;
  arbitrum_nameSignalTransactions: Array<NameSignalTransaction>;
  arbitrum_signalTransaction?: Maybe<SignalTransaction>;
  arbitrum_signalTransactions: Array<SignalTransaction>;
  arbitrum_bridgeWithdrawalTransaction?: Maybe<BridgeWithdrawalTransaction>;
  arbitrum_bridgeWithdrawalTransactions: Array<BridgeWithdrawalTransaction>;
  arbitrum_bridgeDepositTransaction?: Maybe<BridgeDepositTransaction>;
  arbitrum_bridgeDepositTransactions: Array<BridgeDepositTransaction>;
  arbitrum_retryableTicket?: Maybe<RetryableTicket>;
  arbitrum_retryableTickets: Array<RetryableTicket>;
  arbitrum_retryableTicketRedeemAttempt?: Maybe<RetryableTicketRedeemAttempt>;
  arbitrum_retryableTicketRedeemAttempts: Array<RetryableTicketRedeemAttempt>;
  arbitrum_tokenManager?: Maybe<TokenManager>;
  arbitrum_tokenManagers: Array<TokenManager>;
  arbitrum_authorizedFunction?: Maybe<AuthorizedFunction>;
  arbitrum_authorizedFunctions: Array<AuthorizedFunction>;
  arbitrum_tokenLockWallet?: Maybe<TokenLockWallet>;
  arbitrum_tokenLockWallets: Array<TokenLockWallet>;
  arbitrum_indexerDeployment?: Maybe<IndexerDeployment>;
  arbitrum_indexerDeployments: Array<IndexerDeployment>;
  arbitrum_rewardCutHistoryEntity?: Maybe<RewardCutHistoryEntity>;
  arbitrum_rewardCutHistoryEntities: Array<RewardCutHistoryEntity>;
  arbitrum_delegationPoolHistoryEntity?: Maybe<DelegationPoolHistoryEntity>;
  arbitrum_delegationPoolHistoryEntities: Array<DelegationPoolHistoryEntity>;
  arbitrum_indexersRecalculateQueue?: Maybe<IndexersRecalculateQueue>;
  arbitrum_indexersRecalculateQueues: Array<IndexersRecalculateQueue>;
  arbitrum_transaction?: Maybe<Transaction>;
  arbitrum_transactions: Array<Transaction>;
  /** Access to subgraph metadata */
  arbitrum__meta?: Maybe<_Meta_>;
};


export type Subscriptionarbitrum_graphNetworkArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_graphNetworksArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GraphNetwork_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GraphNetwork_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_graphAccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_graphAccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GraphAccount_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GraphAccount_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_accountMetadataArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AccountMetadata_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AccountMetadata_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_graphAccountNameArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_graphAccountNamesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GraphAccountName_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GraphAccountName_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_subgraphArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_subgraphsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Subgraph_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Subgraph_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_subgraphMetadataArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubgraphMetadata_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SubgraphMetadata_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_currentSubgraphDeploymentRelationArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_currentSubgraphDeploymentRelationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CurrentSubgraphDeploymentRelation_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CurrentSubgraphDeploymentRelation_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_networkArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_networksArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Network_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_subgraphVersionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_subgraphVersionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubgraphVersion_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SubgraphVersion_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_subgraphVersionMetadataArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubgraphVersionMetadata_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SubgraphVersionMetadata_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_subgraphDeploymentArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_subgraphDeploymentsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubgraphDeployment_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SubgraphDeployment_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_subgraphDeploymentMetadataArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubgraphDeploymentMetadata_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SubgraphDeploymentMetadata_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_indexerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_indexersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Indexer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Indexer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_allocationArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_allocationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Allocation_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Allocation_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_poolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_poolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Pool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pool_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_delegatorArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_delegatorsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Delegator_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Delegator_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_delegatedStakeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_delegatedStakesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DelegatedStake_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DelegatedStake_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_curatorArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_curatorsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Curator_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Curator_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_signalArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_signalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Signal_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Signal_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_nameSignalArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_nameSignalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NameSignal_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NameSignal_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_nameSignalSubgraphRelationArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_nameSignalSubgraphRelationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NameSignalSubgraphRelation_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NameSignalSubgraphRelation_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_signalSubgraphDeploymentRelationArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_signalSubgraphDeploymentRelationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SignalSubgraphDeploymentRelation_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SignalSubgraphDeploymentRelation_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_disputeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_disputesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Dispute_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Dispute_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_attestationArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_attestationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Attestation_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Attestation_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_epochArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_epochesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Epoch_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Epoch_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_nameSignalTransactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_nameSignalTransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NameSignalTransaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NameSignalTransaction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_signalTransactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_signalTransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SignalTransaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SignalTransaction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_bridgeWithdrawalTransactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_bridgeWithdrawalTransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BridgeWithdrawalTransaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BridgeWithdrawalTransaction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_bridgeDepositTransactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_bridgeDepositTransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BridgeDepositTransaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BridgeDepositTransaction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_retryableTicketArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_retryableTicketsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RetryableTicket_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RetryableTicket_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_retryableTicketRedeemAttemptArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_retryableTicketRedeemAttemptsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RetryableTicketRedeemAttempt_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RetryableTicketRedeemAttempt_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_tokenManagerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_tokenManagersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenManager_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenManager_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_authorizedFunctionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_authorizedFunctionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AuthorizedFunction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AuthorizedFunction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_tokenLockWalletArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_tokenLockWalletsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenLockWallet_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenLockWallet_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_indexerDeploymentArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_indexerDeploymentsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexerDeployment_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexerDeployment_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_rewardCutHistoryEntityArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_rewardCutHistoryEntitiesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RewardCutHistoryEntity_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RewardCutHistoryEntity_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_delegationPoolHistoryEntityArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_delegationPoolHistoryEntitiesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DelegationPoolHistoryEntity_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DelegationPoolHistoryEntity_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_indexersRecalculateQueueArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_indexersRecalculateQueuesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndexersRecalculateQueue_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<IndexersRecalculateQueue_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_transactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum_transactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transaction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionarbitrum__metaArgs = {
  block?: InputMaybe<Block_height>;
};

/**
 * Token Lock Wallets which hold locked GRT
 *
 */
export type TokenLockWallet = {
  /** The address of the token lock wallet */
  id: Scalars['ID'];
  /** The Manager address */
  manager: Scalars['Bytes'];
  /** The hash of the initializer */
  initHash: Scalars['Bytes'];
  /** Address of the beneficiary of locked tokens */
  beneficiary: Scalars['Bytes'];
  /** The token being used (GRT) */
  token: Scalars['Bytes'];
  /** Amount of tokens to be managed by the lock contract */
  managedAmount: Scalars['BigInt'];
  /** Start time of the release schedule */
  startTime: Scalars['BigInt'];
  /** End time of the release schedule */
  endTime: Scalars['BigInt'];
  /** Number of periods between start time and end time */
  periods: Scalars['BigInt'];
  /** Time when the releases start */
  releaseStartTime: Scalars['BigInt'];
  /** Time the cliff vests, 0 if no cliff */
  vestingCliffTime: Scalars['BigInt'];
  /** Whether or not the contract is revocable */
  revocable?: Maybe<Revocability>;
  /** True if the beneficiary has approved addresses that the manager has approved */
  tokenDestinationsApproved: Scalars['Boolean'];
  /** The amount of tokens that have been resleased */
  tokensReleased: Scalars['BigInt'];
  /** The amount of tokens that have been withdrawn */
  tokensWithdrawn: Scalars['BigInt'];
  /** The amount of tokens that have been revoked */
  tokensRevoked: Scalars['BigInt'];
  /** The block this wlalet was created */
  blockNumberCreated: Scalars['BigInt'];
  /** The creation tx hash of the wallet */
  txHash: Scalars['Bytes'];
};

export type TokenLockWallet_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  manager?: InputMaybe<Scalars['Bytes']>;
  manager_not?: InputMaybe<Scalars['Bytes']>;
  manager_gt?: InputMaybe<Scalars['Bytes']>;
  manager_lt?: InputMaybe<Scalars['Bytes']>;
  manager_gte?: InputMaybe<Scalars['Bytes']>;
  manager_lte?: InputMaybe<Scalars['Bytes']>;
  manager_in?: InputMaybe<Array<Scalars['Bytes']>>;
  manager_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  manager_contains?: InputMaybe<Scalars['Bytes']>;
  manager_not_contains?: InputMaybe<Scalars['Bytes']>;
  initHash?: InputMaybe<Scalars['Bytes']>;
  initHash_not?: InputMaybe<Scalars['Bytes']>;
  initHash_gt?: InputMaybe<Scalars['Bytes']>;
  initHash_lt?: InputMaybe<Scalars['Bytes']>;
  initHash_gte?: InputMaybe<Scalars['Bytes']>;
  initHash_lte?: InputMaybe<Scalars['Bytes']>;
  initHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  initHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  initHash_contains?: InputMaybe<Scalars['Bytes']>;
  initHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  beneficiary?: InputMaybe<Scalars['Bytes']>;
  beneficiary_not?: InputMaybe<Scalars['Bytes']>;
  beneficiary_gt?: InputMaybe<Scalars['Bytes']>;
  beneficiary_lt?: InputMaybe<Scalars['Bytes']>;
  beneficiary_gte?: InputMaybe<Scalars['Bytes']>;
  beneficiary_lte?: InputMaybe<Scalars['Bytes']>;
  beneficiary_in?: InputMaybe<Array<Scalars['Bytes']>>;
  beneficiary_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  beneficiary_contains?: InputMaybe<Scalars['Bytes']>;
  beneficiary_not_contains?: InputMaybe<Scalars['Bytes']>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  managedAmount?: InputMaybe<Scalars['BigInt']>;
  managedAmount_not?: InputMaybe<Scalars['BigInt']>;
  managedAmount_gt?: InputMaybe<Scalars['BigInt']>;
  managedAmount_lt?: InputMaybe<Scalars['BigInt']>;
  managedAmount_gte?: InputMaybe<Scalars['BigInt']>;
  managedAmount_lte?: InputMaybe<Scalars['BigInt']>;
  managedAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  managedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startTime?: InputMaybe<Scalars['BigInt']>;
  startTime_not?: InputMaybe<Scalars['BigInt']>;
  startTime_gt?: InputMaybe<Scalars['BigInt']>;
  startTime_lt?: InputMaybe<Scalars['BigInt']>;
  startTime_gte?: InputMaybe<Scalars['BigInt']>;
  startTime_lte?: InputMaybe<Scalars['BigInt']>;
  startTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endTime?: InputMaybe<Scalars['BigInt']>;
  endTime_not?: InputMaybe<Scalars['BigInt']>;
  endTime_gt?: InputMaybe<Scalars['BigInt']>;
  endTime_lt?: InputMaybe<Scalars['BigInt']>;
  endTime_gte?: InputMaybe<Scalars['BigInt']>;
  endTime_lte?: InputMaybe<Scalars['BigInt']>;
  endTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  periods?: InputMaybe<Scalars['BigInt']>;
  periods_not?: InputMaybe<Scalars['BigInt']>;
  periods_gt?: InputMaybe<Scalars['BigInt']>;
  periods_lt?: InputMaybe<Scalars['BigInt']>;
  periods_gte?: InputMaybe<Scalars['BigInt']>;
  periods_lte?: InputMaybe<Scalars['BigInt']>;
  periods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  periods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  releaseStartTime?: InputMaybe<Scalars['BigInt']>;
  releaseStartTime_not?: InputMaybe<Scalars['BigInt']>;
  releaseStartTime_gt?: InputMaybe<Scalars['BigInt']>;
  releaseStartTime_lt?: InputMaybe<Scalars['BigInt']>;
  releaseStartTime_gte?: InputMaybe<Scalars['BigInt']>;
  releaseStartTime_lte?: InputMaybe<Scalars['BigInt']>;
  releaseStartTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  releaseStartTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  vestingCliffTime?: InputMaybe<Scalars['BigInt']>;
  vestingCliffTime_not?: InputMaybe<Scalars['BigInt']>;
  vestingCliffTime_gt?: InputMaybe<Scalars['BigInt']>;
  vestingCliffTime_lt?: InputMaybe<Scalars['BigInt']>;
  vestingCliffTime_gte?: InputMaybe<Scalars['BigInt']>;
  vestingCliffTime_lte?: InputMaybe<Scalars['BigInt']>;
  vestingCliffTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  vestingCliffTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  revocable?: InputMaybe<Revocability>;
  revocable_not?: InputMaybe<Revocability>;
  revocable_in?: InputMaybe<Array<Revocability>>;
  revocable_not_in?: InputMaybe<Array<Revocability>>;
  tokenDestinationsApproved?: InputMaybe<Scalars['Boolean']>;
  tokenDestinationsApproved_not?: InputMaybe<Scalars['Boolean']>;
  tokenDestinationsApproved_in?: InputMaybe<Array<Scalars['Boolean']>>;
  tokenDestinationsApproved_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  tokensReleased?: InputMaybe<Scalars['BigInt']>;
  tokensReleased_not?: InputMaybe<Scalars['BigInt']>;
  tokensReleased_gt?: InputMaybe<Scalars['BigInt']>;
  tokensReleased_lt?: InputMaybe<Scalars['BigInt']>;
  tokensReleased_gte?: InputMaybe<Scalars['BigInt']>;
  tokensReleased_lte?: InputMaybe<Scalars['BigInt']>;
  tokensReleased_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokensReleased_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokensWithdrawn?: InputMaybe<Scalars['BigInt']>;
  tokensWithdrawn_not?: InputMaybe<Scalars['BigInt']>;
  tokensWithdrawn_gt?: InputMaybe<Scalars['BigInt']>;
  tokensWithdrawn_lt?: InputMaybe<Scalars['BigInt']>;
  tokensWithdrawn_gte?: InputMaybe<Scalars['BigInt']>;
  tokensWithdrawn_lte?: InputMaybe<Scalars['BigInt']>;
  tokensWithdrawn_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokensWithdrawn_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokensRevoked?: InputMaybe<Scalars['BigInt']>;
  tokensRevoked_not?: InputMaybe<Scalars['BigInt']>;
  tokensRevoked_gt?: InputMaybe<Scalars['BigInt']>;
  tokensRevoked_lt?: InputMaybe<Scalars['BigInt']>;
  tokensRevoked_gte?: InputMaybe<Scalars['BigInt']>;
  tokensRevoked_lte?: InputMaybe<Scalars['BigInt']>;
  tokensRevoked_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokensRevoked_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumberCreated?: InputMaybe<Scalars['BigInt']>;
  blockNumberCreated_not?: InputMaybe<Scalars['BigInt']>;
  blockNumberCreated_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumberCreated_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumberCreated_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumberCreated_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumberCreated_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumberCreated_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_gt?: InputMaybe<Scalars['Bytes']>;
  txHash_lt?: InputMaybe<Scalars['Bytes']>;
  txHash_gte?: InputMaybe<Scalars['Bytes']>;
  txHash_lte?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TokenLockWallet_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TokenLockWallet_filter>>>;
};

export type TokenLockWallet_orderBy =
  | 'id'
  | 'manager'
  | 'initHash'
  | 'beneficiary'
  | 'token'
  | 'managedAmount'
  | 'startTime'
  | 'endTime'
  | 'periods'
  | 'releaseStartTime'
  | 'vestingCliffTime'
  | 'revocable'
  | 'tokenDestinationsApproved'
  | 'tokensReleased'
  | 'tokensWithdrawn'
  | 'tokensRevoked'
  | 'blockNumberCreated'
  | 'txHash';

/**
 * The Token manager data
 *
 */
export type TokenManager = {
  /** Token manager address */
  id: Scalars['ID'];
  /** Master copy address */
  masterCopy: Scalars['Bytes'];
  /** Tokens stored in manger through deposit or withdraw */
  tokens: Scalars['BigInt'];
  /** List of addresses that are allowed to pull funds */
  tokenDestinations?: Maybe<Array<Scalars['Bytes']>>;
  /** List of function call authorizations */
  authorizedFunctions?: Maybe<Array<AuthorizedFunction>>;
  /** Token lock count of contracts created */
  tokenLockCount: Scalars['BigInt'];
};


/**
 * The Token manager data
 *
 */
export type TokenManagerauthorizedFunctionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AuthorizedFunction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AuthorizedFunction_filter>;
};

export type TokenManager_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  masterCopy?: InputMaybe<Scalars['Bytes']>;
  masterCopy_not?: InputMaybe<Scalars['Bytes']>;
  masterCopy_gt?: InputMaybe<Scalars['Bytes']>;
  masterCopy_lt?: InputMaybe<Scalars['Bytes']>;
  masterCopy_gte?: InputMaybe<Scalars['Bytes']>;
  masterCopy_lte?: InputMaybe<Scalars['Bytes']>;
  masterCopy_in?: InputMaybe<Array<Scalars['Bytes']>>;
  masterCopy_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  masterCopy_contains?: InputMaybe<Scalars['Bytes']>;
  masterCopy_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokens?: InputMaybe<Scalars['BigInt']>;
  tokens_not?: InputMaybe<Scalars['BigInt']>;
  tokens_gt?: InputMaybe<Scalars['BigInt']>;
  tokens_lt?: InputMaybe<Scalars['BigInt']>;
  tokens_gte?: InputMaybe<Scalars['BigInt']>;
  tokens_lte?: InputMaybe<Scalars['BigInt']>;
  tokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenDestinations?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenDestinations_not?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenDestinations_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenDestinations_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenDestinations_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenDestinations_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  authorizedFunctions_?: InputMaybe<AuthorizedFunction_filter>;
  tokenLockCount?: InputMaybe<Scalars['BigInt']>;
  tokenLockCount_not?: InputMaybe<Scalars['BigInt']>;
  tokenLockCount_gt?: InputMaybe<Scalars['BigInt']>;
  tokenLockCount_lt?: InputMaybe<Scalars['BigInt']>;
  tokenLockCount_gte?: InputMaybe<Scalars['BigInt']>;
  tokenLockCount_lte?: InputMaybe<Scalars['BigInt']>;
  tokenLockCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenLockCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TokenManager_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TokenManager_filter>>>;
};

export type TokenManager_orderBy =
  | 'id'
  | 'masterCopy'
  | 'tokens'
  | 'tokenDestinations'
  | 'authorizedFunctions'
  | 'tokenLockCount';

/**
 * A generic transaction in The Graph Network
 *
 */
export type Transaction = {
  /** Transaction hash concatenated with event log index */
  id: Scalars['ID'];
  /** Block number for the transaction */
  blockNumber: Scalars['Int'];
  /** Timestamp for the transaction */
  timestamp: Scalars['Int'];
  /** Signer of the transaction */
  signer: GraphAccount;
  /** Type of Graph Network transaction */
  type: TransactionType;
};

export type TransactionType =
  | 'Stake'
  | 'Unstake'
  | 'MintSignal'
  | 'BurnSignal'
  | 'MintNSignal'
  | 'BurnNSignal'
  | 'BridgeWithdrawal'
  | 'BridgeDeposit';

export type Transaction_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  signer?: InputMaybe<Scalars['String']>;
  signer_not?: InputMaybe<Scalars['String']>;
  signer_gt?: InputMaybe<Scalars['String']>;
  signer_lt?: InputMaybe<Scalars['String']>;
  signer_gte?: InputMaybe<Scalars['String']>;
  signer_lte?: InputMaybe<Scalars['String']>;
  signer_in?: InputMaybe<Array<Scalars['String']>>;
  signer_not_in?: InputMaybe<Array<Scalars['String']>>;
  signer_contains?: InputMaybe<Scalars['String']>;
  signer_contains_nocase?: InputMaybe<Scalars['String']>;
  signer_not_contains?: InputMaybe<Scalars['String']>;
  signer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  signer_starts_with?: InputMaybe<Scalars['String']>;
  signer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  signer_not_starts_with?: InputMaybe<Scalars['String']>;
  signer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  signer_ends_with?: InputMaybe<Scalars['String']>;
  signer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  signer_not_ends_with?: InputMaybe<Scalars['String']>;
  signer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  signer_?: InputMaybe<GraphAccount_filter>;
  type?: InputMaybe<TransactionType>;
  type_not?: InputMaybe<TransactionType>;
  type_in?: InputMaybe<Array<TransactionType>>;
  type_not_in?: InputMaybe<Array<TransactionType>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Transaction_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Transaction_filter>>>;
};

export type Transaction_orderBy =
  | 'id'
  | 'blockNumber'
  | 'timestamp'
  | 'signer'
  | 'signer__id'
  | 'signer__createdAt'
  | 'signer__defaultDisplayName'
  | 'signer__metadataHash'
  | 'signer__balance'
  | 'signer__balanceReceivedFromL1Signalling'
  | 'signer__balanceReceivedFromL1Delegation'
  | 'signer__curationApproval'
  | 'signer__stakingApproval'
  | 'signer__gnsApproval'
  | 'signer__developerCreatedAt'
  | 'signer__subgraphQueryFees'
  | 'type';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  arbitrum_graphNetwork: InContextSdkMethod<Query['arbitrum_graphNetwork'], Queryarbitrum_graphNetworkArgs, MeshContext>,
  /** null **/
  arbitrum_graphNetworks: InContextSdkMethod<Query['arbitrum_graphNetworks'], Queryarbitrum_graphNetworksArgs, MeshContext>,
  /** null **/
  arbitrum_graphAccount: InContextSdkMethod<Query['arbitrum_graphAccount'], Queryarbitrum_graphAccountArgs, MeshContext>,
  /** null **/
  arbitrum_graphAccounts: InContextSdkMethod<Query['arbitrum_graphAccounts'], Queryarbitrum_graphAccountsArgs, MeshContext>,
  /** null **/
  arbitrum_accountMetadata: InContextSdkMethod<Query['arbitrum_accountMetadata'], Queryarbitrum_accountMetadataArgs, MeshContext>,
  /** null **/
  arbitrum_graphAccountName: InContextSdkMethod<Query['arbitrum_graphAccountName'], Queryarbitrum_graphAccountNameArgs, MeshContext>,
  /** null **/
  arbitrum_graphAccountNames: InContextSdkMethod<Query['arbitrum_graphAccountNames'], Queryarbitrum_graphAccountNamesArgs, MeshContext>,
  /** null **/
  arbitrum_subgraph: InContextSdkMethod<Query['arbitrum_subgraph'], Queryarbitrum_subgraphArgs, MeshContext>,
  /** null **/
  arbitrum_subgraphs: InContextSdkMethod<Query['arbitrum_subgraphs'], Queryarbitrum_subgraphsArgs, MeshContext>,
  /** null **/
  arbitrum_subgraphMetadata: InContextSdkMethod<Query['arbitrum_subgraphMetadata'], Queryarbitrum_subgraphMetadataArgs, MeshContext>,
  /** null **/
  arbitrum_currentSubgraphDeploymentRelation: InContextSdkMethod<Query['arbitrum_currentSubgraphDeploymentRelation'], Queryarbitrum_currentSubgraphDeploymentRelationArgs, MeshContext>,
  /** null **/
  arbitrum_currentSubgraphDeploymentRelations: InContextSdkMethod<Query['arbitrum_currentSubgraphDeploymentRelations'], Queryarbitrum_currentSubgraphDeploymentRelationsArgs, MeshContext>,
  /** null **/
  arbitrum_network: InContextSdkMethod<Query['arbitrum_network'], Queryarbitrum_networkArgs, MeshContext>,
  /** null **/
  arbitrum_networks: InContextSdkMethod<Query['arbitrum_networks'], Queryarbitrum_networksArgs, MeshContext>,
  /** null **/
  arbitrum_subgraphVersion: InContextSdkMethod<Query['arbitrum_subgraphVersion'], Queryarbitrum_subgraphVersionArgs, MeshContext>,
  /** null **/
  arbitrum_subgraphVersions: InContextSdkMethod<Query['arbitrum_subgraphVersions'], Queryarbitrum_subgraphVersionsArgs, MeshContext>,
  /** null **/
  arbitrum_subgraphVersionMetadata: InContextSdkMethod<Query['arbitrum_subgraphVersionMetadata'], Queryarbitrum_subgraphVersionMetadataArgs, MeshContext>,
  /** null **/
  arbitrum_subgraphDeployment: InContextSdkMethod<Query['arbitrum_subgraphDeployment'], Queryarbitrum_subgraphDeploymentArgs, MeshContext>,
  /** null **/
  arbitrum_subgraphDeployments: InContextSdkMethod<Query['arbitrum_subgraphDeployments'], Queryarbitrum_subgraphDeploymentsArgs, MeshContext>,
  /** null **/
  arbitrum_subgraphDeploymentMetadata: InContextSdkMethod<Query['arbitrum_subgraphDeploymentMetadata'], Queryarbitrum_subgraphDeploymentMetadataArgs, MeshContext>,
  /** null **/
  arbitrum_indexer: InContextSdkMethod<Query['arbitrum_indexer'], Queryarbitrum_indexerArgs, MeshContext>,
  /** null **/
  arbitrum_indexers: InContextSdkMethod<Query['arbitrum_indexers'], Queryarbitrum_indexersArgs, MeshContext>,
  /** null **/
  arbitrum_allocation: InContextSdkMethod<Query['arbitrum_allocation'], Queryarbitrum_allocationArgs, MeshContext>,
  /** null **/
  arbitrum_allocations: InContextSdkMethod<Query['arbitrum_allocations'], Queryarbitrum_allocationsArgs, MeshContext>,
  /** null **/
  arbitrum_pool: InContextSdkMethod<Query['arbitrum_pool'], Queryarbitrum_poolArgs, MeshContext>,
  /** null **/
  arbitrum_pools: InContextSdkMethod<Query['arbitrum_pools'], Queryarbitrum_poolsArgs, MeshContext>,
  /** null **/
  arbitrum_delegator: InContextSdkMethod<Query['arbitrum_delegator'], Queryarbitrum_delegatorArgs, MeshContext>,
  /** null **/
  arbitrum_delegators: InContextSdkMethod<Query['arbitrum_delegators'], Queryarbitrum_delegatorsArgs, MeshContext>,
  /** null **/
  arbitrum_delegatedStake: InContextSdkMethod<Query['arbitrum_delegatedStake'], Queryarbitrum_delegatedStakeArgs, MeshContext>,
  /** null **/
  arbitrum_delegatedStakes: InContextSdkMethod<Query['arbitrum_delegatedStakes'], Queryarbitrum_delegatedStakesArgs, MeshContext>,
  /** null **/
  arbitrum_curator: InContextSdkMethod<Query['arbitrum_curator'], Queryarbitrum_curatorArgs, MeshContext>,
  /** null **/
  arbitrum_curators: InContextSdkMethod<Query['arbitrum_curators'], Queryarbitrum_curatorsArgs, MeshContext>,
  /** null **/
  arbitrum_signal: InContextSdkMethod<Query['arbitrum_signal'], Queryarbitrum_signalArgs, MeshContext>,
  /** null **/
  arbitrum_signals: InContextSdkMethod<Query['arbitrum_signals'], Queryarbitrum_signalsArgs, MeshContext>,
  /** null **/
  arbitrum_nameSignal: InContextSdkMethod<Query['arbitrum_nameSignal'], Queryarbitrum_nameSignalArgs, MeshContext>,
  /** null **/
  arbitrum_nameSignals: InContextSdkMethod<Query['arbitrum_nameSignals'], Queryarbitrum_nameSignalsArgs, MeshContext>,
  /** null **/
  arbitrum_nameSignalSubgraphRelation: InContextSdkMethod<Query['arbitrum_nameSignalSubgraphRelation'], Queryarbitrum_nameSignalSubgraphRelationArgs, MeshContext>,
  /** null **/
  arbitrum_nameSignalSubgraphRelations: InContextSdkMethod<Query['arbitrum_nameSignalSubgraphRelations'], Queryarbitrum_nameSignalSubgraphRelationsArgs, MeshContext>,
  /** null **/
  arbitrum_signalSubgraphDeploymentRelation: InContextSdkMethod<Query['arbitrum_signalSubgraphDeploymentRelation'], Queryarbitrum_signalSubgraphDeploymentRelationArgs, MeshContext>,
  /** null **/
  arbitrum_signalSubgraphDeploymentRelations: InContextSdkMethod<Query['arbitrum_signalSubgraphDeploymentRelations'], Queryarbitrum_signalSubgraphDeploymentRelationsArgs, MeshContext>,
  /** null **/
  arbitrum_dispute: InContextSdkMethod<Query['arbitrum_dispute'], Queryarbitrum_disputeArgs, MeshContext>,
  /** null **/
  arbitrum_disputes: InContextSdkMethod<Query['arbitrum_disputes'], Queryarbitrum_disputesArgs, MeshContext>,
  /** null **/
  arbitrum_attestation: InContextSdkMethod<Query['arbitrum_attestation'], Queryarbitrum_attestationArgs, MeshContext>,
  /** null **/
  arbitrum_attestations: InContextSdkMethod<Query['arbitrum_attestations'], Queryarbitrum_attestationsArgs, MeshContext>,
  /** null **/
  arbitrum_epoch: InContextSdkMethod<Query['arbitrum_epoch'], Queryarbitrum_epochArgs, MeshContext>,
  /** null **/
  arbitrum_epoches: InContextSdkMethod<Query['arbitrum_epoches'], Queryarbitrum_epochesArgs, MeshContext>,
  /** null **/
  arbitrum_nameSignalTransaction: InContextSdkMethod<Query['arbitrum_nameSignalTransaction'], Queryarbitrum_nameSignalTransactionArgs, MeshContext>,
  /** null **/
  arbitrum_nameSignalTransactions: InContextSdkMethod<Query['arbitrum_nameSignalTransactions'], Queryarbitrum_nameSignalTransactionsArgs, MeshContext>,
  /** null **/
  arbitrum_signalTransaction: InContextSdkMethod<Query['arbitrum_signalTransaction'], Queryarbitrum_signalTransactionArgs, MeshContext>,
  /** null **/
  arbitrum_signalTransactions: InContextSdkMethod<Query['arbitrum_signalTransactions'], Queryarbitrum_signalTransactionsArgs, MeshContext>,
  /** null **/
  arbitrum_bridgeWithdrawalTransaction: InContextSdkMethod<Query['arbitrum_bridgeWithdrawalTransaction'], Queryarbitrum_bridgeWithdrawalTransactionArgs, MeshContext>,
  /** null **/
  arbitrum_bridgeWithdrawalTransactions: InContextSdkMethod<Query['arbitrum_bridgeWithdrawalTransactions'], Queryarbitrum_bridgeWithdrawalTransactionsArgs, MeshContext>,
  /** null **/
  arbitrum_bridgeDepositTransaction: InContextSdkMethod<Query['arbitrum_bridgeDepositTransaction'], Queryarbitrum_bridgeDepositTransactionArgs, MeshContext>,
  /** null **/
  arbitrum_bridgeDepositTransactions: InContextSdkMethod<Query['arbitrum_bridgeDepositTransactions'], Queryarbitrum_bridgeDepositTransactionsArgs, MeshContext>,
  /** null **/
  arbitrum_retryableTicket: InContextSdkMethod<Query['arbitrum_retryableTicket'], Queryarbitrum_retryableTicketArgs, MeshContext>,
  /** null **/
  arbitrum_retryableTickets: InContextSdkMethod<Query['arbitrum_retryableTickets'], Queryarbitrum_retryableTicketsArgs, MeshContext>,
  /** null **/
  arbitrum_retryableTicketRedeemAttempt: InContextSdkMethod<Query['arbitrum_retryableTicketRedeemAttempt'], Queryarbitrum_retryableTicketRedeemAttemptArgs, MeshContext>,
  /** null **/
  arbitrum_retryableTicketRedeemAttempts: InContextSdkMethod<Query['arbitrum_retryableTicketRedeemAttempts'], Queryarbitrum_retryableTicketRedeemAttemptsArgs, MeshContext>,
  /** null **/
  arbitrum_tokenManager: InContextSdkMethod<Query['arbitrum_tokenManager'], Queryarbitrum_tokenManagerArgs, MeshContext>,
  /** null **/
  arbitrum_tokenManagers: InContextSdkMethod<Query['arbitrum_tokenManagers'], Queryarbitrum_tokenManagersArgs, MeshContext>,
  /** null **/
  arbitrum_authorizedFunction: InContextSdkMethod<Query['arbitrum_authorizedFunction'], Queryarbitrum_authorizedFunctionArgs, MeshContext>,
  /** null **/
  arbitrum_authorizedFunctions: InContextSdkMethod<Query['arbitrum_authorizedFunctions'], Queryarbitrum_authorizedFunctionsArgs, MeshContext>,
  /** null **/
  arbitrum_tokenLockWallet: InContextSdkMethod<Query['arbitrum_tokenLockWallet'], Queryarbitrum_tokenLockWalletArgs, MeshContext>,
  /** null **/
  arbitrum_tokenLockWallets: InContextSdkMethod<Query['arbitrum_tokenLockWallets'], Queryarbitrum_tokenLockWalletsArgs, MeshContext>,
  /** null **/
  arbitrum_indexerDeployment: InContextSdkMethod<Query['arbitrum_indexerDeployment'], Queryarbitrum_indexerDeploymentArgs, MeshContext>,
  /** null **/
  arbitrum_indexerDeployments: InContextSdkMethod<Query['arbitrum_indexerDeployments'], Queryarbitrum_indexerDeploymentsArgs, MeshContext>,
  /** null **/
  arbitrum_rewardCutHistoryEntity: InContextSdkMethod<Query['arbitrum_rewardCutHistoryEntity'], Queryarbitrum_rewardCutHistoryEntityArgs, MeshContext>,
  /** null **/
  arbitrum_rewardCutHistoryEntities: InContextSdkMethod<Query['arbitrum_rewardCutHistoryEntities'], Queryarbitrum_rewardCutHistoryEntitiesArgs, MeshContext>,
  /** null **/
  arbitrum_delegationPoolHistoryEntity: InContextSdkMethod<Query['arbitrum_delegationPoolHistoryEntity'], Queryarbitrum_delegationPoolHistoryEntityArgs, MeshContext>,
  /** null **/
  arbitrum_delegationPoolHistoryEntities: InContextSdkMethod<Query['arbitrum_delegationPoolHistoryEntities'], Queryarbitrum_delegationPoolHistoryEntitiesArgs, MeshContext>,
  /** null **/
  arbitrum_indexersRecalculateQueue: InContextSdkMethod<Query['arbitrum_indexersRecalculateQueue'], Queryarbitrum_indexersRecalculateQueueArgs, MeshContext>,
  /** null **/
  arbitrum_indexersRecalculateQueues: InContextSdkMethod<Query['arbitrum_indexersRecalculateQueues'], Queryarbitrum_indexersRecalculateQueuesArgs, MeshContext>,
  /** null **/
  arbitrum_transaction: InContextSdkMethod<Query['arbitrum_transaction'], Queryarbitrum_transactionArgs, MeshContext>,
  /** null **/
  arbitrum_transactions: InContextSdkMethod<Query['arbitrum_transactions'], Queryarbitrum_transactionsArgs, MeshContext>,
  /** null **/
  arbitrum_curatorSearch: InContextSdkMethod<Query['arbitrum_curatorSearch'], Queryarbitrum_curatorSearchArgs, MeshContext>,
  /** null **/
  arbitrum_delegatorSearch: InContextSdkMethod<Query['arbitrum_delegatorSearch'], Queryarbitrum_delegatorSearchArgs, MeshContext>,
  /** null **/
  arbitrum_indexerSearch: InContextSdkMethod<Query['arbitrum_indexerSearch'], Queryarbitrum_indexerSearchArgs, MeshContext>,
  /** null **/
  arbitrum_accountSearch: InContextSdkMethod<Query['arbitrum_accountSearch'], Queryarbitrum_accountSearchArgs, MeshContext>,
  /** Access to subgraph metadata **/
  arbitrum__meta: InContextSdkMethod<Query['arbitrum__meta'], Queryarbitrum__metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  arbitrum_graphNetwork: InContextSdkMethod<Subscription['arbitrum_graphNetwork'], Subscriptionarbitrum_graphNetworkArgs, MeshContext>,
  /** null **/
  arbitrum_graphNetworks: InContextSdkMethod<Subscription['arbitrum_graphNetworks'], Subscriptionarbitrum_graphNetworksArgs, MeshContext>,
  /** null **/
  arbitrum_graphAccount: InContextSdkMethod<Subscription['arbitrum_graphAccount'], Subscriptionarbitrum_graphAccountArgs, MeshContext>,
  /** null **/
  arbitrum_graphAccounts: InContextSdkMethod<Subscription['arbitrum_graphAccounts'], Subscriptionarbitrum_graphAccountsArgs, MeshContext>,
  /** null **/
  arbitrum_accountMetadata: InContextSdkMethod<Subscription['arbitrum_accountMetadata'], Subscriptionarbitrum_accountMetadataArgs, MeshContext>,
  /** null **/
  arbitrum_graphAccountName: InContextSdkMethod<Subscription['arbitrum_graphAccountName'], Subscriptionarbitrum_graphAccountNameArgs, MeshContext>,
  /** null **/
  arbitrum_graphAccountNames: InContextSdkMethod<Subscription['arbitrum_graphAccountNames'], Subscriptionarbitrum_graphAccountNamesArgs, MeshContext>,
  /** null **/
  arbitrum_subgraph: InContextSdkMethod<Subscription['arbitrum_subgraph'], Subscriptionarbitrum_subgraphArgs, MeshContext>,
  /** null **/
  arbitrum_subgraphs: InContextSdkMethod<Subscription['arbitrum_subgraphs'], Subscriptionarbitrum_subgraphsArgs, MeshContext>,
  /** null **/
  arbitrum_subgraphMetadata: InContextSdkMethod<Subscription['arbitrum_subgraphMetadata'], Subscriptionarbitrum_subgraphMetadataArgs, MeshContext>,
  /** null **/
  arbitrum_currentSubgraphDeploymentRelation: InContextSdkMethod<Subscription['arbitrum_currentSubgraphDeploymentRelation'], Subscriptionarbitrum_currentSubgraphDeploymentRelationArgs, MeshContext>,
  /** null **/
  arbitrum_currentSubgraphDeploymentRelations: InContextSdkMethod<Subscription['arbitrum_currentSubgraphDeploymentRelations'], Subscriptionarbitrum_currentSubgraphDeploymentRelationsArgs, MeshContext>,
  /** null **/
  arbitrum_network: InContextSdkMethod<Subscription['arbitrum_network'], Subscriptionarbitrum_networkArgs, MeshContext>,
  /** null **/
  arbitrum_networks: InContextSdkMethod<Subscription['arbitrum_networks'], Subscriptionarbitrum_networksArgs, MeshContext>,
  /** null **/
  arbitrum_subgraphVersion: InContextSdkMethod<Subscription['arbitrum_subgraphVersion'], Subscriptionarbitrum_subgraphVersionArgs, MeshContext>,
  /** null **/
  arbitrum_subgraphVersions: InContextSdkMethod<Subscription['arbitrum_subgraphVersions'], Subscriptionarbitrum_subgraphVersionsArgs, MeshContext>,
  /** null **/
  arbitrum_subgraphVersionMetadata: InContextSdkMethod<Subscription['arbitrum_subgraphVersionMetadata'], Subscriptionarbitrum_subgraphVersionMetadataArgs, MeshContext>,
  /** null **/
  arbitrum_subgraphDeployment: InContextSdkMethod<Subscription['arbitrum_subgraphDeployment'], Subscriptionarbitrum_subgraphDeploymentArgs, MeshContext>,
  /** null **/
  arbitrum_subgraphDeployments: InContextSdkMethod<Subscription['arbitrum_subgraphDeployments'], Subscriptionarbitrum_subgraphDeploymentsArgs, MeshContext>,
  /** null **/
  arbitrum_subgraphDeploymentMetadata: InContextSdkMethod<Subscription['arbitrum_subgraphDeploymentMetadata'], Subscriptionarbitrum_subgraphDeploymentMetadataArgs, MeshContext>,
  /** null **/
  arbitrum_indexer: InContextSdkMethod<Subscription['arbitrum_indexer'], Subscriptionarbitrum_indexerArgs, MeshContext>,
  /** null **/
  arbitrum_indexers: InContextSdkMethod<Subscription['arbitrum_indexers'], Subscriptionarbitrum_indexersArgs, MeshContext>,
  /** null **/
  arbitrum_allocation: InContextSdkMethod<Subscription['arbitrum_allocation'], Subscriptionarbitrum_allocationArgs, MeshContext>,
  /** null **/
  arbitrum_allocations: InContextSdkMethod<Subscription['arbitrum_allocations'], Subscriptionarbitrum_allocationsArgs, MeshContext>,
  /** null **/
  arbitrum_pool: InContextSdkMethod<Subscription['arbitrum_pool'], Subscriptionarbitrum_poolArgs, MeshContext>,
  /** null **/
  arbitrum_pools: InContextSdkMethod<Subscription['arbitrum_pools'], Subscriptionarbitrum_poolsArgs, MeshContext>,
  /** null **/
  arbitrum_delegator: InContextSdkMethod<Subscription['arbitrum_delegator'], Subscriptionarbitrum_delegatorArgs, MeshContext>,
  /** null **/
  arbitrum_delegators: InContextSdkMethod<Subscription['arbitrum_delegators'], Subscriptionarbitrum_delegatorsArgs, MeshContext>,
  /** null **/
  arbitrum_delegatedStake: InContextSdkMethod<Subscription['arbitrum_delegatedStake'], Subscriptionarbitrum_delegatedStakeArgs, MeshContext>,
  /** null **/
  arbitrum_delegatedStakes: InContextSdkMethod<Subscription['arbitrum_delegatedStakes'], Subscriptionarbitrum_delegatedStakesArgs, MeshContext>,
  /** null **/
  arbitrum_curator: InContextSdkMethod<Subscription['arbitrum_curator'], Subscriptionarbitrum_curatorArgs, MeshContext>,
  /** null **/
  arbitrum_curators: InContextSdkMethod<Subscription['arbitrum_curators'], Subscriptionarbitrum_curatorsArgs, MeshContext>,
  /** null **/
  arbitrum_signal: InContextSdkMethod<Subscription['arbitrum_signal'], Subscriptionarbitrum_signalArgs, MeshContext>,
  /** null **/
  arbitrum_signals: InContextSdkMethod<Subscription['arbitrum_signals'], Subscriptionarbitrum_signalsArgs, MeshContext>,
  /** null **/
  arbitrum_nameSignal: InContextSdkMethod<Subscription['arbitrum_nameSignal'], Subscriptionarbitrum_nameSignalArgs, MeshContext>,
  /** null **/
  arbitrum_nameSignals: InContextSdkMethod<Subscription['arbitrum_nameSignals'], Subscriptionarbitrum_nameSignalsArgs, MeshContext>,
  /** null **/
  arbitrum_nameSignalSubgraphRelation: InContextSdkMethod<Subscription['arbitrum_nameSignalSubgraphRelation'], Subscriptionarbitrum_nameSignalSubgraphRelationArgs, MeshContext>,
  /** null **/
  arbitrum_nameSignalSubgraphRelations: InContextSdkMethod<Subscription['arbitrum_nameSignalSubgraphRelations'], Subscriptionarbitrum_nameSignalSubgraphRelationsArgs, MeshContext>,
  /** null **/
  arbitrum_signalSubgraphDeploymentRelation: InContextSdkMethod<Subscription['arbitrum_signalSubgraphDeploymentRelation'], Subscriptionarbitrum_signalSubgraphDeploymentRelationArgs, MeshContext>,
  /** null **/
  arbitrum_signalSubgraphDeploymentRelations: InContextSdkMethod<Subscription['arbitrum_signalSubgraphDeploymentRelations'], Subscriptionarbitrum_signalSubgraphDeploymentRelationsArgs, MeshContext>,
  /** null **/
  arbitrum_dispute: InContextSdkMethod<Subscription['arbitrum_dispute'], Subscriptionarbitrum_disputeArgs, MeshContext>,
  /** null **/
  arbitrum_disputes: InContextSdkMethod<Subscription['arbitrum_disputes'], Subscriptionarbitrum_disputesArgs, MeshContext>,
  /** null **/
  arbitrum_attestation: InContextSdkMethod<Subscription['arbitrum_attestation'], Subscriptionarbitrum_attestationArgs, MeshContext>,
  /** null **/
  arbitrum_attestations: InContextSdkMethod<Subscription['arbitrum_attestations'], Subscriptionarbitrum_attestationsArgs, MeshContext>,
  /** null **/
  arbitrum_epoch: InContextSdkMethod<Subscription['arbitrum_epoch'], Subscriptionarbitrum_epochArgs, MeshContext>,
  /** null **/
  arbitrum_epoches: InContextSdkMethod<Subscription['arbitrum_epoches'], Subscriptionarbitrum_epochesArgs, MeshContext>,
  /** null **/
  arbitrum_nameSignalTransaction: InContextSdkMethod<Subscription['arbitrum_nameSignalTransaction'], Subscriptionarbitrum_nameSignalTransactionArgs, MeshContext>,
  /** null **/
  arbitrum_nameSignalTransactions: InContextSdkMethod<Subscription['arbitrum_nameSignalTransactions'], Subscriptionarbitrum_nameSignalTransactionsArgs, MeshContext>,
  /** null **/
  arbitrum_signalTransaction: InContextSdkMethod<Subscription['arbitrum_signalTransaction'], Subscriptionarbitrum_signalTransactionArgs, MeshContext>,
  /** null **/
  arbitrum_signalTransactions: InContextSdkMethod<Subscription['arbitrum_signalTransactions'], Subscriptionarbitrum_signalTransactionsArgs, MeshContext>,
  /** null **/
  arbitrum_bridgeWithdrawalTransaction: InContextSdkMethod<Subscription['arbitrum_bridgeWithdrawalTransaction'], Subscriptionarbitrum_bridgeWithdrawalTransactionArgs, MeshContext>,
  /** null **/
  arbitrum_bridgeWithdrawalTransactions: InContextSdkMethod<Subscription['arbitrum_bridgeWithdrawalTransactions'], Subscriptionarbitrum_bridgeWithdrawalTransactionsArgs, MeshContext>,
  /** null **/
  arbitrum_bridgeDepositTransaction: InContextSdkMethod<Subscription['arbitrum_bridgeDepositTransaction'], Subscriptionarbitrum_bridgeDepositTransactionArgs, MeshContext>,
  /** null **/
  arbitrum_bridgeDepositTransactions: InContextSdkMethod<Subscription['arbitrum_bridgeDepositTransactions'], Subscriptionarbitrum_bridgeDepositTransactionsArgs, MeshContext>,
  /** null **/
  arbitrum_retryableTicket: InContextSdkMethod<Subscription['arbitrum_retryableTicket'], Subscriptionarbitrum_retryableTicketArgs, MeshContext>,
  /** null **/
  arbitrum_retryableTickets: InContextSdkMethod<Subscription['arbitrum_retryableTickets'], Subscriptionarbitrum_retryableTicketsArgs, MeshContext>,
  /** null **/
  arbitrum_retryableTicketRedeemAttempt: InContextSdkMethod<Subscription['arbitrum_retryableTicketRedeemAttempt'], Subscriptionarbitrum_retryableTicketRedeemAttemptArgs, MeshContext>,
  /** null **/
  arbitrum_retryableTicketRedeemAttempts: InContextSdkMethod<Subscription['arbitrum_retryableTicketRedeemAttempts'], Subscriptionarbitrum_retryableTicketRedeemAttemptsArgs, MeshContext>,
  /** null **/
  arbitrum_tokenManager: InContextSdkMethod<Subscription['arbitrum_tokenManager'], Subscriptionarbitrum_tokenManagerArgs, MeshContext>,
  /** null **/
  arbitrum_tokenManagers: InContextSdkMethod<Subscription['arbitrum_tokenManagers'], Subscriptionarbitrum_tokenManagersArgs, MeshContext>,
  /** null **/
  arbitrum_authorizedFunction: InContextSdkMethod<Subscription['arbitrum_authorizedFunction'], Subscriptionarbitrum_authorizedFunctionArgs, MeshContext>,
  /** null **/
  arbitrum_authorizedFunctions: InContextSdkMethod<Subscription['arbitrum_authorizedFunctions'], Subscriptionarbitrum_authorizedFunctionsArgs, MeshContext>,
  /** null **/
  arbitrum_tokenLockWallet: InContextSdkMethod<Subscription['arbitrum_tokenLockWallet'], Subscriptionarbitrum_tokenLockWalletArgs, MeshContext>,
  /** null **/
  arbitrum_tokenLockWallets: InContextSdkMethod<Subscription['arbitrum_tokenLockWallets'], Subscriptionarbitrum_tokenLockWalletsArgs, MeshContext>,
  /** null **/
  arbitrum_indexerDeployment: InContextSdkMethod<Subscription['arbitrum_indexerDeployment'], Subscriptionarbitrum_indexerDeploymentArgs, MeshContext>,
  /** null **/
  arbitrum_indexerDeployments: InContextSdkMethod<Subscription['arbitrum_indexerDeployments'], Subscriptionarbitrum_indexerDeploymentsArgs, MeshContext>,
  /** null **/
  arbitrum_rewardCutHistoryEntity: InContextSdkMethod<Subscription['arbitrum_rewardCutHistoryEntity'], Subscriptionarbitrum_rewardCutHistoryEntityArgs, MeshContext>,
  /** null **/
  arbitrum_rewardCutHistoryEntities: InContextSdkMethod<Subscription['arbitrum_rewardCutHistoryEntities'], Subscriptionarbitrum_rewardCutHistoryEntitiesArgs, MeshContext>,
  /** null **/
  arbitrum_delegationPoolHistoryEntity: InContextSdkMethod<Subscription['arbitrum_delegationPoolHistoryEntity'], Subscriptionarbitrum_delegationPoolHistoryEntityArgs, MeshContext>,
  /** null **/
  arbitrum_delegationPoolHistoryEntities: InContextSdkMethod<Subscription['arbitrum_delegationPoolHistoryEntities'], Subscriptionarbitrum_delegationPoolHistoryEntitiesArgs, MeshContext>,
  /** null **/
  arbitrum_indexersRecalculateQueue: InContextSdkMethod<Subscription['arbitrum_indexersRecalculateQueue'], Subscriptionarbitrum_indexersRecalculateQueueArgs, MeshContext>,
  /** null **/
  arbitrum_indexersRecalculateQueues: InContextSdkMethod<Subscription['arbitrum_indexersRecalculateQueues'], Subscriptionarbitrum_indexersRecalculateQueuesArgs, MeshContext>,
  /** null **/
  arbitrum_transaction: InContextSdkMethod<Subscription['arbitrum_transaction'], Subscriptionarbitrum_transactionArgs, MeshContext>,
  /** null **/
  arbitrum_transactions: InContextSdkMethod<Subscription['arbitrum_transactions'], Subscriptionarbitrum_transactionsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  arbitrum__meta: InContextSdkMethod<Subscription['arbitrum__meta'], Subscriptionarbitrum__metaArgs, MeshContext>
  };

  export type Context = {
      ["arbitrum"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
