import "server-only";

import asCommon from "@/messages/as/common.json";
import asHome from "@/messages/as/home.json";
import bnCommon from "@/messages/bn/common.json";
import bnHome from "@/messages/bn/home.json";
import enCommon from "@/messages/en/common.json";
import enHome from "@/messages/en/home.json";
import guCommon from "@/messages/gu/common.json";
import guHome from "@/messages/gu/home.json";
import hiCommon from "@/messages/hi/common.json";
import hiHome from "@/messages/hi/home.json";
import knCommon from "@/messages/kn/common.json";
import knHome from "@/messages/kn/home.json";
import mlCommon from "@/messages/ml/common.json";
import mlHome from "@/messages/ml/home.json";
import mrCommon from "@/messages/mr/common.json";
import mrHome from "@/messages/mr/home.json";
import orCommon from "@/messages/or/common.json";
import orHome from "@/messages/or/home.json";
import paCommon from "@/messages/pa/common.json";
import paHome from "@/messages/pa/home.json";
import taCommon from "@/messages/ta/common.json";
import taHome from "@/messages/ta/home.json";
import teCommon from "@/messages/te/common.json";
import teHome from "@/messages/te/home.json";
import urCommon from "@/messages/ur/common.json";
import urHome from "@/messages/ur/home.json";

import { defaultLocale, type Locale } from "./config";

export type CommonMessages = typeof enCommon;
export type HomeMessages = typeof enHome;

export type Messages = {
  common: CommonMessages;
  home: HomeMessages;
};

type PartialMessages = {
  common?: Partial<CommonMessages>;
  home?: Partial<HomeMessages>;
};

const messageOverrides: Partial<Record<Locale, PartialMessages>> = {
  as: { common: asCommon, home: asHome },
  bn: { common: bnCommon, home: bnHome },
  en: { common: enCommon, home: enHome },
  gu: { common: guCommon, home: guHome },
  hi: { common: hiCommon, home: hiHome },
  kn: { common: knCommon, home: knHome },
  ml: { common: mlCommon, home: mlHome },
  mr: { common: mrCommon, home: mrHome },
  or: { common: orCommon, home: orHome },
  pa: { common: paCommon, home: paHome },
  ta: { common: taCommon, home: taHome },
  te: { common: teCommon, home: teHome },
  ur: { common: urCommon, home: urHome },
};

export async function getMessages(locale: Locale = defaultLocale): Promise<Messages> {
  const override = messageOverrides[locale] ?? {};

  return {
    common: {
      ...enCommon,
      ...override.common,
    },
    home: {
      ...enHome,
      ...override.home,
    },
  };
}
