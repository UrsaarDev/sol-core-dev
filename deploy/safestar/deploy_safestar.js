const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("deployer: ", deployer.address);

    const SAFESTAR = await ethers.getContractFactory("SafeStar");
    const safestar = await SAFESTAR.deploy(); // 1B JPEG'd
    await safestar.deployed();
    console.log("Safestar deployed at: ", safestar.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });