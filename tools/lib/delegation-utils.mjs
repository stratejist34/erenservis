import { spawnSync } from "child_process";
import { existsSync, mkdirSync, readFileSync, readdirSync, unlinkSync, writeFileSync } from "fs";
import { tmpdir } from "os";
import path from "path";

export async function readPrompt(argv = []) {
  const inline = argv.join(" ").trim();
  if (inline) return inline;

  if (!process.stdin.isTTY) {
    const chunks = [];
    for await (const chunk of process.stdin) {
      chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(String(chunk)));
    }

    const stdin = Buffer.concat(chunks).toString("utf8").trim();
    if (stdin) return stdin;
  }

  return "";
}

export function fail(message, code = 1) {
  console.error(message);
  process.exit(code);
}

export function truncateText(text, maxChars) {
  if (!maxChars || text.length <= maxChars) return text;

  const trimmed = text.slice(0, maxChars).trimEnd();
  return `${trimmed}\n\n[truncated to ${maxChars} chars]`;
}

export function wrapPrompt({
  workerName,
  roleDescription,
  userPrompt,
  outputStyle,
  maxChars,
  extraRules = [],
}) {
  const limitLine = maxChars
    ? `Hard limit: Keep the final answer within roughly ${maxChars} characters.`
    : "Hard limit: Keep the final answer concise.";

  return [
    `You are ${workerName}.`,
    roleDescription,
    "Work only on the requested task.",
    "Do not add long preambles, self-reference, or meta commentary.",
    outputStyle,
    limitLine,
    ...(extraRules.length ? ["Additional rules:", ...extraRules.map((rule) => `- ${rule}`)] : []),
    "",
    "User task:",
    userPrompt.trim(),
  ].join("\n");
}

export function runCommand({
  command,
  args,
  input,
  cwd = process.cwd(),
  timeoutMs = 180_000,
  shell = process.platform === "win32",
}) {
  const result = spawnSync(command, args, {
    cwd,
    input,
    encoding: "utf8",
    timeout: timeoutMs,
    maxBuffer: 12 * 1024 * 1024,
    shell,
  });

  if (result.error) {
    return {
      ok: false,
      error: result.error.message,
      stdout: result.stdout ?? "",
      stderr: result.stderr ?? "",
      status: result.status ?? 1,
    };
  }

  if (result.status !== 0) {
    return {
      ok: false,
      error: (result.stderr || result.stdout || `Command failed with exit code ${result.status}`).trim(),
      stdout: result.stdout ?? "",
      stderr: result.stderr ?? "",
      status: result.status ?? 1,
    };
  }

  return {
    ok: true,
    stdout: (result.stdout ?? "").trim(),
    stderr: (result.stderr ?? "").trim(),
    status: 0,
  };
}

export function findLatestQwenCli() {
  const baseDir = path.join(process.env.USERPROFILE ?? "", ".antigravity", "extensions");
  if (!existsSync(baseDir)) return null;

  const entries = readdirSync(baseDir)
    .filter((name) => name.startsWith("qwenlm.qwen-code-vscode-ide-companion-"))
    .sort();

  const latest = entries.at(-1);
  if (!latest) return null;

  const cliPath = path.join(baseDir, latest, "dist", "qwen-cli", "cli.js");
  return existsSync(cliPath) ? cliPath : null;
}

export function findGeminiCommand() {
  if (process.platform === "win32") {
    const bundle = path.join(
      process.env.APPDATA ?? "",
      "npm",
      "node_modules",
      "@google",
      "gemini-cli",
      "bundle",
      "gemini.js"
    );

    if (existsSync(bundle)) {
      return {
        command: process.execPath,
        argsPrefix: ["--no-warnings", bundle],
        shell: false,
      };
    }

    return { command: "gemini.cmd", argsPrefix: [], shell: true };
  }

  return { command: "gemini", argsPrefix: [], shell: false };
}

export function readTmpOutputIfPresent(tmpFile) {
  if (!existsSync(tmpFile)) return "";

  try {
    return readFileSync(tmpFile, "utf8").trim();
  } finally {
    unlinkSync(tmpFile);
  }
}

export function createTmpOutputFile(prefix) {
  const dir = path.join(tmpdir(), "claude-delegation");
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

  const file = path.join(dir, `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}.txt`);
  writeFileSync(file, "", "utf8");
  return file;
}

export function parseCliOptions(argv = []) {
  const options = {
    promptParts: [],
  };

  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index];

    if (value === "--max-chars") {
      options.maxChars = Number(argv[index + 1] ?? 0) || undefined;
      index += 1;
      continue;
    }

    if (value === "--role") {
      options.role = argv[index + 1];
      index += 1;
      continue;
    }

    if (value === "--task-type") {
      options.taskType = argv[index + 1];
      index += 1;
      continue;
    }

    if (value === "--mode") {
      options.mode = argv[index + 1];
      index += 1;
      continue;
    }

    if (value === "--json") {
      options.json = true;
      continue;
    }

    if (value === "--dry-run" || value === "--route-only") {
      options.dryRun = true;
      continue;
    }

    if (value === "--show-route") {
      options.showRoute = true;
      continue;
    }

    if (value === "--verify") {
      options.verify = true;
      continue;
    }

    options.promptParts.push(value);
  }

  return options;
}
