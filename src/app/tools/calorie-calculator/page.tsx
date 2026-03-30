"use client";

import { useState } from "react";
import Script from "next/script";

const GA_ID = "G-NELF06STQW";

const MET_MAP: Record<number, number> = { 2: 2.5, 3: 3.0, 4: 3.5, 5: 4.3, 6: 5.0 };
const STEPS_PER_KM = 1250;

const faqData = [
  {
    question: "How many calories does a walking pad burn per hour?",
    answer:
      "At 4 km/h, a 70kg person burns approximately 245 calories per hour on a walking pad. Heavier users and faster speeds increase this — use our calculator above for your personalised number.",
  },
  {
    question: "Is walking on a walking pad while working effective for weight loss?",
    answer:
      "Yes — consistently walking 2–3 hours per day at a low speed (3–4 km/h) can burn an extra 300–500 calories daily, contributing to meaningful weight loss over weeks and months without disrupting work.",
  },
  {
    question: "What speed should I set my walking pad for desk work?",
    answer:
      "2–3 km/h is the sweet spot for typing and video calls. Faster speeds reduce your ability to type accurately. Start slow and increase as you get comfortable.",
  },
  {
    question: "How many steps per hour does a walking pad give you?",
    answer:
      "At 3 km/h you'll accumulate approximately 3,750 steps per hour. At 4 km/h, around 5,000 steps per hour — meaning 2 hours of use easily hits the 10,000 step daily target.",
  },
  {
    question: "Do walking pads damage flooring?",
    answer:
      "Most walking pads include a protective mat. Using a purpose-made mat underneath prevents scratches and protects carpet. Always check the manufacturer's recommendation for your flooring type.",
  },
];

export default function CalorieCalculatorPage() {
  const [unit, setUnit] = useState<"kg" | "lbs">("kg");
  const [weight, setWeight] = useState("");
  const [speed, setSpeed] = useState(4);
  const [duration, setDuration] = useState("");
  const [goal, setGoal] = useState("weight-loss");
  const [result, setResult] = useState<null | {
    calories: number;
    steps: number;
    weeklyCalories: number;
    message: string;
  }>(null);

  const calculate = () => {
    const w = parseFloat(weight);
    const d = parseFloat(duration);
    if (!w || !d) return;

    const weightKg = unit === "lbs" ? w * 0.4536 : w;
    const hours = d / 60;
    const met = MET_MAP[speed] || 3.5;
    const calories = Math.round(met * weightKg * hours);
    const steps = Math.round(speed * STEPS_PER_KM * hours);
    const weeklyCalories = calories * 7;

    let message = "";
    if (goal === "weight-loss") {
      const weeksPerKg = Math.ceil(7700 / weeklyCalories);
      message = `At this pace daily, you could lose roughly 1 kg every ${weeksPerKg} weeks from walking alone. Combined with a modest calorie deficit, results will come even faster.`;
    } else if (goal === "fitness") {
      message = `Great work! ${d} minutes of walking daily keeps your cardiovascular system healthy and reduces your risk of heart disease, diabetes and other chronic conditions.`;
    } else {
      message = `You'll hit about ${(steps * 7).toLocaleString()} steps per week — well on your way to the recommended 70,000 weekly steps for optimal health.`;
    }

    setResult({ calories, steps, weeklyCalories, message });
  };

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}</Script>

      <meta property="og:title" content="Walking Pad Calorie Calculator — How Many Calories Do You Burn?" />
      <meta property="og:description" content="Calculate exactly how many calories you burn on your walking pad based on your weight, speed, and duration. Free instant results." />
      <meta property="og:image" content="https://walkingpadpicks.com/images/calorie-calculator-og.jpg" />
      <meta property="og:url" content="https://walkingpadpicks.com/tools/calorie-calculator" />
      <meta property="og:type" content="article" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Walking Pad Calorie Calculator — How Many Calories Do You Burn?" />
      <meta name="twitter:description" content="Calculate exactly how many calories you burn on your walking pad based on your weight, speed, and duration. Free instant results." />
      <link rel="canonical" href="https://walkingpadpicks.com/tools/calorie-calculator" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqData.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Walking Pad Calorie Calculator — How Many Calories Do You Burn?",
            author: { "@type": "Person", name: "Sarah Mitchell" },
            datePublished: "2025-06-01",
            dateModified: "2026-03-01",
            publisher: {
              "@type": "Organization",
              name: "Walking Pad Picks",
              url: "https://walkingpadpicks.com",
            },
            description: "Calculate exactly how many calories you burn on your walking pad based on your weight, speed, and duration.",
          }),
        }}
      />

      <main className="min-h-screen bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-2">
            Walking Pad Calorie Calculator
          </h1>

          <p className="text-center text-gray-700 font-bold mb-4 max-w-xl mx-auto">
            Find out exactly how many calories you burn during each walking pad session. Enter your weight, speed, and duration to get a personalised calorie estimate plus weekly projections — so you can track your progress toward weight loss and fitness goals.
          </p>

          <p className="text-center text-sm text-gray-500 mb-2">
            By Sarah Mitchell, Certified Personal Trainer | Last updated March 2026
          </p>

          <p className="text-center text-xs text-gray-400 mb-8">
            This page contains affiliate links. We may earn a commission at no extra cost to you.
          </p>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
            {/* Weight */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-2">Your weight</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder={unit === "kg" ? "70" : "154"}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
                <div className="flex rounded-lg border border-gray-300 overflow-hidden">
                  <button
                    onClick={() => setUnit("kg")}
                    className={`px-4 py-3 text-sm font-medium ${unit === "kg" ? "bg-blue-600 text-white" : "bg-white text-gray-600"}`}
                  >
                    kg
                  </button>
                  <button
                    onClick={() => setUnit("lbs")}
                    className={`px-4 py-3 text-sm font-medium ${unit === "lbs" ? "bg-blue-600 text-white" : "bg-white text-gray-600"}`}
                  >
                    lbs
                  </button>
                </div>
              </div>
            </div>

            {/* Speed */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-2">Walking speed: {speed} km/h</label>
              <input
                type="range"
                min={2}
                max={6}
                step={1}
                value={speed}
                onChange={(e) => setSpeed(Number(e.target.value))}
                className="w-full accent-blue-600"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>2 km/h</span><span>3</span><span>4</span><span>5</span><span>6 km/h</span>
              </div>
            </div>

            {/* Duration */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-2">Duration (minutes)</label>
              <input
                type="number"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="30"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>

            {/* Goal */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Session goal</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { val: "weight-loss", label: "Weight loss" },
                  { val: "fitness", label: "Fitness" },
                  { val: "steps", label: "Steps" },
                ].map((g) => (
                  <button
                    key={g.val}
                    onClick={() => setGoal(g.val)}
                    className={`py-3 rounded-lg text-sm font-medium border transition-colors ${
                      goal === g.val
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-gray-600 border-gray-300 hover:border-blue-400"
                    }`}
                  >
                    {g.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={calculate}
              className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Calculate Calories
            </button>

            {result && (
              <div className="mt-6 space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-blue-50 rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold text-blue-700">{result.calories}</p>
                    <p className="text-xs text-blue-600 mt-1">Calories burned</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold text-green-700">{result.steps.toLocaleString()}</p>
                    <p className="text-xs text-green-600 mt-1">Est. steps</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold text-purple-700">{result.weeklyCalories.toLocaleString()}</p>
                    <p className="text-xs text-purple-600 mt-1">Weekly (daily)</p>
                  </div>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-sm text-green-800">{result.message}</p>
                </div>
                <div className="text-center">
                  <a
                    href="https://www.amazon.com/s?k=under+desk+walking+pad+treadmill&tag=theforge05-20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 inline-block"
                  >
                    Shop Walking Pads on Amazon &rarr;
                  </a>
                </div>
              </div>
            )}
          </div>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqData.map((f, i) => (
                <div key={i} className="bg-white rounded-lg border border-gray-200 p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">{f.question}</h3>
                  <p className="text-gray-600">{f.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12 bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Related Articles</h2>
            <div className="space-y-3">
              <a href="/best-walking-pads-2026" className="block text-blue-600 hover:text-blue-800 hover:underline font-medium">
                Best Walking Pads in 2026 — Our Top Picks &rarr;
              </a>
              <a href="/walking-pad-while-working" className="block text-blue-600 hover:text-blue-800 hover:underline font-medium">
                How to Use a Walking Pad While Working &rarr;
              </a>
              <a href="https://plantarfasciitisguides.com/plantar-fasciitis-treatment" className="block text-blue-600 hover:text-blue-800 hover:underline font-medium">
                Plantar Fasciitis Treatment Guide — Protect Your Feet &rarr;
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
