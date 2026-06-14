import type { Meta, StoryObj } from '@storybook/react';
import { HeroSection } from './HeroSection';

const meta: Meta<typeof HeroSection> = {
  component: HeroSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;

type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {
  args: {},
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <HeroSection
        title="カスタムタイトル"
        subtitle="カスタムサブタイトルテキスト"
        primaryButtonLabel="登録する"
        neutralButtonLabel="もっと詳しく"
      />
      <HeroSection
        title="Short"
        subtitle="Brief subtitle"
        primaryButtonLabel="Go"
        neutralButtonLabel="Learn"
      />
    </div>
  ),
};

export const Edgecases: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      {/* 非常に長いテキスト */}
      <HeroSection
        title="非常に長いタイトルテキストが入る場合のレイアウトテストとして複数行になったときの表示確認"
        subtitle="非常に長いサブタイトルテキストが入る場合のレイアウトテストとして折り返しが発生したときの表示確認のためのテキスト"
      />
      {/* 空文字 */}
      <HeroSection title="" subtitle="" primaryButtonLabel="" neutralButtonLabel="" />
    </div>
  ),
};

// TODO(手動): インタラクションは play 関数で追加する
