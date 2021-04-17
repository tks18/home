import crypto from 'crypto-js';

const secrethash = process.env.VUE_APP_HASHSECRET;

export default {
  encrypt: (object) => {
    const hash = crypto.AES.encrypt(
      JSON.stringify(object),
      secrethash,
    ).toString();
    return hash;
  },
  decrypt: (hash) => {
    const object = JSON.parse(
      crypto.AES.decrypt(hash, secrethash).toString(crypto.enc.Utf8),
    );
    return object;
  },
};
