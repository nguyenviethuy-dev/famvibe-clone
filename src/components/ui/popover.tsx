"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "@/lib/utils";

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

interface PopoverContentProps extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> {
  className?: string;
  align?: "start" | "center" | "end";
  sideOffset?: number;
}

const PopoverContent = React.forwardRef<React.ElementRef<typeof PopoverPrimitive.Content>, PopoverContentProps>(
  ({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      "z-50 rounded-md border bg-white p-4 shadow-md dark:border-gray-800 dark:bg-gray-900",
      "data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut",
      className
    )}
    {...props}
  />
));

PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent };
