"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./Button";
import { FadeIn } from "./FadeIn";
import { siteConfig } from "@/lib/site";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        animate={{
          background: [
            "radial-gradient(circle at 20% 20%, rgba(200,162,74,0.12), transparent 45%), radial-gradient(circle at 80% 0%, rgba(167,171,179,0.08), transparent 40%)",
            "radial-gradient(circle at 80% 30%, rgba(200,162,74,0.14), transparent 45%), radial-gradient(circle at 10% 10%, rgba(167,171,179,0.1), transparent 40%)",
            "radial-gradient(circle at 20% 20%, rgba(200,162,74,0.12), transparent 45%), radial-gradient(circle at 80% 0%, rgba(167,171,179,0.08), transparent 40%)",
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-14 px-6 py-24 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-32">
        <FadeIn className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.32em] text-gold">
            {siteConfig.heroEyebrow}
          </p>
          <h1 className="mt-6 text-balance font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            {siteConfig.tagline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
            {siteConfig.heroSubline}
          </p>
          <p className="mt-4 text-sm text-secondary">
            {siteConfig.legalName} · A {siteConfig.parentName} company
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/services/diagnostic">See the diagnostic</Button>
            <Button href="/contact" variant="ghost">
              Start an engagement
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.15} className="flex justify-center lg:justify-end">
          <div className="rounded-full border border-gold/20 bg-white/[0.02] p-8">
            <Image
              src="/logo/havilah-seal-primary.svg"
              alt="Havilah seal"
              width={180}
              height={180}
              priority
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
