/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "fr",
  locales: ["fr", "en", "yo"],
  i18nextServer: {
    debug: true,
    fallbackLng: false,
  },
  // routes: {
  //   fr: {
  //     about: "a-propos",
  //     "experience": "contactez-nous",
  //     project: {
  //       index: "projet",
  //     },
  //   },
  // }
};
