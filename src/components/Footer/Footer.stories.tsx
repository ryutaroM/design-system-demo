import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';

const meta: Meta<typeof Footer> = {
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {},
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {/* 2列 */}
      <Footer
        linkGroups={[
          {
            title: 'Products',
            links: ['Feature A', 'Feature B', 'Feature C'],
          },
          {
            title: 'Company',
            links: ['About', 'Careers', 'Press'],
          },
        ]}
      />
    </div>
  ),
};

export const Edgecases: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {/* linkGroups空 */}
      <Footer linkGroups={[]} />
      {/* リンクなしグループ */}
      <Footer
        linkGroups={[
          { title: 'Empty Group', links: [] },
          { title: 'Normal Group', links: ['Link 1', 'Link 2'] },
        ]}
      />
      {/* 非常に長いリンクテキスト */}
      <Footer
        linkGroups={[
          {
            title: '非常に長いグループタイトルテキスト',
            links: ['非常に長いリンクテキストが入る場合のレイアウトテスト'],
          },
        ]}
      />
    </div>
  ),
};

// TODO(手動): インタラクションは play 関数で追加する
