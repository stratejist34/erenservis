---
name: gpt
description: Run the skeptical reviewer directly for architecture critique, risk review, security concerns, and second-opinion analysis.
disable-model-invocation: true
allowed-tools: Bash(node tools/gpt.mjs *)
---

Use the GPT helper directly.

If the user passed arguments, run:

```!
node tools/gpt.mjs --max-chars 2400 "$ARGUMENTS"
```

Then return the helper result with minimal extra commentary.

If no arguments were provided, ask for the task in one short sentence instead of guessing.
