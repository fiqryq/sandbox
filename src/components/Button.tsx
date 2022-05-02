import { Highlight } from "../layout/Highlight";
import { Section } from "../layout/Section";
import { TabMenu } from "../layout/TabMenu";

export const Button = () => {
  const code = ` 
  // Primary
  <button className="rounded-md bg-sky-500 p-2 px-4 text-white shadow-lg shadow-sky-500/50">
  Primary
  </button>

  // Danger
  <button className="rounded-md bg-red-500 p-2 px-4 text-white shadow-lg shadow-red-500/50">
  Danger
  </button>

  // Success
  <button className="rounded-md bg-green-500 p-2 px-4 text-white shadow-lg shadow-green-500/50">
    Success
  </button>

  // Warning
  <button className="rounded-md bg-yellow-500 p-2 px-4 text-white shadow-lg shadow-yellow-500/50">
    Warning
  </button>
  `;

  return (
    <Section
      title="Button components"
      description="experiment personal style button."
    >
      <TabMenu
        components={
          <div className="mb-4 flex space-x-2">
            <button className="rounded-md bg-sky-500 p-2 px-4 text-white shadow-lg shadow-sky-500/50">
              Primary
            </button>
            <button className="rounded-md bg-red-500 p-2 px-4 text-white shadow-lg shadow-red-500/50">
              Danger
            </button>
            <button className="rounded-md bg-green-500 p-2 px-4 text-white shadow-lg shadow-green-500/50">
              Success
            </button>
            <button className="rounded-md bg-yellow-500 p-2 px-4 text-white shadow-lg shadow-yellow-500/50">
              Warning
            </button>
          </div>
        }
        code={<Highlight language="html" code={code} />}
      />
    </Section>
  );
};
