export async function GET() {
  const body = `# WalkingPadPicks

> Reviewed walking pad and under-desk treadmill buying guides with affiliate product recommendations.

## Editorial signals
- Site: https://www.walkingpadpicks.com
- About: https://www.walkingpadpicks.com/about
- Affiliate Disclosure: https://www.walkingpadpicks.com/affiliate-disclosure
- Editorial Guidelines: https://www.walkingpadpicks.com/editorial-guidelines
- Privacy Policy: https://www.walkingpadpicks.com/privacy
- Contact: https://www.walkingpadpicks.com/contact

## Contact
- hello@walkingpadpicks.com
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
