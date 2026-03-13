import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const BorderRadiusTopLeft = forwardRef<SVGSVGElement, CascadeIconProps>(
  ({ color = "currentColor", ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15 15"
      width="15"
      height="15"
      fill="none"
      {...props}
    >
      <path d="M4 11v-4a3 3 0 0 1 3-3h4v1h-4a2 2 0 0 0-2 2v4z" fill={color} fillRule="evenodd" />
    </svg>
  )
);
BorderRadiusTopLeft.displayName = "BorderRadiusTopLeft";
export { BorderRadiusTopLeft };
