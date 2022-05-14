const { ethers } = require("hardhat");
const fs = require("fs");
const addresses = require("../addresses.json");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("deployer: ", deployer.address);

    const factory = await ethers.getContractFactory("TimeBondDepository");
    const deployment = await factory.deploy(addresses.OHM_ADDRESS, addresses.PRINCIPLE_ADDRESS, addresses.TREASURY_ADDRESS, addresses.DAO_ADDRESS, addresses.EAC_AGGREGATOR_PROXY_ADDRESS);
    await deployment.deployed();

    addresses.WAVAX_BOND_ADDRESS = deployment.address;
    fs.writeFileSync("./deploy/addresses.json", JSON.stringify(addresses, null, 2));
    console.log("WavaxBond deployed at: ", deployment.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });