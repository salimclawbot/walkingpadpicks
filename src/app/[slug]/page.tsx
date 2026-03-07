import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticle, getAllSlugs } from "@/lib/articles";
import Breadcrumbs, { breadcrumbSchema } from "@/components/Breadcrumbs";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = await getArticle(params.slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: `https://walking-pad-site.vercel.app/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://walking-pad-site.vercel.app/${article.slug}`,
      type: "article",
      publishedTime: article.date,
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const article = await getArticle(params.slug);
  if (!article) notFound();

  const breadcrumbs = breadcrumbSchema([
    { name: article.title, url: `/${article.slug}` },
  ]);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Organization",
      name: "WalkingPadPicks",
      url: "https://walking-pad-site.vercel.app",
    },
    publisher: {
      "@type": "Organization",
      name: "WalkingPadPicks",
      url: "https://walking-pad-site.vercel.app",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://walking-pad-site.vercel.app/${article.slug}`,
    },
  };

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

        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-8">
          {article.title}
        </h1>

        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: article.htmlContent }}
        />
      </article>
    </>
  );
}
