const { ethers } = require("hardhat");
const addresses = require("../addresses.json");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("deployer: ", deployer.address);

    const factory = await ethers.getContractFactory("AccessControlledOffchainAggregator");
    const deployment = await factory.deploy(230, 225, 5400000, 8497449, 50984694, "0x565515C3724ac61753880c40e05003D3D29cf5D7", 10000000, 1000000000000, "0x8Bc2bB632AE231208d7C7fD4fD8ca0d27D736116", "0x8d6926a3ae38557a627bb7b3d84C49581331E631", 8, "AVAX / USD");
    await deployment.deployed();
    console.log("AccessControlledOffchainAggregator deployed at: ", deployment.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });