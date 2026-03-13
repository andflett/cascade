import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const AlignContentStretch = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M0 0h4v15h-4zM1 1v13h2v-13z" fill={color} fillRule="evenodd" />
      <path d="M5 0h5v15h-5zM6 1v13h3v-13z" fill={color} fillRule="evenodd" />
      <path d="M11 0h4v15h-4zM12 1v13h2v-13z" fill={color} fillRule="evenodd" />
    </svg>
  )
);
AlignContentStretch.displayName = "AlignContentStretch";
export { AlignContentStretch };
