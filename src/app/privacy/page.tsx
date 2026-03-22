import { Metadata } from "next";
import Breadcrumbs, { breadcrumbSchema } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "WalkingPadPicks privacy policy. Learn how we collect, use, and protect your information.",
  alternates: {
    canonical: "https://www.walkingpadpicks.com/privacy",
  },
};

export default function PrivacyPolicyPage() {
  const schema = breadcrumbSchema([
    { name: "Privacy Policy", url: "/privacy" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8">
          Privacy Policy
        </h1>
        <div className="prose">
          <p>
            <em>Last updated: March 2026</em>
          </p>
          <p>
            WalkingPadPicks (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
            operates the walkingpadpicks.com website. This Privacy Policy
            explains how we collect, use, and protect your information when you
            visit our site.
          </p>

          <h2>Information We Collect</h2>
          <h3>Automatically Collected Information</h3>
          <p>
            When you visit our website, we may automatically collect certain
            information about your device and browsing activity, including:
          </p>
          <ul>
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Pages visited and time spent on each page</li>
            <li>Referring website or search engine</li>
            <li>Device type (desktop, mobile, tablet)</li>
          </ul>
          <p>
            This information is collected through cookies and similar
            technologies and is used to analyze site traffic, improve our
            content, and understand how visitors interact with our site.
          </p>

          <h3>Information You Provide</h3>
          <p>
            If you contact us via email, we collect the information you
            voluntarily provide, such as your name, email address, and the
            content of your message. We use this information solely to respond to
            your inquiry.
          </p>

          <h2>How We Use Your Information</h2>
          <p>We use collected information to:</p>
          <ul>
            <li>Operate and maintain our website</li>
            <li>Analyze traffic and usage patterns to improve content</li>
            <li>Respond to your inquiries and communications</li>
            <li>Detect and prevent technical issues or abuse</li>
          </ul>

          <h2>Cookies and Tracking Technologies</h2>
          <p>
            Our site uses cookies and similar tracking technologies. Cookies are
            small data files stored on your device that help us understand how
            you use our site. You can control cookie settings through your
            browser preferences. Disabling cookies may limit some site
            functionality.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            We may use third-party services that collect, monitor, and analyze
            visitor data, including:
          </p>
          <ul>
            <li>
              <strong>Analytics providers</strong> (such as Google Analytics) to
              understand site traffic and user behavior
            </li>
            <li>
              <strong>Affiliate networks</strong> (such as Amazon Associates) to
              track referral purchases. When you click an affiliate link on our
              site, the affiliate network may place cookies on your device to
              track the referral
            </li>
          </ul>
          <p>
            These third parties have their own privacy policies governing how
            they handle your data. We encourage you to review their policies.
          </p>

          <h2>Affiliate Links and Advertising</h2>
          <p>
            Our site contains affiliate links to products and services. When you
            click on these links and make a purchase, we may receive a
            commission. The affiliate networks track these transactions using
            cookies. See our{" "}
            <a href="/affiliate-disclosure">affiliate disclosure</a> for more
            details.
          </p>

          <h2>Data Security</h2>
          <p>
            We take reasonable measures to protect the information we collect.
            However, no method of transmission over the internet or electronic
            storage is completely secure. We cannot guarantee absolute security
            of your data.
          </p>

          <h2>Children&apos;s Privacy</h2>
          <p>
            Our website is not directed at children under the age of 13. We do
            not knowingly collect personal information from children. If we
            become aware that we have collected information from a child under
            13, we will take steps to delete that information.
          </p>

          <h2>Your Rights</h2>
          <p>
            Depending on your jurisdiction, you may have certain rights regarding
            your personal data, including the right to access, correct, or
            delete your information. To exercise these rights, please contact us
            at hello@walkingpadpicks.com.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will
            be posted on this page with an updated revision date. We encourage
            you to review this policy periodically.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at
            hello@walkingpadpicks.com or visit our{" "}
            <a href="/contact">contact page</a>.
          </p>
        </div>
      </div>
    </>
  );
}
