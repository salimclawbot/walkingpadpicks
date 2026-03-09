import Link from "next/link";
import { Metadata } from "next";
import { breadcrumbSchema } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: { absolute: "Walking Pad Guide: Best Picks (2026)" },
  description:
    "Find the best walking pad for your home office. Independent reviews, comparisons, and buyer's guides for under-desk treadmills and walking pads in 2026.",
  alternates: { canonical: "https://walking-pad-site.vercel.app" },
  openGraph: {
    title: "Walking Pad Guide: Best Picks (2026)",
    description:
      "Find the best walking pad for your home office. Independent reviews and buyer's guides for under-desk treadmills.",
    url: "https://walking-pad-site.vercel.app",
    type: "website",
  },
};

const articles = [
  {
    slug: "best-walking-pads-2026",
    title: "Best Walking Pads of 2026",
    description:
      "Our top 10 picks reviewed. Find the best walking pad for your budget, space, and work setup.",
    category: "Buyer's Guide",
  },
  {
    slug: "best-walking-pad-under-200",
    title: "Best Walking Pad Under $200",
    description:
      "Budget-friendly walking pads that actually deliver. Quality picks that won't break the bank.",
    category: "Budget Guide",
  },
  {
    slug: "walking-pad-vs-treadmill",
    title: "Walking Pad vs Treadmill",
    description:
      "What's the real difference? Size, speed, noise, and price compared side by side.",
    category: "Comparison",
  },
  {
    slug: "are-walking-pads-worth-it",
    title: "Are Walking Pads Worth It?",
    description:
      "An honest look at the pros, cons, costs, and who should (and shouldn't) buy one.",
    category: "Analysis",
  },
  {
    slug: "walking-pad-while-working",
    title: "Walking Pad While Working",
    description:
      "Desk setup, speed recommendations, and productivity tips for walking while you work.",
    category: "Guide",
  },
];

export default function HomePage() {
  const schemaData = breadcrumbSchema([]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 via-white to-teal-50 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block bg-teal-100 text-teal-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
            Updated for 2026
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Find Your Perfect{" "}
            <span className="text-teal-600">Walking Pad</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Independent reviews and buyer&apos;s guides for walking pads and
            under-desk treadmills. We test and compare so you can walk more and
            sit less.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/best-walking-pads-2026"
              className="inline-flex items-center justify-center bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
            >
              See Top Picks for 2026
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
            <Link
              href="/best-walking-pad-under-200"
              className="inline-flex items-center justify-center bg-white text-teal-700 border-2 border-teal-200 px-6 py-3 rounded-lg font-semibold hover:border-teal-400 transition-colors"
            >
              Budget Picks Under $200
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Walking Pad Guides
            </h2>
            <p className="mt-3 text-gray-600 max-w-xl mx-auto">
              Everything you need to know about choosing, using, and getting the
              most from your walking pad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/${article.slug}`}
                className="group block bg-white border border-gray-200 rounded-xl p-6 hover:border-teal-300 hover:shadow-lg transition-all duration-200"
              >
                <span className="inline-block text-xs font-semibold text-teal-600 bg-teal-50 px-2 py-1 rounded mb-3">
                  {article.category}
                </span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {article.description}
                </p>
                <span className="inline-flex items-center mt-4 text-sm font-medium text-teal-600">
                  Read guide
                  <svg
                    className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Intro / Why Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Why Use a Walking Pad?
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed max-w-2xl mx-auto">
            The average desk worker sits 8+ hours per day. A walking pad lets
            you add thousands of steps to your day without leaving your
            workspace. Walk during calls, emails, and meetings — your body and
            mind will thank you.
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                stat: "8,000+",
                label: "Daily steps while working",
              },
              {
                stat: "Under 50 dB",
                label: "Quiet enough for calls",
              },
              {
                stat: "From $150",
                label: "Budget-friendly options",
              },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-3xl font-extrabold text-teal-600">
                  {item.stat}
                </div>
                <div className="mt-1 text-sm text-gray-500">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
