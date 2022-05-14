const { ethers } = require("hardhat");
const fs = require("fs");
const addresses = require("../addresses.json");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("deployer: ", deployer.address);

    const factory = await ethers.getContractFactory("TimeBondDepository");
    const deployment = await factory.deploy(addresses.TIME_ADDRESS, addresses.PRINCIPLE_ADDRESS, addresses.TREASURY_ADDRESS, addresses.DAO_ADDRESS, addresses.TIME_BONDING_CALC_ADDRESS);
    await deployment.deployed();

    addresses.LP_MIM_BOND_ADDRESS = deployment.address;
    fs.writeFileSync("./deploy/addresses.json", JSON.stringify(addresses, null, 2));
    console.log("LpMimBond deployed at: ", deployment.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });