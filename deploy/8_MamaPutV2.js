const { ChainId } = require("@sushiswap/sdk")


const JOLLOF = {
  [ChainId.MATIC]: '0x0b3F868E0BE5597D5DB7fEB59E1CADBb0fdDa50a'
}

module.exports = async function ({ ethers, deployments, getNamedAccounts }) {
  const { deploy } = deployments

  const { deployer, dev } = await getNamedAccounts()

  const chainId = await getChainId()

  let jollofAddress;

  if (chainId === '31337') {
    jollofAddress = (await deployments.get("JollofToken")).address
  } else if (chainId in JOLLOF) {
    jollofAddress = JOLLOF[chainId]
  } else {
    throw Error("No JOLLOF!")
  }

  const factoryAddress = (await deployments.get("UniswapV2Factory")).address;

  await deploy("MamaPutV2", {
    from: deployer,
    args: [jollofAddress, factoryAddress, 1],
    log: true,
    deterministicDeployment: false
  })


  const mamaPutV2 = await ethers.getContract("MamaPutV2")
  if (await mamaPutV2.owner() !== dev) {
    console.log("Transfer ownership of MamaPut to dev")
    await (await mamaPutV2.transferOwnership(dev, true, false)).wait()
  }
}

module.exports.tags = ["MamaPutV2"]
// module.exports.dependencies = ["UniswapV2Factory", "UniswapV2Router02"]
