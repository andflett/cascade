import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const AlignSelfFlexEnd = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M2.5 3h8a0.5 0.5 0 0 1 0.5 0.5v3a0.5 0.5 0 0 1 -0.5 0.5h-8a0.5 0.5 0 0 1 -0.5 -0.5v-3a0.5 0.5 0 0 1 0.5 -0.5z" fill={color} opacity={solid ? 1 : 0.3} />
      <path d="M8.5 8h4a0.5 0.5 0 0 1 0.5 0.5v3a0.5 0.5 0 0 1 -0.5 0.5h-4a0.5 0.5 0 0 1 -0.5 -0.5v-3a0.5 0.5 0 0 1 0.5 -0.5z" fill={color} />
      <path d="M14 0h1v15h-1z" fill={color} opacity={solid ? 1 : 0.3} />
    </svg>
  )
);
AlignSelfFlexEnd.displayName = "AlignSelfFlexEnd";
export { AlignSelfFlexEnd };
