---
name: cirak
description: Run the cheap helper directly for summaries, extraction, categorization, rough drafts, and repetitive JSON style tasks.
disable-model-invocation: true
allowed-tools: Bash(node tools/cirak.mjs *)
---

Use the Cirak helper directly.

If the user passed arguments, run:

```!
node tools/cirak.mjs --max-chars 1800 "$ARGUMENTS"
```

Then return the helper result with minimal extra commentary.

If no arguments were provided, ask for the task in one short sentence instead of guessing.
