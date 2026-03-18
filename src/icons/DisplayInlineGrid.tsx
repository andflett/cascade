import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const DisplayInlineGrid = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M0 7h2v1h-2z" fill={color} />
      <path d="M4 3h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1zM4 4h2v2h-2z" fill={color} fillRule="evenodd" />
      <path d="M9 3h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1zM9 4h2v2h-2z" fill={color} fillRule="evenodd" />
      <path d="M4 8h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1zM4 9h2v2h-2z" fill={color} fillRule="evenodd" />
      <path d="M9 8h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1zM9 9h2v2h-2z" fill={color} fillRule="evenodd" />
      <path d="M13 7h2v1h-2z" fill={color} />
    </svg>
  )
);
DisplayInlineGrid.displayName = "DisplayInlineGrid";
export { DisplayInlineGrid };
