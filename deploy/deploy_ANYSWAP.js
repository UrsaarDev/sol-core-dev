const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("deployer: ", deployer.address);

    const factory = await ethers.getContractFactory("AnyswapV5ERC20");
    const deployment = await factory.deploy(
        'Magic Internet Money',
        'MIM',
        18,
        '0x0000000000000000000000000000000000000000',
        '0xfa9da51631268a30ec3ddd1ccbf46c65fad99251',
    );
    await deployment.deployed();

    console.log("AnyswapV5ERC20 deployed at: ", deployment.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });