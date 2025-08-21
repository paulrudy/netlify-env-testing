// @ts-check
import { defineConfig, envField } from 'astro/config';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify({
    devFeatures: {
      images: false,
      environmentVariables: false,
    },
  }),
  env: {
    schema: {
      MY_SECRET_VALUE: envField.string({ context: 'server', access: 'secret' }),
      MY_NON_SECRET_VALUE: envField.string({
        context: 'client',
        access: 'public',
      }),
      ALL_CONTEXTS_ENV_VAR: envField.string({
        context: 'server',
        access: 'secret',
      }),
    },
  },
});
