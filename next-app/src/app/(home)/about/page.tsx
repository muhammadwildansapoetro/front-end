import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About page",
};

export default function AboutPage() {
  return (
    <div className="flex justify-center items-center h-96">
      <div className="flex justify-center items-center mt-10 h-96 w-full mx-5 border border-slate-700">
        <div className="text-slate-700 font-bold text-3xl">About Page</div>
      </div>
    </div>
  );
}
