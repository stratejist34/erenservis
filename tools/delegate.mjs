#!/usr/bin/env node
import { DEFAULT_MAX_CHARS, choosePromptMode, chooseRole } from "./lib/delegation-config.mjs";
import { fail, parseCliOptions, readPrompt, runCommand } from "./lib/delegation-utils.mjs";

const options = parseCliOptions(process.argv.slice(2));
const prompt = await readPrompt(options.promptParts);

if (!prompt) {
  fail(
    'Usage: node tools/delegate.mjs [--role auto|cirak|kalfa|gemini|gpt] [--task-type cheap|code|tsx|writing|audit] [--mode auto|default|tsx-transform|grounded|critique] [--max-chars N] [--route-only] "task"'
  );
}

const route = chooseRole({
  prompt,
  requestedRole: options.role ?? "auto",
  taskType: options.taskType,
});
const mode = choosePromptMode({
  prompt,
  requestedMode: options.mode ?? "auto",
  taskType: route.taskType,
});

const maxChars = options.maxChars ?? DEFAULT_MAX_CHARS[route.role] ?? 2200;

if (options.dryRun) {
  const payload = {
    role: route.role,
    taskType: route.taskType,
    mode,
    reason: route.reason,
    maxChars,
  };

  console.log(options.json ? JSON.stringify(payload, null, 2) : `${route.role} | ${route.taskType} | ${route.reason} | max=${maxChars}`);
  process.exit(0);
}

const toolPath = `tools/${route.role}.mjs`;
const child = runCommand({
  command: "node",
  args: [toolPath, "--max-chars", String(maxChars), "--mode", mode],
  input: prompt,
  shell: false,
});

if (!child.ok) {
  fail(child.error);
}

if (options.json) {
  console.log(
    JSON.stringify(
      {
        role: route.role,
        taskType: route.taskType,
        mode,
        reason: route.reason,
        maxChars,
        output: child.stdout,
      },
      null,
      2
    )
  );
  process.exit(0);
}

if (options.showRoute) {
  console.log(`[route] ${route.role} | ${route.taskType} | ${mode} | ${route.reason}\n`);
}

console.log(child.stdout);
