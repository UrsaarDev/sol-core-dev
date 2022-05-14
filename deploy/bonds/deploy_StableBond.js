const { ethers } = require("hardhat");
const fs = require("fs");
const addresses = require("../addresses.json");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("deployer: ", deployer.address);

    const factory = await ethers.getContractFactory("TimeBondDepository");
    const deployment = await factory.deploy(addresses.TIME_ADDRESS, '0xc89808346c81c506efAe97e4770F2d9701AFaB1A', addresses.TREASURY_ADDRESS, addresses.DAO_ADDRESS, addresses.AGGREGATOR_ADDRESS);
    await deployment.deployed();

    addresses.STABLE_BOND_ADDRESS = deployment.address;
    fs.writeFileSync("./deploy/addresses.json", JSON.stringify(addresses, null, 2));
    console.log("StableBond deployed at: ", deployment.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });