import * as React from 'react';
import { Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';

export type FooterLinkGroup = {
  title: string;
  links: string[];
};

export type FooterProps = {
  linkGroups?: FooterLinkGroup[];
  className?: string;
};

const DEFAULT_LINK_GROUPS: FooterLinkGroup[] = [
  {
    title: 'Use cases',
    links: [
      'UI design',
      'UX design',
      'Wireframing',
      'Diagramming',
      'Brainstorming',
      'Online whiteboard',
      'Team collaboration',
    ],
  },
  {
    title: 'Explore',
    links: [
      'Design',
      'Prototyping',
      'Development features',
      'Design systems',
      'Collaboration features',
      'Design process',
      'FigJam',
    ],
  },
  {
    title: 'Resources',
    links: [
      'Blog',
      'Best practices',
      'Colors',
      'Color wheel',
      'Support',
      'Developers',
      'Resource library',
    ],
  },
];

const SOCIAL_ICONS = [
  { icon: Twitter, label: 'Twitter / X' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Youtube, label: 'YouTube' },
  { icon: Linkedin, label: 'LinkedIn' },
];

const Footer = React.forwardRef<HTMLElement, FooterProps>(
  ({ linkGroups = DEFAULT_LINK_GROUPS, className }, ref) => {
    return (
      <footer
        ref={ref}
        className={cn(
          'flex gap-16 px-8 py-12 border-t border-border bg-background',
          className
        )}
      >
        {/* Logo + Social */}
        <div className="flex flex-col gap-6 flex-shrink-0 w-40">
          {/* Logo */}
          <svg
            width="24"
            height="35"
            viewBox="0 0 24 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Logo"
          >
            <path
              d="M5 35c2.76 0 5-2.284 5-5.1V24.8H5c-2.76 0-5 2.284-5 5.1S2.24 35 5 35z"
              fill="#0ACF83"
            />
            <path
              d="M0 17.5C0 14.684 2.24 12.4 5 12.4h5v10.2H5C2.24 22.6 0 20.316 0 17.5z"
              fill="#A259FF"
            />
            <path
              d="M0 8.1C0 5.284 2.24 3 5 3h5v10.2H5C2.24 13.2 0 10.916 0 8.1z"
              fill="#F24E1E"
            />
            <path
              d="M10 3h5c2.76 0 5 2.284 5 5.1S17.76 13.2 15 13.2h-5V3z"
              fill="#FF7262"
            />
            <path
              d="M20 17.5c0 2.816-2.24 5.1-5 5.1s-5-2.284-5-5.1 2.24-5.1 5-5.1 5 2.284 5 5.1z"
              fill="#1ABCFE"
            />
          </svg>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {SOCIAL_ICONS.map(({ icon: Icon, label }) => (
              <button
                key={label}
                type="button"
                aria-label={label}
                className="text-foreground hover:text-muted-foreground transition-colors"
                // TODO(手動): ソーシャルリンクのhrefを設定する
              >
                <Icon className="w-6 h-6" />
              </button>
            ))}
          </div>
        </div>

        {/* Link Columns */}
        <div className="grid grid-cols-3 gap-8 flex-1">
          {linkGroups.map((group) => (
            <div key={group.title} className="flex flex-col gap-3">
              <h4 className="text-sm font-semibold text-foreground leading-relaxed">
                {group.title}
              </h4>
              <ul className="flex flex-col gap-2">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-foreground hover:text-muted-foreground transition-colors leading-relaxed"
                      // TODO(手動): 各リンクのhrefを実際のURLに差し替える
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    );
  }
);
Footer.displayName = 'Footer';

export { Footer };
