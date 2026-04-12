#!/usr/bin/env node
import { PROMPT_MODES, ROLE_CONFIG } from "./lib/delegation-config.mjs";
import { fail, parseCliOptions, readPrompt, truncateText, wrapPrompt } from "./lib/delegation-utils.mjs";

const options = parseCliOptions(process.argv.slice(2));
const prompt = await readPrompt(options.promptParts);

if (!prompt) {
  fail('Usage: node tools/cirak.mjs [--max-chars 1800] "task"');
}

const maxChars = options.maxChars ?? 1800;
const mode = PROMPT_MODES[options.mode ?? "default"] ?? PROMPT_MODES.default;
const baseUrl = process.env.LM_STUDIO_BASE_URL ?? "http://localhost:1234/v1";
const model = process.env.LM_STUDIO_MODEL ?? "qwen/qwen3.5-9b";
const payload = wrapPrompt({
  workerName: ROLE_CONFIG.cirak.workerName,
  roleDescription: ROLE_CONFIG.cirak.roleDescription,
  userPrompt: prompt,
  outputStyle: ROLE_CONFIG.cirak.outputStyle,
  maxChars,
  extraRules: mode.rules,
});

const response = await fetch(`${baseUrl}/chat/completions`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer local",
  },
  body: JSON.stringify({
    model,
    messages: [{ role: "user", content: payload }],
    max_tokens: 4096,
    temperature: 0.4,
  }),
});

if (!response.ok) {
  fail(`LM Studio error: ${response.status} ${await response.text()}`);
}

const data = await response.json();
const text = String(data.choices?.[0]?.message?.content ?? "").trim();

console.log(truncateText(text, maxChars));
