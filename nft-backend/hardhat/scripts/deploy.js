const hre = require("hardhat");
require("dotenv").config({ path: ".env" });

const metadataURL = "ipfs://QmNY24f3LJ8nfSyQjwxNF2GqcCuEaMjHcWMJgPgFsSBQFw";

async function main() {
  const MintingNFTContractFactory =  await hre.ethers.getContractFactory("MintingNFT");
  const MintingNFTContract = await MintingNFTContractFactory.deploy(metadataURL);

  console.log("MintingNFT deployed to:", MintingNFTContract.target);
}

main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});
