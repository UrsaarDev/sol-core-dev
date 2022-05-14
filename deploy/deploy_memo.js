const { ethers } = require("hardhat");
const fs = require("fs");
const addresses = require("./addresses.json");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("deployer: ", deployer.address);

    const factory = await ethers.getContractFactory("MEMOries");
    const deployment = await factory.deploy();
    await deployment.deployed();
    
    addresses.MEMO_ADDRESS = deployment.address;
    fs.writeFileSync("./deploy/addresses.json", JSON.stringify(addresses, null, 2));
    console.log("MEMOries deployed at: ", deployment.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });