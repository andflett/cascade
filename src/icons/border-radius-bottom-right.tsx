import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const BorderRadiusBottomRight = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M11 4v4a3 3 0 0 1-3 3h-4v-1h4a2 2 0 0 0 2-2v-4z" fill={color} fillRule="evenodd" />
    </svg>
  )
);
BorderRadiusBottomRight.displayName = "BorderRadiusBottomRight";
export { BorderRadiusBottomRight };
