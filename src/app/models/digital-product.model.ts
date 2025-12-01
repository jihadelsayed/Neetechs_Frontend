export interface DigitalProduct {
  id: number;
  title: string;                 // from API
  slug: string;
  short_description: string;
  description: string;           // from API
  thumbnail: string;             // from API
  file: string;                  // from API
  stripe_price_id: string | null;
  version: number;
  is_active: boolean;
  created_at: string;            // ISO datetime string
  updated_at: string;            // ISO datetime string
  bullets: string[];
  whatsInside: string[];

  // Frontend-only / future stuff (optional)
  badge?: string | null;
  price?: number;
}
