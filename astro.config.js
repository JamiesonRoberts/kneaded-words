import { defineConfig, fontProviders } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import robotsTxt from 'astro-robots-txt'

export default defineConfig({
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Vollkorn',
      cssVariable: '--primary-font',
      fallbacks: ['Georgia', 'Times New Roman', 'serif'],
      subsets: ['latin'],
    },
    {
      provider: fontProviders.google(),
      name: 'Noto Sans',
      cssVariable: '--secondary-font',
      fallbacks: ['Helvetica', 'sans-serif'],
      subsets: ['latin'],
    },
    {
      provider: fontProviders.google(),
      name: 'Permanent Marker',
      cssVariable: '--title-font',
      subsets: ['latin'],
    },
  ],

  site: 'https://kneadedwords.ca',

  i18n: {
    locales: ['en-CA'],
    defaultLocale: 'en-CA',
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en-CA', // All urls that don't contain `es` or `fr` after `https://example.com/` will be treated as default locale, i.e. `en`
        locales: {
          'en-CA': 'en-CA', // The `defaultLocale` value must present in `locales` keys
        },
      },
      lastmod: new Date(),
    }),
    robotsTxt(),
  ],

  output: 'static',
})
