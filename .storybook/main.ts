import type { StorybookConfig } from '@storybook-vue/nuxt'

const config = {
  stories: ['../app/**/*.stories.@(js|ts|mdx)'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-docs'],
  framework: '@storybook-vue/nuxt',
} satisfies StorybookConfig
export default config
