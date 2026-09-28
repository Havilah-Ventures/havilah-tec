import Link from "next/link";
import { legalLinks, navLinks, serviceLines, servicePath, siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-navy-deep">
      <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1.3fr_0.9fr_0.9fr]">
          <div>
            <p className="font-display text-base tracking-[0.2em] text-white">
              HAVILAH TECHNOLOGIES
            </p>
            <p className="mt-4 max-w-md text-sm leading-7 text-secondary">
              {siteConfig.operatingFocus}. {siteConfig.serviceTagline}
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.18em] text-gold/80">
              A {siteConfig.parentName} company
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-gold">
              Services
            </p>
            <ul className="mt-4 space-y-3">
              {serviceLines.map((line) => (
                <li key={line.id}>
                  <Link
                    href={servicePath(line.id)}
                    className="text-sm text-secondary transition-colors hover:text-white"
                  >
                    {line.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-gold">
              Firm
            </p>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-gold">
              Contact
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-4 block text-sm text-secondary transition-colors hover:text-gold"
            >
              {siteConfig.email}
            </a>
            <a
              href={siteConfig.url}
              className="mt-3 block text-sm text-secondary transition-colors hover:text-white"
            >
              {siteConfig.name}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-secondary">
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-secondary transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
