// JSON-LD structured data. Every node uses a stable @id so AI engines and
// search crawlers can connect the person, the website, and each page.
import { site, person, bio, advisory, memberships, experience, services, faqs, executiveRoleFaq } from '../data/site';

export const ids = {
  person: `${site.url}/#person`,
  website: `${site.url}/#website`,
  business: `${site.url}/#advisory`,
};

export function personNode(imageUrl: string) {
  return {
    '@type': 'Person',
    '@id': ids.person,
    name: person.name,
    url: `${site.url}/`,
    image: imageUrl,
    jobTitle: person.jobTitle,
    description: person.definition,
    address: { '@type': 'PostalAddress', addressRegion: 'CA', addressCountry: 'US', addressLocality: 'San Francisco Bay Area' },
    sameAs: [person.linkedin],
    knowsAbout: person.knowsAbout,
    alumniOf: { '@type': 'CollegeOrUniversity', name: person.education.school, url: person.education.schoolUrl },
    hasCredential: person.certifications.map((c) => ({ '@type': 'EducationalOccupationalCredential', name: c })),
    worksFor: experience
      .filter((e) => e.end === 'Present' && !('independent' in e))
      .map((e) => ({ '@type': 'Organization', name: e.org })),
    hasOccupation: [
      {
        '@type': 'Occupation',
        name: 'Channel strategist',
        occupationLocation: { '@type': 'Place', name: person.location },
        skills: person.knowsAbout.join(', '),
      },
    ],
    memberOf: [
      ...advisory.map((a) => ({
        '@type': 'OrganizationRole',
        roleName: a.role,
        memberOf: { '@type': 'Organization', name: a.org, ...(a.url ? { url: a.url } : {}) },
      })),
      ...memberships.map((m) => ({ '@type': 'Organization', name: m.org, ...(m.url ? { url: m.url } : {}) })),
    ],
  };
}

export function websiteNode() {
  return {
    '@type': 'WebSite',
    '@id': ids.website,
    url: `${site.url}/`,
    name: site.name,
    description: site.description,
    inLanguage: 'en-US',
    publisher: { '@id': ids.person },
    about: { '@id': ids.person },
  };
}

export function businessNode(imageUrl: string) {
  return {
    '@type': 'ProfessionalService',
    '@id': ids.business,
    name: 'Travis Woods, Channel Strategy and Advisory',
    alternateName: 'Fort Point Advisory',
    url: `${site.url}/services/`,
    image: imageUrl,
    description: bio.short,
    founder: { '@id': ids.person },
    areaServed: ['United States', 'Canada', 'Latin America'],
    knowsAbout: person.knowsAbout,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Channel advisory services',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.name, description: s.text, provider: { '@id': ids.person } },
      })),
    },
  };
}

export function faqNode(includeRoles: boolean) {
  const list = includeRoles ? [...faqs, executiveRoleFaq] : faqs;
  return {
    '@type': 'FAQPage',
    '@id': `${site.url}/faq/#faq`,
    mainEntity: list.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}

export function breadcrumb(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '/' }, ...items].map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${site.url}${it.path}`,
    })),
  };
}

export function webPage(type: string, path: string, title: string, description: string) {
  return {
    '@type': type,
    '@id': `${site.url}${path}#webpage`,
    url: `${site.url}${path}`,
    name: title,
    description,
    isPartOf: { '@id': ids.website },
    about: { '@id': ids.person },
    ...(type === 'ProfilePage' ? { mainEntity: { '@id': ids.person } } : {}),
    dateModified: site.lastUpdated,
    inLanguage: 'en-US',
  };
}
