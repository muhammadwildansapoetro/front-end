import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex min-h-dvh flex-col items-center border p-5 lg:p-10"
    >
      <div className="flex w-full flex-col items-center md:w-[1000px]">
        <h1 className="text-3xl font-bold text-gray-900 lg:text-4xl">
          Let&apsos;s Connect
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Have a project idea or just want to say hello? I&apos;m open to
          collaboration and always happy to chat. Reach out, and let&apos;s
          create something amazing together!
        </p>
        <div className="mt-5 flex flex-col gap-1 text-gray-700">
          <div className="flex items-center gap-2 hover:text-green-700">
            <MdEmail className="size-5" />
            <Link
              href="mailto:muhammadwildansapoetro@gmail.com"
              target="_blank"
            >
              muhammadwildansapoetro@gmail.com
            </Link>
          </div>
          <div className="flex items-center gap-2 hover:text-green-700">
            <FaLinkedin className="size-5" />
            <Link
              href={"https://www.linkedin.com/in/muhammadwildansapoetro/"}
              target="_blank"
            >
              Muhammad Wildan Sapoetro
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
