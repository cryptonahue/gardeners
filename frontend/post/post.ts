import { gql } from "@apollo/client/core";
import { BigNumber, utils } from "ethers";
import { v4 as uuidv4 } from "uuid";
import { apolloClient } from "../apollo-client";
import {
  getAddressFromSigner,
  signedTypeData,
  splitSignature,
} from "../ethers.service";
import { pollUntilIndexed } from "../indexer/has-transaction-been-indexed";
import {
  MetadataV2,
  PublicationMetadataVersions,
  PublicationMainFocus,
} from "../interfaces/publication";
import { uploadIpfs } from "../ipfs";
import { lensHub } from "../lens-hub";
import { getDefaultProfileRequest } from "../profile/get-default-profile";

/**
 *
 * steps to post:
 *
 * 0 - call createPostToSign()
 * 1 - sign the typed data
 * 2 - send that data to createPost()
 */

const CREATE_POST_TYPED_DATA = `
  mutation($request: CreatePublicPostRequest!) { 
    createPostTypedData(request: $request) {
      id
      expiresAt
      typedData {
        types {
          PostWithSig {
            name
            type
          }
        }
      domain {
        name
        chainId
        version
        verifyingContract
      }
      value {
        nonce
        deadline
        profileId
        contentURI
        collectModule
        collectModuleInitData
        referenceModule
        referenceModuleInitData
      }
    }
  }
}
`;

const createPostTypedData = (createPostTypedDataRequest: any) => {
  return apolloClient.mutate({
    mutation: gql(CREATE_POST_TYPED_DATA),
    variables: {
      request: createPostTypedDataRequest,
    },
  });
};

export const createPostToSign = async (
  address: string,
  description: string,
  tags: string[]
) => {
  const profileId = (await getDefaultProfileRequest(address)).data.id;
  if (!profileId) {
    throw new Error("Not valid profileId");
  }

  const ipfsResult = await uploadIpfs<MetadataV2>({
    version: PublicationMetadataVersions.two,
    metadata_id: uuidv4(),
    description: description,
    locale: "es",
    mainContentFocus: PublicationMainFocus.TEXT_ONLY,
    content: "Content",
    external_url: null,
    image: null,
    imageMimeType: null,
    name: "Name",
    attributes: [],
    tags: tags,
    media: [
      // {
      //   item: 'https://scx2.b-cdn.net/gfx/news/hires/2018/lion.jpg',
      //   // item: 'https://assets-global.website-files.com/5c38aa850637d1e7198ea850/5f4e173f16b537984687e39e_AAVE%20ARTICLE%20website%20main%201600x800.png',
      //   type: 'image/jpeg',
      // },
    ],
    appId: "atlags",
  });
  console.log("create post: ipfs result", ipfsResult);

  // hard coded to make the code example clear
  const createPostRequest = {
    profileId,
    contentURI: "ipfs://" + ipfsResult.path,
    collectModule: {
      freeCollectModule: { followerOnly: false },
    },
    referenceModule: {
      followerOnlyReferenceModule: false,
    },
  };

  const result = await createPostTypedData(createPostRequest);
  return result;
};

export const createPost = async (signature: any, typedData: any) => {
  // const typedData = result.data.createPostTypedData.typedData;

  const { v, r, s } = splitSignature(signature);

  const tx = await lensHub.postWithSig({
    profileId: typedData.value.profileId,
    contentURI: typedData.value.contentURI,
    collectModule: typedData.value.collectModule,
    collectModuleInitData: typedData.value.collectModuleInitData,
    referenceModule: typedData.value.referenceModule,
    referenceModuleInitData: typedData.value.referenceModuleInitData,
    sig: {
      v,
      r,
      s,
      deadline: typedData.value.deadline,
    },
  });
  console.log("create post: tx hash", tx.hash);

  console.log("create post: poll until indexed");
  const indexedResult = await pollUntilIndexed(tx.hash);

  const logs = indexedResult.txReceipt.logs;

  console.log("create post: logs", logs);

  const topicId = utils.id(
    "PostCreated(uint256,uint256,string,address,bytes,address,bytes,uint256)"
  );
  console.log("topicid we care about", topicId);

  const profileCreatedLog = logs.find((l: any) => l.topics[0] === topicId);
  console.log("create post: created log", profileCreatedLog);

  let profileCreatedEventLog = profileCreatedLog.topics;
  console.log("create post: created event logs", profileCreatedEventLog);

  const publicationId = utils.defaultAbiCoder.decode(
    ["uint256"],
    profileCreatedEventLog[2]
  )[0];

  console.log(
    "create post: contract publication id",
    BigNumber.from(publicationId).toHexString()
  );
};
