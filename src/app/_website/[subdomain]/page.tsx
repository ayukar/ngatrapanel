import prisma from "@/lib/prisma";

interface WebsitePageProps {
  params: { subdomain: string };
}

export default async function WebsitePage({ params }: WebsitePageProps) {
  const website = await prisma.website.findUnique({
    where: { subdomain: params.subdomain },
  });

  if (!website) {
    return <div>Website not found</div>;
  }

  return (
    <div>
      <h1>{website.name}</h1>
      <pre>{JSON.stringify(website.content, null, 2)}</pre>
    </div>
  );
}
