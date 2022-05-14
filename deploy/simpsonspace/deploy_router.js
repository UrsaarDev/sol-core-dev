const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("deployer: ", deployer.address);

  const PANCAKEFACTORY = await ethers.getContractFactory("PancakeFactory");
  const pancakefactory = await PANCAKEFACTORY.deploy('0x00000500000000000000000000000000deadbeef'); // 1B JPEG'd
  await pancakefactory.deployed();
  console.log("PancakeFactory deployed at: ", pancakefactory.address);

  const PANCAKEROUTER = await ethers.getContractFactory("PancakeRouter");
  const pancakerouter = await PANCAKEROUTER.deploy(pancakefactory.address,'0x6cb0859db902efd12231b9cadfb43cd1f699c2ac'); // 1B JPEG'd
  await pancakerouter.deployed();
  console.log("PancakeRouter deployed at: ", pancakerouter.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});
