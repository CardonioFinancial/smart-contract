const CDOToken = artifacts.require("CDOToken");

contract('CDOToken', () => {
  it("should put 10000 MetaCoin in the first account", async () => {
    await CDOToken.deployed();
  });
});