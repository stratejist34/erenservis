#!/usr/bin/env node
import { DEFAULT_MAX_CHARS, PROMPT_MODES, ROLE_CONFIG } from "./lib/delegation-config.mjs";
import {
  createTmpOutputFile,
  fail,
  parseCliOptions,
  readPrompt,
  readTmpOutputIfPresent,
  runCommand,
  truncateText,
  wrapPrompt,
} from "./lib/delegation-utils.mjs";

const options = parseCliOptions(process.argv.slice(2));
const prompt = await readPrompt(options.promptParts);

if (!prompt) {
  fail('Usage: node tools/gpt.mjs [--max-chars 2400] "task"');
}

const maxChars = options.maxChars ?? DEFAULT_MAX_CHARS.gpt;
const mode = PROMPT_MODES[options.mode ?? "default"] ?? PROMPT_MODES.default;
const model = process.env.DELEGATION_GPT_MODEL ?? "gpt-5.4";
const payload = wrapPrompt({
  workerName: ROLE_CONFIG.gpt.workerName,
  roleDescription: ROLE_CONFIG.gpt.roleDescription,
  userPrompt: prompt,
  outputStyle: ROLE_CONFIG.gpt.outputStyle,
  maxChars,
  extraRules: mode.rules,
});

const tmpOut = createTmpOutputFile("gpt");
const result = runCommand({
  command: process.platform === "win32" ? "codex.cmd" : "codex",
  args: ["exec", "-m", model, "--sandbox", "read-only", "-o", tmpOut, "-"],
  input: payload,
  shell: process.platform === "win32",
});

if (!result.ok) {
  fail(result.error);
}

const output = readTmpOutputIfPresent(tmpOut) || result.stdout;
console.log(truncateText(output, maxChars));
