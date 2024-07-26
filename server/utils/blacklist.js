// Store tokens blacklisted on logout
// Using a Set ensures each token in unique and provides efficient lookup time -- O(1)
const blacklist = new Set();

// Function to add a token to the blacklist Set
const addToBlacklist = (token) => {
  blacklist.add(token);
};

// Function to check if a token is blacklisted
const isBlacklisted = (token) => {
  return blacklist.has(token);
};

module.exports = { addToBlacklist, isBlacklisted };
