import { ReactNode } from "react";
type ISection = {
  title: string;
  description: string;
  children: ReactNode;
};
export const Section = (props: ISection) => {
  return (
    <div className="my-6">
      <h1 className="pb-2 text-4xl font-bold">{props.title}</h1>
      <p className="font-lg mb-2 font-mono text-gray-500">
        {props.description}
      </p>
      {props.children}
    </div>
  );
};
