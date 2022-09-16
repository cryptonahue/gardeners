let vars = require("./settings.json");

let fileLensHub = require("./abis/lens-hub-contract-abi.json");

let fileLensPeriphery = require("./abis/lens-periphery-data-provider.json");

let fileFollowNFT = require("./abis/lens-follow-nft-contract-abi.json");

export const PK = vars.PK;

export const MUMBAI_RPC_URL = vars.MUMBAI_RPC_URL;

export const LENS_API = vars.LENS_API;

export const LENS_HUB_CONTRACT = vars.LENS_HUB_CONTRACT;

export const LENS_PERIPHERY_CONTRACT = vars.LENS_PERIPHERY_CONTRACT;

export const LENS_PERIPHERY_NAME = "LensPeriphery";

export const PROFILE_ID = vars.PROFILE_ID;

export const LENS_FOLLOW_NFT_ABI = fileFollowNFT;

export const LENS_HUB_ABI = fileLensHub;

export const LENS_PERIPHERY_ABI = fileLensPeriphery;

export const INFURA_PROJECT_ID = vars.INFURA_PROJECT_ID;

export const INFURA_SECRET = vars.INFURA_SECRET;