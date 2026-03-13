import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const FlexShrink = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M5 2h5v11h-5zM6 3v9h3v-9z" fill={color} fillRule="evenodd" />
      <path d="M0 7h2v1h-2zM5 7.5l-3-2v4z" fill={color} />
      <path d="M13 7h2v1h-2zM10 7.5l3-2v4z" fill={color} />
    </svg>
  )
);
FlexShrink.displayName = "FlexShrink";
export { FlexShrink };
