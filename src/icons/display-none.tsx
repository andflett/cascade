import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const DisplayNone = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M2 2h11v11h-11zM3 3v9h9v-9z" fill={color} fillRule="evenodd" />
      <path d="M3 12L12 3" fill="none" stroke={color} strokeWidth="1" />
    </svg>
  )
);
DisplayNone.displayName = "DisplayNone";
export { DisplayNone };
