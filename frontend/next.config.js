/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports =  { nextConfig,

/* # Check the address provided here : https://docs.lens.dev/docs/testnet-addresses */


env: {
  PK: "edad98e47cd20977687b1603c40aba2cfce10b5fb5d9ed8f9b28ecd8dfc65307",
  MUMBAI_RPC_URL: "https://rpc-mumbai.matic.today",
  PROFILE_ID: "0x464e",
  LENS_API: "https://api-mumbai.lens.dev/",
LENS_HUB_CONTRACT:"0x60Ae865ee4C725cd04353b5AAb364553f56ceF82",
LENS_PERIPHERY_CONTRACT:"0xD5037d72877808cdE7F669563e9389930AF404E8",
INFURA_PROJECT_ID:"2EjEDnUQNPY3NRgGj0JhxvKX1wc",
INFURA_SECRET:"d4f34a9f4f6cdb49451bd23f67c1e823",


}, 

};
