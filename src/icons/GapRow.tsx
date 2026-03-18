import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const GapRow = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M1 0h13a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-13a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1zM1 1h13v3h-13zM1 10h13a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-13a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1zM1 11h13v3h-13z" fill={color} fillRule="evenodd" />
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
