import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="text-xl font-bold text-white">
              Walking<span className="text-teal-400">Pad</span>Picks
            </Link>
            <p className="mt-3 text-sm text-gray-400 leading-relaxed">
              Independent reviews and guides for walking pads and under-desk
              treadmills. Helping you find the perfect walking pad for your
              workspace.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Guides
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/best-walking-pads-2026", label: "Best Walking Pads 2026" },
                { href: "/best-walking-pad-under-200", label: "Best Under $200" },
                { href: "/walking-pad-vs-treadmill", label: "Walking Pad vs Treadmill" },
                { href: "/are-walking-pads-worth-it", label: "Are Walking Pads Worth It?" },
                { href: "/walking-pad-while-working", label: "Walking Pad While Working" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
                { href: "/privacy-policy", label: "Privacy Policy" },
                { href: "/affiliate-disclosure", label: "Affiliate Disclosure" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} WalkingPadPicks. All rights reserved.
            Independently owned and operated.
          </p>
        </div>
      </div>
    </footer>
  );
}
