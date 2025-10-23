import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface JupytrerCellInputProps {
  code: string;
}

export function JupytrerCellInput({ code }: JupytrerCellInputProps) {
  return (
    <div className="rounded-lg bg-gray-100 light:bg-gray-50 p-2 text-xs">
      <div className="mb-1 text-gray-400">EXECUTE</div>
      <pre
        className="scrollbar-custom scrollbar-thumb-gray-400 hover:scrollbar-thumb-gray-500 light:scrollbar-thumb-gray-300 light:hover:scrollbar-thumb-gray-400 overflow-auto px-5"
        style={{ padding: 0, marginBottom: 0, fontSize: "0.75rem" }}
      >
        <SyntaxHighlighter language="python" style={atomOneLight} wrapLongLines>
          {code}
        </SyntaxHighlighter>
      </pre>
    </div>
  );
}
