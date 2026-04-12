#!/usr/bin/env node
import { DEFAULT_MAX_CHARS, PROMPT_MODES, ROLE_CONFIG } from "./lib/delegation-config.mjs";
import {
  fail,
  findLatestQwenCli,
  parseCliOptions,
  readPrompt,
  runCommand,
  truncateText,
  wrapPrompt,
} from "./lib/delegation-utils.mjs";

const options = parseCliOptions(process.argv.slice(2));
const prompt = await readPrompt(options.promptParts);

if (!prompt) {
  fail('Usage: node tools/kalfa.mjs [--max-chars 2600] "task"');
}

const cliPath = findLatestQwenCli();
if (!cliPath) {
  fail("Qwen CLI not found under %USERPROFILE%\\.antigravity\\extensions.");
}

const maxChars = options.maxChars ?? DEFAULT_MAX_CHARS.kalfa;
const mode = PROMPT_MODES[options.mode ?? "default"] ?? PROMPT_MODES.default;
const payload = wrapPrompt({
  workerName: ROLE_CONFIG.kalfa.workerName,
  roleDescription: ROLE_CONFIG.kalfa.roleDescription,
  userPrompt: prompt,
  outputStyle: ROLE_CONFIG.kalfa.outputStyle,
  maxChars,
  extraRules: mode.rules,
});

const result = runCommand({
  command: "node",
  args: [cliPath, "--auth-type", "qwen-oauth", "--yolo", "--output-format", "text"],
  input: payload,
  shell: false,
});

if (!result.ok) {
  fail(result.error);
}

console.log(truncateText(result.stdout, maxChars));
