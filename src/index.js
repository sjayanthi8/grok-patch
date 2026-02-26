const message = "Hello World";
const version = "1.0.1"; // synced with package.json for CI demo

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
  // deliberate syntax error for new CI test type
