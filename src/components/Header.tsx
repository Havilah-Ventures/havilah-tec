"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { primaryNav, serviceLines, servicePath } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const servicesActive = pathname.startsWith("/services");

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onDoc(event: MouseEvent) {
      if (!servicesRef.current?.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          <div
            ref={servicesRef}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className={`inline-flex items-center gap-1.5 text-sm tracking-wide transition-colors ${
                servicesActive ? "text-gold" : "text-secondary hover:text-white"
              }`}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              aria-controls="services-menu"
              onClick={() => setServicesOpen((value) => !value)}
            >
              Services
              <span aria-hidden className="text-[10px] text-gold">
                {servicesOpen ? "▴" : "▾"}
              </span>
            </button>

            {servicesOpen ? (
              <div
                id="services-menu"
                role="menu"
                className="absolute left-0 top-full z-50 w-[26rem] pt-3"
              >
                <ul className="rounded-sm border border-white/10 bg-navy py-2 shadow-2xl shadow-black/40">
                  {serviceLines.map((line) => {
                    const href = servicePath(line.id);
                    const active = pathname === href;
                    return (
                      <li key={line.id} role="none">
                        <Link
                          href={href}
                          role="menuitem"
                          className={`block px-4 py-2.5 transition-colors hover:bg-white/[0.04] ${
                            active ? "bg-gold/[0.06]" : ""
                          }`}
                        >
                          <span
                            className={`block text-sm ${
                              active ? "text-gold" : "text-white"
                            }`}
                          >
                            {line.name}
                          </span>
                          <span className="mt-0.5 block text-xs leading-5 text-secondary">
                            {line.navHint}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                  <li role="none" className="mt-1 border-t border-white/10">
                    <Link
                      href="/services"
                      role="menuitem"
                      className={`block px-4 py-2.5 text-sm transition-colors hover:bg-white/[0.04] ${
                        pathname === "/services" ? "text-gold" : "text-secondary"
                      }`}
                    >
                      All services
                    </Link>
                  </li>
                </ul>
              </div>
            ) : null}
          </div>

          {primaryNav.map((link) => {
            const active =
              pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide transition-colors ${
                  active ? "text-gold" : "text-secondary hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            href="/contact"
            className="rounded-sm border border-gold/40 bg-gold/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold/20"
          >
            Request a fit call
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded border border-white/15 px-3 py-2 text-sm text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="max-h-[80vh] overflow-y-auto border-t border-white/10 px-6 py-4 lg:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gold">
                Services
              </p>
              <ul className="mt-3 flex flex-col gap-3 border-l border-white/10 pl-4">
                {serviceLines.map((line) => {
                  const href = servicePath(line.id);
                  return (
                    <li key={line.id}>
                      <Link
                        href={href}
                        onClick={() => setOpen(false)}
                        className={`block text-sm ${
                          pathname === href ? "text-gold" : "text-secondary"
                        }`}
                      >
                        {line.name}
                      </Link>
                    </li>
                  );
                })}
                <li>
                  <Link
                    href="/services"
                    onClick={() => setOpen(false)}
                    className={`block text-sm ${
                      pathname === "/services" ? "text-gold" : "text-secondary"
                    }`}
                  >
                    All services
                  </Link>
                </li>
              </ul>
            </div>

            {primaryNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-sm tracking-wide ${
                  pathname === link.href ? "text-gold" : "text-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="pt-2 text-sm uppercase tracking-[0.18em] text-gold"
            >
              Request a fit call
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
