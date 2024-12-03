import Avatar from "./avatar";

export default function NavBar() {
  return (
    <div className="sticky top-0 z-10 border-b bg-white bg-opacity-95 py-1">
      <div className="mx-5 flex items-center justify-between lg:mx-20">
        <h1 className="text-lg font-bold">Ngariung Blog </h1>
        <Avatar />
      </div>
    </div>
  );
}
