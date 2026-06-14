import type { Meta, StoryObj } from '@storybook/react';
import { NavigationPill } from './NavigationPill';

const meta: Meta<typeof NavigationPill> = {
  component: NavigationPill,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'radio',
      options: ['Active', 'Default'],
    },
  },
};
export default meta;

type Story = StoryObj<typeof NavigationPill>;

export const Default: Story = {
  args: {
    label: 'Products',
    state: 'Default',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <NavigationPill label="Products" state="Active" />
      <NavigationPill label="Solutions" state="Default" />
      <NavigationPill label="Community" state="Default" />
      <NavigationPill label="Resources" state="Default" />
      <NavigationPill label="Pricing" state="Default" />
      <NavigationPill label="Contact" state="Default" />
    </div>
  ),
};

export const Edgecases: Story = {
  render: () => (
    <div className="flex gap-2 flex-col">
      <div className="flex gap-2">
        <NavigationPill
          label="非常に長いナビゲーションラベルのテキスト"
          state="Default"
        />
        <NavigationPill
          label="非常に長いナビゲーションラベルのテキスト"
          state="Active"
        />
      </div>
      <div className="flex gap-2">
        <NavigationPill label="A" state="Default" />
        <NavigationPill label="A" state="Active" />
      </div>
    </div>
  ),
};

// TODO(手動): インタラクションは play 関数で追加する
