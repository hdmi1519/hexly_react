import { Link } from 'react-router-dom';

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  if (items.length <= 1) return null;

  return (
    <nav aria-label="Breadcrumb" className="flex items-center text-xs font-mono text-neutral-400">
      <ol className="flex items-center gap-1.5">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {index > 0 && <span className="text-neutral-700">/</span>}
              {item.to && !isLast ? (
                <Link
                  to={item.to}
                  className="hover:text-neutral-200 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-neutral-200 font-medium">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
