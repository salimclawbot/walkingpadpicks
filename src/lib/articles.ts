import fs from "fs";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

export interface Article {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  content: string;
  htmlContent: string;
  date: string;
  category: string;
}

const CONTENT_DIR = path.join(process.cwd(), "content");

const articleMeta: Record<
  string,
  { title: string; description: string; category: string; date: string }
> = {
  "best-walking-pads-2026": {
    title: "Best Walking Pads of 2026: Ultimate Buyer's Guide",
    description:
      "Discover the best walking pads of 2026. We reviewed 20+ models across every budget to find the top under-desk treadmills for home offices and standing desks.",
    category: "Buyer's Guide",
    date: "2026-03-01",
  },
  "walking-pad-vs-treadmill": {
    title: "Walking Pad vs Treadmill: Key Differences (2026)",
    description:
      "Walking pad vs treadmill: which is better in 2026? We compare size, speed, noise, price, and durability side by side to help you choose the right one.",
    category: "Comparison",
    date: "2026-02-20",
  },
  "best-walking-pad-under-200": {
    title: "Best Walking Pad Under $200: Budget Picks That Actually Work",
    description:
      "The best walking pads under $200 reviewed. Budget-friendly under-desk treadmills with quiet motors, decent belt sizes, and real value for desk workers.",
    category: "Budget Guide",
    date: "2026-02-15",
  },
  "are-walking-pads-worth-it": {
    title: "Are Walking Pads Worth It? An Honest Assessment",
    description:
      "Are walking pads worth the investment? We break down the real pros, cons, health benefits, cost-per-use, and who should (and shouldn't) buy one.",
    category: "Analysis",
    date: "2026-02-10",
  },
  "walking-pad-while-working": {
    title:
      "How to Use a Walking Pad While Working: The Complete Productivity Guide",
    description:
      "Learn how to use a walking pad while working without losing productivity. Desk setup, speed recommendations, ergonomic tips, and a sample daily schedule.",
    category: "Guide",
    date: "2026-02-05",
  },
};

function processContent(raw: string): string {
  // Remove [VERIFY] and [VERIFY: ...] tags
  let processed = raw.replace(/\s*\[VERIFY(?::.*?)?\]/g, "");

  // Replace [INTERNAL: slug] with proper links
  // Handle: [INTERNAL: slug](link text)
  processed = processed.replace(
    /\[INTERNAL:\s*([\w-]+)\]\((.*?)\)/g,
    (_, slug, text) => {
      return `[${text}](/${slug})`;
    }
  );

  // Handle standalone [INTERNAL: slug]
  processed = processed.replace(/\[INTERNAL:\s*([\w-]+)\]/g, (_, slug) => {
    const meta = articleMeta[slug];
    const linkText = meta ? meta.title : slug;
    return `[${linkText}](/${slug})`;
  });

  // Handle [CTA: text] -> styled button link
  processed = processed.replace(/\[CTA:\s*(.*?)\]/g, (_, text) => {
    return `<a class="cta-button" href="#">${text}</a>`;
  });

  // Handle [**Check Price on Amazon →**] style links
  processed = processed.replace(
    /\[\*\*Check Price on Amazon →\*\*\]/g,
    '<a class="cta-button" href="#">Check Price on Amazon</a>'
  );

  // Handle [affiliate disclosure]
  processed = processed.replace(
    /\[affiliate disclosure\]/g,
    "[affiliate disclosure](/affiliate-disclosure)"
  );

  // Remove the first H1 heading (we render it separately)
  processed = processed.replace(/^#\s+.*\n+/, "");

  return processed;
}

export async function getArticle(slug: string): Promise<Article | null> {
  const meta = articleMeta[slug];
  if (!meta) return null;

  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const processed = processContent(raw);

  const result = await remark().use(html, { sanitize: false }).process(processed);
  let htmlContent = result.toString();

  // Add IDs to headings for anchor links
  const headingIdMap: Record<string, string> = {
    "What Is a Walking Pad?": "what-is-a-walking-pad",
    "What Is an Under-Desk Treadmill?": "what-is-an-under-desk-treadmill",
    "Walking Pad vs Treadmill: Side-by-Side Comparison Table": "side-by-side-comparison",
    "Detailed Breakdown: Walking Pad vs Under-Desk Treadmill": "detailed-breakdown",
    "Pros and Cons: Walking Pad": "pros-cons-walking-pad",
    "Pros and Cons: Under-Desk Treadmill": "pros-cons-treadmill",
    "Who Should Buy a Walking Pad?": "who-should-buy-walking-pad",
    "Who Should Buy an Under-Desk Treadmill?": "who-should-buy-treadmill",
    'The "Hybrid" Category: Walking Pads With Handles': "hybrid-category",
    "The &#x22;Hybrid&#x22; Category: Walking Pads With Handles": "hybrid-category",
    "Key Factors to Consider Before Buying": "key-factors",
    "Frequently Asked Questions": "faq",
    "The Bottom Line: Walking Pad vs Under-Desk Treadmill": "bottom-line",
  };

  htmlContent = htmlContent.replace(
    /<(h[23])>(.*?)<\/\1>/g,
    (match, tag, text) => {
      const id = headingIdMap[text];
      if (id) return `<${tag} id="${id}">${text}</${tag}>`;
      return match;
    }
  );

  // Extract first paragraph as excerpt
  const excerptMatch = raw.match(/\*\*(.*?)\*\*/);
  const excerpt = excerptMatch
    ? excerptMatch[1].replace(/\[VERIFY(?::.*?)?\]/g, "").replace(/\[INTERNAL:.*?\]/g, "").trim()
    : meta.description;

  return {
    slug,
    title: meta.title,
    description: meta.description,
    excerpt,
    content: processed,
    htmlContent,
    date: meta.date,
    category: meta.category,
  };
}

export function getAllSlugs(): string[] {
  return Object.keys(articleMeta);
}

export async function getAllArticles(): Promise<Article[]> {
  const articles: Article[] = [];
  for (const slug of getAllSlugs()) {
    const article = await getArticle(slug);
    if (article) articles.push(article);
  }
  return articles;
}
