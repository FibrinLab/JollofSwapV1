import { expect } from "chai";
import { prepare, deploy, getBigNumber, createSLP } from "./utilities"

describe("JollofMaker", function () {
  before(async function () {
    await prepare(this, ["JollofMaker", "JollofShed", "JollofMakerExploitMock", "ERC20Mock", "UniswapV2Factory", "UniswapV2Pair"])
  })

  beforeEach(async function () {
    await deploy(this, [
      ["jollof", this.ERC20Mock, ["JOLLOF", "JOLLOF", getBigNumber("10000000")]],
      ["dai", this.ERC20Mock, ["DAI", "DAI", getBigNumber("10000000")]],
      ["mic", this.ERC20Mock, ["MIC", "MIC", getBigNumber("10000000")]],
      ["usdc", this.ERC20Mock, ["USDC", "USDC", getBigNumber("10000000")]],
      ["weth", this.ERC20Mock, ["WETH", "ETH", getBigNumber("10000000")]],
      ["strudel", this.ERC20Mock, ["$TRDL", "$TRDL", getBigNumber("10000000")]],
      ["factory", this.UniswapV2Factory, [this.alice.address]],
    ])
    await deploy(this, [["shed", this.JollofShed, [this.jollof.address]]])
    await deploy(this, [["jollofMaker", this.JollofMaker, [this.factory.address, this.shed.address, this.jollof.address, this.weth.address]]])
    await deploy(this, [["exploiter", this.JollofMakerExploitMock, [this.jollofMaker.address]]])
    await createSLP(this, "jollofEth", this.jollof, this.weth, getBigNumber(10))
    await createSLP(this, "strudelEth", this.strudel, this.weth, getBigNumber(10))
    await createSLP(this, "daiEth", this.dai, this.weth, getBigNumber(10))
    await createSLP(this, "usdcEth", this.usdc, this.weth, getBigNumber(10))
    await createSLP(this, "micUSDC", this.mic, this.usdc, getBigNumber(10))
    await createSLP(this, "jollofUSDC", this.jollof, this.usdc, getBigNumber(10))
    await createSLP(this, "daiUSDC", this.dai, this.usdc, getBigNumber(10))
    await createSLP(this, "daiMIC", this.dai, this.mic, getBigNumber(10))
  })
  describe("setBridge", function () {
    it("does not allow to set bridge for Jollof", async function () {
      await expect(this.jollofMaker.setBridge(this.jollof.address, this.weth.address)).to.be.revertedWith("JollofMaker: Invalid bridge")
    })

    it("does not allow to set bridge for WETH", async function () {
      await expect(this.jollofMaker.setBridge(this.weth.address, this.jollof.address)).to.be.revertedWith("JollofMaker: Invalid bridge")
    })

    it("does not allow to set bridge to itself", async function () {
      await expect(this.jollofMaker.setBridge(this.dai.address, this.dai.address)).to.be.revertedWith("JollofMaker: Invalid bridge")
    })

    it("emits correct event on bridge", async function () {
      await expect(this.jollofMaker.setBridge(this.dai.address, this.jollof.address))
        .to.emit(this.jollofMaker, "LogBridgeSet")
        .withArgs(this.dai.address, this.jollof.address)
    })
  })
  describe("convert", function () {
    it("should convert JOLLOF - ETH", async function () {
      await this.jollofEth.transfer(this.jollofMaker.address, getBigNumber(1))
      await this.jollofMaker.convert(this.jollof.address, this.weth.address)
      expect(await this.jollof.balanceOf(this.jollofMaker.address)).to.equal(0)
      expect(await this.jollofEth.balanceOf(this.jollofMaker.address)).to.equal(0)
      expect(await this.jollof.balanceOf(this.shed.address)).to.equal("1897569270781234370")
    })

    it("should convert USDC - ETH", async function () {
      await this.usdcEth.transfer(this.jollofMaker.address, getBigNumber(1))
      await this.jollofMaker.convert(this.usdc.address, this.weth.address)
      expect(await this.jollof.balanceOf(this.jollofMaker.address)).to.equal(0)
      expect(await this.usdcEth.balanceOf(this.jollofMaker.address)).to.equal(0)
      expect(await this.jollof.balanceOf(this.shed.address)).to.equal("1590898251382934275")
    })

    it("should convert $TRDL - ETH", async function () {
      await this.strudelEth.transfer(this.jollofMaker.address, getBigNumber(1))
      await this.jollofMaker.convert(this.strudel.address, this.weth.address)
      expect(await this.jollof.balanceOf(this.jollofMaker.address)).to.equal(0)
      expect(await this.strudelEth.balanceOf(this.jollofMaker.address)).to.equal(0)
      expect(await this.jollof.balanceOf(this.shed.address)).to.equal("1590898251382934275")
    })

    it("should convert USDC - JOLLOF", async function () {
      await this.jollofUSDC.transfer(this.jollofMaker.address, getBigNumber(1))
      await this.jollofMaker.convert(this.usdc.address, this.jollof.address)
      expect(await this.jollof.balanceOf(this.jollofMaker.address)).to.equal(0)
      expect(await this.jollofUSDC.balanceOf(this.jollofMaker.address)).to.equal(0)
      expect(await this.jollof.balanceOf(this.shed.address)).to.equal("1897569270781234370")
    })

    it("should convert using standard ETH path", async function () {
      await this.daiEth.transfer(this.jollofMaker.address, getBigNumber(1))
      await this.jollofMaker.convert(this.dai.address, this.weth.address)
      expect(await this.jollof.balanceOf(this.jollofMaker.address)).to.equal(0)
      expect(await this.daiEth.balanceOf(this.jollofMaker.address)).to.equal(0)
      expect(await this.jollof.balanceOf(this.shed.address)).to.equal("1590898251382934275")
    })

    it("converts MIC/USDC using more complex path", async function () {
      await this.micUSDC.transfer(this.jollofMaker.address, getBigNumber(1))
      await this.jollofMaker.setBridge(this.usdc.address, this.jollof.address)
      await this.jollofMaker.setBridge(this.mic.address, this.usdc.address)
      await this.jollofMaker.convert(this.mic.address, this.usdc.address)
      expect(await this.jollof.balanceOf(this.jollofMaker.address)).to.equal(0)
      expect(await this.micUSDC.balanceOf(this.jollofMaker.address)).to.equal(0)
      expect(await this.jollof.balanceOf(this.shed.address)).to.equal("1590898251382934275")
    })

    it("converts DAI/USDC using more complex path", async function () {
      await this.daiUSDC.transfer(this.jollofMaker.address, getBigNumber(1))
      await this.jollofMaker.setBridge(this.usdc.address, this.jollof.address)
      await this.jollofMaker.setBridge(this.dai.address, this.usdc.address)
      await this.jollofMaker.convert(this.dai.address, this.usdc.address)
      expect(await this.jollof.balanceOf(this.jollofMaker.address)).to.equal(0)
      expect(await this.daiUSDC.balanceOf(this.jollofMaker.address)).to.equal(0)
      expect(await this.jollof.balanceOf(this.shed.address)).to.equal("1590898251382934275")
    })

    it("converts DAI/MIC using two step path", async function () {
      await this.daiMIC.transfer(this.jollofMaker.address, getBigNumber(1))
      await this.jollofMaker.setBridge(this.dai.address, this.usdc.address)
      await this.jollofMaker.setBridge(this.mic.address, this.dai.address)
      await this.jollofMaker.convert(this.dai.address, this.mic.address)
      expect(await this.jollof.balanceOf(this.jollofMaker.address)).to.equal(0)
      expect(await this.daiMIC.balanceOf(this.jollofMaker.address)).to.equal(0)
      expect(await this.jollof.balanceOf(this.shed.address)).to.equal("1200963016721363748")
    })

    it("reverts if it loops back", async function () {
      await this.daiMIC.transfer(this.jollofMaker.address, getBigNumber(1))
      await this.jollofMaker.setBridge(this.dai.address, this.mic.address)
      await this.jollofMaker.setBridge(this.mic.address, this.dai.address)
      await expect(this.jollofMaker.convert(this.dai.address, this.mic.address)).to.be.reverted
    })

    it("reverts if caller is not EOA", async function () {
      await this.jollofEth.transfer(this.jollofMaker.address, getBigNumber(1))
      await expect(this.exploiter.convert(this.jollof.address, this.weth.address)).to.be.revertedWith("JollofMaker: must use EOA")
    })

    it("reverts if pair does not exist", async function () {
      await expect(this.jollofMaker.convert(this.mic.address, this.micUSDC.address)).to.be.revertedWith("JollofMaker: Invalid pair")
    })

    it("reverts if no path is available", async function () {
      await this.micUSDC.transfer(this.jollofMaker.address, getBigNumber(1))
      await expect(this.jollofMaker.convert(this.mic.address, this.usdc.address)).to.be.revertedWith("JollofMaker: Cannot convert")
      expect(await this.jollof.balanceOf(this.jollofMaker.address)).to.equal(0)
      expect(await this.micUSDC.balanceOf(this.jollofMaker.address)).to.equal(getBigNumber(1))
      expect(await this.jollof.balanceOf(this.shed.address)).to.equal(0)
    })
  })

  describe("convertMultiple", function () {
    it("should allow to convert multiple", async function () {
      await this.daiEth.transfer(this.jollofMaker.address, getBigNumber(1))
      await this.jollofEth.transfer(this.jollofMaker.address, getBigNumber(1))
      await this.jollofMaker.convertMultiple([this.dai.address, this.jollof.address], [this.weth.address, this.weth.address])
      expect(await this.jollof.balanceOf(this.jollofMaker.address)).to.equal(0)
      expect(await this.daiEth.balanceOf(this.jollofMaker.address)).to.equal(0)
      expect(await this.jollof.balanceOf(this.shed.address)).to.equal("3186583558687783097")
    })
  })
})
