export function getArticleVisual(slug: string, title: string) {
  return {
    src: `/images/articles/${slug}-hero.webp`,
    alt: `Walking pad equipment and setup illustrating ${title.replace(/\s*\(2026.*?\)\s*/g, " ").trim()}`,
  };
}
