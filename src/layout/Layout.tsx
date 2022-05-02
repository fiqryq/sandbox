import { ReactNode } from "react";
type ILayout = {
  children: ReactNode;
};
export const Layout = (props: ILayout) => {
  return <div className="mx-auto max-w-5xl">{props.children}</div>;
};
