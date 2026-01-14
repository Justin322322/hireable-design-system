import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP);

const loadingScreenVariants = cva(
  "flex flex-col items-center justify-center gap-4 z-50 transition-all duration-300",
  {
    variants: {
      variant: {
        default: "bg-background/80 backdrop-blur-sm",
        solid: "bg-background",
        overlay: "bg-black/20 backdrop-blur-sm",
      },
      fullscreen: {
        true: "fixed inset-0",
        false: "absolute inset-0",
      },
    },
    defaultVariants: {
      variant: "default",
      fullscreen: true,
    },
  }
)

/**
 * Custom HIREABLE Brand Loader
 * Animation: "Painted" Reveal (Clip Path), no distortion.
 * Sequence:
 * 1. Rose (Left) Paints UP
 * 2. Pink (Mid-Top) Paints DOWN
 * 3. Orange (Mid-Bottom) Paints DOWN
 * 4. Blue (Right) Paints UP
 */
function HireableLoader({ className, size = 120 }: { className?: string; size?: number }) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const roseRef = React.useRef<HTMLDivElement>(null);
  const pinkRef = React.useRef<HTMLDivElement>(null);
  const orangeRef = React.useRef<HTMLDivElement>(null);
  const blueRef = React.useRef<HTMLDivElement>(null);

  // Base dimensions from design
  const BASE_WIDTH = 124.92;
  const BASE_HEIGHT = 124.21;
  const scale = size / BASE_WIDTH;


  useGSAP(() => {
    const mm = gsap.matchMedia();

    // Context for standard motion preference
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Smoother infinite loop with yoyo and pause at the end
      const tl = gsap.timeline({ 
        repeat: -1, 
        repeatDelay: 0.5, 
        yoyo: true,
        defaults: {
          duration: 0.6, // "Sweet Spot" standard for brand motion (600ms)
          ease: "power2.inOut", 
        }
      });

      // Initial States: Completely clipped (hidden)
      tl.set([roseRef.current], { clipPath: "inset(100% 0 0 0)" })
        .set([pinkRef.current, orangeRef.current, blueRef.current], { clipPath: "inset(0 0 100% 0)" });

      // Step 1: Rose Paints UP
      tl.to(roseRef.current, {
        clipPath: "inset(0% 0 0 0)",
      })

      // Step 2: Pink Paints DOWN
      // Overlap for fluid sequence
      .to(pinkRef.current, {
        clipPath: "inset(0 0 0% 0)",
      }, "-=0.2")

      // Step 3: Orange Paints DOWN
      .to(orangeRef.current, {
        clipPath: "inset(0 0 0% 0)",
      }, "-=0.2")

      // Step 4: Blue Paints UP (Local Down)
      .to(blueRef.current, {
        clipPath: "inset(0 0 0% 0)",
      }, "-=0.2");
    });

    // Context for reduced motion
    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set([roseRef.current, pinkRef.current, orangeRef.current, blueRef.current], { 
        clipPath: "inset(0% 0 0 0)" // Fully visible static state
      });
    });
    
  }, { scope: containerRef });

  return (
    <div 
      ref={containerRef}
      className={cn("relative shrink-0", className)}
      style={{ 
        width: BASE_WIDTH, 
        height: BASE_HEIGHT, 
        transform: `scale(${scale})`,
        transformOrigin: "center center"
      }}
      aria-hidden="true"
    >
      {/* Rose - Left Pill */}
      {/* Position: Fixed Final Size/Pos */}
      <div 
        ref={roseRef}
        className="absolute"
        style={{
          width: "36.96px",
          height: "124.17px",
          left: "0px",
          top: "0px",
          backgroundImage: "url(/loader/rose.svg)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat"
        }}
      />
      
      {/* Pink - Middle Top Rect */}
      <div 
        ref={pinkRef}
        className="absolute"
        style={{
          width: "36.96px",
          height: "54.4px",
          left: "44px",
          top: "0px",
          backgroundImage: "url(/loader/pink.svg)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat"
        }}
      />
      
      {/* Orange - Middle Bottom Rect */}
      <div 
        ref={orangeRef}
        className="absolute"
        style={{
          width: "36.96px",
          height: "63.21px",
          left: "44px",
          top: "61px",
          backgroundImage: "url(/loader/orange.svg)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat"
        }}
      />
      
      {/* Blue - Right Pill (Flipped) */}
      <div 
        ref={blueRef}
        className="absolute"
        style={{
          width: "37px",
          height: "89px",
          left: "87.94px",
          top: "35px",
          backgroundImage: "url(/loader/blue.svg)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          transform: "scaleY(-1)", 
        }}
      />
    </div>
  )
}

/**
 * A full-screen or container-filling loading indicator.
 * Blocks interaction behind it while loading.
 *
 * @example
 * <LoadingScreen />
 * <LoadingScreen fullscreen={false} variant="overlay" />
 */
export interface LoadingScreenProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof loadingScreenVariants> {  /**
   * Visual style variant
   * @default "default"
   */
  variant?: "default" | "solid" | "overlay"
  
  /**
   * Whether to cover the full screen (fixed) or parent container (absolute relative)
   * @default true
   */
  fullscreen?: boolean

  /**
   * Optional message to display below the spinner
   */
  message?: string

  /**
   * Size of the loader in pixels.
   * Default matched to Figma design specs.
   * @default 120
   */
  spinnerSize?: number
}

export function LoadingScreen({
  className,
  variant,
  fullscreen,
  message,
  spinnerSize = 120,
  ...props
}: LoadingScreenProps) {
  return (
    <div
      className={cn(loadingScreenVariants({ variant, fullscreen }), className)}
      role="status"
      aria-live="polite"
      aria-busy="true"
      {...props}
    >
      <div style={{ width: spinnerSize, height: spinnerSize }} className="flex items-center justify-center">
         <HireableLoader size={spinnerSize} />
      </div>
      
      {message && (
        <p className="text-muted-foreground text-sm font-medium animate-pulse mt-4">
          {message}
        </p>
      )}
    </div>
  )
}
