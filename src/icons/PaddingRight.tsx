import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const PaddingRight = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M2 1h11a1 1 0 0 1 1 1v11a1 1 0 0 1 -1 1h-11a1 1 0 0 1 -1 -1v-11a1 1 0 0 1 1 -1zM2 2h11v11h-11z" fill={color} fillRule="evenodd" />
      <circle cx="10.5" cy="4.5" r="0.5" fill={color} />
      <circle cx="10.5" cy="7.5" r="0.5" fill={color} />
      <circle cx="10.5" cy="10.5" r="0.5" fill={color} />
    </svg>
  )
);
PaddingRight.displayName = "PaddingRight";
export { PaddingRight };
