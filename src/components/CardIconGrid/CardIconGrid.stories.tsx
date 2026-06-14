import type { Meta, StoryObj } from '@storybook/react';
import { Star } from 'lucide-react';
import { CardIconGrid } from './CardIconGrid';

const meta: Meta<typeof CardIconGrid> = {
  component: CardIconGrid,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;

type Story = StoryObj<typeof CardIconGrid>;

export const Default: Story = {
  args: {},
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {/* カスタム見出し */}
      <CardIconGrid
        heading="機能紹介"
        subheading="主要な機能の一覧"
        cards={[
          { title: '高速', body: 'リアルタイムで同期されます。' },
          { title: 'セキュア', body: 'エンドツーエンドで暗号化されています。' },
          { title: 'シンプル', body: '直感的なUIで誰でも使えます。' },
        ]}
      />
      {/* カスタムアイコン */}
      <CardIconGrid
        heading="スター機能"
        subheading="特別な機能"
        cards={[
          {
            title: 'お気に入り',
            body: 'コンポーネントをお気に入りに追加できます。',
            icon: <Star className="w-8 h-8 text-foreground" />,
          },
        ]}
      />
    </div>
  ),
};

export const Edgecases: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {/* cards空 */}
      <CardIconGrid heading="空のグリッド" subheading="" cards={[]} />
      {/* 長いテキスト */}
      <CardIconGrid
        heading="非常に長い見出しが入る場合のレイアウトテスト用の見出しテキスト"
        subheading="非常に長いサブ見出しが入る場合のレイアウトテスト"
        cards={[
          {
            title: '非常に長いカードタイトルテキスト',
            body: 'ボディテキストが非常に長くなった場合のレイアウトテスト。Add main takeaway points, quotes, anecdotes, or even a very very short story that goes on and on.',
          },
        ]}
      />
      {/* 1カード */}
      <CardIconGrid
        heading="単一カード"
        subheading="1件のみ"
        cards={[{ title: 'タイトル', body: '本文テキスト' }]}
      />
    </div>
  ),
};

// TODO(手動): インタラクションは play 関数で追加する
