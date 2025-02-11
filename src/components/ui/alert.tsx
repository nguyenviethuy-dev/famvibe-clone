"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative w-full rounded-lg border border-red-500 bg-red-100 p-4 text-sm text-red-700",
          className
        )}
        {...props}
      >
        <ExclamationTriangleIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-red-700" />
        <div className="ml-8">{children}</div>
      </div>
    )
  }
)
Alert.displayName = "Alert"

const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm", className)} {...props} />
  )
)
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertDescription }