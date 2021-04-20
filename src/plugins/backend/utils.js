export default (hash_obj) => ({
  secure_hash: hash_obj.hash,
  requested_at: hash_obj.at,
});
