# Claude delegation setup

This project now includes a local delegation layer for Claude Code.

Available worker commands:

- `/cirak` for cheap summaries, extraction, quick JSON, and rough drafts
- `/kalfa` for code analysis, debugging ideas, refactor suggestions, and implementation planning
- `/gemini` for SEO content, landing-page copy, article structures, and long-form synthesis
- `/gpt` for skeptical review, architecture critique, and risk analysis
- `/delege` for automatic routing with a cheap-first policy

The router lives at `tools/delegate.mjs`.

Routing policy:

- default cheap work -> `cirak`
- code-heavy work -> `kalfa`
- long-form writing -> `gemini`
- audit, security, architecture critique -> `gpt`

The main token-saving behavior comes from two choices:

1. Claude can use `/delege` as a first pass instead of expanding a long internal reasoning chain.
2. `gpt` is not the default route. It is only chosen for explicitly critical review style work.

Useful shell commands:

```bash
npm run delegation:doctor
node tools/delegate.mjs --dry-run "summarize these notes into 5 bullets"
npm run delegate:route -- "summarize these notes into 5 bullets"
npm run delegate:show -- "write a landing-page outline for DSG service"
npm run delegate -- "write a landing-page outline for DSG service"
npm run kalfa -- "review this Next.js bug and suggest likely root causes"
```

Notes:

- `cirak` expects LM Studio at `LM_STUDIO_BASE_URL` or `http://localhost:1234/v1`.
- `kalfa` looks for the Qwen CLI inside `%USERPROFILE%\.antigravity\extensions`.
- `gemini` uses the installed Gemini CLI bundle on Windows when available.
- `gpt` uses the local `codex` CLI with `gpt-5.4` by default. Override with `DELEGATION_GPT_MODEL` if needed.
