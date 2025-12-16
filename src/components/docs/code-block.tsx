"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({ code, language = "tsx", showLineNumbers = false }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-lg border bg-muted/50">
      <div className="flex items-center justify-between border-b px-4 py-2">
        <span className="text-xs text-muted-foreground">{language}</span>
        <Button
          variant="ghost"
          size="sm"
          className="h-7 text-xs"
          onClick={copyToClipboard}
        >
          {copied ? "Copied!" : "Copy"}
        </Button>
      </div>
      <pre className="overflow-x-auto p-4">
        <code className="text-sm font-mono">{code}</code>
      </pre>
    </div>
  );
}
