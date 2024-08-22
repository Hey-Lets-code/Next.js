"use client";
// utilização de hooks e eventlisteners

import type { Snippet } from "@prisma/client";

interface SnippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  return <div>Client component has snippet with title</div>;
}
