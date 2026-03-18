import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const DisplayGrid = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M2 0h11a2 2 0 0 1 2 2v11a2 2 0 0 1 -2 2h-11a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2zM2 1h11a1 1 0 0 1 1 1v11a1 1 0 0 1 -1 1h-11a1 1 0 0 1 -1 -1v-11a1 1 0 0 1 1 -1z" fill={color} fillRule="evenodd" />
      <path d="M1 7h13v1h-13z" fill={color} />
      <path d="M7 1h1v6h-1z" fill={color} />
    </svg>
  )
);
DisplayGrid.displayName = "DisplayGrid";
export { DisplayGrid };
