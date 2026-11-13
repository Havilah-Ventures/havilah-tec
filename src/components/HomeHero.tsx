"use client";

import { motion } from "framer-motion";
import { Button } from "./Button";
import { FadeIn } from "./FadeIn";
import { FlowRevenueFrame } from "./FlowRevenueFrame";
import { siteConfig } from "@/lib/site";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-[#070B14]">
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

      <div className="relative mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <FadeIn className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.32em] text-[#E0BC6A]">
            {siteConfig.heroEyebrow}
          </p>
          <h1 className="mt-6 text-balance font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            {siteConfig.tagline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#C7CEDA]">
            {siteConfig.heroSubline}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact" variant="solid">
              Discuss a business challenge
            </Button>
            <Button href="#lines" variant="ghost">
              See the three lines
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.15} className="mt-16">
          <FlowRevenueFrame />
        </FadeIn>
      </div>
    </section>
  );
}
