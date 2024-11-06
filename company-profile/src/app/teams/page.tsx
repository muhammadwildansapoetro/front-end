import TeamList from "@/app/teams/teamList";

export default function Teams() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center p-10">
        <TeamList />
      </div>
    </div>
  );
}
