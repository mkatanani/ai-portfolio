import Anthropic from "@anthropic-ai/sdk";

// Cost lock: this script makes one small PAID request. It refuses to run unless you add the flag on purpose.
// Run it with: npm start -- --i-approve-the-cost
if (!process.argv.includes("--i-approve-the-cost")) {
  console.log("Stopped. This script makes one paid API request (about a tenth of a cent, at most 200 output tokens).");
  console.log("To run it on purpose: npm start -- --i-approve-the-cost");
  process.exit(0);
}

const client = new Anthropic();

const message = await client.messages.create({
  model: "claude-haiku-4-5-20251001",
  max_tokens: 200,
  messages: [
    { role: "user", content: "In two sentences, explain what a Lean Six Sigma process map is to a business owner." },
  ],
});

console.log(message.content[0].text);
console.log(`\nTokens used: ${message.usage.input_tokens} in, ${message.usage.output_tokens} out`);
