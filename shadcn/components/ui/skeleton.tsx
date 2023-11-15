import { DetailedHTMLProps, HTMLAttributes } from "react"
import { cn } from "shadcn/lib/utils"

interface SkeletonProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{}

function Skeleton({className,...props}: SkeletonProps) {
  return (
    <div
    {...props}
      className={cn("animate-pulse rounded-md bg-muted", className)}
    />
  )
}

export { Skeleton }
