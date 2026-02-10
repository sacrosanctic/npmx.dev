import type { Meta, StoryObj } from '@storybook-vue/nuxt'
import Privacy from './privacy.vue'

const meta = {
  component: Privacy,
} satisfies Meta<typeof Privacy>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}