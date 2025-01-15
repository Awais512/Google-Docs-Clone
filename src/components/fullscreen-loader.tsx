import { Loader } from "lucide-react";
import React from "react";

interface Props {
  label?: string;
}

export const FullscreenLoader = ({ label }: Props) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-2">
      <Loader className="size-4 text-muted-foreground animate-spin" />
      {label && <p className="text-sm text-muted-foreground">{label}</p>}
    </div>
  );
};
