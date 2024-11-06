import TeamList from "@/app/teams/teamList";

export default function Teams() {
  return (
    <div className="py-36 lg:mx-44">
      <div className="container mx-auto"></div>
      <h1 className="text-center font-bold mb-10 lg:mb-20 text-3xl lg:text-5xl">
        Our Team
      </h1>
      <TeamList />
    </div>
  );
}
