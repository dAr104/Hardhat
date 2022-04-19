async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const ERC20Basic = await ethers.getContractFactory("ERC20Basic");
  const deployedContract = await ERC20Basic.deploy(100000000);
  console.log(
    "Deployed ERC20Basic contract address:",
    deployedContract.address
  );

  const result = await deployedContract.transfer(
    "0x3A7175F99E575893B5B0C826dAC16a6d69207270",
    1000
  );
  console.log("tokens transferred, txid: " + result.hash);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
