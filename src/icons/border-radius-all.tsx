import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const BorderRadiusAll = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M2 7v-2a3 3 0 0 1 3-3h2v1h-2a2 2 0 0 0-2 2v2zM13 7v-2a3 3 0 0 0-3-3h-2v1h2a2 2 0 0 1 2 2v2zM8 13h2a3 3 0 0 0 3-3v-2h-1v2a2 2 0 0 1-2 2h-2zM7 13h-2a3 3 0 0 1-3-3v-2h1v2a2 2 0 0 0 2 2h2z" fill={color} fillRule="evenodd" />
    </svg>
  )
);
BorderRadiusAll.displayName = "BorderRadiusAll";
export { BorderRadiusAll };
