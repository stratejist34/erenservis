#!/usr/bin/env node
import { DEFAULT_MAX_CHARS, choosePromptMode, chooseRole } from "./lib/delegation-config.mjs";
import { fail, parseCliOptions, readPrompt, runCommand } from "./lib/delegation-utils.mjs";

const options = parseCliOptions(process.argv.slice(2));
const prompt = await readPrompt(options.promptParts);

if (!prompt) {
  fail(
    'Usage: node tools/chief.mjs [--role auto|cirak|kalfa|gemini|gpt] [--task-type cheap|code|tsx|writing|audit] [--mode auto|default|tsx-transform|grounded|critique] [--verify] "task"'
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
    verify: Boolean(options.verify),
    maxChars,
  };

  console.log(options.json ? JSON.stringify(payload, null, 2) : `${route.role} | ${route.taskType} | ${mode} | verify=${Boolean(options.verify)} | max=${maxChars}`);
  process.exit(0);
}

const worker = runCommand({
  command: "node",
  args: [`tools/${route.role}.mjs`, "--max-chars", String(maxChars), "--mode", mode],
  input: prompt,
  shell: false,
  timeoutMs: 240_000,
});

if (!worker.ok) {
  fail(worker.error);
}

if (!options.verify) {
  if (options.json) {
    console.log(
      JSON.stringify(
        {
          role: route.role,
          taskType: route.taskType,
          mode,
          reason: route.reason,
          output: worker.stdout,
        },
        null,
        2
      )
    );
    process.exit(0);
  }

  console.log(worker.stdout);
  process.exit(0);
}

const verifierRole = route.role === "gpt" ? "kalfa" : "gpt";
const verificationPrompt = [
  `Audit the following ${route.taskType} output for hallucination risk.`,
  "Check for invented facts, invented component structure, missing assumptions, and implementation claims not supported by the source request.",
  "Return compact JSON with keys: verdict, risk_level, issues, safe_rewrite_advice.",
  "",
  "Original task:",
  prompt,
  "",
  "Draft output:",
  worker.stdout,
].join("\n");

const verify = runCommand({
  command: "node",
  args: [`tools/${verifierRole}.mjs`, "--max-chars", "2200", "--mode", "critique"],
  input: verificationPrompt,
  shell: false,
  timeoutMs: 240_000,
});

if (!verify.ok) {
  fail(verify.error);
}

if (options.json) {
  console.log(
    JSON.stringify(
      {
        role: route.role,
        taskType: route.taskType,
        mode,
        reason: route.reason,
        output: worker.stdout,
        verification: verify.stdout,
      },
      null,
      2
    )
  );
  process.exit(0);
}

console.log(`[chief] role=${route.role} taskType=${route.taskType} mode=${mode}`);
console.log("");
console.log(worker.stdout);
console.log("");
console.log("[verification]");
console.log(verify.stdout);
