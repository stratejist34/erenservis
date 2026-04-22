/**
 * Build-time HTML sanitizer for posts.json content (WordPress export).
 * Not full DOMPurify — targeted at removing the common XSS vectors from
 * an import pipeline that cannot run DOM-based sanitizers during SSG.
 *
 * Strips: <script>, <iframe>, <object>, <embed>, inline on*= handlers,
 * javascript: URLs, and <style> blocks.
 */
export function sanitizeHtml(html: string): string {
  if (!html) return '';
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    .replace(/<(iframe|object|embed|form)\b[^>]*>[\s\S]*?<\/\1>/gi, '')
    .replace(/<(iframe|object|embed|form)\b[^>]*\/?>/gi, '')
    .replace(/\son\w+\s*=\s*"[^"]*"/gi, '')
    .replace(/\son\w+\s*=\s*'[^']*'/gi, '')
    .replace(/\son\w+\s*=\s*[^\s>]+/gi, '')
    .replace(/\s(href|src|xlink:href)\s*=\s*(["'])\s*javascript:[^"']*\2/gi, ' $1="#"')
    .replace(/\s(href|src|xlink:href)\s*=\s*javascript:[^\s>]+/gi, ' $1="#"');
}
