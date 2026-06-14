import * as React from 'react';
import { Info } from 'lucide-react';
import { cn } from '@/lib/utils';

export type CardIconGridItem = {
  title: string;
  body: string;
  icon?: React.ReactNode;
};

export type CardIconGridProps = {
  heading?: string;
  subheading?: string;
  cards?: CardIconGridItem[];
  className?: string;
};

const DEFAULT_CARDS: CardIconGridItem[] = [
  {
    title: 'Sample Title',
    body: 'Some body here',
  },
  {
    title: 'Title',
    body: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
  },
  {
    title: 'Title',
    body: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
  },
  {
    title: 'Title',
    body: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
  },
  {
    title: 'Title',
    body: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
  },
  {
    title: 'Title',
    body: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
  },
];

function CardItem({ title, body, icon }: CardIconGridItem) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-8 h-8 flex items-start justify-center pt-0.5">
        {icon ?? <Info className="w-8 h-8 text-foreground" aria-hidden="true" />}
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground leading-snug">
          {title}
        </h3>
        <p className="text-sm text-foreground leading-relaxed">{body}</p>
      </div>
    </div>
  );
}

const CardIconGrid = React.forwardRef<HTMLElement, CardIconGridProps>(
  (
    {
      heading = 'Heading',
      subheading = 'Subheading',
      cards = DEFAULT_CARDS,
      className,
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className={cn('px-16 py-16 bg-background', className)}
      >
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground leading-snug">
            {heading}
          </h2>
          <p className="text-sm text-muted-foreground leading-snug">{subheading}</p>
        </div>

        <div className="grid grid-cols-3 gap-x-8 gap-y-12 mt-12">
          {cards.map((card, index) => (
            <CardItem key={index} {...card} />
          ))}
        </div>
      </section>
    );
  }
);
CardIconGrid.displayName = 'CardIconGrid';

export { CardIconGrid };
