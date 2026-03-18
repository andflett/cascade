import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const PositionRelative = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M0 0h3v1h-3zM0 1h1v2h-1zM6 0h3v1h-3zM8 1h1v2h-1zM0 6h1v2h-1zM0 8h3v1h-3z" fill={color} />
      <path d="M7 6h7a1 1 0 0 1 1 1v7a1 1 0 0 1 -1 1h-7a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1zM7 7h7v7h-7z" fill={color} fillRule="evenodd" />
    </svg>
  )
);
PositionRelative.displayName = "PositionRelative";
export { PositionRelative };
