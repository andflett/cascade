import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const PositionRelative = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M1 1h8v8h-8zM2 2v6h6v-6z" fill={color} fillRule="evenodd" />
      <path d="M6 6h8v8h-8zM7 7v6h6v-6z" fill={color} fillRule="evenodd" />
    </svg>
  )
);
PositionRelative.displayName = "PositionRelative";
export { PositionRelative };
