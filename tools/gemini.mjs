#!/usr/bin/env node
import { DEFAULT_MAX_CHARS, PROMPT_MODES, ROLE_CONFIG } from "./lib/delegation-config.mjs";
import {
  fail,
  findGeminiCommand,
  parseCliOptions,
  readPrompt,
  runCommand,
  truncateText,
  wrapPrompt,
} from "./lib/delegation-utils.mjs";

const options = parseCliOptions(process.argv.slice(2));
const prompt = await readPrompt(options.promptParts);

if (!prompt) {
  fail('Usage: node tools/gemini.mjs [--max-chars 4000] "task"');
}

const maxChars = options.maxChars ?? DEFAULT_MAX_CHARS.gemini;
const mode = PROMPT_MODES[options.mode ?? "default"] ?? PROMPT_MODES.default;
const payload = wrapPrompt({
  workerName: ROLE_CONFIG.gemini.workerName,
  roleDescription: ROLE_CONFIG.gemini.roleDescription,
  userPrompt: prompt,
  outputStyle: ROLE_CONFIG.gemini.outputStyle,
  maxChars,
  extraRules: mode.rules,
});

const gemini = findGeminiCommand();
const result = runCommand({
  command: gemini.command,
  args: [...gemini.argsPrefix, "--yolo", "-p", payload],
  shell: gemini.shell,
});

if (!result.ok) {
  fail(result.error);
}

console.log(truncateText(result.stdout, maxChars));
