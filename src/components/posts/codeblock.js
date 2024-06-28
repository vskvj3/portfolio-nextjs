import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { RiRadioButtonLine } from "react-icons/ri";
import CopyToClipboard from "react-copy-to-clipboard";
import { useState } from "react";

export default function CodeBlock({ node, inline, className, children, match, ...props }) {
  const [copyStatus, setCopyStatus] = useState("Click to Copy")

  return (
    <CopyToClipboard
      text={children}
      onCopy={() => setCopyStatus("Copied to clipboard!")}
    >
      <div className="has-tooltip">
        <span class="tooltip right-5 text-sm rounded shadow-lg p-1 backdrop-blur-sm bg-dracula-chips/30">
          {copyStatus}
        </span>
        <span class="right-5 text-xs absolute p-1 text-dracula-green">
          {match[1]}
        </span>
        <SyntaxHighlighter
          style={dracula}
          language={match[1]}
          PreTag="div"
          {...props}
        >
          {String(children).replace(/\n$/, "")}
          <RiRadioButtonLine />
        </SyntaxHighlighter>
      </div>
    </CopyToClipboard>
  );
}
