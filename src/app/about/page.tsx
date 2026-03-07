import { Metadata } from "next";
import Breadcrumbs, { breadcrumbSchema } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about WalkingPadPicks — an independent review site dedicated to helping you find the best walking pad for your home office.",
  alternates: { canonical: "https://walking-pad-site.vercel.app/about" },
};

export default function AboutPage() {
  const schema = breadcrumbSchema([{ name: "About", url: "/about" }]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <Breadcrumbs items={[{ label: "About" }]} />
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8">
          About WalkingPadPicks
        </h1>
        <div className="prose">
          <p>
            WalkingPadPicks is an independent review and guide site focused
            exclusively on walking pads and under-desk treadmills. We started
            this site because we noticed how difficult it was to find reliable,
            unbiased information about these products — most review sites lump
            walking pads in with full-sized treadmills, missing the nuances that
            matter to desk workers.
          </p>
          <h2>Our Mission</h2>
          <p>
            Our goal is simple: help you find the right walking pad for your
            workspace, budget, and lifestyle. We research, compare, and evaluate
            walking pads so you can make an informed purchase without spending
            hours reading conflicting reviews.
          </p>
          <h2>How We Review</h2>
          <p>
            Every walking pad we recommend goes through a thorough evaluation
            process. We consider belt size, motor quality, noise levels, build
            quality, weight capacity, portability, app features, and real-world
            user feedback. We cross-reference manufacturer specs with verified
            buyer reviews from multiple retailers to ensure accuracy.
          </p>
          <p>
            We do not accept payment from manufacturers for positive reviews. Our
            recommendations are based on independent evaluation. When we link to
            products, we may earn a small affiliate commission at no cost to you
            — this helps fund our research and keeps the site running. See our{" "}
            <a href="/affiliate-disclosure">affiliate disclosure</a> for full
            details.
          </p>
          <h2>The Team</h2>
          <p>
            WalkingPadPicks is run by a small team of remote workers, fitness
            enthusiasts, and product researchers who use walking pads daily. We
            know the difference between a product that looks good on paper and
            one that actually performs well under a standing desk — because we
            use them ourselves.
          </p>
          <h2>Get in Touch</h2>
          <p>
            Have a question, suggestion, or correction? We would love to hear
            from you. Visit our <a href="/contact">contact page</a> to reach
            out.
          </p>
        </div>
      </div>
    </>
  );
}
