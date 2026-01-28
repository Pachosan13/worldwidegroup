import Image from "next/image";
import Link from "next/link";

const brands = [
  { name: "Samsung", src: "/brands/samsung.svg" },
  { name: "JBL", src: "/brands/jbl.svg" },
  { name: "Sony", src: "/brands/sony.svg" },
  { name: "Taurus", src: "/brands/taurus.svg" },
  { name: "Ninja", src: "/brands/ninja.svg" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-4 py-6">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="WorldWide Group"
              width={150}
              height={50}
              priority
              className="h-10 w-auto"
            />
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <Link className="hover:text-slate-900 transition-colors" href="/about">
              About
            </Link>
            <Link className="hover:text-slate-900 transition-colors" href="/brands">
              Brands
            </Link>
            <Link className="hover:text-slate-900 transition-colors" href="/contact">
              Contact
            </Link>
          </nav>
        </header>

        {/* Hero */}
        <section className="mt-16 grid gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <p className="text-xs font-medium tracking-wide text-slate-500">
              DISTRIBUTION · REPRESENTATION · EXECUTION
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 md:text-6xl">
              El proveedor confiable en tecnologías para la Zona Libre de Panamá.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
              Ofrecemos mayoristas de tecnología y los mejores precios en iPhones al por mayor, garantizando una rotación rápida y segura.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-full bg-[rgb(var(--brand-500))] px-6 text-sm font-medium text-white shadow-sm transition hover:bg-[rgb(var(--brand-600))] focus:outline-none focus:ring-2 focus:ring-[rgba(var(--brand-500),0.35)]"
              >
                Contactar / Cotizar
              </Link>
              <Link
                href="/brands"
                className="inline-flex h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-sm font-medium text-slate-900 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
              >
                Ver marcas
              </Link>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              <Stat label="Countries" value="Multi" />
              <Stat label="Brands" value="5+" />
              <Stat label="Channels" value="Retail + B2B" />
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-8 shadow-[0_20px_60px_-40px_rgba(2,6,23,0.35)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,122,255,0.12),transparent_55%)]" />
              <div className="relative">
                <p className="text-sm font-medium text-slate-900">What you get</p>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  <li className="flex gap-3">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[rgb(var(--brand-500))]" />
                    <span>Clear forecasting and channel execution.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[rgb(var(--brand-500))]" />
                    <span>Compliance-first operations and reporting.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[rgb(var(--brand-500))]" />
                    <span>Hands-on relationships with buyers and partners.</span>
                  </li>
                </ul>

                <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-xs font-medium text-slate-500">Next step</p>
                  <p className="mt-1 text-sm font-medium text-slate-900">Tell us what you want to distribute.</p>
                  <p className="mt-1 text-sm text-slate-600">
                    We’ll reply with availability, terms, and a path to launch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What we do */}
        <section className="mt-20">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Dolor → Solución
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Menos riesgo de estafas. Menos inventario muerto. Más rotación con stock validado y entregas claras.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Feature
              title="Dolor: estafas"
              desc="Stock verificado, documentación y trazabilidad desde la cotización."
            />
            <Feature
              title="Dolor: inventario muerto"
              desc="Surtido por demanda y rotación. Recomendación de mix y cantidades."
            />
            <Feature
              title="Solución: inventario real"
              desc="Disponibilidad confirmada antes de pago. Reservas por orden."
            />
            <Feature
              title="Solución: entrega clara"
              desc="Tiempos, condiciones y tracking definidos desde el inicio."
            />
          </div>
        </section>

        {/* Brands */}
        <section className="mt-20">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                Marcas que distribuimos
              </h2>
              <p className="mt-3 max-w-2xl text-slate-600">
                Un portafolio seleccionado. Calidad, demanda y soporte.
              </p>
            </div>
            <Link
              href="/brands"
              className="hidden text-sm font-medium text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500 md:block"
            >
              Ver todas
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {brands.map((b) => (
              <div
                key={b.name}
                className="group flex h-24 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
              >
                <span className="text-sm font-semibold tracking-tight text-slate-700 group-hover:text-slate-900">
                  {b.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Why */}
        <section className="mt-20">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Por qué WorldWide Group
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Feature
              title="Confianza"
              desc="Empresa establecida con inventario real y logística clara. Envios disponibles a LATAM."
            />
            <Feature
              title="Alcance"
              desc="Cobertura en canales relevantes con foco en rotación y disponibilidad."
            />
            <Feature
              title="Experiencia"
              desc="Know-how comercial y operativo para crecer sin improvisar."
            />
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-10 shadow-[0_20px_60px_-40px_rgba(2,6,23,0.35)]">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Tu aliado estratégico en la Zona Libre de Colón.
            </h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              Elevamos tu negocio con tecnología de calidad y un servicio excepcional.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-full bg-[rgb(var(--brand-500))] px-6 text-sm font-medium text-white shadow-sm transition hover:bg-[rgb(var(--brand-600))]"
              >
                Contactar / Cotizar
              </Link>
              <Link
                href="/brands"
                className="inline-flex h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-sm font-medium text-slate-900 shadow-sm transition hover:bg-slate-50"
              >
                Ver marcas
              </Link>
            </div>
          </div>
        </section>

        <footer className="mt-20 border-t border-slate-200 py-10 text-sm text-slate-600">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-medium text-slate-900">WorldWide Group</p>
              <p className="mt-1">Distribución y representación de marcas globales.</p>
            </div>
            <div className="flex flex-col gap-2 md:items-end">
              <Link className="hover:text-slate-900" href="/contact">
                Contact
              </Link>
              <span className="text-xs text-slate-500">© {new Date().getFullYear()} WorldWide Group</span>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <p className="text-sm font-semibold text-slate-900">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <p className="text-xs font-medium text-slate-500">{label}</p>
      <p className="mt-1 text-lg font-semibold tracking-tight text-slate-900">{value}</p>
    </div>
  );
}
