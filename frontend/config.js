/* import fs from "fs"; */
/* import path from "path"; */
// require("dotenv").config();

let vars = require("./settings.json");

var fileLensHub = require("./abis/lens-hub-contract-abi.json");
/* const fileLensHub = fs.readFileSync(
  path.join(__dirname, "abis/lens-hub-contract-abi.json"),
  "utf8"
); */

var fileLensPeriphery = require("./abis/lens-periphery-data-provider.json");
/* const fileLensPeriphery = fs.readFileSync(
  path.join(__dirname, "abis/lens-periphery-data-provider.json"),
  "utf8"
); */

var fileFollowNFT = require("./abis/lens-follow-nft-contract-abi.json");

/* const fileFollowNFT = fs.readFileSync(
  path.join(__dirname, "abis/lens-follow-nft-contract-abi.json"),
  "utf8"
); */

// const getParamOrExit = (name: string) => {
//   const param = process.env[name];
//   if (!param) {
//     console.error(`Required config param '${name}' missing`);
//     process.exit(1);
//   }
//   return param;
// };

// const getParam = (name: string) => {
//   const param = process.env[name];
//   if (!param) {
//     return null;
//   }
//   return param;
// };

// export const argsBespokeInit = () => {
//   return process.argv.find((c) => c === "--init") !== undefined;
// };

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
