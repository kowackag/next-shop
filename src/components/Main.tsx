import { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

export const Main = ({ children }: MainProps) => {
  return (
    <main className="flex-grow mx-auto max-w-6xl grid px-4 py-2 sm:grid-cols-2 gap-6">
      {children}
    </main>
  );
};
