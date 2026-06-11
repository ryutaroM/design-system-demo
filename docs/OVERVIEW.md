# Figma → React Component + Stories 半自動生成 構想概要

## ゴール

Figma のデザインを起点に、VSCode（Claude Code）から MCP 経由で React
コンポーネントと Storybook stories を半自動生成する。完全自動ではなく
**AIアシスト + 手直し前提**の運用とする。

---

## 必要なもの

| 区分 | ツール | 役割 |
|------|--------|------|
| デザイン読み取り | Figma MCP Server | Figma のレイアウト・スタイル・トークンを読む |
| エディタ | VSCode + Claude Code | MCP 経由でコード生成 |
| UIベース | shadcn/ui | コンポーネントの土台 |
| スタイル | Tailwind CSS | トークンとの橋渡し |
| カタログ | Storybook | stories 表示・ドキュメント |
| ルール定義 | CLAUDE.md | 生成品質を安定させる（常時参照） |
| (任意) トークン変換 | Style Dictionary | Figma トークン → CSS変数 / Tailwind |
| (任意) Skill | Claude Code Skills | 変換手順が複雑化したら固める |

---

## 全体フロー

```
Figma（デザイン）
    ↓ Figma MCP
VSCode（Claude Code）
    ↓ CLAUDE.md を参照して生成
Component.tsx + Component.stories.tsx
    ↓ 手直し
Storybook で確認
```

---

## 手順

### 1. Figma MCP 接続
- Figma MCP Server を Claude Code の MCP 設定に登録
- 対象 Figma ファイルにアクセスできる状態にする

### 2. プロジェクト土台
- shadcn/ui + Tailwind + Storybook をセットアップ
- 既存プロジェクトなら Storybook / Vitest を追加

### 3. CLAUDE.md 配置
- プロジェクトルートに配置（別添の CLAUDE.md 参照）

### 4. 生成
- 「Figma のこのノードから Button と stories を作って」と指示
- MCP が Figma 読む → CLAUDE.md 参照 → 生成

### 5. 手直し
- インタラクション・状態・異常系を追加

---

## 自動化の境界線

| 作業 | 自動化度 |
|------|---------|
| Figma 読み取り | ◎ MCP |
| 静的なコンポーネント | ○ AI生成 |
| Default / Variants stories | ○ AI生成 |
| インタラクション・play関数 | △ 手直し |
| 異常系・エッジケース | ✗ 手動 |

---

## 判断メモ

- **Style Dictionary**: 構想段階では不要。トークンの一元管理（特に iOS
  アプリとの共有）が必要になった時点で導入。
- **Skills**: 最初は CLAUDE.md のみで開始。「毎回同じ変換指示をしている」
  と感じたら `figma-to-component` Skill として手順を固める。最初から作り
  込むのはオーバーエンジニアリング。

---

## 次の一歩

Figma MCP の接続テストから着手するのが手っ取り早い。