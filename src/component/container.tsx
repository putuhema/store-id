import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <main className="px-5 lg:px-60 mt-5">{children}</main>;
};

export default Container;
