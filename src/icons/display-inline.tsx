import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const DisplayInline = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M0 4h4v1h-4z" fill={color} />
      <path d="M5 2h5v5h-5zM6 3v3h3v-3z" fill={color} fillRule="evenodd" />
      <path d="M11 4h4v1h-4z" fill={color} />
      <path d="M0 9h15v1h-15z" fill={color} />
      <path d="M0 12h15v1h-15z" fill={color} />
    </svg>
  )
);
DisplayInline.displayName = "DisplayInline";
export { DisplayInline };
