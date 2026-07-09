import { MarketingHome } from "@/components/marketing/home";
import { defaultLocale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { buildLocalizedMetadata } from "@/i18n/seo";

export async function generateMetadata() {
  const messages = await getMessages(defaultLocale);

  return buildLocalizedMetadata({
    locale: defaultLocale,
    pathname: "/",
    title: messages.home.metadata_title,
    description: messages.home.metadata_description,
  });
}

export default async function MarketingHomePage() {
  return <MarketingHome />;
}
