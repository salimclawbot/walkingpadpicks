import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getArticle, getAllSlugs } from "@/lib/articles";
import Breadcrumbs, { breadcrumbSchema } from "@/components/Breadcrumbs";
import ComparisonVideo from "@/components/ComparisonVideo";
import Script from 'next/script';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = await getArticle(params.slug);
  if (!article) return {};

  const isVsTreadmill = params.slug === "walking-pad-vs-treadmill";
  const articleImages = [
    "https://walking-pad-site.vercel.app/images/walking-pad-vs-treadmill-hero.png",
    "https://walking-pad-site.vercel.app/images/walking-pad-vs-treadmill-infographic.png",
    "https://walking-pad-site.vercel.app/images/walking-pad-vs-treadmill-size-comparison.png",
    "https://walking-pad-site.vercel.app/images/walking-pad-vs-treadmill-lifestyle.png",
  ];

  return {
    title: { absolute: article.title },
    description: article.description,
    alternates: {
      canonical: `https://walking-pad-site.vercel.app/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://walking-pad-site.vercel.app/${article.slug}`,
      siteName: "WalkingPadPicks",
      type: "article",
      publishedTime: article.date,
      ...(isVsTreadmill && {
        images: articleImages.map((url) => ({ url })),
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      site: "@walkingpadpicks",
      ...(isVsTreadmill && {
        images: articleImages,
      }),
    },
  };
}

/* ---------- Table of Contents ---------- */

interface TocItem {
  id: string;
  text: string;
}

const vsTreadmillToc: TocItem[] = [
  { id: "what-is-a-walking-pad", text: "What Is a Walking Pad?" },
  { id: "what-is-an-under-desk-treadmill", text: "What Is an Under-Desk Treadmill?" },
  { id: "side-by-side-comparison", text: "Side-by-Side Comparison Table" },
  { id: "detailed-breakdown", text: "Detailed Breakdown" },
  { id: "pros-cons-walking-pad", text: "Pros & Cons: Walking Pad" },
  { id: "pros-cons-treadmill", text: "Pros & Cons: Under-Desk Treadmill" },
  { id: "who-should-buy-walking-pad", text: "Who Should Buy a Walking Pad?" },
  { id: "who-should-buy-treadmill", text: "Who Should Buy an Under-Desk Treadmill?" },
  { id: "hybrid-category", text: "The Hybrid Category" },
  { id: "key-factors", text: "Key Factors Before Buying" },
  { id: "faq", text: "FAQ" },
  { id: "bottom-line", text: "The Bottom Line" },
];

function TableOfContents({ items }: { items: TocItem[] }) {
  return (
          {faqSchema && (
        <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      {articleSchema && (
        <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      )}
<nav className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-8">
      <p className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">Table of Contents</p>
      <ol className="list-decimal list-inside space-y-1.5">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="text-teal-700 hover:text-teal-900 hover:underline text-sm"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* ---------- Comparison Table with Product Images ---------- */

interface ProductRow {
  name: string;
  type: "Walking Pad" | "Under-Desk Treadmill";
  maxSpeed: string;
  beltSize: string;
  weight: string;
  price: string;
  amazonQuery: string;
  imageSrc: string;
  imageAlt: string;
}

const comparisonProducts: ProductRow[] = [
  {
    name: "WalkingPad C2",
    type: "Walking Pad",
    maxSpeed: "3.7 mph",
    beltSize: "16\" x 40\"",
    weight: "33 lbs",
    price: "$249",
    amazonQuery: "WalkingPad+C2+walking+pad",
    imageSrc: "/images/products/walkingpad-c2.png",
    imageAlt: "WalkingPad C2 walking pad product image",
  },
  {
    name: "Sperax Walking Pad",
    type: "Walking Pad",
    maxSpeed: "4 mph",
    beltSize: "17\" x 42\"",
    weight: "44 lbs",
    price: "$199",
    amazonQuery: "Sperax+walking+pad",
    imageSrc: "/images/products/sperax.png",
    imageAlt: "Sperax walking pad product image",
  },
  {
    name: "UREVO 2-in-1",
    type: "Walking Pad",
    maxSpeed: "4 mph",
    beltSize: "16.5\" x 43\"",
    weight: "55 lbs",
    price: "$229",
    amazonQuery: "UREVO+2+in+1+walking+pad",
    imageSrc: "/images/products/urevo-2in1.png",
    imageAlt: "UREVO 2-in-1 walking pad product image",
  },
  {
    name: "Goplus 2-in-1",
    type: "Under-Desk Treadmill",
    maxSpeed: "6 mph",
    beltSize: "17\" x 45\"",
    weight: "60 lbs",
    price: "$329",
    amazonQuery: "Goplus+2+in+1+under+desk+treadmill",
    imageSrc: "/images/products/goplus-2in1.png",
    imageAlt: "Goplus 2-in-1 under-desk treadmill product image",
  },
  {
    name: "UMAY Under Desk",
    type: "Under-Desk Treadmill",
    maxSpeed: "6 mph",
    beltSize: "18\" x 47\"",
    weight: "66 lbs",
    price: "$379",
    amazonQuery: "UMAY+under+desk+treadmill",
    imageSrc: "/images/products/umay.png",
    imageAlt: "UMAY under-desk treadmill product image",
  },
  {
    name: "WalkingPad R2",
    type: "Under-Desk Treadmill",
    maxSpeed: "7.5 mph",
    beltSize: "18\" x 48\"",
    weight: "72 lbs",
    price: "$599",
    amazonQuery: "WalkingPad+R2+treadmill",
    imageSrc: "/images/products/walkingpad-r2.png",
    imageAlt: "WalkingPad R2 treadmill product image",
  },
];

function ComparisonTableWithProducts() {
  return (
    <div className="overflow-x-auto my-8">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-teal-600 text-white">
            <th className="p-3 text-left">Product</th>
            <th className="p-3 text-left">Type</th>
            <th className="p-3 text-center">Max Speed</th>
            <th className="p-3 text-center">Belt Size</th>
            <th className="p-3 text-center">Weight</th>
            <th className="p-3 text-center">Price</th>
            <th className="p-3 text-center">Link</th>
          </tr>
        </thead>
        <tbody>
          {comparisonProducts.map((p, i) => (
            <tr key={p.name} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="p-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.imageSrc}
                  alt={p.imageAlt}
                  width={150}
                  height={150}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="rounded-lg mx-auto border border-gray-200 object-cover"
                />
              </td>
              <td className="p-3 font-medium">{p.type}</td>
              <td className="p-3 text-center">{p.maxSpeed}</td>
              <td className="p-3 text-center">{p.beltSize}</td>
              <td className="p-3 text-center">{p.weight}</td>
              <td className="p-3 text-center font-semibold text-teal-700">{p.price}</td>
              <td className="p-3 text-center">
                <a
                  href={`https://www.amazon.com/s?k=${p.amazonQuery}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-block bg-teal-600 text-white text-xs font-semibold px-3 py-2 rounded hover:bg-teal-700 transition-colors"
                >
                  Check Price on Amazon
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ---------- FAQ Schema Data ---------- */

const faqBySlug: Record<string, { question: string; answer: string }[]> = {
  "walking-pad-vs-treadmill": [
  {
    question: "Is a walking pad the same as an under-desk treadmill?",
    answer: "Not exactly. A walking pad is a type of under-desk treadmill, but not all under-desk treadmills are walking pads. Walking pads are specifically the ultra-slim, portable, walking-only devices. Under-desk treadmills encompass a broader range of machines, including larger, faster, and more feature-rich models.",
  },
  {
    question: "What's the difference between a walking pad and a treadmill?",
    answer: "A traditional treadmill is a full-sized machine with a console, handrails, incline motor, and speeds up to 10-12 mph. A walking pad is a stripped-down, flat, portable device limited to walking speeds (usually under 4 mph) with no console or handrails. An under-desk treadmill falls between the two.",
  },
  {
    question: "Can I run on a walking pad?",
    answer: "No. Walking pads are designed exclusively for walking. Running on a walking pad is unsafe due to the short belt length, narrow width, and absence of handrails. If you want to run, choose an under-desk treadmill rated for jogging speeds or a traditional treadmill.",
  },
  {
    question: "Are walking pads worth it for weight loss?",
    answer: "Walking pads can absolutely support weight loss goals. Walking at 2-3 mph for several hours per day while working can burn 200-400+ calories depending on your weight and pace. The key advantage is consistency — because you're walking while doing something you'd be doing anyway (working), you're more likely to stick with it.",
  },
  {
    question: "How long do walking pads last?",
    answer: "Most quality walking pads last 2-4 years with regular use. Under-desk treadmills with stronger motors and frames may last 4-6 years. Longevity depends on usage intensity, user weight, maintenance (belt lubrication, keeping the surface clean), and build quality.",
  },
  {
    question: "Do walking pads use a lot of electricity?",
    answer: "No. Walking pads typically draw 200-500 watts during use, which is comparable to a few light bulbs. At average U.S. electricity rates, running a walking pad for 4 hours per day costs roughly $2-$5 per month.",
  },
  {
    question: "Can I use a walking pad on carpet?",
    answer: "Most manufacturers recommend using walking pads on hard, flat surfaces for stability and proper ventilation. If your workspace is carpeted, place a hard mat or plywood board underneath the walking pad. Using a walking pad directly on thick carpet can cause the motor to overheat and void your warranty.",
  },
  {
    question: "How loud are walking pads compared to under-desk treadmills?",
    answer: "Walking pads typically operate at 40-50 dB, roughly the volume of a quiet conversation. Under-desk treadmills range from 45-60 dB, depending on speed and model. At walking speeds (2-3 mph), the difference between the two is minimal — usually just a few decibels.",
  },
],
  "best-walking-pads-2026": [
    { question: "What is the best walking pad in 2026?", answer: "For most buyers, the best model balances quiet operation, reliable motor performance, and a belt size that matches your stride length and desk setup." },
    { question: "Are expensive walking pads always better?", answer: "Not always. Mid-range models often deliver the best value if they have dependable motors, stable belts, and strong warranty support." },
    { question: "What speed range is ideal for desk walking?", answer: "Most desk users stay around 1.2 to 2.5 mph for typing and meetings, with faster speeds reserved for dedicated walking breaks." },
  ],
  "best-walking-pad-under-200": [
    { question: "Can you get a good walking pad under $200?", answer: "Yes. You can find useful entry-level models under $200 if you accept tradeoffs in belt size, premium materials, and advanced features." },
    { question: "What tradeoffs should I expect under $200?", answer: "Expect smaller belts, simpler displays, and less refined build quality, while still getting practical walking support for lighter daily use." },
    { question: "Is under-$200 suitable for daily office walking?", answer: "It can be, especially for lighter users and moderate sessions, but heavier daily workloads usually benefit from stronger mid-range models." },
  ],
  "are-walking-pads-worth-it": [
    { question: "Are walking pads worth it for desk workers?", answer: "For many desk workers, yes. They help increase daily movement with lower friction than separate workout routines." },
    { question: "Do walking pads help with weight management?", answer: "They can support weight management by increasing daily calorie burn and improving consistency of light activity." },
    { question: "Who should skip buying a walking pad?", answer: "People needing running workouts, very high weight capacities, or commercial-grade durability may be better served by full treadmills." },
  ],
  "walking-pad-while-working": [
    { question: "What is the best speed for typing while walking?", answer: "Most people type best around 1.2 to 2.0 mph, with lower speeds for writing-heavy tasks and higher speeds for calls or reading." },
    { question: "Can walking while working hurt productivity?", answer: "It can if speed is too high or desk ergonomics are poor. With proper setup, many users maintain or improve focus." },
    { question: "Do I need a standing desk to use a walking pad?", answer: "Yes, an adjustable desk is strongly recommended so monitor and keyboard heights remain ergonomic while walking." },
  ],
  "walking-pad-weight-limit": [
    { question: "What is the safe weight margin for a walking pad?", answer: "Choose a model rated at least 20% above your body weight to account for dynamic force during normal walking." },
    { question: "Can I use a walking pad at the exact listed capacity?", answer: "It is not ideal for long-term reliability. Running at max capacity increases strain on motor, belt, and frame components." },
    { question: "When should I choose a treadmill instead?", answer: "If you are near the upper end of walking pad capacities or need higher durability, a full treadmill is usually the safer long-term choice." },
  ],
};

/* ---------- Article Content Splitter for Image Insertion ---------- */

function splitHtmlAt(html: string, marker: string): [string, string] {
  const idx = html.indexOf(marker);
  if (idx === -1) return [html, ""];
  return [html.slice(0, idx), html.slice(idx)];
}

function splitHtmlAtAny(html: string, markers: string[]): [string, string] {
  for (const marker of markers) {
    const idx = html.indexOf(marker);
    if (idx !== -1) return [html.slice(0, idx), html.slice(idx)];
  }
  return [html, ""];
}

/* ---------- Main Page ---------- */

export default async function ArticlePage({ params }: PageProps) {
  const article = await getArticle(params.slug);
  if (!article) notFound();

  const isVsTreadmill = params.slug === "walking-pad-vs-treadmill";

  const breadcrumbs = breadcrumbSchema([
    { name: article.title, url: `/${article.slug}` },
  ]);

  const imageBySlug: Record<string, string[]> = {
    "walking-pad-vs-treadmill": [
      "https://walking-pad-site.vercel.app/images/walking-pad-vs-treadmill-hero.png",
      "https://walking-pad-site.vercel.app/images/walking-pad-vs-treadmill-infographic.png",
      "https://walking-pad-site.vercel.app/images/walking-pad-vs-treadmill-size-comparison.png",
      "https://walking-pad-site.vercel.app/images/walking-pad-vs-treadmill-lifestyle.png",
    ],
    "best-walking-pads-2026": ["https://walking-pad-site.vercel.app/images/wp/best-2026/hero-best-2026.png"],
    "best-walking-pad-under-200": ["https://walking-pad-site.vercel.app/images/wp/under-200/hero-budget-picks.png"],
    "are-walking-pads-worth-it": ["https://walking-pad-site.vercel.app/images/wp/worth-it/hero-worth-it.png"],
    "walking-pad-while-working": ["https://walking-pad-site.vercel.app/images/wp/while-working/hero-desk-setup.png"],
    "walking-pad-weight-limit": ["https://walking-pad-site.vercel.app/images/wp/weight-limit/hero-safety-stability.png"],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.dateModified,
    author: {
      "@type": "Person",
      name: "Sarah Mitchell",
    },
    publisher: {
      "@type": "Organization",
      name: "Walking Pad Guide",
      logo: {
        "@type": "ImageObject",
        url: "https://walking-pad-site.vercel.app/icon.svg",
      },
    },
    image: imageBySlug[article.slug] ?? ["https://walking-pad-site.vercel.app/icon.svg"],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://walking-pad-site.vercel.app/${article.slug}`,
    },
  };

  const faqItems = faqBySlug[article.slug] ?? [];
  const faqSchema = faqItems.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : null;

  // For the vs-treadmill article, split content at key points to insert images
  let contentSections: { html: string; key: string }[] = [];
  if (isVsTreadmill) {
    const html = article.htmlContent;

    // Split: intro -> before comparison table
    const [intro, afterIntro] = splitHtmlAt(html, '<h2 id="side-by-side-comparison">Walking Pad vs Treadmill: Side-by-Side Comparison Table</h2>');

    // Split: skip original table section -> find next h2 (Detailed Breakdown)
    const [, afterTable] = splitHtmlAt(afterIntro, '<h2 id="detailed-breakdown">Detailed Breakdown');

    // Split detailed breakdown at "Noise Level" heading to insert size comparison image
    const [detailPart1, detailPart2] = splitHtmlAt(
      afterTable,
      "<h3 id=\"noise-level-db-comparison\">Noise Level: Walking Pad dB vs Treadmill dB</h3>"
    );

    // Split at "The Bottom Line" for lifestyle image
    const [middlePart, bottomLine] = splitHtmlAt(detailPart2, '<h2 id="bottom-line">The Bottom Line');

    contentSections = [
      { html: intro, key: "intro" },          // [0] intro
      { html: detailPart1, key: "detail-1" }, // [1] detailed breakdown first half
      { html: middlePart, key: "middle" },    // [2] middle content
      { html: bottomLine, key: "bottom-line" }, // [3] bottom line
    ];
  }

  const introHtml = contentSections[0]?.html ?? "";
  const [featuredSnippetHtml, introAfterSnippetHtml] = splitHtmlAtAny(introHtml, [
    "<p>If you're exploring desk walking",
    "<p>If you&#x27;re exploring desk walking",
    "<p>If you&#39;re exploring desk walking",
  ]);

  const detailHtml = contentSections[1]?.html ?? "";
  const sizeHeadingMarker = '<h3 id="size-portability-comparison">Size and Portability Comparison</h3>';
  const [detailBeforeSizeHeading, detailFromSizeHeading] = splitHtmlAt(detailHtml, sizeHeadingMarker);
  const detailAfterSizeHeading = detailFromSizeHeading.startsWith(sizeHeadingMarker)
    ? detailFromSizeHeading.slice(sizeHeadingMarker.length)
    : detailFromSizeHeading;
  const [sizeSectionRest, detailAfterSizeSection] = splitHtmlAt(detailAfterSizeHeading, "<h3>Speed and Exercise Intensity</h3>");

  const deskHeadingMarker = "<h3>Desk Compatibility</h3>";
  const [detailBeforeDeskHeading, detailFromDeskHeading] = splitHtmlAt(detailAfterSizeSection, deskHeadingMarker);
  const detailAfterDeskHeading = detailFromDeskHeading.startsWith(deskHeadingMarker)
    ? detailFromDeskHeading.slice(deskHeadingMarker.length)
    : detailFromDeskHeading;

  const h1 = isVsTreadmill
    ? "Walking Pad vs Treadmill: Which Is Better for You?"
    : article.title;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <Breadcrumbs items={[{ label: article.title }]} />

        <div className="mb-6">
          <span className="inline-block text-xs font-semibold text-teal-600 bg-teal-50 px-2 py-1 rounded">
            {article.category}
          </span>
          <span className="text-xs text-gray-400 ml-3">
            {new Date(article.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
          {h1}
        </h1>

        {isVsTreadmill && (
          <div className="text-sm text-gray-600 mb-8">
            <p>
              By the{" "}
              <Link href="/about" className="text-teal-700 hover:text-teal-900 hover:underline">
                WalkingPadPicks Editorial Team
              </Link>
            </p>
            <p className="mt-1">Last updated: March 8, 2026</p>
          </div>
        )}

        {isVsTreadmill && (
          <>
            {/* Intro featured snippet */}
            <div className="prose" dangerouslySetInnerHTML={{ __html: featuredSnippetHtml }} />

            {/* 30-second comparison video */}
            <ComparisonVideo />

            {/* Table of Contents */}
            <TableOfContents items={vsTreadmillToc} />

            {/* Intro section remainder */}
            {introAfterSnippetHtml && (
              <div className="prose" dangerouslySetInnerHTML={{ __html: introAfterSnippetHtml }} />
            )}

            {/* Hero image */}
            <figure className="my-8">
              <Image
                src="/images/walking-pad-vs-treadmill-hero.png"
                alt="Side-by-side comparison of a slim walking pad and a larger under-desk treadmill in a modern home office with a standing desk"
                width={1408}
                height={768}
                className="rounded-lg w-full h-auto"
                priority
              />
              <figcaption className="text-sm text-gray-600 mt-2">
                Walking pad (left) vs under-desk treadmill (right) in a home office setup.
              </figcaption>
            </figure>

            {/* Comparison table heading area - replace with custom table */}
            <h2 id="side-by-side-comparison" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Walking Pad vs Treadmill: Side-by-Side Comparison Table
            </h2>

            <ComparisonTableWithProducts />

            {/* Infographic after comparison table */}
            <figure className="my-8">
              <Image
                src="/images/walking-pad-vs-treadmill-infographic.png"
                alt="Infographic comparing walking pads and under-desk treadmills across seven categories"
                width={2816}
                height={1536}
                className="rounded-lg w-full h-auto"
              />
              <figcaption className="text-sm text-gray-600 mt-2">
                Key specs compared across 7 categories.
              </figcaption>
            </figure>

            {/* Detailed breakdown first half */}
            <div className="prose" dangerouslySetInnerHTML={{ __html: detailBeforeSizeHeading }} />
            <div className="prose" dangerouslySetInnerHTML={{ __html: sizeHeadingMarker }} />
            <div className="prose" dangerouslySetInnerHTML={{ __html: sizeSectionRest }} />

            <figure className="my-8">
              <Image
                src="/images/walking-pad-storage-folded.png"
                alt="Folded walking pad being stored under a sofa showing compact portable design"
                width={1408}
                height={768}
                className="rounded-lg w-full h-auto"
              />
              <figcaption className="text-sm text-gray-600 mt-2">
                Walking pads fold flat for easy storage under furniture.
              </figcaption>
            </figure>

            <div className="prose" dangerouslySetInnerHTML={{ __html: detailBeforeDeskHeading }} />
            <div className="prose" dangerouslySetInnerHTML={{ __html: deskHeadingMarker }} />

            <figure className="my-8">
              <Image
                src="/images/walking-pad-ergonomic-setup.png"
                alt="Ergonomic standing desk setup with a walking pad showing proper monitor and keyboard height"
                width={1408}
                height={768}
                className="rounded-lg w-full h-auto"
              />
              <figcaption className="text-sm text-gray-600 mt-2">
                Proper ergonomic setup: monitor at eye level, keyboard at elbow height, walking pad underneath.
              </figcaption>
            </figure>

            <div className="prose" dangerouslySetInnerHTML={{ __html: detailAfterDeskHeading }} />

            {/* Size comparison image */}
            <figure className="my-8">
              <Image
                src="/images/walking-pad-vs-treadmill-size-comparison.png"
                alt="Top-down view showing the size difference between a compact walking pad and a larger under-desk treadmill"
                width={1408}
                height={768}
                className="rounded-lg w-full h-auto"
              />
              <figcaption className="text-sm text-gray-600 mt-2">Top-down size comparison: walking pad (left) vs under-desk treadmill (right).</figcaption>
            </figure>

            {/* Middle content */}
            <div
              className="prose"
              dangerouslySetInnerHTML={{ __html: contentSections[2].html }}
            />

            {/* Bottom line section with lifestyle image */}
            <div className="prose">
              <div dangerouslySetInnerHTML={{ __html: contentSections[3].html }} />

              {/* Lifestyle image in conclusion */}
              <figure className="my-8">
                <Image
                  src="/images/walking-pad-vs-treadmill-lifestyle.png"
                  alt="Person walking on a slim walking pad under a standing desk in a small apartment"
                  width={1408}
                  height={768}
                  className="rounded-lg w-full h-auto"
                />
                <figcaption className="text-sm text-gray-600 mt-2">Walking while working in a compact home office setup.</figcaption>
              </figure>
            </div>
          </>
        )}

        {!isVsTreadmill && (
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: article.htmlContent }}
          />
        )}
      </article>
    </>
  );
}
