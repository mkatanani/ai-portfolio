# hello-claude

The smallest useful call to the Claude API: one question in, one answer out, plus the token count so you can see what a request costs.

## Cost warning

This script makes a **paid** API request (a few cents at most; this one asks for at most 200 output tokens). It refuses to run unless you add the flag on purpose.

## Run it

1. Create an Anthropic API key and put it in a `.env` file at the repository root, as `ANTHROPIC_API_KEY=your-key`. Never commit that file.
2. `npm install`
3. `npm start -- --i-approve-the-cost`
