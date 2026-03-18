import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const BorderWidth = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M1 3h13v1h-13z" fill={color} fillRule="evenodd" />
      <path d="M1 7h13v2h-13z" fill={color} fillRule="evenodd" />
      <path d="M1 11h13v3h-13z" fill={color} fillRule="evenodd" />
    </svg>
  )
);
BorderWidth.displayName = "BorderWidth";
export { BorderWidth };
