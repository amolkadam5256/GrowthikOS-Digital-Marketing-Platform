import type { Metadata } from "next";

import {
  defaultLocale,
  localeMeta,
  locales,
  localizePathname,
  type Locale,
} from "./config";

export function localizedAlternates(pathname = "/") {
  return Object.fromEntries(
    locales.map((locale) => [
      localeMeta[locale].intlLocale,
      localizePathname(pathname, locale),
    ])
  );
}

export function buildLocalizedMetadata({
  locale = defaultLocale,
  pathname = "/",
  title,
  description,
}: {
  locale?: Locale;
  pathname?: string;
  title: string;
  description: string;
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: localizePathname(pathname, locale),
      languages: localizedAlternates(pathname),
    },
    openGraph: {
      title,
      description,
      locale: localeMeta[locale].intlLocale.replace("-", "_"),
      siteName: "GrowthikOS",
      type: "website",
      images: ["/og-image.png"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
  };
}
