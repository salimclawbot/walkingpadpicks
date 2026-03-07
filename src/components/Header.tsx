"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              className="text-teal-600"
            >
              <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="2" />
              <path
                d="M10 22 L14 14 L18 18 L22 10"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-xl font-bold text-gray-900">
              Walking<span className="text-teal-600">Pad</span>Picks
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-gray-600 hover:text-teal-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/best-walking-pads-2026"
              className="text-sm font-medium text-gray-600 hover:text-teal-600 transition-colors"
            >
              Best Walking Pads
            </Link>
            <Link
              href="/best-walking-pad-under-200"
              className="text-sm font-medium text-gray-600 hover:text-teal-600 transition-colors"
            >
              Budget Picks
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-gray-600 hover:text-teal-600 transition-colors"
            >
              About
            </Link>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {isOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-100">
            <div className="flex flex-col gap-2 pt-4">
              {[
                { href: "/", label: "Home" },
                { href: "/best-walking-pads-2026", label: "Best Walking Pads" },
                { href: "/best-walking-pad-under-200", label: "Budget Picks" },
                { href: "/walking-pad-vs-treadmill", label: "Walking Pad vs Treadmill" },
                { href: "/are-walking-pads-worth-it", label: "Are They Worth It?" },
                { href: "/walking-pad-while-working", label: "Walking While Working" },
                { href: "/about", label: "About" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-teal-600 px-2 py-2 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
