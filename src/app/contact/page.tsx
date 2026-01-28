import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-4xl font-semibold tracking-tight text-slate-900">Contact</h1>
      <p className="mt-4 text-slate-600">
        Send us your category, target markets, and timeline. We respond with terms and next steps.
      </p>

      <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold text-slate-900">Email</p>
        <p className="mt-2 text-slate-600">contact@worldwidegroup.com (placeholder)</p>

        <div className="mt-6 flex gap-3">
          <Link
            href="/"
            className="inline-flex h-10 items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-sm font-medium text-slate-900 hover:bg-slate-50"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
