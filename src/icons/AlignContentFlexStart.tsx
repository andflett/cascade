import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const AlignContentFlexStart = forwardRef<SVGSVGElement, CascadeIconProps>(
  ({ color = "currentColor", solid, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15 15"
      width="15"
      height="15"
      fill="none"
      {...props}
    >
      <path d="M0 0h1v15h-1z" fill={color} opacity={solid ? 1 : 0.3} />
      <path d="M2.5 6h3a0.5 0.5 0 0 1 0.5 0.5v2a0.5 0.5 0 0 1 -0.5 0.5h-3a0.5 0.5 0 0 1 -0.5 -0.5v-2a0.5 0.5 0 0 1 0.5 -0.5z" fill={color} />
      <path d="M7.5 6h3a0.5 0.5 0 0 1 0.5 0.5v2a0.5 0.5 0 0 1 -0.5 0.5h-3a0.5 0.5 0 0 1 -0.5 -0.5v-2a0.5 0.5 0 0 1 0.5 -0.5z" fill={color} />
    </svg>
  )
);
AlignContentFlexStart.displayName = "AlignContentFlexStart";
export { AlignContentFlexStart };
