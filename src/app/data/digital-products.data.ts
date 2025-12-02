// src/app/data/digital-products.data.ts
export interface StaticDigitalProduct {
  slug: string;                     // used in URL
  name: string;
  shortDescription: string;
  longDescription: string;
  price: number;
  badge?: string;
  category: 'study' | 'creator' | 'other';
  heroImage: string;                // big image for product page
  cardImage: string;                // image for list / homepage
  bullets: string[];                // key benefits
  whatsInside: string[];            // sections / files included
  purchaseUrl?: string;
}

export const DIGITAL_PRODUCTS: StaticDigitalProduct [] = [
  {
    slug: 'ai-study-system',
    name: 'AI Study System for University Students',
    shortDescription:
      'A complete study system combining AI prompts, planners, and writing structures.',
    longDescription:
      'Full description here explaining how the system works, who it is for, and how to use it step by step.',
    price: 29,
    badge: 'Most popular',
    category: 'study',
    heroImage: 'https://i.imgur.com/iBGfBCE.png',
    cardImage: 'https://i.imgur.com/iBGfBCE.png',
    bullets: [
      'Ready-to-use AI prompts for assignments and exams',
      'Study planners & semester overview templates',
      'Works with ChatGPT, Notion, Google Docs, or Word'
    ],
    whatsInside: [
      'Main PDF guide with workflows',
      'Prompt library (copy-paste ready)',
      'Notion / Docs template links'
    ]
  },
  {
    slug: 'tech-creator-content-pack',
    name: 'Tech Creator Content Pack',
    shortDescription:
      'Content ideas, hooks, and scripts for tech Reels, Shorts, and posts.',
    longDescription:
      'Full description for creators who want to post consistently without burning time on ideas.',
    price: 19,
    badge: 'For tech creators',
    category: 'creator',
    heroImage: 'https://i.imgur.com/uJNRzth.png',
    cardImage: 'https://i.imgur.com/uJNRzth.png',
    bullets: [
      '50+ content prompts & hooks for tech',
      'Ready scripts for Reels / Shorts',
      'Reusable structure for every month'
    ],
    whatsInside: [
      'Prompt bank (ideas & hooks)',
      'Script templates for videos',
      'Simple content calendar skeleton'
    ]
  }
];
