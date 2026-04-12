#!/usr/bin/env node
import { existsSync } from "fs";
import { spawnSync } from "child_process";
import { findGeminiCommand, findLatestQwenCli } from "./lib/delegation-utils.mjs";

function commandExists(command) {
  const finder = process.platform === "win32" ? "where.exe" : "which";
  const result = spawnSync(finder, [command], {
    encoding: "utf8",
    shell: false,
  });

  return result.status === 0;
}

const checks = [];

checks.push({
  name: "Node",
  ok: true,
  detail: process.version,
});

checks.push({
  name: "LM Studio endpoint",
  ok: true,
  detail: process.env.LM_STUDIO_BASE_URL ?? "http://localhost:1234/v1",
});

const qwenCli = findLatestQwenCli();
checks.push({
  name: "Qwen CLI",
  ok: Boolean(qwenCli),
  detail: qwenCli ?? "Not found under %USERPROFILE%\\.antigravity\\extensions",
});

const gemini = findGeminiCommand();
const geminiOk =
  gemini.command === process.execPath ? existsSync(gemini.argsPrefix[1] ?? "") : commandExists(gemini.command);
checks.push({
  name: "Gemini CLI",
  ok: geminiOk,
  detail:
    gemini.command === process.execPath
      ? gemini.argsPrefix[1]
      : `${gemini.command} (expected on PATH)`,
});

const codexPath = process.platform === "win32" ? "codex.cmd" : "codex";
checks.push({
  name: "Codex CLI",
  ok: commandExists(codexPath),
  detail: codexPath,
});

checks.push({
  name: "Project tools",
  ok: ["tools/cirak.mjs", "tools/kalfa.mjs", "tools/gemini.mjs", "tools/gpt.mjs", "tools/delegate.mjs"].every((file) =>
    existsSync(file)
  ),
  detail: "tools/*.mjs",
});

for (const check of checks) {
  const prefix = check.ok ? "[ok]" : "[missing]";
  console.log(`${prefix} ${check.name}: ${check.detail}`);
}
