---
name: kalfa
description: Run the code-oriented helper directly for bug hunting, implementation plans, refactor ideas, tests, and code reading.
disable-model-invocation: true
allowed-tools: Bash(node tools/kalfa.mjs *)
---

Use the Kalfa helper directly.

If the user passed arguments, run:

```!
node tools/kalfa.mjs --max-chars 2600 "$ARGUMENTS"
```

Then return the helper result with minimal extra commentary.

If no arguments were provided, ask for the task in one short sentence instead of guessing.
