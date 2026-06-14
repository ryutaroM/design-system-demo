import * as React from 'react';
import { ImageIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export type PanelImageDoublePanelProps = {
  src?: string;
  alt?: string;
};

export type PanelImageDoubleProps = {
  left?: PanelImageDoublePanelProps;
  right?: PanelImageDoublePanelProps;
  className?: string;
};

function ImagePanel({ src, alt = '' }: PanelImageDoublePanelProps) {
  return (
    <div
      className={cn(
        // FIXME: token不明（Figma値: #E3E3E3）
        'aspect-video rounded-lg flex items-center justify-center overflow-hidden bg-muted'
      )}
    >
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <ImageIcon className="w-16 h-16 text-muted-foreground/40" aria-hidden="true" />
      )}
    </div>
  );
}

const PanelImageDouble = React.forwardRef<HTMLElement, PanelImageDoubleProps>(
  ({ left, right, className }, ref) => {
    return (
      <section
        ref={ref}
        className={cn('grid grid-cols-2 gap-6 px-8 py-12 bg-background', className)}
      >
        <ImagePanel {...left} />
        <ImagePanel {...right} />
      </section>
    );
  }
);
PanelImageDouble.displayName = 'PanelImageDouble';

export { PanelImageDouble };
