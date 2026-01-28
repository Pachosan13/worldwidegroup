const brands = ["Samsung", "JBL", "Sony", "Taurus", "Ninja"];

export default function BrandsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-semibold tracking-tight text-slate-900">Brands</h1>
      <p className="mt-4 max-w-2xl text-slate-600">
        Selected brands we distribute. (Copy + logos pending.)
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {brands.map((name) => (
          <div
            key={name}
            className="flex h-24 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm"
          >
            <span className="text-sm font-semibold text-slate-800">{name}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
