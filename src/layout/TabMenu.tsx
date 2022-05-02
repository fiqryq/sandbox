import { Fragment, ReactNode } from "react";
import { Tab } from "@headlessui/react";
type ITabMenu = {
  components: ReactNode;
  code: ReactNode;
};
export const TabMenu = (props: ITabMenu) => {
  return (
    <Tab.Group>
      <Tab.List>
        <div className="mb-5 flex">
          <Tab as={Fragment}>
            {({ selected }) => (
              <div
                className={`w-1/2 cursor-pointer p-3 text-center hover:bg-gray-100/50
            ${
              selected
                ? "border-b-2 border-sky-500 font-bold text-sky-500"
                : "bg-white text-black"
            }
          `}
              >
                Components
              </div>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <div
                className={`w-1/2 cursor-pointer p-3 text-center hover:bg-gray-100/50
            ${
              selected
                ? "border-b-2 border-sky-500 font-bold text-sky-500"
                : "bg-white text-black"
            }
          `}
              >
                Code
              </div>
            )}
          </Tab>
        </div>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>{props.components}</Tab.Panel>
        <Tab.Panel>{props.code}</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};
