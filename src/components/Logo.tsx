import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  variant?: "lockup" | "seal";
  className?: string;
};

export function Logo({ variant = "lockup", className = "" }: LogoProps) {
  if (variant === "seal") {
    return (
      <Link href="/" className={`inline-flex items-center ${className}`}>
        <Image
          src="/logo/havilah-seal-primary.svg"
          alt="Havilah Technologies"
          width={40}
          height={40}
          priority
        />
      </Link>
    );
  }

  return (
    <Link href="/" className={`inline-flex items-center gap-3 ${className}`}>
      <Image
        src="/logo/havilah-seal-primary.svg"
        alt=""
        aria-hidden
        width={40}
        height={40}
        priority
        className="shrink-0"
      />
      <span className="font-display text-xs tracking-[0.22em] text-white sm:text-sm">
        HAVILAH TECHNOLOGIES
      </span>
    </Link>
  );
}
