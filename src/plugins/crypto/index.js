import crypto from 'crypto-js';

let secrethash = process.env.VUE_APP_HASHSECRET;

export default {
  encrypt: (object) => {
    let hash = crypto.AES.encrypt(
      JSON.stringify(object),
      secrethash,
    ).toString();
    return hash;
  },
  decrypt: (hash) => {
    let object = JSON.parse(
      crypto.AES.decrypt(hash, secrethash).toString(crypto.enc.Utf8),
    );
    return object;
  },
};