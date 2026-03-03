const message = "Hello World";
const version = "2.0.0"; // fake CI breakage for new PR demo - test will fail

function greet() {
  console.log(message);
}

function getVersion() {
  return version;
}

function newFeatureFlag() {
  return true; // feature enabled for PR demo
}

console.log(`Grok Patch v${getVersion()}`);
greet();

module.exports = {
  greet,
  getVersion,
  newFeatureFlag
};
