export type AmazonProductRecord = { id: string; asin: string; label: string };
export type AmazonProductGroup = { heading: string; similarQuery: string; products: AmazonProductRecord[] };

export const allowedAmazonProducts: Record<string, AmazonProductRecord> = {
  "WALK-PROD-VITALWALK-APOLLO11-ELITE": {
    "id": "WALK-PROD-VITALWALK-APOLLO11-ELITE",
    "asin": "B0FR4P113P",
    "label": "Vitalwalk Apollo 11 Elite walking pad"
  }
};

const groups: Record<string, AmazonProductGroup> = {
  "best-walking-pad-heavy-users": {
    "heading": "Walking pads referenced in this guide",
    "similarQuery": "compact walking pad treadmill",
    "products": [
      {
        "id": "WALK-PROD-VITALWALK-APOLLO11-ELITE",
        "asin": "B0FR4P113P",
        "label": "Vitalwalk Apollo 11 Elite walking pad"
      }
    ]
  }
};

export function getAmazonProductGroup(slug: string): AmazonProductGroup | null {
  const safetyHold = new Set([
    "incline-walking-pad-buying-guide",
    "walking-pad-hardwood-floor-guide",
    "walking-pad-low-clearance-desk-guide",
    "walking-pad-remote-vs-app-controls",
    "walking-pad-shared-office-guide",
  ]);
  if (safetyHold.has(slug)) return null;

  const exact = groups[slug];
  if (exact) return exact;

  const allowed = /(best-|review|buying-guide|mat|storage|noise|desk-setup|desk-ergonomics|while-working|maintenance|under-standing-desk|folding|quietest|worth-it|vs-treadmill|vs-regular-treadmill|vs-exercise-bike)/i.test(slug);
  const denied = /(kids|seniors|safety|calories|lose-weight|weight-loss|steps-per-hour|motivated)/i.test(slug);
  if (!allowed || denied) return null;

  return {
    heading: "Walking-pad products related to this guide",
    similarQuery: "walking pad under desk treadmill",
    products: [],
  };
}
