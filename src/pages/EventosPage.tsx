export default function EventosPage() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl bg-[#efe9f8] py-8 text-center">
        <div className="page-title">EVENTOS</div>
      </section>

      <section className="card p-8 md:p-10 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="text-2xl md:text-3xl font-black text-imma-700 uppercase tracking-wide">
            Próximamente
          </div>
          <p className="mt-4 text-lg md:text-xl text-slate-700">
            Próximamente se publicarán los eventos.
          </p>
        </div>
      </section>
    </div>
  );
}
