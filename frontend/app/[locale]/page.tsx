import { notFound } from "next/navigation";

import { MarketingHome } from "@/components/marketing/home";
import { defaultLocale, isLocale, locales, type Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { buildLocalizedMetadata } from "@/i18n/seo";

type LocalizedHomePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return locales
    .filter((locale) => locale !== defaultLocale)
    .map((locale) => ({ locale }));
}

async function resolveLocale(params: LocalizedHomePageProps["params"]): Promise<Locale> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  if (locale === defaultLocale) {
    notFound();
  }

  return locale;
}

export async function generateMetadata({ params }: LocalizedHomePageProps) {
  const locale = await resolveLocale(params);
  const messages = await getMessages(locale);

  return buildLocalizedMetadata({
    locale,
    pathname: "/",
    title: messages.home.metadata_title,
    description: messages.home.metadata_description,
  });
}

export default async function LocalizedHomePage({
  params,
}: LocalizedHomePageProps) {
  const locale = await resolveLocale(params);
  const messages = await getMessages(locale);

  return <MarketingHome />;
}
