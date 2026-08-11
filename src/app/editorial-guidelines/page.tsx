import type { Metadata } from "next";

export const metadata: Metadata = { title: "Editorial Guidelines | Walking Pad Picks",
  description: "WalkingPadPicks publishes review standards, evidence checks, and ranking rules to keep recommendations transparent and measurable.",
  openGraph: {
    title: "Editorial Guidelines | Walking Pad Picks",
    description: "WalkingPadPicks publishes review standards, evidence checks, and ranking rules to keep recommendations transparent and measurable.",
    url: "https://walkingpadpicks.com/editorial-guidelines",
    siteName: "Walking Pad Picks",
    type: "website",
    images: [
      {
        url: "https://walkingpadpicks.com/editorial-hero.png",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Editorial Guidelines | Walking Pad Picks",
    description: "WalkingPadPicks publishes review standards, evidence checks, and ranking rules to keep recommendations transparent and measurable.",
    images: ["https://walkingpadpicks.com/editorial-hero.png"],
  }};

export default function EditorialGuidelinesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 space-y-6">
      <h1 className="text-3xl font-bold">Editorial Guidelines</h1>
      <p className="text-lg text-gray-600">How we research, write, and review content at Walking Pad Picks.</p>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Our Commitment to Accuracy</h2>
        <p>Every guide and review published on Walking Pad Picks is thoroughly researched before publication. Our writers draw on peer-reviewed research, expert interviews, and specification-based product comparison and independent owner feedback to ensure the information we provide about walking pads and desk fitness is accurate, up-to-date, and genuinely useful.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Editorial Independence</h2>
        <p>Our editorial team operates independently of our commercial relationships. While we may earn affiliate commissions when readers purchase products through our links, this never influences which products we recommend or how we compare them. Recommendations are based solely on research merit and reader benefit.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Review and Update Process</h2>
        <p>We review our articles regularly and update them when new products launch, research changes, or prices shift. Every article displays a &quot;Last Updated&quot; date so you always know how current the information is.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Corrections Policy</h2>
        <p>If you spot an error in our content, please <a href="/contact" className="text-blue-600 hover:underline">contact us</a>. We take accuracy seriously and will investigate and correct verified errors promptly.</p>
      </section>

      <p><a href="/" className="text-blue-600 hover:underline">← Back to Walking Pad Picks</a></p>
    </div>
  );
}
