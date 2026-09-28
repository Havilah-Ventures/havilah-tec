import type { ReactNode } from "react";
import Link from "next/link";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-sm px-8 py-3 text-sm uppercase tracking-[0.22em] transition-colors";
  const styles =
    variant === "primary"
      ? "border border-gold/40 bg-gold/10 text-gold hover:bg-gold/20"
      : "border border-white/15 text-white hover:border-gold/30 hover:text-gold";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
