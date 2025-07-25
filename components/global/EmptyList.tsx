import { cn } from "@/lib/utils";
import React from "react";

export default function EmptyList({
  heading="No items found. ",
  className,
}: {
  heading?: string;
  className?: string;
}) {
  return <h2 className={cn("text-xl", className)}>{heading}</h2>;
}
