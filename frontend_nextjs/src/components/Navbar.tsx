"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

// PUBLIC_INTERFACE
export default function Navbar(): JSX.Element {
  /** Navbar with app title, subtle gradient background, and a simple client-side filtering input. */
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const initialQ = params.get("q") ?? "";
  const [q, setQ] = useState(initialQ);

  useEffect(() => {
    setQ(initialQ);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const url = q ? `/?q=${encodeURIComponent(q)}` : "/";
    router.push(url);
  }

  return (
    <header className="w-full border-b border-gray-200/70 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="header-gradient">
        <div className="mx-auto max-w-6xl px-4 py-4">
          <nav aria-label="Primary" className="flex items-center justify-between gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-semibold text-[color:var(--color-text)]"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg"
                style={{ background: "rgba(37, 99, 235, 0.12)" }}
                aria-hidden
              >
                <span className="h-4 w-4 rounded-sm" style={{ background: "var(--color-primary)" }} />
              </span>
              <span>Ocean Recipes</span>
            </Link>

            <form onSubmit={onSubmit} className="relative w-full max-w-md">
              <label htmlFor="search" className="sr-only">Search recipes</label>
              <input
                id="search"
                name="q"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search recipes by title or tag..."
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm text-[color:var(--color-text)] shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                aria-label="Search recipes"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 rounded-md bg-[color:var(--color-primary)] px-3 py-1.5 text-xs font-semibold text-white shadow hover:opacity-95 focus:ring-2 focus:ring-blue-500/50"
              >
                Search
              </button>
            </form>
          </nav>
        </div>
      </div>
    </header>
  );
}
