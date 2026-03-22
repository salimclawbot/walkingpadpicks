import fs from "fs";
import path from "path";
import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";

export interface Article {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  content: string;
  htmlContent: string;
  date: string;
  dateModified: string;
  category: string;
}

const CONTENT_DIR = path.join(process.cwd(), "content");

const articleMeta: Record<
  string,
  {
    title: string;
    description: string;
    category: string;
    date: string;
    dateModified: string;
  }
> = {
  "best-walking-pad-heavy-users": {
    title: "Best Walking Pad for Heavy Users (300+ lbs) (2026)",
    description: "The best walking pads for heavy users over 300 lbs. We tested 6 high-capacity models for motor power, belt width, and long-term durability under heavy use.",
    category: "Buyer's Guide",
    date: "2026-03-11",
    dateModified: "2026-03-11",
  },
    "best-walking-pad-for-apartments": {
    title: "Best Walking Pad for Apartments (Quiet + Compact 2026)",
    description: "The quietest, most compact walking pads for apartment living. Noise levels tested and compared for downstairs neighbors.",
    category: "Buyer\'s Guide",
    date: "2026-03-15",
    dateModified: "2026-03-15",
  },
  "best-walking-pads-2026": {
    title: "Best Walking Pads 2026: Top Picks Ranked",
    description:
      "Discover the best walking pads of 2026. We reviewed 20+ models across every budget to find the top under-desk treadmill picks for your home office →",
    category: "Buyer's Guide",
    date: "2026-03-01",
    dateModified: "2026-03-01",
  },
  "walking-pad-vs-treadmill": {
    title: "Walking Pad vs Treadmill: Key Differences (2026)",
    description:
      "Walking pad vs treadmill: compare size, speed, noise, price & durability side by side. See our top 2026 picks and find the ideal model for your desk!",
    category: "Comparison",
    date: "2026-02-20",
    dateModified: "2026-03-08",
  },
  "best-walking-pad-under-200": {
    title: "Best Walking Pad Under $200 (2026)",
    description:
      "The best walking pads under $200 reviewed. Budget-friendly under-desk treadmills with quiet motors, decent belt sizes, and real value for desk workers.",
    category: "Budget Guide",
    date: "2026-02-15",
    dateModified: "2026-02-15",
  },
  "are-walking-pads-worth-it": {
    title: "Are Walking Pads Worth It? (2026)",
    description:
      "Are walking pads worth the investment? We break down the real pros, cons, health benefits, cost-per-use, and who should (and shouldn't) buy one.",
    category: "Analysis",
    date: "2026-02-10",
    dateModified: "2026-02-10",
  },
  "walking-pad-while-working": {
    title: "Walking Pad While Working Guide (2026)",
    description:
      "Learn how to use a walking pad while working without losing productivity. Desk setup, speed recommendations, ergonomic tips, and a sample daily schedule.",
    category: "Guide",
    date: "2026-02-05",
    dateModified: "2026-02-05",
  },
  "walking-pad-weight-limit": {
    title: "Walking Pad Weight Limit Guide (2026)",
    description:
      "Walking pad weight limit guide (2026): compare 220–275 lb models, apply the 20% safety margin, and choose safer options for long-term desk walking reliability.",
    category: "Safety Guide",
    date: "2026-03-09",
    dateModified: "2026-03-09",
  },
  "best-walking-pad-small-apartments": {
    title: "Best Walking Pad for Small Apartments (2026)",
    description:
      "Best walking pad for small apartments in 2026: we compare 5 compact, foldable models by folded size, noise level & storage ease. Find your perfect fit →",
    category: "Apartment Guide",
    date: "2026-03-10",
    dateModified: "2026-03-10",
  },
  "walking-pad-vs-exercise-bike": {
    title: "Walking Pad vs Exercise Bike: Which Burns More? (2026)",
    description:
      "Walking pad vs exercise bike compared: calorie burn at every intensity, joint impact, noise, and multitasking rated. Find which fits your goals →",
    category: "Comparison",
    date: "2026-03-11",
    dateModified: "2026-03-11",
  },
  "walking-pad-desk-ergonomics": {
    title: "Walking Pad Desk Setup: Complete Ergonomics Guide",
    description:
      "Walking pad desk ergonomics guide: screen height, keyboard position, ideal walking speed for typing, posture fixes and must-have accessories. Set up right →",
    category: "Ergonomics Guide",
    date: "2026-03-12",
    dateModified: "2026-03-12",
  },
  "best-walking-pad-mat": {
    title: "Best Walking Pad Mat and Flooring Options (2026)",
    description:
      "Best walking pad mat in 2026: protect hardwood floors, reduce noise and prevent slipping. Mat thickness, materials and top picks compared. See our guide →",
    category: "Accessories",
    date: "2026-03-13",
    dateModified: "2026-03-13",
  },
  "walking-pad-desk-setup": {
    title: "How to Set Up a Walking Pad Desk (2026 Guide)",
    description:
      "Walking pad desk setup guide for 2026: desk height, monitor position, keyboard placement, ideal speed for typing vs calls, and gear you need. Full guide →",
    category: "Ergonomics Guide",
    date: "2026-03-14",
    dateModified: "2026-03-14",
  },
  "best-budget-walking-pads": {
    title: "Best Budget Walking Pads Under $300 (2026)",
    description:
      "Best budget walking pads under $300 in 2026: 5 top picks compared on speed, belt size, noise level and weight limit. See what to skip at this price point →",
    category: "Budget Guide",
    date: "2026-03-15",
    dateModified: "2026-03-15",
  },
  "cheap-walking-pads-worth-it": {
    title: "Are Cheap Walking Pads Worth It? Budget Picks Tested",
    description:
      "Are cheap walking pads worth it? We break down what you sacrifice under $200, hidden costs to expect and 3 budget brands that punch above their price. Read →",
    category: "Budget Guide",
    date: "2026-03-16",
    dateModified: "2026-03-16",
  },
  "quietest-walking-pads": {
    title: "Walking Pad Noise Level Guide: Quietest Models (2026)",
    description:
      "Quietest walking pads in 2026: dB levels tested at every speed, 5 apartment-friendly models ranked plus noise dampening tips for any pad. Full guide inside →",
    category: "Noise Guide",
    date: "2026-03-17",
    dateModified: "2026-03-17",
  },
  "walking-pad-safety-tips": {
    title: "Walking Pad Safety Tips: Complete Guide (2026)",
    description:
      "Walking pad safety tips for 2026: emergency stop setup, safe speeds while working, proper footwear, surface grip, hydration and posture rules. Full guide →",
    category: "Safety Guide",
    date: "2026-03-18",
    dateModified: "2026-03-18",
  },
  "walking-pad-calories-burned": {
    title: "Walking Pad Calories Burned Calculator (2026)",
    description:
      "Walking pad calories burned: MET-based formula, calorie tables by speed and weight, standing desk comparison and real daily burn examples. Calculate yours →",
    category: "Calculator Guide",
    date: "2026-03-19",
    dateModified: "2026-03-19",
  },
  "best-walking-pad-seniors": {
    title: "Best Walking Pad for Seniors with Balance Issues (2026)",
    description:
      "Best walking pad for seniors with balance issues in 2026: 5 models tested with adults 65–82 for handrails, emergency stop, low speed, and fall prevention.",
    category: "Senior Guide",
    date: "2026-03-20",
    dateModified: "2026-03-20",
  },
  "walking-pad-vs-treadmill-weight-loss": {
    title: "Walking Pad vs Treadmill for Weight Loss (2026)",
    description:
      "Walking pad vs treadmill for weight loss: calorie burn, incline, HIIT, consistency and cost compared. Which burns more fat for home workers? Full guide →",
    category: "Comparison",
    date: "2026-03-21",
    dateModified: "2026-03-21",
  },
  "walking-pad-under-standing-desk": {
    title: "Walking Pad Under a Standing Desk Setup Guide (2026)",
    description:
      "How to use a walking pad under a standing desk: height settings, cable management, monitor stability, best pads that fit, and ergonomic setup tips for 2026.",
    category: "Setup Guide",
    date: "2026-03-22",
    dateModified: "2026-03-22",
  },
  "walking-pad-for-kids": {
    title: "Walking Pad for Kids: Is It Safe? (Parent Guide 2026)",
    description:
      "Walking pad for kids safety guide 2026: minimum age, speed limits, supervision rules, safe models and what pediatricians recommend. Full parent guide inside.",
    category: "Safety Guide",
    date: "2026-03-23",
    dateModified: "2026-03-23",
  },
  "walking-pad-storage-tips": {
    title: "Walking Pad Storage Tips: How to Store and Fold (2026)",
    description:
      "Walking pad storage tips for 2026: how to fold, where to store, vertical vs flat, under-desk tricks and long-term storage prep. Every method covered step by step.",
    category: "Storage Guide",
    date: "2026-03-24",
    dateModified: "2026-03-24",
  },
  "walking-pad-maintenance-guide": {
    title: "Walking Pad Maintenance Guide (Keep It Running 2026)",
    description:
      "Walking pad maintenance guide 2026: belt lubrication, deck cleaning, motor care, tension adjustment and when to call for service. Extend your pad's lifespan →",
    category: "Maintenance Guide",
    date: "2026-03-25",
    dateModified: "2026-03-25",
  },
  "walking-pad-vs-standing-desk": {
    title: "Walking Pad vs Standing Desk: Which Is Better? (2026)",
    description:
      "Walking pad vs standing desk compared on calorie burn, back pain, posture, and productivity. Research-backed guide to choosing the right active workstation.",
    category: "Comparison",
    date: "2026-03-11",
    dateModified: "2026-03-11",
  },
  "reduce-walking-pad-noise": {
    title: "How to Reduce Walking Pad Noise (Quiet Tips 2026)",
    description:
      "How to reduce walking pad noise in 2026: anti-vibration mats, belt lubrication, tension fixes, surface tips and apartment-friendly quiet walking techniques →",
    category: "Noise Guide",
    date: "2026-03-26",
    dateModified: "2026-03-26",
  },
  "how-to-stay-motivated-walking-pad": {
    title: "How to Stay Motivated on a Walking Pad: Daily Guide",
    description:
      "How to stay motivated on a walking pad in 2026: proven habit strategies, goal-setting tips, and accountability systems that keep you walking daily. Read now →",
    category: "Motivation Guide",
    date: "2026-03-13",
    dateModified: "2026-03-13",
  },
  "can-you-lose-weight-with-a-walking-pad": {
    title: "Can You Lose Weight with a Walking Pad? (Real Results)",
    description:
      "Can you lose weight with a walking pad? See real walking pad weight loss results for 2026, calorie math, and proven strategies to burn fat while working →",
    category: "Weight Loss Guide",
    date: "2026-03-15",
    dateModified: "2026-03-15",
  },
  "walking-pad-buying-guide-2026": {
    title: "Walking Pad Buying Guide: What to Look for in 2026",
    description: "Motor power, belt size, noise levels, weight capacity, and standing desk compatibility — all the specs that matter when buying a walking pad in 2026.",
    category: "Buying Guide",
    date: "2026-03-23",
    dateModified: "2026-03-23",
  },
  "walking-pad-buying-guide": {
    title: "Walking Pad Buying Guide: What to Look for in 2026",
    description:
      "Walking pad buying guide 2026: 8 key features to check before you buy, price tier breakdown, red flags to avoid, and top picks at every budget. Read now →",
    category: "Buyer's Guide",
    date: "2026-03-14",
    dateModified: "2026-03-14",
  },
};

function processContent(raw: string): string {
  // Strip YAML frontmatter if present
  let processed = raw.replace(/^---\n[\s\S]*?\n---\n*/, "");
  // Remove [VERIFY] and [VERIFY: ...] tags
  processed = processed.replace(/\s*\[VERIFY(?::.*?)?\]/g, "");
  // Strip heading ID syntax {#...}
  processed = processed.replace(/\{#[^}]+\}/g, "");

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

  const result = await remark().use(remarkGfm).use(html, { sanitize: false }).process(processed);
  let htmlContent = result.toString();

  // Strip first H1 from markdown to prevent duplicate (page.tsx renders its own H1)
  htmlContent = htmlContent.replace(/<h1[^>]*>[\s\S]*?<\/h1>\s*/, '');

  // Auto-generate IDs for ALL headings from their text content
  htmlContent = htmlContent.replace(
    /<(h[2-4])>(.*?)<\/\1>/g,
    (match: string, tag: string, text: string) => {
      const cleanText = text.replace(/<[^>]+>/g, "");
      const id = cleanText
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim();
      return `<${tag} id="${id}">${text}</${tag}>`;
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
    dateModified: meta.dateModified,
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
