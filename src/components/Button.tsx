import { Highlight } from "../layout/Highlight";
import { Section } from "../layout/Section";
import { TabMenu } from "../layout/TabMenu";
import {
  ToastError,
  ToastInfo,
  ToastSuccess,
  ToastWarning,
} from "../utils/Toaster";
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
        titleTab={["Components", "Code"]}
        components={
          <>
            <div className="flex space-x-2">
              <button
                onClick={() => ToastInfo({ title: "Primary", time: 2000 })}
                className="rounded-md bg-sky-500 p-2 px-4 text-white shadow-lg shadow-sky-500/50"
              >
                Primary
              </button>
              <button
                onClick={() => ToastError({ title: "Danger", time: 2000 })}
                className="rounded-md bg-red-500 p-2 px-4 text-white shadow-lg shadow-red-500/50"
              >
                Danger
              </button>
              <button
                onClick={() => ToastSuccess({ title: "Success", time: 2000 })}
                className="rounded-md bg-green-500 p-2 px-4 text-white shadow-lg shadow-green-500/50"
              >
                Success
              </button>
              <button
                onClick={() => ToastWarning({ title: "Warning", time: 2000 })}
                className="rounded-md bg-yellow-500 p-2 px-4 text-white shadow-lg shadow-yellow-500/50"
              >
                Warning
              </button>
            </div>
          </>
        }
        code={<Highlight language="html" code={code} />}
      />
    </Section>
  );
};
