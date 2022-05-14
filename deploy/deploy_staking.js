const { ethers } = require("hardhat");
const fs = require("fs");
const addresses = require("./addresses.json");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("deployer: ", deployer.address);

    const factory1 = await ethers.getContractFactory("TimeStaking");
    const deployment1 = await factory1.deploy(addresses.TIME_ADDRESS, addresses.MEMO_ADDRESS, 28800, 611, 1646229600);
    await deployment1.deployed();
    addresses.STAKING_ADDRESS = deployment1.address;
    
    const factory2 = await ethers.getContractFactory("StakingHelper");
    const deployment2 = await factory2.deploy(addresses.STAKING_ADDRESS, addresses.TIME_ADDRESS);
    await deployment2.deployed();
    addresses.STAKING_HELPER_ADDRESS = deployment2.address;

    fs.writeFileSync("./deploy/addresses.json", JSON.stringify(addresses, null, 2));
    console.log("TimeStaking deployed at: ", deployment1.address);
    console.log("StakingHelper deployed at: ", deployment2.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });