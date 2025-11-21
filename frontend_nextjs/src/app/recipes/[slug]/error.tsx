"use client";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  if (error.message === "NOT_FOUND") {
    // Let Next.js render the root not-found route
    if (typeof window !== "undefined") {
      window.location.href = "/not-found";
    }
  }
  return (
    <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-red-800">
      <h2 className="text-lg font-semibold">Something went wrong</h2>
      <p className="mt-2 text-sm">Please return to the homepage and try again.</p>
    </div>
  );
}
