import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const OverflowVisible = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M6 1h4v1h-4zM9 2h1v2h-1zM9 11h1v2h-1zM6 13h4v1h-4z" fill={color} />
      <path d="M0 5h15v1h-15z" fill={color} />
      <path d="M0 9h15v1h-15z" fill={color} />
    </svg>
  )
);
OverflowVisible.displayName = "OverflowVisible";
export { OverflowVisible };
