import Image from "next/image";

interface IProps {
  picture: string;
  full_name: string;
  email: string;
}

export default function Avatar({ picture, full_name, email }: IProps) {
  return (
    <div className="flex flex-row items-center mx-5">
      <Image
        src={picture}
        alt={full_name}
        width={1000}
        height={1000}
        className="w-[40px] max-h-[40px] rounded-full border border-slate-500"
      ></Image>

      <div>
        <div className="font-bold text-gray-600 mx-2">{full_name}</div>
        <div className="font-semibold text-gray-500 mx-2">{email}</div>
      </div>
    </div>
  );
}
