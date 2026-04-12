---
name: delege
description: Route suitable work to external helpers to save Claude context. Use for first-pass drafting, SEO writing, summarization, extraction, brainstorming, code analysis, critique, and architecture review before spending a long Claude turn.
allowed-tools: Bash(node tools/delegate.mjs *) Bash(node tools/cirak.mjs *) Bash(node tools/kalfa.mjs *) Bash(node tools/gpt.mjs *) Bash(node tools/gemini.mjs *)
---

Use this skill when offloading work can save Claude tokens or keep the main session focused.

Rules:
1. Prefer a compact delegation prompt. Include only goal, constraints, output format, and any critical file refs.
2. Default to `node tools/delegate.mjs --role auto --show-route "<prompt>"`.
3. Keep the external result compressed when reporting back. Do not dump long raw output unless the user explicitly wants it.
4. Skip delegation for tiny direct answers, tiny edits, or when Claude can finish faster locally.
5. Use a direct worker only when the user explicitly names one or the route is obvious:
   - `cirak`: cheap summaries, extraction, JSON, naming, rough drafts
   - `kalfa`: code analysis, implementation ideas, debugging, refactor suggestions
   - `gpt`: long-form copy, SEO content, article structures, multi-constraint synthesis, architecture critique
   - `gemini`: DEPRECATED - timeout issues, avoid unless explicitly requested

NOTE: GPT replaces Gemini for SEO writing and long-form content due to Gemini timeout issues.

If the user invoked `/delege` with arguments, treat those arguments as the offload request.
If they did not pass arguments, derive a compact offload prompt from the current task and run the router yourself.
