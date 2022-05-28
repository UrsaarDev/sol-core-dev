const { ethers } = require("hardhat");
const fs = require("fs");
const addresses = require("../addresses.json");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("deployer: ", deployer.address);

    const factory = await ethers.getContractFactory("NumiStake");
    const deployment = await factory.deploy();
    await deployment.deployed();

    addresses.NUMI_STAKING = deployment.address;
    fs.writeFileSync("./deploy/addresses.json", JSON.stringify(addresses, null, 2));
    console.log("NUMI Stake deployed at: ", deployment.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

/*
0x77De27369Ecb638792a6D6Cd28A2C136eFCe16e4
0x77De27369Ecb638792a6D6Cd28A2C136eFCe16e4
1
198898346
199071146
10000
1
86400
1
0x6cb0859dB902eFD12231B9CadFb43Cd1f699c2Ac
0x6cb0859dB902eFD12231B9CadFb43Cd1f699c2Ac
*/