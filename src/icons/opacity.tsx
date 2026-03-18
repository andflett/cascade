import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const Opacity = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M0,6a6,6 0 1,1 12,0a6,6 0 1,1 -12,0M0.75,6a5.25,5.25 0 1,0 10.5,0a5.25,5.25 0 1,0 -10.5,0" fill={color} fillRule="evenodd" />
      <path d="M3,9a6,6 0 1,1 12,0a6,6 0 1,1 -12,0M3.75,9a5.25,5.25 0 1,0 10.5,0a5.25,5.25 0 1,0 -10.5,0" fill={color} fillRule="evenodd" />
      <circle cx="7.5" cy="5.5" r="0.5" fill={color} />
      <circle cx="9.5" cy="5.5" r="0.5" fill={color} />
      <circle cx="6.5" cy="6.5" r="0.5" fill={color} />
      <circle cx="8.5" cy="6.5" r="0.5" fill={color} />
      <circle cx="5.5" cy="7.5" r="0.5" fill={color} />
      <circle cx="7.5" cy="7.5" r="0.5" fill={color} />
      <circle cx="9.5" cy="7.5" r="0.5" fill={color} />
      <circle cx="6.5" cy="8.5" r="0.5" fill={color} />
      <circle cx="8.5" cy="8.5" r="0.5" fill={color} />
      <circle cx="5.5" cy="9.5" r="0.5" fill={color} />
      <circle cx="7.5" cy="9.5" r="0.5" fill={color} />
    </svg>
  )
);
Opacity.displayName = "Opacity";
export { Opacity };
