export interface DigitalProduct {
  id: number;
  title: string;                 // from API
  slug: string;

  short_description: string;   // summary
  description: string;         // long text from API (or long_description if you rename)
  thumbnail: string;           // small image (card)
  file: string;                // download file URL

    price: number;               // ⚠️ make sure your Django serializer returns this
  stripe_price_id: string | null;
  version: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;

   // extra frontend fields (optional, can be null/undefined)
  bullets?: string[];
  whatsInside?: string[];
  faqs?: { q: string; a: string }[];
  badge?: string | null;
}
