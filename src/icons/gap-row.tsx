import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const GapRow = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M0 0h15v5h-15zM1 1v3h13v-3zM0 10h15v5h-15zM1 11v3h13v-3z" fill={color} fillRule="evenodd" />
      <circle cx="3.5" cy="7.5" r="0.5" fill={color} />
      <circle cx="5.5" cy="7.5" r="0.5" fill={color} />
      <circle cx="7.5" cy="7.5" r="0.5" fill={color} />
      <circle cx="9.5" cy="7.5" r="0.5" fill={color} />
      <circle cx="11.5" cy="7.5" r="0.5" fill={color} />
    </svg>
  )
);
GapRow.displayName = "GapRow";
export { GapRow };
