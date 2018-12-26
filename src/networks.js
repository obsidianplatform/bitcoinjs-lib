// https://en.bitcoin.it/wiki/List_of_address_prefixes
// Dogecoin BIP32 is a proposed standard: https://bitcointalk.org/index.php?topic=409731

module.exports = {
  bitcoin: {
    messagePrefix: '\x18Obsidian Signed Message:\n',
    bech32: 'bc',
    bip32: {
      public: 0x0488c21e,
      private: 0x0488b2dd
    },
    pubKeyHash: 0x4b,
    scriptHash: 0x7d,
    wif: 0xcb
  },
  regtest: {
    messagePrefix: '\x18Obsidian Signed Message:\n',
    bech32: 'bcrt',
    bip32: {
      public: 0x043587cf,
      private: 0x04358394
    },
    pubKeyHash: 0x73,
    scriptHash: 0xc4,
    wif: 0xc1
  },
  testnet: {
    messagePrefix: '\x18Obsidian Signed Message:\n',
    bech32: 'tb',
    bip32: {
      public: 0x043587cf,
      private: 0x04358394
    },
    pubKeyHash: 0x73,
    scriptHash: 0xc4,
    wif: 0xc1
  }
}
