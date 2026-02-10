import type { Meta, StoryObj } from '@storybook-vue/nuxt'
import Compare from './compare.vue'

const meta = {
  component: Compare,
} satisfies Meta<typeof Compare>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}