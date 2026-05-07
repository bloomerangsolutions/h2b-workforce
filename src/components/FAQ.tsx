import { Icon } from "./Icon";

type Item = { q: string; a: string };

export function FAQ({ items, className = "" }: { items: Item[]; className?: string }) {
  return (
    <div className={`space-y-6 ${className}`}>
      {items.map((item, i) => (
        <details key={i} className="group border-b border-navy/8 pb-6">
          <summary className="flex cursor-pointer list-none items-center justify-between text-left text-lg font-bold text-navy">
            {item.q}
            <Icon
              name="expand_more"
              className="text-copper transition-transform group-open:rotate-180"
            />
          </summary>
          <p className="mt-4 leading-relaxed text-navy/60">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
