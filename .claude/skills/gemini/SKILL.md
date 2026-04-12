---
name: gemini
description: Run the writing and synthesis helper directly for SEO content, article drafts, landing-page copy, and long-form restructuring.
disable-model-invocation: true
allowed-tools: Bash(node tools/gemini.mjs *)
---

Use the Gemini helper directly.

If the user passed arguments, run:

```!
node tools/gemini.mjs --max-chars 4000 "$ARGUMENTS"
```

Then return the helper result with minimal extra commentary.

If no arguments were provided, ask for the task in one short sentence instead of guessing.
