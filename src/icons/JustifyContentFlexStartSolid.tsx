import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const JustifyContentFlexStartSolid = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M3.5 3h2a0.5 0.5 0 0 1 0.5 0.5v8a0.5 0.5 0 0 1 -0.5 0.5h-2a0.5 0.5 0 0 1 -0.5 -0.5v-8a0.5 0.5 0 0 1 0.5 -0.5z" fill={color} />
      <path d="M7.5 3h2a0.5 0.5 0 0 1 0.5 0.5v8a0.5 0.5 0 0 1 -0.5 0.5h-2a0.5 0.5 0 0 1 -0.5 -0.5v-8a0.5 0.5 0 0 1 0.5 -0.5z" fill={color} />
    </svg>
  )
);
JustifyContentFlexStartSolid.displayName = "JustifyContentFlexStartSolid";
export { JustifyContentFlexStartSolid };
