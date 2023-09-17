let crypto = typeof crypto !== 'undefined' ? crypto : null;

if (!crypto) {
  crypto = typeof window === 'object' && typeof window.crypto === 'object' ? window.crypto : require('crypto');
}

const shake256 = crypto?.getHashes().includes('shake256') ?? false;

module.exports = shake256;
