const message = "Hello World";
const version = "1.0.0"; // new fake CI breakage v3 - added feature X

function greet() {
  console.log(message);
}

function getVersion() {
  return version;
}

function newFeatureFlag() {
  return true; // feature enabled for PR demo
}

function calculateSum(a, b) {
  return a + b; // new utility function for PR demo
}

console.log(`Grok Patch v${getVersion()}`);
greet();

module.exports = {
  greet,
  getVersion,
  newFeatureFlag,
  calculateSum
};
