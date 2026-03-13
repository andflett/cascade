import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const OverflowVisible = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M9 0h1v3h-1zM9 12h1v3h-1zM7 0h3v1h-3zM7 14h3v1h-3z" fill={color} />
      <path d="M1 4h12v1h-12zM1 7h10v1h-10zM1 10h12v1h-12z" fill={color} />
    </svg>
  )
);
OverflowVisible.displayName = "OverflowVisible";
export { OverflowVisible };
