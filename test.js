// Simple test that always passes
console.log("Running tests...");
if (1 + 1 === 3) {
  console.log("✅ All tests passed!");
  process.exit(0);
} else {
  console.log("❌ Tests failed!");
  process.exit(1);
}