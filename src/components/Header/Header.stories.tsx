import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {},
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {/* 別のアイテムがアクティブ */}
      <Header
        navItems={[
          { label: 'Products' },
          { label: 'Solutions', active: true },
          { label: 'Community' },
          { label: 'Resources' },
          { label: 'Pricing' },
          { label: 'Contact' },
        ]}
      />
      {/* アクティブなし */}
      <Header
        navItems={[
          { label: 'Products' },
          { label: 'Solutions' },
          { label: 'Community' },
        ]}
      />
    </div>
  ),
};

export const Edgecases: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {/* navItems空 */}
      <Header navItems={[]} />
      {/* 長いラベル */}
      <Header
        navItems={[
          { label: '非常に長いナビゲーションラベル', active: true },
          { label: 'Short' },
        ]}
      />
    </div>
  ),
};

// TODO(手動): インタラクションは play 関数で追加する
