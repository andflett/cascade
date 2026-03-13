import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const DisplayGrid = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M0 0h7v7h-7zM1 1v5h5v-5z" fill={color} fillRule="evenodd" />
      <path d="M8 0h7v7h-7zM9 1v5h5v-5z" fill={color} fillRule="evenodd" />
      <path d="M0 8h7v7h-7zM1 9v5h5v-5z" fill={color} fillRule="evenodd" />
      <path d="M8 8h7v7h-7zM9 9v5h5v-5z" fill={color} fillRule="evenodd" />
    </svg>
  )
);
DisplayGrid.displayName = "DisplayGrid";
export { DisplayGrid };
