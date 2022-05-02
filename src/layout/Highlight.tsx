import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
type IHighlight = {
  language: string;
  code: string;
};
export const Highlight = (props: IHighlight) => {
  return (
    <SyntaxHighlighter
      language={props.language}
      style={nightOwl}
      showLineNumbers
    >
      {props.code}
    </SyntaxHighlighter>
  );
};
