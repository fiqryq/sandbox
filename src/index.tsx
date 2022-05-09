import React from "react";
import ReactDOM from "react-dom";
import "./css/tailwind.css";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
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
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
