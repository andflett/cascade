import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const FlexShrink = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M6 2h3a1 1 0 0 1 1 1v9a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-9a1 1 0 0 1 1 -1zM6 3h3v9h-3z" fill={color} fillRule="evenodd" />
      <path d="M0.5 7h3.5v1h-3.5z" fill={color} />
      <path d="M2 5.5L4 7.5L2 9.5" fill="none" stroke={color} strokeWidth="1" />
      <path d="M11 7h3.5v1h-3.5z" fill={color} />
      <path d="M13 5.5L11 7.5L13 9.5" fill="none" stroke={color} strokeWidth="1" />
    </svg>
  )
);
FlexShrink.displayName = "FlexShrink";
export { FlexShrink };
