import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const DisplayInline = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M0 4h4v1h-4z" fill={color} />
      <path d="M6 2h3a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1zM6 3h3v3h-3z" fill={color} fillRule="evenodd" />
      <path d="M11 4h4v1h-4z" fill={color} />
      <path d="M0 9h15v1h-15z" fill={color} />
      <path d="M0 12h15v1h-15z" fill={color} />
    </svg>
  )
);
DisplayInline.displayName = "DisplayInline";
export { DisplayInline };
