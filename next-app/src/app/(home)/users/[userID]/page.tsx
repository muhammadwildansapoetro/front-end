export default async function UserDetailPage({
  params,
}: {
  params: { userID: string };
}) {
  const { userID } = await params;
  return <div>User ID: {userID}</div>;
}
