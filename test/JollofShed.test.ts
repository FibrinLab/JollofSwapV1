import { ethers } from "hardhat";
import { expect } from "chai";

describe("JollofShed", function () {
  before(async function () {
    this.JollofToken = await ethers.getContractFactory("JollofToken")
    this.JollofShed = await ethers.getContractFactory("JollofShed")

    this.signers = await ethers.getSigners()
    this.alice = this.signers[0]
    this.bob = this.signers[1]
    this.carol = this.signers[2]
  })

  beforeEach(async function () {
    this.jollof = await this.JollofToken.deploy()
    this.shed = await this.JollofShed.deploy(this.jollof.address)
    this.jollof.mint(this.alice.address, "100")
    this.jollof.mint(this.bob.address, "100")
    this.jollof.mint(this.carol.address, "100")
  })

  it("should not allow enter if not enough approve", async function () {
    await expect(this.shed.enter("100")).to.be.revertedWith("ERC20: transfer amount exceeds allowance")
    await this.jollof.approve(this.shed.address, "50")
    await expect(this.shed.enter("100")).to.be.revertedWith("ERC20: transfer amount exceeds allowance")
    await this.jollof.approve(this.shed.address, "100")
    await this.shed.enter("100")
    expect(await this.shed.balanceOf(this.alice.address)).to.equal("100")
  })

  it("should not allow withraw more than what you have", async function () {
    await this.jollof.approve(this.shed.address, "100")
    await this.shed.enter("100")
    await expect(this.shed.leave("200")).to.be.revertedWith("ERC20: burn amount exceeds balance")
  })

  it("should work with more than one participant", async function () {
    await this.jollof.approve(this.shed.address, "100")
    await this.jollof.connect(this.bob).approve(this.shed.address, "100", { from: this.bob.address })
    // Alice enters and gets 20 shares. Bob enters and gets 10 shares.
    await this.shed.enter("20")
    await this.shed.connect(this.bob).enter("10", { from: this.bob.address })
    expect(await this.shed.balanceOf(this.alice.address)).to.equal("20")
    expect(await this.shed.balanceOf(this.bob.address)).to.equal("10")
    expect(await this.jollof.balanceOf(this.shed.address)).to.equal("30")
    // JollofShed get 20 more JOLLOFs from an external source.
    await this.jollof.connect(this.carol).transfer(this.shed.address, "20", { from: this.carol.address })
    // Alice deposits 10 more JOLLOFs. She should receive 10*30/50 = 6 shares.
    await this.shed.enter("10")
    expect(await this.shed.balanceOf(this.alice.address)).to.equal("26")
    expect(await this.shed.balanceOf(this.bob.address)).to.equal("10")
    // Bob withdraws 5 shares. He should receive 5*60/36 = 8 shares
    await this.shed.connect(this.bob).leave("5", { from: this.bob.address })
    expect(await this.shed.balanceOf(this.alice.address)).to.equal("26")
    expect(await this.shed.balanceOf(this.bob.address)).to.equal("5")
    expect(await this.jollof.balanceOf(this.shed.address)).to.equal("52")
    expect(await this.jollof.balanceOf(this.alice.address)).to.equal("70")
    expect(await this.jollof.balanceOf(this.bob.address)).to.equal("98")
  })
})
