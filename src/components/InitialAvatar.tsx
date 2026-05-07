type Props = {
  name: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "navy" | "copper" | "paper";
};

const SIZES = {
  sm: "h-10 w-10 text-sm",
  md: "h-12 w-12 text-base",
  lg: "h-24 w-24 text-2xl",
  xl: "h-40 w-40 text-5xl",
};

const VARIANTS = {
  navy: "bg-navy text-paper border-copper",
  copper: "bg-copper text-white border-navy/20",
  paper: "bg-paper text-navy border-navy/20",
};

export function InitialAvatar({ name, size = "md", variant = "navy" }: Props) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div
      className={`flex items-center justify-center rounded-full border-2 font-serif font-bold ${SIZES[size]} ${VARIANTS[variant]}`}
      aria-label={name}
    >
      {initials}
    </div>
  );
}
