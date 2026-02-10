import type { Meta, StoryObj } from '@storybook-vue/nuxt'
import About from './about.vue'

const meta = {
  component: About,
  globals: {
    locale: undefined,
  },
} satisfies Meta<typeof About>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const JapaneseLocale: Story = {
  globals: {
    locale: 'ja-JP',
  },
}
