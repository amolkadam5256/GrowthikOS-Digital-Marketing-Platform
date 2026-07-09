import { headers } from "next/headers";

import { defaultLocale, isLocale, type Locale } from "./config";

export async function getRequestLocale(): Promise<Locale> {
  const headerStore = await headers();
  const locale = headerStore.get("x-growthik-locale");
  return locale && isLocale(locale) ? locale : defaultLocale;
}
