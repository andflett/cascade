import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const BorderRadiusTopRight = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M11 11v-4a3 3 0 0 0-3-3h-4v1h4a2 2 0 0 1 2 2v4z" fill={color} fillRule="evenodd" />
    </svg>
  )
);
BorderRadiusTopRight.displayName = "BorderRadiusTopRight";
export { BorderRadiusTopRight };
