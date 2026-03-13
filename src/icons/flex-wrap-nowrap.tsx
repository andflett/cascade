import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const FlexWrapNowrap = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M0 5h4v5h-4zM1 6v3h2v-3z" fill={color} fillRule="evenodd" />
      <path d="M5.5 5h4v5h-4zM6.5 6v3h2v-3z" fill={color} fillRule="evenodd" />
      <path d="M11 5h4v5h-4zM12 6v3h2v-3z" fill={color} fillRule="evenodd" />
    </svg>
  )
);
FlexWrapNowrap.displayName = "FlexWrapNowrap";
export { FlexWrapNowrap };
