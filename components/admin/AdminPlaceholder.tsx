type AdminPlaceholderProps = {
  title: string;
  description?: string;
};

export function AdminPlaceholder({
  title,
  description,
}: AdminPlaceholderProps) {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-12 text-zinc-50">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium uppercase tracking-wide text-zinc-400">
          Admin
        </p>
        <h1 className="mt-3 text-3xl font-semibold">{title}</h1>
        {description ? (
          <p className="mt-3 max-w-2xl text-zinc-400">{description}</p>
        ) : null}
      </div>
    </main>
  );
}
