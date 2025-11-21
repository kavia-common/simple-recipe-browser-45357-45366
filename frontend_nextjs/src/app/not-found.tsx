import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl">
      <div className="surface p-8 text-center">
        <h1 className="text-2xl font-semibold">404 – Page Not Found</h1>
        <p className="mt-2 text-gray-600">
          The page you’re looking for doesn’t exist.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-lg bg-[color:var(--color-primary)] px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-95 focus-ring"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
