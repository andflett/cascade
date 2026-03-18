import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const AlignItemsBaseline = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <circle cx="0.5" cy="8.5" r="0.5" fill={color} />
      <circle cx="7.5" cy="8.5" r="0.5" fill={color} />
      <circle cx="14.5" cy="8.5" r="0.5" fill={color} />
      <path d="M2.5 1h2a0.5 0.5 0 0 1 0.5 0.5v11a0.5 0.5 0 0 1 -0.5 0.5h-2a0.5 0.5 0 0 1 -0.5 -0.5v-11a0.5 0.5 0 0 1 0.5 -0.5z" fill={color} />
      <path d="M9.5 4h2a0.5 0.5 0 0 1 0.5 0.5v8a0.5 0.5 0 0 1 -0.5 0.5h-2a0.5 0.5 0 0 1 -0.5 -0.5v-8a0.5 0.5 0 0 1 0.5 -0.5z" fill={color} />
    </svg>
  )
);
AlignItemsBaseline.displayName = "AlignItemsBaseline";
export { AlignItemsBaseline };
