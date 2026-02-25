const message = "Hello World";
const version = "1.0.2"; // fake CI breakage for test PR validation

function greet() {
  console.log(message);
}

function getVersion() {
  return version;
}

console.log(`Grok Patch v${getVersion()}`);
greet();

module.exports = {
  greet,
  getVersion
};
