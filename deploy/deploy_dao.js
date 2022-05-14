const { ethers } = require("hardhat");
const fs = require("fs");
const addresses = require("./addresses.json");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("deployer: ", deployer.address);

    const factory = await ethers.getContractFactory("MultiSigWalletWithDailyLimit");
    const deployment = await factory.deploy(['0xff8f089128f53d6c54f769843defaaf5fbf02198', '0x3c1cb7d4c0ce0dc72edc7ea06acc866e62a8f1d8', '0x8a7f7c5b556b1298a74c0e89df46eba117a2f6c1', '0xf0ef78fa13e79c363b67975fc44e62ce96cf2be5', '0x285b7eea81a5b66b62e7276a24c1e0f83f7409c1', '0x6cb0859dB902eFD12231B9CadFb43Cd1f699c2Ac'], 3, 0);
    await deployment.deployed();

    addresses.DAO_ADDRESS = deployment.address;
    fs.writeFileSync("./deploy/addresses.json", JSON.stringify(addresses, null, 2));
    console.log("DAO deployed at: ", deployment.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });