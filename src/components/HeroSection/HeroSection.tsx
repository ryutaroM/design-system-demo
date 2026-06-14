import * as React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export type HeroSectionProps = {
  title?: string;
  subtitle?: string;
  primaryButtonLabel?: string;
  neutralButtonLabel?: string;
  onPrimaryClick?: () => void;
  onNeutralClick?: () => void;
  className?: string;
};

const HeroSection = React.forwardRef<HTMLElement, HeroSectionProps>(
  (
    {
      title = '連携システムデモ',
      subtitle = 'figmaからの取り込み',
      primaryButtonLabel = 'はじめる',
      neutralButtonLabel = '詳細を見る',
      onPrimaryClick,
      onNeutralClick,
      className,
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          // FIXME: token不明（Figma値: チェッカーボードパターン背景）
          'flex flex-col items-center justify-center min-h-[524px] px-8 py-16 bg-muted/30',
          className
        )}
      >
        <div className="flex flex-col items-center gap-4 text-center max-w-2xl">
          <h1 className="text-5xl font-bold tracking-tight text-foreground leading-tight">
            {title}
          </h1>
          <p className="text-xl text-muted-foreground leading-snug">{subtitle}</p>
          <div className="flex items-center gap-3 mt-4">
            <Button
              variant="outline"
              size="default"
              onClick={onNeutralClick}
              // TODO(手動): neutralボタンのクリックハンドラーを実装する
            >
              {neutralButtonLabel}
            </Button>
            <Button
              variant="default"
              size="default"
              onClick={onPrimaryClick}
              // TODO(手動): primaryボタンのクリックハンドラーを実装する
            >
              {primaryButtonLabel}
            </Button>
          </div>
        </div>
      </section>
    );
  }
);
HeroSection.displayName = 'HeroSection';

export { HeroSection };
