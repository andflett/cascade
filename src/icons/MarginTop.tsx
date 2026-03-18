import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const MarginTop = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M2 5h11a1 1 0 0 1 1 1v7a1 1 0 0 1 -1 1h-11a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1zM2 6h11v7h-11z" fill={color} fillRule="evenodd" />
      <circle cx="1.5" cy="1.5" r="0.5" fill={color} />
      <circle cx="3.5" cy="1.5" r="0.5" fill={color} />
      <circle cx="5.5" cy="1.5" r="0.5" fill={color} />
      <circle cx="7.5" cy="1.5" r="0.5" fill={color} />
      <circle cx="9.5" cy="1.5" r="0.5" fill={color} />
      <circle cx="11.5" cy="1.5" r="0.5" fill={color} />
      <circle cx="13.5" cy="1.5" r="0.5" fill={color} />
      <circle cx="1.5" cy="3.5" r="0.5" fill={color} />
      <circle cx="13.5" cy="3.5" r="0.5" fill={color} />
    </svg>
  )
);
MarginTop.displayName = "MarginTop";
export { MarginTop };
