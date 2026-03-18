import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const JustifyContentSpaceAround = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M0 0h1v15h-1z" fill={color} opacity={solid ? 1 : 0.3} />
      <path d="M2.5 7h4v1h-4z" fill={color} />
      <path d="M4.5 5.5L2.5 7.5L4.5 9.5" fill="none" stroke={color} strokeWidth="1" />
      <path d="M8.5 7h4v1h-4z" fill={color} />
      <path d="M10.5 5.5L12.5 7.5L10.5 9.5" fill="none" stroke={color} strokeWidth="1" />
      <path d="M14 0h1v15h-1z" fill={color} opacity={solid ? 1 : 0.3} />
    </svg>
  )
);
JustifyContentSpaceAround.displayName = "JustifyContentSpaceAround";
export { JustifyContentSpaceAround };
