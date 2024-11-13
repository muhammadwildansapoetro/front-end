import TeamList from "@/components/teamList";
import Image from "next/image";

export default function Teams() {
  return (
    <div className="py-36">
      <Image
        src={"/tractor.jpg"}
        alt="tractor image"
        quality={100}
        width={500}
        height={500}
        priority
        className="absolute top-0 w-full h-[200px] lg:h-[350px] object-cover"
      />
      <TeamList />
    </div>
  );
}
