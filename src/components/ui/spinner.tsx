import * as React from "react"
import { cn } from "@/lib/utils"

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number
}

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size = 40, style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("relative shrink-0", className)}
        style={{
          width: size,
          height: size,
          ...style,
        }}
        {...props}
      >
        <div
          className="absolute inset-0 animate-spin"
          style={{
            background:
              "conic-gradient(from 90deg at 50% 50%, rgba(0, 101, 149, 0) 0deg, rgba(0, 144, 213, 0) 0.04deg, #00A7F8 360deg)",
            borderRadius: "50%",
          }}
        >
          {/* Rounded tip */}
          <div
            className="absolute rounded-full bg-[#00A7F8]"
            style={{
              top: '50%',
              right: '0',
              width: `${size / 12}px`,
              height: `${size / 12}px`,
              transform: 'translate(0, -50%)',
            }}
          />
        </div>
        <div
          className="absolute bg-background rounded-full"
          style={{
            left: "8.33%",
            right: "8.33%",
            top: "8.33%",
            bottom: "8.33%",
          }}
        />
      </div>
    )
  }
)
Spinner.displayName = "Spinner"

export { Spinner }
