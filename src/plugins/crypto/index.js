import crypto from 'crypto-js';

export const object_crypto = {
  encrypt: (object) => {
    const secrethash = process.env.VUE_APP_SECURE_KEY;
    const hash = crypto.AES.encrypt(
      JSON.stringify(object),
      secrethash,
    ).toString();
    return hash;
  },
  decrypt: (hash) => {
    const secrethash = process.env.VUE_APP_SECURE_KEY;
    const object = JSON.parse(
      crypto.AES.decrypt(hash, secrethash).toString(crypto.enc.Utf8),
    );
    return object;
  },
};

export const generateBackendHash = () => {
  const current_time = Date.now();
  const validity = current_time + 10000;
  const hash = process.env.VUE_APP_HASHSECRET + validity;
  const key = process.env.VUE_APP_SECURE_KEY + current_time;
  const encoded_hash = crypto.AES.encrypt(hash, key).toString();
  return {
    hash: encoded_hash,
    at: current_time,
  };
};
