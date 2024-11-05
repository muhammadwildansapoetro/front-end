import Image from "next/image";

export default function Icons() {
  return (
    <div className="flex gap-5 lg:gap-10">
      <Image
        src="/javascript.svg"
        alt="JavaScript icon"
        width={100}
        height={100}
        className="w-[45px]"
      />
      <Image
        src="/html.png"
        alt="HTML icon"
        width={100}
        height={100}
        className="w-[45px]"
      />
      <Image
        src="/css.png"
        alt="CSS icon"
        width={100}
        height={100}
        className="w-[45px]"
      />
      <Image
        src="/react-icon.png"
        alt="react icon"
        width={100}
        height={100}
        className="w-[45px]"
      />
      <Image
        src="/next-js.svg"
        alt="Next JS icon"
        width={100}
        height={100}
        className="w-[45px]"
      />
    </div>
  );
}
