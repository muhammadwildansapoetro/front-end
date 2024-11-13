import TeamList from "@/components/teamList";
import Image from "next/image";

export default function Teams() {
  return (
    <div className="">
      <div className="relative w-full h-[200px] lg:h-[350px]">
        <Image
          src="/tractor.jpg"
          alt="tractor image"
          priority
          quality={75} // Reduces file size without significant quality loss
          fill // Enables responsive resizing
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Serve different image sizes based on viewport width
          className="object-cover"
        />
      </div>
      <TeamList />
    </div>
  );
}
