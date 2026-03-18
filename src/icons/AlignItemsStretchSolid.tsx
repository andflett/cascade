import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const AlignItemsStretchSolid = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M0 0h1v15h-1z" fill={color} />
      <path d="M2.5 3h10a0.5 0.5 0 0 1 0.5 0.5v3a0.5 0.5 0 0 1 -0.5 0.5h-10a0.5 0.5 0 0 1 -0.5 -0.5v-3a0.5 0.5 0 0 1 0.5 -0.5z" fill={color} />
      <path d="M2.5 8h10a0.5 0.5 0 0 1 0.5 0.5v3a0.5 0.5 0 0 1 -0.5 0.5h-10a0.5 0.5 0 0 1 -0.5 -0.5v-3a0.5 0.5 0 0 1 0.5 -0.5z" fill={color} />
      <path d="M14 0h1v15h-1z" fill={color} />
    </svg>
  )
);
AlignItemsStretchSolid.displayName = "AlignItemsStretchSolid";
export { AlignItemsStretchSolid };
