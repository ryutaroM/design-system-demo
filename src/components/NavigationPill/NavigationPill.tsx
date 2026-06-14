import * as React from 'react';
import { cn } from '@/lib/utils';

export type NavigationPillProps = {
  label: string;
  state?: 'Active' | 'Default';
  href?: string;
  onClick?: () => void;
};

const NavigationPill = React.forwardRef<HTMLButtonElement, NavigationPillProps>(
  ({ label, state = 'Default', href, onClick, ...props }, ref) => {
    const baseClass =
      'inline-flex items-center rounded-full px-3 py-1 text-sm transition-colors cursor-pointer select-none';
    const activeClass = 'bg-secondary text-secondary-foreground font-medium';
    const defaultClass =
      'text-muted-foreground hover:text-foreground hover:bg-secondary/50 font-normal';

    const className = cn(baseClass, state === 'Active' ? activeClass : defaultClass);

    if (href) {
      return (
        <a href={href} className={className} onClick={onClick}>
          {label}
        </a>
      );
    }

    return (
      <button ref={ref} type="button" className={className} onClick={onClick} {...props}>
        {label}
      </button>
    );
  }
);
NavigationPill.displayName = 'NavigationPill';

export { NavigationPill };
