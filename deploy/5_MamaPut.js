module.exports = async function ({ ethers, deployments, getNamedAccounts }) {
  const { deploy } = deployments

  const { deployer, dev } = await getNamedAccounts()

  const jollof = await ethers.getContract("JollofToken")
  
  const { address } = await deploy("MamaPut", {
    from: deployer,
    args: [jollof.address, dev, "1000000000000000000000", "0", "1000000000000000000000"],
    log: true,
    deterministicDeployment: false
  })

  if (await jollof.owner() !== address) {
    // Transfer Jollof Ownership to Chef
    console.log("Transfer Jollof Ownership to MamaPut")
    await (await jollof.transferOwnership(address)).wait()
  }

  const mamaPut = await ethers.getContract("MamaPut")
  if (await mamaPut.owner() !== dev) {
    // Transfer ownership of MamaPut to dev
    console.log("Transfer ownership of MamaPut to dev")
    await (await mamaPut.transferOwnership(dev)).wait()
  }
}

module.exports.tags = ["MamaPut"]
module.exports.dependencies = ["UniswapV2Factory", "UniswapV2Router02", "JollofToken"]
