import Link from "next/link";
import { IconType } from "react-icons";
import {
  IoLogoWhatsapp,
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoLinkedin,
} from "react-icons/io5";
import CopyButton from "./copy";

interface IShare {
  Icon: IconType;
  link: string;
  style: string;
}

const share: IShare[] = [
  {
    Icon: IoLogoWhatsapp,
    link: "https://wa.me/?text=",
    style: "text-green-500 lg:text-black lg:hover:text-green-500",
  },
  {
    Icon: IoLogoFacebook,
    link: "http://www.facebook.com/sharer/sharer.php?u=",
    style: "text-blue-500 lg:text-black lg:hover:text-blue-500",
  },
  {
    Icon: IoLogoTwitter,
    link: "https://www.twitter.com/intent/tweet?url=",
    style: "text-blue-500 lg:text-black lg:hover:text-blue-500",
  },
  {
    Icon: IoLogoLinkedin,
    link: "https://www.linkedin.com/sharing/share-offside/?url=",
    style: "text-blue-500 lg:text-black lg:hover:text-blue-500",
  },
];

export default function ShareButton({ slug }: { slug: string }) {
  const domain = "https://agri-tech-blog.vercel.app/blog/";
  return (
    <div className="flex flex-col">
      <p className="font-semibold mb-2 text-slate-800">
        Share this article on:
      </p>
      <div className="flex text-2xl gap-3">
        <CopyButton link={`${domain}${slug}`} />
        {share.map((item, index) => {
          return (
            <Link
              target="_blank"
              key={index}
              className={`${item.style}`}
              href={`${item.link}${domain}${slug}`}
            >
              <item.Icon />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
