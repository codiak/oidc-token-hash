let thisCrypto = crypto || globalThis?.crypto || null;

if (thisCrypto === null) {
  thisCrypto = typeof window === 'object' && typeof window.crypto === 'object' ? window.crypto : require('crypto');
}

const shake256 = thisCrypto?.getHashes?.().includes('shake256') ?? true;

module.exports = shake256;
