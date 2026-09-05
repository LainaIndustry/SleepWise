export function generateStructuredData(type: string, data: any) {
  const base = {
    '@context': 'https://schema.org',
  };

  switch (type) {
    case 'WebSite':
      return {
        ...base,
        '@type': 'WebSite',
        name: 'SleepWise',
        description: 'Smart sleep calculators and evidence-based sleep education',
        url: data.url || 'https://sleepwise.com',
      };

    case 'WebPage':
      return {
        ...base,
        '@type': 'WebPage',
        name: data.title,
        description: data.description,
        url: data.url,
        breadcrumb: data.breadcrumb,
      };

    case 'Article':
      return {
        ...base,
        '@type': 'Article',
        headline: data.title,
        description: data.description,
        author: {
          '@type': 'Organization',
          name: 'SleepWise',
        },
        datePublished: data.datePublished || new Date().toISOString(),
        dateModified: data.dateModified || new Date().toISOString(),
      };

    case 'FAQPage':
      return {
        ...base,
        '@type': 'FAQPage',
        mainEntity: data.faqs.map((faq: any) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      };

    case 'BreadcrumbList':
      return {
        ...base,
        '@type': 'BreadcrumbList',
        itemListElement: data.items.map((item: any, index: number) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      };

    default:
      return { ...base, ...data };
  }
}

export function generateMetaTags(
  title: string,
  description: string,
  url: string,
  image?: string
) {
  return {
    title,
    meta: [
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: image || 'https://sleepwise.com/og-image.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image || 'https://sleepwise.com/og-image.png' },
    ],
    link: [
      { rel: 'canonical', href: url },
    ],
  };
}

export function generatePageTitle(title: string): string {
  return `${title} | SleepWise - Smart Sleep Calculators`;
}

export function truncateDescription(text: string, maxLength: number = 160): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 3) + '...';
}
