import SyntaxHighlighter from "react-syntax-highlighter";
import { foundation } from "react-syntax-highlighter/dist/esm/styles/hljs";
type IHighlight = {
  language: string;
  code: string;
};
export const Highlight = (props: IHighlight) => {
  return (
    <SyntaxHighlighter
      language={props.language}
      style={foundation}
      showLineNumbers
    >
      {props.code}
    </SyntaxHighlighter>
  );
};
