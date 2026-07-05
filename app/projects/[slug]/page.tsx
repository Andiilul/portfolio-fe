type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;

  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-16 text-zinc-950">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-medium uppercase tracking-wide text-zinc-500">
          Project
        </p>
        <h1 className="mt-3 text-4xl font-semibold">{slug}</h1>
      </div>
    </main>
  );
}
