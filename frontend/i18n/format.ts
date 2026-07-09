import { localeMeta, type Locale } from "./config";

export function formatDate(
  date: Date | string | number,
  locale: Locale,
  options: Intl.DateTimeFormatOptions = { dateStyle: "long" }
) {
  return new Intl.DateTimeFormat(localeMeta[locale].intlLocale, options).format(
    new Date(date)
  );
}

export function formatCurrency(
  amount: number,
  locale: Locale,
  currency = localeMeta[locale].currency
) {
  return new Intl.NumberFormat(localeMeta[locale].intlLocale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatNumber(amount: number, locale: Locale) {
  return new Intl.NumberFormat(localeMeta[locale].intlLocale).format(amount);
}
