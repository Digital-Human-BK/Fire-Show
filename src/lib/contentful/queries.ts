import { contentfulClient } from "./client";
import {
  CONTENT_TYPES,
  DEFAULT_LOCALE,
  resolveAssetUrl,
  type Locale,
  type SiteContent,
  type SiteContentSkeleton,
} from "./types";

/** Fetch the single Site Content entry (all text / media for the whole page). */
export async function getSiteContent(
  locale: Locale = DEFAULT_LOCALE,
): Promise<SiteContent | null> {
  const response = await contentfulClient.getEntries<SiteContentSkeleton>({
    content_type: CONTENT_TYPES.SITE_CONTENT,
    locale,
    limit: 1,
  });

  const entry = response.items[0];
  if (!entry) return null;

  return {
    heroHeading: entry.fields.heroHeading,
    heroSubHeading: entry.fields.heroSubHeading,
    phoneTitle: entry.fields.phoneTitle,
    phoneDisplay: entry.fields.phoneDisplay,
    phoneNumber: entry.fields.phoneNumber,
    scrollDownText: entry.fields.scrollDownText,
    heroVideoUrl: resolveAssetUrl(entry.fields.heroVideo as never),
    heroImageMobileUrl: resolveAssetUrl(entry.fields.heroImageMobile as never),
  };
}
