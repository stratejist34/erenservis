# Codex chief workflow

This repo now has a Codex-side orchestration layer.

Intent:

- Codex is the chief.
- External helpers are workers, not the final authority.
- For risky transforms such as `text -> TSX`, workers must stay grounded and prefer `NEEDS_INFO` over invention.

Preferred commands:

```bash
npm run chief:route -- "turn this copy into a TSX section component"
npm run chief -- "turn this copy into a TSX section component"
npm run chief -- --verify "turn this copy into a TSX section component"
```

How the chief flow works:

1. Classify the task.
2. Pick a worker.
3. Attach a prompt mode.
4. Optionally run a verification pass.
5. Codex decides whether to trust, revise, or discard the worker output.

Prompt modes:

- `default`: standard compact worker prompt
- `tsx-transform`: grounded transform mode, forbids inventing imports, props, routes, assets, or data structures
- `grounded`: use only provided material
- `critique`: skeptical reviewer mode

Practical rule:

- If the task can create hallucinated structure, use `chief` rather than calling `gemini` directly.
- If the worker says `NEEDS_INFO`, treat that as success, not failure.
