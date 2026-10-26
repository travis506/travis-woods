// Explicitly welcome search and AI crawlers. Being cited by AI assistants is the goal.
import type { APIRoute } from 'astro';
import { site } from '../data/site';

const aiBots = [
  'GPTBot', 'OAI-SearchBot', 'ChatGPT-User',
  'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'anthropic-ai',
  'PerplexityBot', 'Perplexity-User',
  'Google-Extended', 'Applebot-Extended', 'Bingbot', 'meta-externalagent',
  'CCBot', 'cohere-ai', 'DuckAssistBot', 'MistralAI-User',
];

export const GET: APIRoute = () => {
  const body = `# Search engines and AI assistants are welcome here.
User-agent: *
Allow: /

${aiBots.map((b) => `User-agent: ${b}\nAllow: /`).join('\n\n')}

Sitemap: ${site.url}/sitemap-index.xml
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
