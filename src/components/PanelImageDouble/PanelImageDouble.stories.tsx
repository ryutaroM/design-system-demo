import type { Meta, StoryObj } from '@storybook/react';
import { PanelImageDouble } from './PanelImageDouble';

const meta: Meta<typeof PanelImageDouble> = {
  component: PanelImageDouble,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;

type Story = StoryObj<typeof PanelImageDouble>;

export const Default: Story = {
  args: {},
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {/* 画像あり（実際のsrcを使う場合） */}
      <PanelImageDouble
        left={{ src: 'https://placehold.co/800x450/e2e8f0/64748b?text=Left', alt: '左パネル' }}
        right={{ src: 'https://placehold.co/800x450/e2e8f0/64748b?text=Right', alt: '右パネル' }}
      />
      {/* プレースホルダーのみ */}
      <PanelImageDouble />
    </div>
  ),
};

export const Edgecases: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {/* 片方のみ画像あり */}
      <PanelImageDouble
        left={{ src: 'https://placehold.co/800x450/e2e8f0/64748b?text=Left', alt: '左パネル' }}
      />
      {/* alt未指定 */}
      <PanelImageDouble
        left={{ src: 'https://placehold.co/800x450/e2e8f0/64748b?text=Left' }}
        right={{ src: 'https://placehold.co/800x450/e2e8f0/64748b?text=Right' }}
      />
    </div>
  ),
};

// TODO(手動): インタラクションは play 関数で追加する
