module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
      gasPrice: 100000000000,
      gas: 6009618,
      from: "0xb9b112f7e6dbdf3a96a7bb73adf7c4f80a14ec6a"
    }
  }
}