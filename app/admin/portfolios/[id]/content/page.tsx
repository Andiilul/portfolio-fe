import { AdminPlaceholder } from "@/components/admin/AdminPlaceholder";

type PortfolioContentPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function PortfolioContentPage({
  params,
}: PortfolioContentPageProps) {
  const { id } = await params;

  return (
    <AdminPlaceholder
      title="Portfolio Content"
      description={`Pilih project, skill, dan experience untuk portfolio ${id}.`}
    />
  );
}
