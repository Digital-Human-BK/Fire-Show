import type { Asset, EntryFieldTypes, EntrySkeletonType } from "contentful";

// ---------------------------------------------------------------------------
// Contentful Content Type IDs
// These must match the API identifiers you set when creating content types
// in the Contentful web app (Settings → Content model → API identifier).
// ---------------------------------------------------------------------------
export const CONTENT_TYPES = {
  SITE_CONTENT: "siteContnet", // Note: typo is in Contentful — must match exactly
} as const;

/** Supported locales. Add more here as Contentful locales are enabled. */
export type Locale = "en-US" | "bg";

export const DEFAULT_LOCALE: Locale = "en-US";

// ---------------------------------------------------------------------------
// Site Content — singleton entry that drives the entire page
// Content type API identifier: "siteContnet" (typo is in Contentful)
//
// Current fields (add more in Contentful and extend this type as you go):
//   heroHeading      → Short text  (localized)
//   heroSubHeading   → Long text   (localized)
//   phoneTitle       → Short text  (localized)
//   phoneDisplay     → Short text  (localized)
//   phoneNumber      → Number
//   scrollDownText   → Short text  (localized)
//   heroVideo        → Media
//   heroImageMobile  → Media
// ---------------------------------------------------------------------------
export type SiteContentSkeleton = EntrySkeletonType<
  {
    heroHeading: EntryFieldTypes.Symbol;
    heroSubHeading: EntryFieldTypes.Text;
    phoneTitle: EntryFieldTypes.Symbol;
    phoneDisplay: EntryFieldTypes.Symbol;
    phoneNumber: EntryFieldTypes.Integer;
    scrollDownText: EntryFieldTypes.Symbol;
    heroVideo: EntryFieldTypes.AssetLink;
    heroImageMobile: EntryFieldTypes.AssetLink;
  },
  "siteContnet"
>;

export type SiteContent = {
  heroHeading: string;
  heroSubHeading: string;
  phoneTitle: string;
  phoneDisplay: string;
  phoneNumber: number;
  scrollDownText: string;
  heroVideoUrl: string;
  heroImageMobileUrl: string;
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Ensures Contentful protocol-relative asset URLs are absolute (https). */
export function resolveAssetUrl(asset: Asset): string {
  const url = (asset.fields.file as { url?: string } | undefined)?.url ?? "";
  return url.startsWith("//") ? `https:${url}` : url;
}
