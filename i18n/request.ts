import { getUserLocale } from "@/services";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  const locale = await getUserLocale();

  return {
    locale,
    messages: (await import(`../lang/${locale}.json`)).default,
  };
});