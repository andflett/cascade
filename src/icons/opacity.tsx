import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const Opacity = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M0,6a6,6 0 1,1 12,0a6,6 0 1,1 -12,0M1,6a5,5 0 1,0 10,0a5,5 0 1,0 -10,0" fill={color} fillRule="evenodd" />
      <path d="M3,9a6,6 0 1,1 12,0a6,6 0 1,1 -12,0M4,9a5,5 0 1,0 10,0a5,5 0 1,0 -10,0" fill={color} fillRule="evenodd" />
      <path d="M6.5 4L11 8.5M5 5L10 10M4 6.5L8.5 11" fill="none" stroke={color} strokeWidth="0.8" />
    </svg>
  )
);
Opacity.displayName = "Opacity";
export { Opacity };
