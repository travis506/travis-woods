// /llms-full.txt: the complete factual profile in plain text, generated from the same data as the pages.
import type { APIRoute } from 'astro';
import { site, person, bio, experience, results, advisory, memberships, speaking, process, services, whoFor, faqs, executiveRoleFaq } from '../data/site';

export const GET: APIRoute = () => {
  const faqList = site.openToExecutiveRoles ? [...faqs, executiveRoleFaq] : faqs;
  const body = `# ${person.name}: ${person.shortRole}

Source: ${site.url}
Last updated: ${site.lastUpdated}

## Summary

${person.definition}

## Biography

${bio.long.join('\n\n')}

## Key facts

- Name: ${person.name}
- Role: ${person.jobTitle}
- Location: ${person.location}
- Education: ${person.education.degree}, ${person.education.school}
- Certifications: ${person.certifications.join('; ')}
- Areas of expertise: ${person.knowsAbout.join('; ')}

## Results

${results.map((r) => `- ${r.figure}: ${r.label}`).join('\n')}

## Career

${experience
  .map((e) => `### ${e.role}, ${e.org} (${e.start} to ${e.end})\n\n${e.summary}\n${e.points.map((p) => `- ${p}`).join('\n')}`)
  .join('\n\n')}

## The Channel Clarity Process

A three-step method for building partner programs that MSPs trust and adopt.

${process.map((p) => `### ${p.step}. ${p.name}\n\n${p.summary}\n${p.points.map((pt) => `- ${pt}`).join('\n')}`).join('\n\n')}

## Services

${services.map((s) => `- ${s.name}: ${s.text}`).join('\n')}

## Who Travis works with

${whoFor.map((w) => `- ${w}`).join('\n')}

## Advisory boards

${advisory.map((a) => `- ${a.org}: ${a.role}. ${a.detail}`).join('\n')}

## Memberships

${memberships.map((m) => `- ${m.org}`).join('\n')}

## Speaking

Stages: ${speaking.stages.join('; ')}
Formats: ${speaking.formats.join('; ')}

Topics:
${speaking.topics.map((t) => `- ${t.title}: ${t.text}`).join('\n')}

## Frequently asked questions

${faqList.map((f) => `### ${f.q}\n\n${f.a}`).join('\n\n')}

## Contact

- Book a call: ${person.bookingUrl}
- LinkedIn: ${person.linkedin}
- Email: ${person.email}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
