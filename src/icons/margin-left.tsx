import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const MarginLeft = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M5 1h9v13h-9zM6 2v11h7v-11z" fill={color} fillRule="evenodd" />
      <circle cx="1.5" cy="1.5" r="0.5" fill={color} />
      <circle cx="1.5" cy="3.5" r="0.5" fill={color} />
      <circle cx="1.5" cy="5.5" r="0.5" fill={color} />
      <circle cx="1.5" cy="7.5" r="0.5" fill={color} />
      <circle cx="1.5" cy="9.5" r="0.5" fill={color} />
      <circle cx="1.5" cy="11.5" r="0.5" fill={color} />
      <circle cx="1.5" cy="13.5" r="0.5" fill={color} />
      <circle cx="3.5" cy="1.5" r="0.5" fill={color} />
      <circle cx="3.5" cy="13.5" r="0.5" fill={color} />
    </svg>
  )
);
MarginLeft.displayName = "MarginLeft";
export { MarginLeft };
