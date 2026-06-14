import * as React from 'react';
import { Button } from '@/components/ui/button';
import { NavigationPill } from '@/components/NavigationPill/NavigationPill';
import { cn } from '@/lib/utils';

export type HeaderNavItem = {
  label: string;
  active?: boolean;
  href?: string;
};

export type HeaderProps = {
  navItems?: HeaderNavItem[];
  onSignIn?: () => void;
  onRegister?: () => void;
  className?: string;
};

const DEFAULT_NAV_ITEMS: HeaderNavItem[] = [
  { label: 'Products', active: true },
  { label: 'Solutions' },
  { label: 'Community' },
  { label: 'Resources' },
  { label: 'Pricing' },
  { label: 'Contact' },
];

const Header = React.forwardRef<HTMLElement, HeaderProps>(
  ({ navItems = DEFAULT_NAV_ITEMS, onSignIn, onRegister, className }, ref) => {
    return (
      <header
        ref={ref}
        className={cn(
          'flex items-center justify-between px-8 py-4 border-b border-border bg-background',
          className
        )}
      >
        {/* Logo */}
        <div className="flex-shrink-0 w-10 h-[35px]">
          <svg
            width="40"
            height="35"
            viewBox="0 0 40 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Logo"
          >
            <path
              d="M8.333 35c4.6 0 8.334-3.806 8.334-8.5V18H8.333C3.733 18 0 21.806 0 26.5S3.733 35 8.333 35z"
              fill="#0ACF83"
            />
            <path
              d="M0 17.5C0 12.806 3.733 9 8.333 9h8.334v17H8.333C3.733 26 0 22.194 0 17.5z"
              fill="#A259FF"
            />
            <path
              d="M0 8.5C0 3.806 3.733 0 8.333 0h8.334v17H8.333C3.733 17 0 13.194 0 8.5z"
              fill="#F24E1E"
            />
            <path
              d="M16.667 0H25c4.6 0 8.333 3.806 8.333 8.5S29.6 17 25 17h-8.333V0z"
              fill="#FF7262"
            />
            <path
              d="M33.333 17.5c0 4.694-3.733 8.5-8.333 8.5s-8.333-3.806-8.333-8.5S20.4 9 25 9s8.333 3.806 8.333 8.5z"
              fill="#1ABCFE"
            />
          </svg>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-1">
          {navItems.map((item) => (
            <NavigationPill
              key={item.label}
              label={item.label}
              state={item.active ? 'Active' : 'Default'}
              href={item.href}
            />
          ))}
        </nav>

        {/* Auth */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={onSignIn}
            // TODO(手動): Sign in のクリックハンドラー・認証フローを実装する
          >
            Sign in
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={onRegister}
            // TODO(手動): Register のクリックハンドラー・認証フローを実装する
          >
            Register
          </Button>
        </div>
      </header>
    );
  }
);
Header.displayName = 'Header';

export { Header };
