import { Highlight } from "../utils/Highlight";
import { Section } from "../layout/template/Section";
import { TabMenu } from "../layout/template/TabMenu";
import { useTour } from "@reactour/tour";

export const UserGuide = () => {
  const { setIsOpen } = useTour();

  const code = ` 
  // index.tsx
  import { TourProvider } from "@reactour/tour";

  const step = [
    {
      selector: "#first-step",
      content: "This is my first Step",
    },
    {
      selector: "#second-step",
      content: "This is my Second Step",
    },
  ];
  
  ReactDOM.render(
    <React.StrictMode>
      <TourProvider
        styles={{
          popover: (base) => ({
            ...base,
            "--reactour-accent": "#773EFD",
            borderRadius: 10,
          }),
          maskArea: (base) => ({ ...base, rx: 10 }),
          maskWrapper: (base) => ({ ...base, color: "#773EFD" }),
          badge: (base) => ({ ...base, left: "auto", right: "-0.8125em" }),
          controls: (base) => ({ ...base, marginTop: 100 }),
          close: (base) => ({ ...base, right: "auto", left: 8, top: 8 }),
        }}
        steps={step}
      >
        <App />
      </TourProvider>
    </React.StrictMode>,
    document.getElementById("root")

    // UserGuide.tsx
    export const UserGuide = () => {
      const { setIsOpen } = useTour();
      return (
        ....
        <div className="space-y-5">
        <div id="first-step">
          <h1 className="text-xl font-bold">First Step</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Tempore repellendus, commodi ipsa placeat aspernatur, provident
            dignissimos consequatur iusto fugit quo sed libero architecto a
            quas!
          </p>
        </div>
        <div id="second-step">
          <h1 className="text-xl font-bold">Second Step</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Tempore repellendus, commodi ipsa placeat aspernatur, provident
            dignissimos consequatur iusto fugit quo sed libero architecto a
            quas!
          </p>
        </div>
        <button
          className="rounded-lg bg-gray-300 p-3"
          onClick={() => setIsOpen(true)}
        >
          Open Tour
        </button>
      </div>
      )
    }    
  );
  `;

  return (
    <Section
      title="User guide components"
      description="experimental user guide components."
    >
      <TabMenu
        titleTab={["Components", "Code"]}
        components={
          <div className="space-y-5">
            <div id="first-step">
              <h1 className="text-xl font-bold">First Step</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore repellendus, commodi ipsa placeat aspernatur, provident
                dignissimos consequatur iusto fugit quo sed libero architecto a
                quas!
              </p>
            </div>
            <div id="second-step">
              <h1 className="text-xl font-bold">Second Step</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore repellendus, commodi ipsa placeat aspernatur, provident
                dignissimos consequatur iusto fugit quo sed libero architecto a
                quas!
              </p>
            </div>
            <button
              className="rounded-lg bg-gray-300 p-3"
              onClick={() => setIsOpen(true)}
            >
              Open Tour
            </button>
          </div>
        }
        code={<Highlight language="html" code={code} />}
      />
    </Section>
  );
};
