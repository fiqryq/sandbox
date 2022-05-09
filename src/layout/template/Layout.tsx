import { ReactNode } from "react";
type ILayout = {
  title?: string;
  children: ReactNode;
};
export const Layout = (props: ILayout) => {
  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="my-5 border-b-[1px] pb-5 text-center text-4xl font-bold">
        {props.title}
      </h1>
      {props.children}
    </div>
  );
};
