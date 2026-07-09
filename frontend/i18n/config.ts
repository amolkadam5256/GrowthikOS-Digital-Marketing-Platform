export const defaultLocale = "en";

export const locales = [
  "en",
  "hi",
  "mr",
  "gu",
  "bn",
  "ta",
  "te",
  "kn",
  "ml",
  "pa",
  "or",
  "as",
  "ur",
  "es",
  "fr",
  "de",
  "it",
  "pt",
  "nl",
  "ru",
  "ar",
  "zh",
  "ja",
  "ko",
] as const;

export type Locale = (typeof locales)[number];

export const rtlLocales: Locale[] = ["ar", "ur"];

export type LocaleMeta = {
  code: Locale;
  label: string;
  nativeLabel: string;
  flag: string;
  region: "India" | "Global";
  currency: "INR" | "USD" | "EUR" | "GBP" | "CNY" | "JPY" | "KRW";
  intlLocale: string;
};

export const localeMeta: Record<Locale, LocaleMeta> = {
  en: {
    code: "en",
    label: "English",
    nativeLabel: "English",
    flag: "IN",
    region: "India",
    currency: "INR",
    intlLocale: "en-IN",
  },
  hi: {
    code: "hi",
    label: "Hindi",
    nativeLabel: "हिन्दी",
    flag: "IN",
    region: "India",
    currency: "INR",
    intlLocale: "hi-IN",
  },
  mr: {
    code: "mr",
    label: "Marathi",
    nativeLabel: "मराठी",
    flag: "IN",
    region: "India",
    currency: "INR",
    intlLocale: "mr-IN",
  },
  gu: {
    code: "gu",
    label: "Gujarati",
    nativeLabel: "ગુજરાતી",
    flag: "IN",
    region: "India",
    currency: "INR",
    intlLocale: "gu-IN",
  },
  bn: {
    code: "bn",
    label: "Bengali",
    nativeLabel: "বাংলা",
    flag: "IN",
    region: "India",
    currency: "INR",
    intlLocale: "bn-IN",
  },
  ta: {
    code: "ta",
    label: "Tamil",
    nativeLabel: "தமிழ்",
    flag: "IN",
    region: "India",
    currency: "INR",
    intlLocale: "ta-IN",
  },
  te: {
    code: "te",
    label: "Telugu",
    nativeLabel: "తెలుగు",
    flag: "IN",
    region: "India",
    currency: "INR",
    intlLocale: "te-IN",
  },
  kn: {
    code: "kn",
    label: "Kannada",
    nativeLabel: "ಕನ್ನಡ",
    flag: "IN",
    region: "India",
    currency: "INR",
    intlLocale: "kn-IN",
  },
  ml: {
    code: "ml",
    label: "Malayalam",
    nativeLabel: "മലയാളം",
    flag: "IN",
    region: "India",
    currency: "INR",
    intlLocale: "ml-IN",
  },
  pa: {
    code: "pa",
    label: "Punjabi",
    nativeLabel: "ਪੰਜਾਬੀ",
    flag: "IN",
    region: "India",
    currency: "INR",
    intlLocale: "pa-IN",
  },
  or: {
    code: "or",
    label: "Odia",
    nativeLabel: "ଓଡ଼ିଆ",
    flag: "IN",
    region: "India",
    currency: "INR",
    intlLocale: "or-IN",
  },
  as: {
    code: "as",
    label: "Assamese",
    nativeLabel: "অসমীয়া",
    flag: "IN",
    region: "India",
    currency: "INR",
    intlLocale: "as-IN",
  },
  ur: {
    code: "ur",
    label: "Urdu",
    nativeLabel: "اردو",
    flag: "IN",
    region: "India",
    currency: "INR",
    intlLocale: "ur-IN",
  },
  es: {
    code: "es",
    label: "Spanish",
    nativeLabel: "Español",
    flag: "ES",
    region: "Global",
    currency: "EUR",
    intlLocale: "es-ES",
  },
  fr: {
    code: "fr",
    label: "French",
    nativeLabel: "Français",
    flag: "FR",
    region: "Global",
    currency: "EUR",
    intlLocale: "fr-FR",
  },
  de: {
    code: "de",
    label: "German",
    nativeLabel: "Deutsch",
    flag: "DE",
    region: "Global",
    currency: "EUR",
    intlLocale: "de-DE",
  },
  it: {
    code: "it",
    label: "Italian",
    nativeLabel: "Italiano",
    flag: "IT",
    region: "Global",
    currency: "EUR",
    intlLocale: "it-IT",
  },
  pt: {
    code: "pt",
    label: "Portuguese",
    nativeLabel: "Português",
    flag: "PT",
    region: "Global",
    currency: "EUR",
    intlLocale: "pt-PT",
  },
  nl: {
    code: "nl",
    label: "Dutch",
    nativeLabel: "Nederlands",
    flag: "NL",
    region: "Global",
    currency: "EUR",
    intlLocale: "nl-NL",
  },
  ru: {
    code: "ru",
    label: "Russian",
    nativeLabel: "Русский",
    flag: "RU",
    region: "Global",
    currency: "EUR",
    intlLocale: "ru-RU",
  },
  ar: {
    code: "ar",
    label: "Arabic",
    nativeLabel: "العربية",
    flag: "SA",
    region: "Global",
    currency: "USD",
    intlLocale: "ar-SA",
  },
  zh: {
    code: "zh",
    label: "Chinese",
    nativeLabel: "中文",
    flag: "CN",
    region: "Global",
    currency: "CNY",
    intlLocale: "zh-CN",
  },
  ja: {
    code: "ja",
    label: "Japanese",
    nativeLabel: "日本語",
    flag: "JP",
    region: "Global",
    currency: "JPY",
    intlLocale: "ja-JP",
  },
  ko: {
    code: "ko",
    label: "Korean",
    nativeLabel: "한국어",
    flag: "KR",
    region: "Global",
    currency: "KRW",
    intlLocale: "ko-KR",
  },
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function isRtlLocale(locale: Locale): boolean {
  return rtlLocales.includes(locale);
}

export function stripLocaleFromPathname(pathname: string): string {
  const segments = pathname.split("/");
  const firstSegment = segments[1];

  if (firstSegment && isLocale(firstSegment)) {
    const stripped = `/${segments.slice(2).join("/")}`;
    return stripped === "/" ? "/" : stripped.replace(/\/$/, "");
  }

  return pathname;
}

export function localizePathname(pathname: string, locale: Locale): string {
  const normalizedPathname = stripLocaleFromPathname(pathname);
  if (locale === defaultLocale) {
    return normalizedPathname;
  }
  return normalizedPathname === "/"
    ? `/${locale}`
    : `/${locale}${normalizedPathname}`;
}
