# CLAUDE.md

このプロジェクトは Figma → React Component + Storybook stories を
半自動生成するデザインシステム。以下のルールに従って生成すること。

---

## 技術スタック

- React + TypeScript
- shadcn/ui（コンポーネントの土台）
- Tailwind CSS（スタイルは Tailwind クラスのみ。インラインstyle禁止）
- Storybook（stories）
- Vitest（テスト）

---

## コンポーネント生成ルール

- shadcn/ui をベースにする。既存の shadcn コンポーネントで賄えるものは
  再実装せず利用・拡張する
- props は TypeScript の型定義を必須とする（`type Props = {...}`）
- スタイルは Tailwind クラスのみ。色・余白・フォントサイズはハードコード
  せず、Tailwind config / CSS 変数のトークンを参照する
- `forwardRef` が必要な場合は対応する
- 1ファイル1コンポーネントを基本とする

### 命名
- コンポーネント名: PascalCase（例: `PrimaryButton`）
- ファイル名: `ComponentName.tsx`
- props 型: `ComponentNameProps`

---

## Stories 生成ルール

各コンポーネントに対し `ComponentName.stories.tsx` を作り、最低限
以下の3カテゴリを必ず含める。

1. **Default** — 標準的な使用例
2. **Variants** — props の主要バリエーション（size, variant, state 等）
3. **Edgecases** — 長文・空・disabled などの境界ケース

### 形式
- CSF3（Component Story Format 3）を使う
- `tags: ['autodocs']` を付けて Docs を自動生成する
- `play` 関数（インタラクションテスト）は **雛形だけ** 用意し、
  詳細は手動で埋める前提でコメントを残す

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { ComponentName } from './ComponentName';

const meta: Meta<typeof ComponentName> = {
  component: ComponentName,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof ComponentName>;

export const Default: Story = { args: { /* ... */ } };
export const Variants: Story = { args: { /* ... */ } };
export const Edgecases: Story = { args: { /* ... */ } };

// TODO(手動): インタラクションは play 関数で追加する
```

---

## Figma 連携時の方針

- Figma MCP からノード情報を読む際は、色・spacing・typography を
  **トークン名にマッピング**してから Tailwind クラスに変換する
- Figma の生のピクセル値をそのまま埋め込まない
- マッピング不明なトークンは勝手に近似せず、コメントで `// FIXME: token
  不明（Figma値: 18px）` と明示して人間の判断に委ねる

---

## 生成後に人間が手直しする前提の箇所

以下は AI が完璧に作れない前提。雛形 + TODO コメントで残すこと。

- インタラクション・状態管理（onClick の中身、フォーム制御等）
- play 関数の中身
- 異常系・エッジケースの詳細
- アクセシビリティの細かい調整

---

## やってはいけないこと

- Tailwind クラス以外でのスタイリング（styled-components 等）
- トークンを無視したハードコード値
- stories の Default だけ作って Variants / Edgecases を省略すること
- 不明なトークンの勝手な近似