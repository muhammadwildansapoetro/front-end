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
          Let&apos;s Connect
        </h1>
        <p className="mt-4 w-[700px] text-center text-lg text-gray-700">
          Have a project in mind or just want to say hi? <br />
          I&apos;m open to collaboration. Let&apos;s build something great
          together!
        </p>
        <div className="mt-5 flex flex-col gap-1 text-gray-700">
          <div className="flex items-center gap-2 hover:text-red-700">
            <MdEmail className="size-5" />
            <Link
              href="mailto:muhammadwildansapoetro@gmail.com"
              target="_blank"
            >
              muhammadwildansapoetro@gmail.com
            </Link>
          </div>
          <div className="flex items-center gap-2 hover:text-blue-700">
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
