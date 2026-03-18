import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const JustifyContentSpaceEvenlySolid = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M2.5 3h1a0.5 0.5 0 0 1 0.5 0.5v8a0.5 0.5 0 0 1 -0.5 0.5h-1a0.5 0.5 0 0 1 -0.5 -0.5v-8a0.5 0.5 0 0 1 0.5 -0.5z" fill={color} />
      <path d="M7 3h1a0.5 0.5 0 0 1 0.5 0.5v8a0.5 0.5 0 0 1 -0.5 0.5h-1a0.5 0.5 0 0 1 -0.5 -0.5v-8a0.5 0.5 0 0 1 0.5 -0.5z" fill={color} />
      <path d="M11.5 3h1a0.5 0.5 0 0 1 0.5 0.5v8a0.5 0.5 0 0 1 -0.5 0.5h-1a0.5 0.5 0 0 1 -0.5 -0.5v-8a0.5 0.5 0 0 1 0.5 -0.5z" fill={color} />
      <path d="M14 0h1v15h-1z" fill={color} />
    </svg>
  )
);
JustifyContentSpaceEvenlySolid.displayName = "JustifyContentSpaceEvenlySolid";
export { JustifyContentSpaceEvenlySolid };
