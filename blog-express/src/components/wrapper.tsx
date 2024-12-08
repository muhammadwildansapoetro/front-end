import { ReactNode } from "react";

export default function Wrapper({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto flex max-w-[1200px] items-center p-4">
      {children}
    </div>
  );
}
