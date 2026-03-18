import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const FlexDirectionRow = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M1 0h13a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-13a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1zM1 1h13v6h-13z" fill={color} fillRule="evenodd" />
      <path d="M8 1h1v6h-1z" fill={color} />
      <path d="M0 12h14.5v1h-14.5z" fill={color} />
      <path d="M12 10L14.5 12.5L12 15" fill="none" stroke={color} strokeWidth="1" />
    </svg>
  )
);
FlexDirectionRow.displayName = "FlexDirectionRow";
export { FlexDirectionRow };
