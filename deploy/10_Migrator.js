module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy } = deployments

  const { deployer, dev } = await getNamedAccounts()

  const mamaput = await ethers.getContract("MamaPut")
  const factory = await ethers.getContract("UniswapV2Factory")
  const uniswap = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f'

  await deploy("Migrator", {
    from: deployer,
    args: [mamaput.address, uniswap, factory.address, 1],
    log: true,
    deterministicDeployment: false
  })
}


module.exports.tags = ["Migrator"]
module.exports.dependencies = ["UniswapV2Factory", "MamaPut"]

