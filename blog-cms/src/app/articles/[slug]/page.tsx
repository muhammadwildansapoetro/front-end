export default async function BlogContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  console.log(slug);

  return <div>slug{slug}</div>;
}
