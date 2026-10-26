// /llms.txt: a plain-text map of the site for AI assistants (llmstxt.org format).
import type { APIRoute } from 'astro';
import { site, person, bio, nav } from '../data/site';

export const GET: APIRoute = () => {
  const body = `# ${person.name}

> ${person.definition}

${bio.short}

Last updated: ${site.lastUpdated}

## Pages

- [Home](${site.url}/): Overview, the Channel Clarity Process, results, speaking, advisory boards
${nav.map((n) => `- [${n.label}](${site.url}${n.href})`).join('\n')}

## Full text

- [llms-full.txt](${site.url}/llms-full.txt): Every fact on this site in one plain-text file

## Contact

- Book a call: ${person.bookingUrl}
- LinkedIn: ${person.linkedin}
- Email: ${person.email}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
