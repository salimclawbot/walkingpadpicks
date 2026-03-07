import { Metadata } from "next";
import Breadcrumbs, { breadcrumbSchema } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description:
    "WalkingPadPicks affiliate disclosure. How we earn revenue and maintain editorial independence.",
  alternates: {
    canonical: "https://walking-pad-site.vercel.app/affiliate-disclosure",
  },
};

export default function AffiliateDisclosurePage() {
  const schema = breadcrumbSchema([
    { name: "Affiliate Disclosure", url: "/affiliate-disclosure" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <Breadcrumbs items={[{ label: "Affiliate Disclosure" }]} />
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8">
          Affiliate Disclosure
        </h1>
        <div className="prose">
          <p>
            <em>Last updated: March 2026</em>
          </p>
          <p>
            WalkingPadPicks is a participant in affiliate advertising programs
            designed to provide a means for sites to earn revenue by advertising
            and linking to retail partners. This page explains how our affiliate
            relationships work and how they do — and do not — affect our
            editorial content.
          </p>

          <h2>How Affiliate Links Work</h2>
          <p>
            When you click on certain links on our website and make a purchase,
            we may receive a small commission from the retailer. This commission
            comes at no additional cost to you — the price you pay is the same
            whether you use our link or go directly to the retailer.
          </p>
          <p>
            Affiliate links on our site are typically found in product reviews,
            buyer&apos;s guides, and comparison articles. These links direct you
            to retailers such as Amazon, where you can purchase the product we
            are discussing.
          </p>

          <h2>Our Editorial Independence</h2>
          <p>
            Our affiliate relationships do not influence our editorial content,
            product ratings, or recommendations. We follow strict editorial
            guidelines:
          </p>
          <ul>
            <li>
              <strong>We do not accept payment for positive reviews.</strong> No
              manufacturer or retailer can pay us to recommend their product.
            </li>
            <li>
              <strong>
                We do not let affiliate commissions influence rankings.
              </strong>{" "}
              Products are ranked based on performance, value, and suitability —
              not commission rates.
            </li>
            <li>
              <strong>We recommend products we genuinely believe in.</strong> If
              a product does not meet our standards, we will not recommend it
              regardless of potential affiliate revenue.
            </li>
            <li>
              <strong>We disclose affiliate relationships transparently.</strong>{" "}
              Articles containing affiliate links include a disclosure notice.
            </li>
          </ul>

          <h2>Affiliate Programs We Participate In</h2>
          <p>
            WalkingPadPicks participates in the following affiliate programs,
            among others:
          </p>
          <ul>
            <li>
              <strong>Amazon Associates Program:</strong> As an Amazon Associate,
              we earn from qualifying purchases. Amazon and the Amazon logo are
              trademarks of Amazon.com, Inc. or its affiliates.
            </li>
            <li>
              <strong>Other retail affiliate programs:</strong> We may
              participate in additional affiliate programs with sporting goods
              retailers, direct-to-consumer brands, and other relevant partners.
            </li>
          </ul>

          <h2>Why We Use Affiliate Links</h2>
          <p>
            Running a review website requires significant time, research, and
            resources. Affiliate commissions help fund our operations, including
            product research, content creation, website hosting, and ongoing
            maintenance. Without affiliate revenue, we would not be able to
            provide free, in-depth reviews and guides to our readers.
          </p>

          <h2>Your Choice</h2>
          <p>
            You are never obligated to use our affiliate links. If you prefer,
            you can navigate directly to the retailer&apos;s website to make
            your purchase. We appreciate when readers use our links, as it
            supports our work at no extra cost to you — but the choice is always
            yours.
          </p>

          <h2>Questions?</h2>
          <p>
            If you have any questions about our affiliate relationships or
            editorial policies, please contact us at hello@walkingpadpicks.com or
            visit our <a href="/contact">contact page</a>.
          </p>
        </div>
      </div>
    </>
  );
}
