const { ethers } = require("hardhat");
const fs = require("fs");
const addresses = require("../addresses.json");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("deployer: ", deployer.address);

    const factory = await ethers.getContractFactory("EACAggregatorProxy");
    const deployment = await factory.deploy('0xD8062A08F8aC9bADBf6abCa3E82c5D8aFe0a3512', '0x0000000000000000000000000000000000000000');
    await deployment.deployed();

    addresses.EAC_AGGREGATOR_PROXY_ADDRESS = deployment.address;
    fs.writeFileSync("./deploy/addresses.json", JSON.stringify(addresses, null, 2));
    console.log("EACAggregatorProxy deployed at: ", deployment.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });