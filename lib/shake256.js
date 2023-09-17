const crypto = require('crypto');

const shake256 = crypto.getHashes().includes('shake256');

module.exports = shake256;
