import { AdminPlaceholder } from "@/components/admin/AdminPlaceholder";

type EditPortfolioPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditPortfolioPage({
  params,
}: EditPortfolioPageProps) {
  const { id } = await params;

  return (
    <AdminPlaceholder
      title="Edit Portfolio"
      description={`Edit metadata portfolio ${id}.`}
    />
  );
}
