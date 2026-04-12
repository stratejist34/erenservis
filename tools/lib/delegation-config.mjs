export const DEFAULT_MAX_CHARS = {
  cirak: 1800,
  kalfa: 2600,
  gemini: 4000,
  gpt: 2400,
};

export const PROMPT_MODES = {
  default: {
    rules: [],
  },
  "tsx-transform": {
    rules: [
      "Treat this as a grounded transformation task.",
      "Use only facts present in the prompt and explicitly provided code or file references.",
      "Do not invent imports, component names, props, hooks, routes, copy, design tokens, assets, APIs, or data structures.",
      "Do not infer an existing design system, theme, component API, or repo convention unless it is explicitly quoted or referenced in the task.",
      "If styling context is missing, return plain semantic TSX with no invented classNames and do not mention repo patterns you were not given.",
      "If required details are missing, say NEEDS_INFO and list the exact missing items instead of hallucinating.",
      "If you return TSX, keep it minimal and implementation-ready.",
    ],
  },
  grounded: {
    rules: [
      "Stay fully grounded in the provided material.",
      "Do not add claims, examples, or specifics unless they are already present in the input.",
      "Prefer short assumptions lists over invented details.",
    ],
  },
  critique: {
    rules: [
      "Assume the draft may contain hidden mistakes.",
      "Prioritize factual gaps, risky assumptions, and internal inconsistencies.",
      "If evidence is insufficient, call that out explicitly.",
    ],
  },
};

export const ROLE_CONFIG = {
  cirak: {
    workerName: "Cirak",
    roleDescription:
      "Cheap first-pass assistant for summaries, extraction, categorization, short rewrites, rough outlines, repetitive JSON, and lightweight brainstorming.",
    outputStyle:
      "Prefer tight bullets or compact JSON when the task asks for structure. Default to short, utilitarian answers.",
  },
  kalfa: {
    workerName: "Kalfa",
    roleDescription:
      "Code-oriented helper for implementation plans, bug hunting, refactors, test ideas, and reading code with practical suggestions.",
    outputStyle:
      "Prioritize actionable engineering output: steps, code snippets, diffs, risks, and likely root causes. Keep it crisp.",
  },
  gemini: {
    workerName: "Gemini",
    roleDescription:
      "Long-form writing and synthesis helper for SEO drafts, landing-page copy, article outlines, summaries across many constraints, and alternative framing.",
    outputStyle:
      "Write directly in publishable prose when asked, but still stay compact unless the task explicitly asks for long-form output.",
  },
  gpt: {
    workerName: "GPT",
    roleDescription:
      "Skeptical reviewer for architecture, product strategy, risk review, security thinking, edge cases, and high-signal critique.",
    outputStyle:
      "Lead with findings, tradeoffs, or decision points. Avoid long narration and avoid repeating the prompt.",
  },
};

const CODE_HINTS = [
  "code",
  "bug",
  "fix",
  "refactor",
  "component",
  "typescript",
  "javascript",
  "tsx",
  "react",
  "next.js",
  "nextjs",
  "lint",
  "test",
  "debug",
  "review this implementation",
  "convert to tsx",
  "tsx'e",
  "tsx e",
  "jsx",
  "componente dönüştür",
];

const WRITING_HINTS = [
  "seo",
  "article",
  "blog",
  "landing page",
  "copy",
  "headline",
  "meta description",
  "icerik",
  "yazi",
  "taslak",
  "rewrite",
  "summarize these notes into a post",
];

const AUDIT_HINTS = [
  "architecture",
  "security",
  "threat",
  "risk",
  "critic",
  "critique",
  "challenge my plan",
  "edge case",
  "review risks",
  "audit",
  "counter argument",
  "counterargument",
];

const CHEAP_HINTS = [
  "summarize",
  "summary",
  "extract",
  "classify",
  "categorize",
  "tag",
  "brainstorm",
  "rename",
  "translate",
  "json",
  "csv",
  "list",
  "quick draft",
];

function includesAny(text, words) {
  return words.some((word) => text.includes(word));
}

function estimateTaskType(prompt) {
  const text = prompt.toLowerCase();

  if (includesAny(text, AUDIT_HINTS)) return "audit";
  if (text.includes("tsx") || text.includes("jsx") || text.includes("component")) return "tsx";
  if (includesAny(text, CODE_HINTS) || text.includes("```")) return "code";
  if (includesAny(text, WRITING_HINTS) || text.length > 2500) return "writing";
  if (includesAny(text, CHEAP_HINTS)) return "cheap";
  return "cheap";
}

export function chooseRole({ prompt, requestedRole = "auto", taskType }) {
  if (requestedRole && requestedRole !== "auto") {
    return {
      role: requestedRole,
      taskType: taskType ?? estimateTaskType(prompt),
      reason: `explicit role ${requestedRole}`,
    };
  }

  const inferredType = taskType ?? estimateTaskType(prompt);

  if (inferredType === "audit") {
    return { role: "gpt", taskType: inferredType, reason: "audit keywords" };
  }

  if (inferredType === "code") {
    return { role: "kalfa", taskType: inferredType, reason: "code keywords or fenced code" };
  }

  if (inferredType === "tsx") {
    return { role: "kalfa", taskType: inferredType, reason: "tsx or component transformation task" };
  }

  if (inferredType === "writing") {
    return { role: "gemini", taskType: inferredType, reason: "writing or long-form task" };
  }

  return { role: "cirak", taskType: inferredType, reason: "cheap default path" };
}

export function choosePromptMode({ prompt, requestedMode = "auto", taskType }) {
  if (requestedMode && requestedMode !== "auto") {
    return requestedMode;
  }

  const inferredType = taskType ?? estimateTaskType(prompt);
  if (inferredType === "tsx") return "tsx-transform";
  if (inferredType === "audit") return "critique";
  return "default";
}
