const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("deployer: ", deployer.address);

    const SAFESTAR = await ethers.getContractFactory("Test");
    const SimpsonSpace = await SAFESTAR.deploy(); // 1B JPEG'd
    await SimpsonSpace.deployed();
    console.log("SimpsonSpace deployed at: ", SimpsonSpace.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });