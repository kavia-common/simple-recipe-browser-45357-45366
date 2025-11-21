export default function Footer() {
  /** Minimal footer with subtle top border and muted text. */
  return (
    <footer className="border-t border-gray-200/70 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-gray-600">
        <p>
          © {new Date().getFullYear()} Ocean Recipes. Crafted with
          {" "}
          <span className="text-[color:var(--color-secondary)]">flavor</span>.
        </p>
      </div>
    </footer>
  );
}
