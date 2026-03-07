import { Metadata } from "next";
import Breadcrumbs, { breadcrumbSchema } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the WalkingPadPicks team. Questions, suggestions, corrections, and partnership inquiries welcome.",
  alternates: { canonical: "https://walking-pad-site.vercel.app/contact" },
};

export default function ContactPage() {
  const schema = breadcrumbSchema([{ name: "Contact", url: "/contact" }]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <Breadcrumbs items={[{ label: "Contact" }]} />
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8">
          Contact Us
        </h1>
        <div className="prose">
          <p>
            We appreciate hearing from our readers. Whether you have a question
            about a walking pad review, want to suggest a product for us to
            evaluate, or need to report a correction, we are happy to help.
          </p>

          <h2>How to Reach Us</h2>
          <p>
            The best way to contact us is by email. Please send your inquiry to:
          </p>
          <p>
            <strong>hello@walkingpadpicks.com</strong>
          </p>
          <p>
            We aim to respond to all inquiries within 1-2 business days. Please
            include as much detail as possible so we can provide a helpful
            response.
          </p>

          <h2>Types of Inquiries</h2>
          <ul>
            <li>
              <strong>Product questions:</strong> Need help choosing a walking
              pad? Tell us about your desk setup, budget, and priorities, and we
              will point you in the right direction.
            </li>
            <li>
              <strong>Corrections:</strong> If you notice an error in any of our
              articles — whether it is a spec, price, or factual inaccuracy —
              please let us know so we can update it promptly.
            </li>
            <li>
              <strong>Product submissions:</strong> If you are a manufacturer or
              retailer and would like us to review your walking pad, send us the
              product details. Please note that we do not guarantee coverage, and
              all reviews are independent.
            </li>
            <li>
              <strong>Partnership inquiries:</strong> For advertising,
              sponsorship, or collaboration opportunities, please include
              &quot;Partnership&quot; in the subject line.
            </li>
          </ul>

          <h2>Editorial Policy</h2>
          <p>
            WalkingPadPicks maintains full editorial independence. We do not
            accept payment for reviews or allow sponsors to influence our
            recommendations. Our revenue comes from affiliate commissions on
            products we independently recommend. See our{" "}
            <a href="/affiliate-disclosure">affiliate disclosure</a> for more
            information.
          </p>
        </div>
      </div>
    </>
  );
}
