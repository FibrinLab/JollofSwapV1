module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy } = deployments

  const { deployer } = await getNamedAccounts()

  const jollof = await deployments.get("JollofToken")

  await deploy("JollofShed", {
    from: deployer,
    args: [jollof.address],
    log: true,
    deterministicDeployment: false
  })
}

module.exports.tags = ["JollofShed"]
module.exports.dependencies = ["UniswapV2Factory", "UniswapV2Router02", "JollofToken"]
